<template>
    <div class="row">
        <div class="col-lg-4 col-md-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="mt-2">Thêm Mới Review</h5>
                </div>
                <div class="card-body">
                    <div class="mb-2">
                        <label>Avatar</label>
                        <input v-model="review_create.avatar" type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Họ Và Tên</label>
                        <input v-model="review_create.ho_va_ten" type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Nội Dung</label>
                        <input v-model="review_create.noi_dung" type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Sao Đánh Giá</label>
                        <input v-model="review_create.sao_danh_gia" type="number" min="1" max="5"
                            class="form-control mt-2">
                    </div>
                </div>
                <div class="card-footer text-end">
                    <button v-on:click="themMoiReview()" class="btn btn-primary">Thêm Mới</button>
                </div>
            </div>
        </div>
        <div class="col-lg-8 col-md-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="mt-2">Danh Sách Review</h5>
                    <div class="input-group mt-3 w-100">
                        <input v-on:keyup.enter="timKiemNe()" v-model="tim_kiem.noi_dung_tim" type="text" class="form-control search-control border border-3 border-secondary" placeholder="Search..."> 
                        <span class="position-absolute top-50 search-show translate-middle-y" style="left: 15px;"><i class="bx bx-search"></i></span>
                        <button v-on:click="timKiemNe()" class="btn btn-outline-secondary" type="button" id="button-addon2">Tìm Kiếm</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th class="text-center">#</th>
                                    <th class="text-center">Avatar</th>
                                    <th class="text-center">Họ Và Tên</th>
                                    <th class="text-center">Nội Dung</th>
                                    <th class="text-center">Sao Đánh Giá</th>
                                    <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(value, index) in ds_review" :key="index">
                                    <th class="text-center align-middle">{{ index + 1 }}</th>
                                    <td class="align-middle text-center">
                                        <img v-bind:src="value.avatar" class="user-img me-3">
                                    </td>
                                    <td class="align-middle">{{ value.ho_va_ten }}</td>
                                    <td class="align-middle text-wrap">{{ value.noi_dung }}</td>
                                    <td class="align-middle text-center">{{ value.sao_danh_gia }}</td>
                                    <td class="text-center text-nowrap align-middle">
                                        <button v-on:click="Object.assign(review_update, value)" data-bs-toggle="modal"
                                            data-bs-target="#updateModal" class="btn btn-info me-1">Cập Nhật</button>
                                        <button data-bs-toggle="modal" data-bs-target="#deleteModal"
                                            v-on:click="id_can_xoa = value.id" class="btn btn-danger">Xoá Bỏ</button>
                                    </td>
                                </tr>
                                <div class="modal fade" id="deleteModal" tabindex="-1"
                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Xoá Review</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="alert alert-danger" role="alert">
                                                    Bạn thật sự có muốn xoá review này không?
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button v-on:click="xoaReview()" type="button" class="btn btn-danger"
                                                    data-bs-dismiss="modal">Xác Nhận Xoá</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal fade" id="updateModal" tabindex="-1"
                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Review</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="mb-2">
                                                    <label>Avatar</label>
                                                    <input v-model="review_update.avatar" type="text"
                                                        class="form-control mt-2">
                                                </div>
                                                <div class="mb-2">
                                                    <label>Họ Và Tên</label>
                                                    <input v-model="review_update.ho_va_ten" type="text"
                                                        class="form-control mt-2">
                                                </div>
                                                <div class="mb-2">
                                                    <label>Nội Dung</label>
                                                    <input v-model="review_update.noi_dung" type="text"
                                                        class="form-control mt-2">
                                                </div>
                                                <div class="mb-2">
                                                    <label>Sao Đánh Giá</label>
                                                    <input v-model="review_update.sao_danh_gia" type="number" min="1"
                                                        max="5" class="form-control mt-2">
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button v-on:click="capNhatReview()" type="button" class="btn btn-info"
                                                    data-bs-dismiss="modal">Xác Nhận Cập Nhật</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </tbody>
                        </table>
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
import baseRequest from '../../../core/baseRequest';
export default {
    data() {
        return {
            ds_review: [],
            review_create: {},
            review_update: {},
            id_can_xoa: '',
            tim_kiem : {},
        }
    },
    mounted() {
        this.layDuLieu();
    },
    methods: {
        timKiemNe() {
            baseRequest
                .post("review/tim-kiem", this.tim_kiem)
                .then((res) => {
                    if (res.data.status == false) {
                        toaster.error(res.data.message)
                    }
                    this.ds_review = res.data.data;
                });
        },
        layDuLieu() {
            baseRequest
                .get('review/data')
                .then((res) => {
                    if (res.data.status == false) {
                        toaster.error(res.data.message)
                    }
                    this.ds_review = res.data.review;
                })
        },
        themMoiReview() {
            baseRequest
                .post("review/create", this.review_create)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.layDuLieu();
                    } else {
                        toaster.error(res.data.message)
                    }
                });
        },
        xoaReview() {
            baseRequest
                .delete("review/delete/" + this.id_can_xoa)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.layDuLieu();
                    } else {
                        toaster.error(res.data.message)
                    }
                });
        },
        capNhatReview() {
            baseRequest
                .put("review/update", this.review_update)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.layDuLieu();
                    } else {
                        toaster.error(res.data.message)
                    }
                });
        }
    },
}
</script>
<style></style>