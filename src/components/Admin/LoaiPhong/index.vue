<template>
    <div class="row">
        <div class="col-lg-4 col-md-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="mt-2">Thêm Mới Loại Phòng</h5>
                </div>
                <div class="card-body">
                    <div class="mb-2">
                        <label>Tên Loại Phòng</label>
                        <input v-model="loai_phong_create.ten_loai_phong" type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Diện Tích Phòng</label>
                        <input v-model="loai_phong_create.dien_tich" type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Số Giường</label>
                        <input v-model="loai_phong_create.so_giuong" type="number" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Số Người Lớn</label>
                        <input v-model="loai_phong_create.so_nguoi_lon" type="number" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Số Trẻ Em</label>
                        <input v-model="loai_phong_create.so_tre_em" type="number" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Hình Ảnh</label>
                        <input v-model="loai_phong_create.hinh_anh" type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Tiện Ích</label>
                        <textarea v-model="loai_phong_create.tien_ich" class="form-control mt-2" cols="30" rows="10"></textarea>
                    </div>
                    <div class="mb-2">
                        <label>Tình Trạng</label>
                        <select v-model="loai_phong_create.tinh_trang" class="form-control mt-2">
                            <option value="1">Hoạt Động</option>
                            <option value="0">Tạm Dừng</option>
                        </select>
                    </div>
                </div>
                <div class="card-footer text-end">
                    <button v-on:click="themMoiLoaiPhong()" class="btn btn-primary">Thêm Mới</button>
                </div>
            </div>
        </div>
        <div class="col-lg-8 col-md-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="mt-2">Danh Sách Loại Phòng</h5>
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
                                    <th class="text-center">Tên Loại Phòng</th>
                                    <th class="text-center">Diện Tích</th>
                                    <th class="text-center">Số Giường</th>
                                    <th class="text-center">Số Người Lớn</th>
                                    <th class="text-center">Số Trẻ Em</th>
                                    <th class="text-center">Tình Trạng</th>
                                    <th class="text-center">Hình Ảnh</th>
                                    <th class="text-center">Tiện Ích</th>
                                    <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(value, index) in ds_phong" :key="index">
                                    <th class="text-center align-middle">{{ index + 1 }}</th>
                                    <td class="align-middle">{{ value.ten_loai_phong }}</td>
                                    <td class="align-middle text-center">{{ value.dien_tich }}</td>
                                    <td class="align-middle text-center">{{ value.so_giuong }}</td>
                                    <td class="align-middle text-center">{{ value.so_nguoi_lon }}</td>
                                    <td class="align-middle text-center">{{ value.so_tre_em }}</td>
                                    <td class="align-middle text-center">
                                        <button v-on:click="doiTrangThai(value)" v-if="value.tinh_trang == 0" class="btn btn-warning">Tạm Dừng</button>
                                        <button v-on:click="doiTrangThai(value)" v-else class="btn btn-primary">Hoạt Động</button>
                                    </td>
                                    <td class="align-middle text-center">
                                        <img v-bind:src="value.hinh_anh" class="img-fluid w-100">
                                    </td>
                                    <td class="align-middle text-center">
                                        <i v-on:click="Object.assign(tien_ich, value)" class="fa-solid fa-circle-info fa-2xl" data-bs-toggle="modal" data-bs-target="#tienIchModal"></i>
                                    </td>
                                    <td class="text-center text-nowrap align-middle">
                                        <button v-on:click="Object.assign(loai_phong_update, value)" data-bs-toggle="modal" data-bs-target="#updateModal"
                                            class="btn btn-info me-1">Cập Nhật</button>
                                        <button data-bs-toggle="modal" data-bs-target="#deleteModal"
                                            v-on:click="id_can_xoa = value.id" class="btn btn-danger">Xoá Bỏ</button>
                                    </td>
                                </tr>
                                <div class="modal fade" id="tienIchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Tiện Ích</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <span v-html="tien_ich.tien_ich"></span> 
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Xoá Loại Phòng</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="alert alert-danger" role="alert">
                                                    Bạn thật sự có muốn xoá loại phòng này không?
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button v-on:click="xoaLoaiPhong()" type="button" class="btn btn-danger"
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
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Loại Phòng</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="mb-2">
                                                    <label>Tên Loại Phòng</label>
                                                    <input v-model="loai_phong_update.ten_loai_phong" type="text"
                                                        class="form-control mt-2">
                                                </div>
                                                <div class="mb-2">
                                                    <label>Diện Tích Phòng</label>
                                                    <input v-model="loai_phong_update.dien_tich" type="text"
                                                        class="form-control mt-2">
                                                </div>
                                                <div class="mb-2">
                                                    <label>Số Giường</label>
                                                    <input v-model="loai_phong_update.so_giuong" type="number"
                                                        class="form-control mt-2">
                                                </div>
                                                <div class="mb-2">
                                                    <label>Số Người Lớn</label>
                                                    <input v-model="loai_phong_update.so_nguoi_lon" type="number" class="form-control mt-2">
                                                </div>
                                                <div class="mb-2">
                                                    <label>Số Trẻ Em</label>
                                                    <input v-model="loai_phong_update.so_tre_em" type="number" class="form-control mt-2">
                                                </div>
                                                <div class="mb-2">
                                                    <label>Hình Ảnh</label>
                                                    <input v-model="loai_phong_update.hinh_anh" type="text"
                                                        class="form-control mt-2">
                                                </div>
                                                <div class="mb-2">
                                                    <label>Tiện Ích</label>
                                                    <textarea v-model="loai_phong_update.tien_ich" class="form-control mt-2" cols="30" rows="10"></textarea>
                                                </div>
                                                <div class="mb-2">
                                                    <label>Tình Trạng</label>
                                                    <select v-model="loai_phong_update.tinh_trang"
                                                        class="form-control mt-2">
                                                        <option value="1">Hoạt Động</option>
                                                        <option value="0">Tạm Dừng</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button v-on:click="capNhatLoaiPhong()" type="button" class="btn btn-info"
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
            ds_phong: [],
            loai_phong_create: {},
            loai_phong_update: {},
            tien_ich: {},
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
                .post("loai-phong/tim-kiem", this.tim_kiem)
                .then((res) => {
                    if (res.data.status == false) {
                        toaster.error(res.data.message)
                    }
                    this.ds_phong = res.data.data;
                });
        },
        layDuLieu() {
            baseRequest
                .get('loai-phong/data')
                .then((res) => {
                    if(res.data.status) {
                        this.ds_phong = res.data.loai_phong;
                    } else {
                        toaster.error(res.data.message)
                    }
                })
        },
        themMoiLoaiPhong() {
            baseRequest
                .post("loai-phong/create", this.loai_phong_create)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.layDuLieu();
                    } else {
                        toaster.error(res.data.message)
                    }
                });
        },
        xoaLoaiPhong() {
            baseRequest
                .delete("loai-phong/delete/" + this.id_can_xoa)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.layDuLieu();
                    } else {
                        toaster.error(res.data.message)
                    }
                });
        },
        capNhatLoaiPhong() {
            baseRequest
                .put("loai-phong/update", this.loai_phong_update)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.layDuLieu();
                    } else {
                        toaster.error(res.data.message)
                    }
                });
            baseRequest
                .post("loai-phong/update", this.loai_phong_update)
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
                .put('loai-phong/doi-trang-thai', xxx)
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