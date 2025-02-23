<template>
    <div class="row">
        <div class="col-lg-4 col-md-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="mt-2">Thêm Mới Dịch Vụ</h5>
                </div>
                <div class="card-body">
                    <div class="mb-2">
                        <label>Tên Dịch Vụ</label>
                        <input v-model="dich_vu_create.ten_dich_vu" type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Đơn Giá</label>
                        <input v-model="dich_vu_create.don_gia" type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Đơn Vị Tính</label>
                        <input v-model="dich_vu_create.don_vi_tinh" type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Ghi Chú</label>
                        <input v-model="dich_vu_create.ghi_chu" type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Tình Trạng</label>
                        <select v-model="dich_vu_create.tinh_trang" class="form-control mt-2">
                            <option value="1">Hoạt Động</option>
                            <option value="0">Tạm Dừng</option>
                        </select>
                    </div>
                </div>
                <div class="card-footer text-end">
                    <button v-on:click="themMoiDichVu()" class="btn btn-primary">Thêm Mới</button>
                </div>
            </div>
        </div>
        <div class="col-lg-8 col-md-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="mt-2">Danh Sách Dịch Vụ</h5>
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
                                    <th class="text-center">Tên Dịch Vụ</th>
                                    <th class="text-center">Đơn Giá</th>
                                    <th class="text-center">Đơn Vị Tính</th>
                                    <th class="text-center">Ghi Chú</th>
                                    <th class="text-center">Tình Trạng</th>
                                    <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(value, index) in ds_dich_vu" :key="index">
                                    <th class="text-center align-middle">{{ index + 1 }}</th>
                                    <td class="align-middle">{{ value.ten_dich_vu }}</td>
                                    <td class="align-middle text-end">{{ value.don_gia }}</td>
                                    <td class="align-middle">{{ value.don_vi_tinh }}</td>
                                    <td class="align-middle">{{ value.ghi_chu }}</td>
                                    <td class="align-middle text-center">
                                        <button v-on:click="doiTrangThai(value)" v-if="value.tinh_trang == 0" class="btn btn-warning">Tạm Dừng</button>
                                        <button  v-on:click="doiTrangThai(value)" v-else class="btn btn-primary">Hoạt Động</button>
                                    </td>
                                    <td class="text-center text-nowrap align-middle">
                                        <button v-on:click="Object.assign(dich_vu_update, value)" data-bs-toggle="modal"
                                            data-bs-target="#updateModal" class="btn btn-info me-1">Cập Nhật</button>
                                        <button data-bs-toggle="modal" data-bs-target="#deleteModal"
                                            v-on:click="id_can_xoa = value.id" class="btn btn-danger">Xoá Bỏ</button>
                                    </td>
                                </tr>
                                <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Xoá Dịch Vụ</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="alert alert-danger" role="alert">
                                                    Bạn thật sự có muốn xoá dịch vụ này không?
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button v-on:click="xoaDichVu()" type="button" class="btn btn-danger"
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
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Dịch Vụ</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">

                                                <div class="mb-2">
                                                    <label>Tên Dịch Vụ</label>
                                                    <input v-model="dich_vu_update.ten_dich_vu" type="text"
                                                        class="form-control mt-2">
                                                </div>
                                                <div class="mb-2">
                                                    <label>Đơn Giá</label>
                                                    <input v-model="dich_vu_update.don_gia" type="text"
                                                        class="form-control mt-2">
                                                </div>
                                                <div class="mb-2">
                                                    <label>Đơn Vị Tính</label>
                                                    <input v-model="dich_vu_update.don_vi_tinh" type="text"
                                                        class="form-control mt-2">
                                                </div>
                                                <div class="mb-2">
                                                    <label>Ghi Chú</label>
                                                    <input v-model="dich_vu_update.ghi_chu" type="text"
                                                        class="form-control mt-2">
                                                </div>
                                                <div class="mb-2">
                                                    <label>Tình Trạng</label>
                                                    <select v-model="dich_vu_update.tinh_trang" class="form-control mt-2">
                                                        <option value="1">Hoạt Động</option>
                                                        <option value="0">Tạm Dừng</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button v-on:click="capNhatDichVu()" type="button" class="btn btn-primary"
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
            ds_dich_vu: [],
            dich_vu_create: {},
            dich_vu_update: {},
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
                .post("dich-vu/tim-kiem", this.tim_kiem)
                .then((res) => {
                    if (res.data.status == false) {
                        toaster.error(res.data.message)
                    }
                    this.ds_dich_vu = res.data.data;
                });
        },
        layDuLieu() {
            baseRequest
                .get('dich-vu/data')
                .then((res) => {
                    if (res.data.status == false) {
                        toaster.error(res.data.message)
                    }
                    this.ds_dich_vu = res.data.dich_vu;
                })
        },
        themMoiDichVu() {
            baseRequest
                .post("dich-vu/create", this.dich_vu_create)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.layDuLieu();
                    } else {
                        toaster.error(res.data.message)
                    }
                });
        },
        xoaDichVu() {
            baseRequest
                .delete("dich-vu/delete/" + this.id_can_xoa)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.layDuLieu();
                    } else {
                        toaster.error(res.data.message)
                    }
                });
        },
        capNhatDichVu() {
            baseRequest
                .put("dich-vu/update", this.dich_vu_update)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.layDuLieu();
                    } else {
                        toaster.error(res.data.message)
                    }
                });
        },
        doiTrangThai(xxx) {
            baseRequest
                .put('dich-vu/doi-trang-thai', xxx)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.layDuLieu();
                    } else {
                        toaster.error(res.data.message)
                    }
                })
        },
        
    },
}
</script>
<style></style>