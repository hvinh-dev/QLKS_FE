<template>
    <div class="authentication-forgot d-flex align-items-center justify-content-center">
        <div class="card forgot-box">
            <div class="card-body">
                <div class="p-4 rounded  border">
                    <div class="text-center">
                        <img src="https://dzfullstack.com/assets/images/logo-img.png" width="120" alt="" />
                    </div>
                    <h4 class="mt-5 font-weight-bold text-center">Quên Mật Khẩu?</h4>
                    <p class="text-muted">Vui lòng nhập email tài khoản của bạn để có thể đổi lại mật khẩu mới</p>
                    <div class="my-4">
                        <label class="form-label">Email</label>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-envelope"></i></span>
                            <input v-model="tai_khoan.email" type="email" class="form-control form-control-lg" placeholder="example@user.com">
                        </div>
                    </div>
                    <div class="d-grid gap-2">
                        <button v-on:click="gui()" type="button" class="btn btn-primary btn-lg">Gửi</button> 
                        <router-link to="/khach-hang/dang-nhap">
                            <a href="/khach-hang/dang-nhap" class="btn btn-light btn-lg w-100"><i class='bx bx-arrow-back me-1'></i>Quay Lại Đăng Nhập</a>
                        </router-link>
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
            tai_khoan   :   {},
        }
    },
    methods: {
        gui() {
            axios
                .post("http://127.0.0.1:8000/api/khach-hang/quen-mat-khau", this.tai_khoan)
                .then((res) => {
                    if(res.data.status) {
                        toaster.success(res.data.message);
                        this.$router.push('/');
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