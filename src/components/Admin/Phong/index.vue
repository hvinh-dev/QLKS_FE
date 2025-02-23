<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-xl-2">
                            <button class="btn btn-primary mb-3 mb-lg-0" data-bs-toggle="modal"
                                data-bs-target="#taoPhongModal">
                                <i class="bx bxs-plus-square"></i>Tạo Mới Phòng</button>
                        </div>
                    </div>
                    <div class="modal fade" id="taoPhongModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Tạo Mới Phòng Khách Sạn</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="mb-2">
                                        <label>Tên Phòng</label>
                                        <input v-model="phong_create.ten_phong" type="text" class="form-control mt-2">
                                    </div>
                                    <div class="mb-2">
                                        <label>Giá Mặc Định</label>
                                        <input v-model="phong_create.gia_mac_dinh" type="number"
                                            class="form-control mt-2">
                                    </div>
                                    <div class="mb-2">
                                        <label>Tình Trạng</label>
                                        <select v-model="phong_create.tinh_trang" class="form-control">
                                            <option value="1">Đang Hoạt Động</option>
                                            <option value="0">Dừng Kinh Doanh</option>
                                        </select>
                                    </div>
                                    <div class="mb-2">
                                        <label>Loại Phòng</label>
                                        <select v-model="phong_create.id_loai_phong" class="form-control">
                                            <template v-for="(value, index) in ds_loai_phong" :key="index">
                                                <option v-bind:value="value.id">{{ value.ten_loai_phong }}</option>
                                            </template>
                                        </select>
                                    </div>
                                    <div class="mb-2">
                                        <label>Tiện Ích Khác</label>
                                        <textarea v-model="phong_create.tien_ich_khac" class="form-control" cols="30"
                                            rows="10"></textarea>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button v-on:click="themMoiPhong()" type="button" class="btn btn-primary">Thêm
                                        Mới</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="mt-2">Danh Sách Phòng</h5>
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
                                    <th class="text-center">Tên Phòng</th>
                                    <th class="text-center">Giá Mặc Định</th>
                                    <th class="text-center">Tình Trạng</th>
                                    <th class="text-center">Loại Phòng</th>
                                    <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(value, index) in ds_phong" :key="index">
                                    <th class="text-center align-middle">{{ index + 1 }}</th>
                                    <td class="align-middle">{{ value.ten_phong }}</td>
                                    <td class="align-middle text-end">{{ value.gia_mac_dinh }} đ</td>
                                    <td class="align-middle text-center">
                                        <button v-on:click="doiTrangThai(value)" v-if="value.tinh_trang == 0"
                                            class="btn btn-warning">Tạm Dừng</button>
                                        <button v-on:click="doiTrangThai(value)" v-else class="btn btn-primary">Hoạt
                                            Động</button>
                                    </td>
                                    <td class="align-middle">{{ value.ten_loai_phong }}</td>
                                    <td class="text-center text-nowrap align-middle">
                                        <button v-on:click="Object.assign(phong_update, value)" data-bs-toggle="modal"
                                            data-bs-target="#updateModal" class="btn btn-info me-1">Cập Nhật</button>
                                        <button data-bs-toggle="modal" data-bs-target="#deleteModal"
                                            v-on:click="id_can_xoa = value.id" class="btn btn-danger">Xoá Bỏ</button>
                                        <button class="ms-1 btn btn-warning" v-on:click="taoChiTietThuePhong(value)">Tạo
                                            Đặt
                                            Phòng</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Xoá Phòng</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="alert alert-danger" role="alert">
                                        Bạn thật sự có muốn xoá phòng này không?
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button v-on:click="xoaPhong()" type="button" class="btn btn-danger"
                                        data-bs-dismiss="modal">Xác Nhận Xoá</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Phòng</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="mb-2">
                                        <label>Tên Phòng</label>
                                        <input v-model="phong_update.ten_phong" type="text" class="form-control mt-2">
                                    </div>
                                    <div class="mb-2">
                                        <label>Giá Mặc Định</label>
                                        <input v-model="phong_update.gia_mac_dinh" type="number"
                                            class="form-control mt-2">
                                    </div>
                                    <div class="mb-2">
                                        <label>Tình Trạng</label>
                                        <select v-model="phong_update.tinh_trang" class="form-control">
                                            <option value="1">Đang Hoạt Động</option>
                                            <option value="0">Dừng Kinh Doanh</option>
                                        </select>
                                    </div>
                                    <div class="mb-2">
                                        <label>Loại Phòng</label>
                                        <select v-model="phong_update.id_loai_phong" class="form-control">
                                            <template v-for="(value, index) in ds_loai_phong" :key="index">
                                                <option v-bind:value="value.id">{{ value.ten_loai_phong }}</option>
                                            </template>
                                        </select>
                                    </div>
                                    <div class="mb-2">
                                        <label>Tiện Ích Khác</label>
                                        <textarea v-model="phong_update.tien_ich_khac" class="form-control" cols="30"
                                            rows="10"></textarea>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button v-on:click="capNhatPhong()" type="button" class="btn btn-info"
                                        data-bs-dismiss="modal">Xác Nhận Cập Nhật</button>
                                </div>
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
import baseRequest from '../../../core/baseRequest';
export default {
    data() {
        return {
            ds_phong: [],
            ds_loai_phong: [],
            phong_create: {},
            phong_update: {},
            id_can_xoa: '',
            tim_kiem : {},
        }
    },
    mounted() {
        this.layDuLieuLoaiPhong();
        this.layDuLieuPhong();
    },
    methods: {
        timKiemNe() {
            baseRequest
                .post("phong/tim-kiem", this.tim_kiem)
                .then((res) => {
                    if (res.data.status == false) {
                        toaster.error(res.data.message)
                    }
                    this.ds_phong = res.data.data;
                });
        },
        layDuLieuLoaiPhong() {
            baseRequest
                .get('loai-phong/data')
                .then((res) => {
                    if (res.data.status == false) {
                        toaster.error(res.data.message)
                    }
                    this.ds_loai_phong = res.data.loai_phong;
                })
        },
        layDuLieuPhong() {
            baseRequest
                .get('phong/data')
                .then((res) => {
                    if (res.data.status == false) {
                        toaster.error(res.data.message)
                    }
                    this.ds_phong = res.data.phong;
                })
        },
        themMoiPhong() {
            baseRequest
                .post("phong/create", this.phong_create)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.layDuLieuPhong();
                    } else {
                        toaster.error(res.data.message)
                    }
                });
        },
        xoaPhong() {
            baseRequest
                .delete("phong/delete/" + this.id_can_xoa)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.layDuLieuPhong();
                    } else {
                        toaster.error(res.data.message)
                    }
                });
        },
        capNhatPhong() {
            baseRequest
                .put("phong/update", this.phong_update)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.layDuLieuPhong();
                    } else {
                        toaster.error(res.data.message)
                    }
                }); 
        },
        taoChiTietThuePhong(payload) {
            baseRequest
                .post("chi-tiet-thue-phong/create", payload)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success(res.data.message)
                    } else {
                        toaster.error(res.data.message)
                    }
                });
        },
        doiTrangThai(xxx) {
            baseRequest
                .put('phong/doi-trang-thai', xxx)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.layDuLieuPhong();
                    } else {
                        toaster.error(res.data.message)
                    }
                })
        },
    },
}
</script>
<style></style>