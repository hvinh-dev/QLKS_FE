<template>
    <div class="authentication-reset-password d-flex align-items-center justify-content-center">
        <div class="row">
            <div class="col-12 col-lg-10 mx-auto">
                <div class="card">
                    <div class="row g-0">
                        <div class="col-lg-6 border-end">
                            <div class="card-body">
                                <div class="p-5">
                                    <div class="text-center">
                                        <img src="https://dzfullstack.com/assets/images/logo-img.png" width="180"
                                            alt="">
                                    </div>
                                    <h4 class="font-weight-bold text-center">Đặt Lại Mật Khẩu</h4>
                                    <p class="text-muted">Chúng tôi đã nhận được yêu cầu đặt lại mật khẩu của bạn. Vui
                                        lòng nhập mật khẩu mới của bạn!</p>
                                    <input v-model="tai_khoan.hash_reset" type="hidden" class="form-control" placeholder="id" />
                                    <div class="mb-3">
                                        <label class="form-label">Nhập Mật Khẩu Mới</label>
                                        <input v-model="tai_khoan.password" type="text" class="form-control" placeholder="Nhập vào mật khẩu mới" />
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Nhập Lại Mật Khẩu Mới</label>
                                        <input v-model="tai_khoan.re_password" type="text" class="form-control" placeholder="Nhập lại mật khẩu mới" />
                                    </div>
                                    <div class="d-grid gap-2">
                                        <button v-on:click="xacNhan()" type="button" class="btn btn-primary">Xác Nhận</button> 
                                        <router-link to="/khach-hang/dang-nhap">
                                            <a href="/khach-hang/dang-nhap" class="btn btn-light btn-lg w-100"><i class='bx bx-arrow-back me-1'></i>Quay Lại Đăng Nhập</a>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <img src="../../../assets/images/login-images/forgot-password-frent-img.jpg"
                                class="card-img login-img h-100" alt="...">
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
    props: ['ma_bi_mat'],
    data() {
        return {
            tai_khoan   :   {},
        }
    },
    mounted() {
        this.tai_khoan.hash_reset = this.$route.params.ma_bi_mat;
    },
    methods: {
        xacNhan() {
            axios
                .post("http://127.0.0.1:8000/api/khach-hang/dat-lai-mat-khau", this.tai_khoan)
                .then((res) => {
                    if(res.data.status) {
                        toaster.success(res.data.message);
                        this.$router.push('/khach-hang/dang-nhap');
                    } else {
                        toaster.error(res.data.message);
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