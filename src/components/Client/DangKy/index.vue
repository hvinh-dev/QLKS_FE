<template>
    <div class="container-fluid">
        <div style="margin-top: 100px;" class="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
            <div class="col mx-auto">
                <div class="card mt-5">
                    <div class="card-body">
                        <div class="border p-4 rounded">
                            <div class="text-center">
                                <h3 class="">Đăng Ký</h3>
                                <p>Bạn đã có tài khoản thì <router-link to="/khach-hang/dang-nhap"><a href="/khach-hang/dang-nhap">đăng nhập tại đây</a></router-link>
                                </p>
                            </div>
                            <div class="form-body">
                                <form class="row g-3">
                                    <div class="col-6">
                                        <label class="form-label">Họ Đệm</label>
                                        <input type="text" class="form-control" v-model="data_dang_ky.ho_lot">
                                    </div>
                                    <div class="col-6">
                                        <label class="form-label">Tên Khách Hàng</label>
                                        <input type="text" class="form-control" v-model="data_dang_ky.ten">
                                    </div>
                                    <div class="col-12">
                                        <label class="form-label">Địa Chỉ Email</label>
                                        <input type="email" class="form-control" v-model="data_dang_ky.email">
                                    </div>
                                    <div class="col-6">
                                        <label class="form-label">Số Điện Thoại</label>
                                        <input type="tel" class="form-control" v-model="data_dang_ky.so_dien_thoai">
                                    </div>
                                    <div class="col-6">
                                        <label class="form-label">Ngày Sinh</label>
                                        <input type="date" class="form-control" v-model="data_dang_ky.ngay_sinh">
                                    </div>
                                    <div class="col-6">
                                        <label class="form-label">Mật Khẩu</label>
                                        <input type="password" class="form-control" v-model="data_dang_ky.password">
                                    </div>
                                    <div class="col-6">
                                        <label class="form-label">Nhập Lại Mật Khẩu</label>
                                        <input type="password" class="form-control" v-model="data_dang_ky.re_password">
                                    </div>
                                    <div class="col-md-12 text-end">
                                        <router-link to="/quen-mat-khau">
                                            <a href="/quen-mat-khau">Forgot
                                                Password ?</a>
                                        </router-link>
                                    </div>
                                    <div class="col-12">
                                        <div class="d-grid">
                                            <button type="button" class="btn btn-primary" v-on:click="dangKy()"><i
                                                    class="bx bxs-lock-open"></i>Đăng Ký</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
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
            data_dang_ky: {}
        }
    },
    mounted() {

    },
    methods: {
        dangKy() {
            axios
                .post('http://127.0.0.1:8000/api/dang-ky', this.data_dang_ky)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success(res.data.message);
                        this.data_dang_ky = {};
                    } else {
                        toaster.error(res.data.message)
                    }
                })
                .catch((res) => {
                    var result = Object.entries(res.response.data.errors);
                    result.forEach((v, k) => {
                        toaster.error(v[1][0]);
                    });
                });
        }
    },
}
</script>
<style></style>
