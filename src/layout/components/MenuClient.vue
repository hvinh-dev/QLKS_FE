<template>
    <div class="container-fluid">
        <div class="card mt-1">
            <div class="card-body">
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary rounded">
                    <div class="container-fluid">
                        <router-link to="/">
                            <a class="navbar-brand" href="/">
                                <img src="../../assets/images/logo-icon.png" style="width: 100px;" alt="">
                            </a>
                        </router-link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2"
                            aria-expanded="false" aria-label="Toggle navigation"> <span
                                class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent2">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <router-link to="/">
                                        <a class="nav-link active" aria-current="page" href="/"><i
                                                class="bx bx-home-alt me-1"></i>Home</a>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/dat-phong">
                                        <a class="nav-link" href="/dat-phong"><i
                                                class="fa-solid fa-person-booth me-2"></i>Đặt Phòng</a>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/tim-loai-phong">
                                        <a class="nav-link" href="/tim-loai-phong"><i
                                                class="fa-solid fa-person-shelter me-2"></i>Loại Phòng</a>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/danh-sach-phong">
                                        <a class="nav-link" href="/danh-sach-phong"><i
                                                class="fa-solid fa-hotel me-2"></i>Phòng</a>
                                    </router-link>
                                </li>
                                <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#"
                                        role="button" data-bs-toggle="dropdown" aria-expanded="false"><i
                                            class="fa-solid fa-newspaper me-2"></i>
                                        Bài Viết
                                    </a>
                                    <ul class="dropdown-menu">
                                        <template v-for="(v, k) in ds_chuyen_muc" :key="k">
                                            <router-link :to="'/bai-viet/' + v.slug_chuyen_muc">
                                                <li><a class="dropdown-item" :href="'/bai-viet/' + v.slug_chuyen_muc">{{
                                                        v.ten_chuyen_muc }}</a>
                                                </li>
                                            </router-link>
                                        </template>
                                    </ul>
                                </li>
                            </ul>
                            <template v-if="is_check == false">
                                <form class="d-flex">
                                    <router-link to="/khach-hang/dang-nhap">
                                        <button class="btn btn-dark me-3 radius-30 px-4" type="button"><i
                                                class="bx bx-lock"></i> Login</button>
                                    </router-link>
                                    <router-link to="/khach-hang/dang-ky">
                                        <button class="btn btn-light radius-30 px-4" type="button"><i
                                                class="bx bx-user"></i>
                                            Register</button>
                                    </router-link>
                                </form>
                            </template>
                            <template v-else>
                                <div class="user-box dropdown">
                                    <a class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret"
                                        href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
                                            class="user-img" alt="user avatar">
                                        <div class="user-info ps-3">
                                            <p class="user-name mb-0"><b>{{ ten_hien_thi }}</b></p>
                                            <p class="designattion mb-0 text-dark">Khách Hàng</p>
                                        </div>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li><a v-on:click="dangXuat()" class="dropdown-item"><i
                                                    class='bx bx-log-out-circle'></i><span>Đăng Xuất</span></a>
                                        </li>
                                        <li><a v-on:click="dangXuatAll()" class="dropdown-item"><i
                                                    class='bx bx-log-out-circle'></i><span>Đăng Xuất Tất Cả</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </template>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
    data() {
        return {
            ten_hien_thi: 'Chưa đăng nhập',
            is_check: false,
            ds_chuyen_muc: [],
        }
    },
    mounted() {
        this.checkLogin();
        this.layDuLieuChuyenMuc();
    },
    methods: {
        checkLogin() {
            axios
                .get('http://127.0.0.1:8000/api/kiem-tra-token-khach-hang', {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_khachhang")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        this.is_check = true;
                        this.ten_hien_thi = localStorage.getItem('ho_ten');
                    }
                });
        },
        layDuLieuChuyenMuc() {
            axios
                .get('http://127.0.0.1:8000/api/client/chuyen-muc/data')
                .then((res) => {
                    this.ds_chuyen_muc = res.data.chuyen_muc;
                })
        },
        dangXuat() {
            axios
                .get('http://127.0.0.1:8000/api/khach-hang/dang-xuat', {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_khachhang")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        window.localStorage.removeItem('token_khachhang');
                        window.localStorage.removeItem('ho_ten');
                        this.is_check = false;
                        this.$router.push('/');
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                })
        },
        dangXuatAll() {
            axios
                .get('http://127.0.0.1:8000/api/khach-hang/dang-xuat-all', {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_khachhang")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        window.localStorage.removeItem('token_khachhang');
                        window.localStorage.removeItem('ho_ten');
                        this.is_check = false;
                        this.$router.push('/');
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                })
        }

    },
}
</script>
<style></style>