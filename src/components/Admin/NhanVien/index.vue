<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-xl-2">
                            <button class="btn btn-primary mb-3 mb-lg-0" data-bs-toggle="modal"
                                data-bs-target="#taoPhongModal">
                                <i class="bx bxs-plus-square"></i>Tạo Mới Nhân Viên</button>
                        </div>
                    </div>
                    <div class="modal fade" id="taoPhongModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Tạo Tài Khoản Nhân Viên</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="mb-3">
                                                <label for="">Mã Nhân Viên</label>
                                                <input type="text" v-model="nhan_vien_create.ma_nhan_vien"
                                                    class="form-control mt-2" name="" id="">
                                            </div>
                                            <div class="mb-3">
                                                <label for="">Ngày Sinh</label>
                                                <input type="date" v-model="nhan_vien_create.ngay_sinh"
                                                    class="form-control mt-2" name="" id="">
                                            </div>
                                            <div class="mb-3">
                                                <label for="">Chức Vụ</label>
                                                <select name="" v-model="nhan_vien_create.id_chuc_vu"
                                                    class="form-control mt-2">
                                                    <template v-for="(v, k) in listPhanQuyen" :key="k">
                                                        <option v-bind:value="v.id">{{ v.ten_quyen }}</option>
                                                    </template>
                                                </select>
                                            </div>
                                            <div class="mb-3">
                                                <label for="">Số Điện Thoại</label>
                                                <input type="text" v-model="nhan_vien_create.so_dien_thoai"
                                                    class="form-control mt-2" name="" id="">
                                            </div>
                                            <div class="mb-3">
                                                <label for="">Password</label>
                                                <input type="text" v-model="nhan_vien_create.password"
                                                    class="form-control mt-2" name="" id="">
                                            </div>
                                            <div class="mb-3">
                                                <label for="">Tình Trạng</label>
                                                <select name="" v-model="nhan_vien_create.tinh_trang"
                                                    class="form-control mt-2" id="">
                                                    <option value="0">Hoạt Động</option>
                                                    <option value="1">Tạm Tắt</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="mb-3">
                                                <label for="">Họ Và Tên</label>
                                                <input type="text" v-model="nhan_vien_create.ho_va_ten"
                                                    class="form-control mt-2" name="" id="">
                                            </div>
                                            <div class="mb-3">
                                                <label for="">Lương Cơ Bản</label>
                                                <input type="text" v-model="nhan_vien_create.luong_co_ban"
                                                    class="form-control mt-2" name="" id="">
                                            </div>
                                            <div class="mb-3">
                                                <label for="">Ngày Bắt Đầu</label>
                                                <input type="date" v-model="nhan_vien_create.ngay_bat_dau"
                                                    class="form-control mt-2" name="" id="">
                                            </div>
                                            <div class="mb-3">
                                                <label for="">Email</label>
                                                <input type="text" v-model="nhan_vien_create.email"
                                                    class="form-control mt-2" name="" id="">
                                            </div>
                                            <div class="mb-3">
                                                <label for="">Nhập Lại Mật Khẩu</label>
                                                <input type="text" v-model="nhan_vien_create.re_password"
                                                    class="form-control mt-2" name="" id="">
                                            </div>
                                            <div class="mb-3">
                                                <label for="">Avatar</label>
                                                <input type="text" v-model="nhan_vien_create.avatar"
                                                    class="form-control mt-2" name="" id="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button v-on:click="TaoMoiNhanVien()" type="button" class="btn btn-primary">Thêm
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
                    <h5 class="mt-2">Danh Sách Nhân Viên</h5>
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
                                <tr class="align-middle">
                                    <th class="text-center">#</th>
                                    <th class="text-center">Mã Nhân Viên</th>
                                    <th class="text-center">Họ Và Tên</th>
                                    <th class="text-center">Ngày Sinh</th>
                                    <th class="text-center">Lương Cơ Bản</th>
                                    <th class="text-center">Chức Vụ</th>
                                    <th class="text-center">Ngày Bắt Đầu</th>
                                    <th class="text-center">Email</th>
                                    <th class="text-center">Avatar</th>
                                    <th class="text-center">Tình Trạng</th>
                                    <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(v, k) in ds_nhan_vien" :key="k">
                                    <tr class="align-middle">
                                        <td>{{ k + 1 }}</td>
                                        <td class="text-center">{{ v.ma_nhan_vien }}</td>
                                        <td>{{ v.ho_va_ten }}</td>
                                        <td class="text-center">{{ v.ngay_sinh }}</td>
                                        <td class="text-center">{{ v.luong_co_ban }}</td>
                                        <td class="text-center">{{ v.ten_quyen }}</td>
                                        <td class="text-center">{{ v.ngay_bat_dau }}</td>
                                        <td>{{ v.email }}</td>
                                        <td class="text-center">
                                            <img v-bind:src="v.avatar" class="user-img me-3">
                                        </td>
                                        <td class="text-center">
                                            <button v-on:click="doiTrangThai(v)" v-if="v.tinh_trang == 0"
                                                class="btn btn-warning">Tạm Dừng</button>
                                            <button v-on:click="doiTrangThai(v)" v-else class="btn btn-primary">Hoạt
                                                Động</button>
                                        </td>
                                        <td class="text-center">
                                            <button v-on:click="Object.assign(nhan_vien_update, v)"
                                                data-bs-toggle="modal" data-bs-target="#capnhapModal"
                                                class="btn btn-success btn-sm me-1">Cập
                                                Nhập</button>
                                            <button v-on:click="id_can_xoa = v.id" data-bs-toggle="modal"
                                                data-bs-target="#deleteModal" class="btn btn-danger btn-sm">Xóa</button>
                                        </td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>
                    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Xoá Nhân Viên</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="alert alert-danger" role="alert">
                                        Bạn thật sự có muốn xoá nhân viên này không?
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button v-on:click="XoaNhanVien()" type="button" class="btn btn-danger"
                                        data-bs-dismiss="modal">Xác Nhận
                                        Xoá</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="capnhapModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Tạo Tài Khoản Nhân Viên</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="mb-3">
                                                <label for="">Mã Nhân Viên</label>
                                                <input type="text" v-model="nhan_vien_update.ma_nhan_vien"
                                                    class="form-control mt-2" name="" id="">
                                            </div>
                                            <div class="mb-3">
                                                <label for="">Ngày Sinh</label>
                                                <input type="date" v-model="nhan_vien_update.ngay_sinh"
                                                    class="form-control mt-2" name="" id="">
                                            </div>
                                            <div class="mb-3">
                                                <label for="">Chức Vụ</label>
                                                <select name="" v-model="nhan_vien_update.id_chuc_vu"
                                                    class="form-control mt-2" id="">
                                                    <template v-for="(v, k) in listPhanQuyen" :key="k">
                                                        <option v-bind:value="v.id">{{ v.ten_quyen }}</option>
                                                    </template>
                                                </select>
                                            </div>
                                            <div class="mb-3">
                                                <label for="">Số Điện Thoại</label>
                                                <input type="text" v-model="nhan_vien_update.so_dien_thoai"
                                                    class="form-control mt-2" name="" id="">
                                            </div>
                                            <div class="mb-3">
                                                <label for="">Password</label>
                                                <input type="text" v-model="nhan_vien_update.password"
                                                    class="form-control mt-2" name="" id="">
                                            </div>
                                            <div class="mb-3">
                                                <label for="">Tình Trạng</label>
                                                <select name="" v-model="nhan_vien_update.tinh_trang"
                                                    class="form-control mt-2" id="">
                                                    <option value="0">Hoạt Động</option>
                                                    <option value="1">Tạm Tắt</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="mb-3">
                                                <label for="">Họ Và Tên</label>
                                                <input type="text" v-model="nhan_vien_update.ho_va_ten"
                                                    class="form-control mt-2" name="" id="">
                                            </div>
                                            <div class="mb-3">
                                                <label for="">Lương Cơ Bản</label>
                                                <input type="text" v-model="nhan_vien_update.luong_co_ban"
                                                    class="form-control mt-2" name="" id="">
                                            </div>
                                            <div class="mb-3">
                                                <label for="">Ngày Bắt Đầu</label>
                                                <input type="date" v-model="nhan_vien_update.ngay_bat_dau"
                                                    class="form-control mt-2" name="" id="">
                                            </div>
                                            <div class="mb-3">
                                                <label for="">Email</label>
                                                <input type="text" v-model="nhan_vien_update.email"
                                                    class="form-control mt-2" name="" id="">
                                            </div>
                                            <div class="mb-3">
                                                <label for="">Nhập Lại Mật Khẩu</label>
                                                <input type="text" v-model="nhan_vien_update.re_password"
                                                    class="form-control mt-2" name="" id="">
                                            </div>
                                            <div class="mb-3">
                                                <label for="">Avatar</label>
                                                <input type="text" v-model="nhan_vien_update.avatar"
                                                    class="form-control mt-2" name="" id="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button v-on:click="CapNhatNhanVien()" type="button" class="btn btn-primary"
                                        data-bs-dismiss="modal">Cập Nhật</button>
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
            ds_nhan_vien: [],
            nhan_vien_create: {},
            nhan_vien_update: {},
            id_can_xoa: 0,
            listPhanQuyen: [],
            tim_kiem : {},
        }
    },
    mounted() {
        this.LayDuLieu();
        this.layDuLieuPhanQuyen();
    },
    methods: {
        timKiemNe() {
            baseRequest
                .post("nhan-vien/tim-kiem", this.tim_kiem)
                .then((res) => {
                    if (res.data.status == false) {
                        toaster.error(res.data.message)
                    }
                    this.ds_nhan_vien = res.data.data;
                });
        },
        layDuLieuPhanQuyen() {
            baseRequest
                .get('phan-quyen/data')
                .then((res) => {
                    if (res.data.status == false) {
                        toaster.error(res.data.message)
                    }
                    this.listPhanQuyen = res.data.data;
                });
        },
        LayDuLieu() {
            baseRequest
                .get('nhan-vien/data')
                .then((res) => {
                    if (res.data.status == false) {
                        toaster.error(res.data.message)
                    }
                    this.ds_nhan_vien = res.data.nhan_vien;
                })
        },
        TaoMoiNhanVien() {
            baseRequest
                .post('nhan-vien/create', this.nhan_vien_create)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.nhan_vien_create = {},
                            this.LayDuLieu();
                    } else {
                        toaster.error(res.data.message)
                    }
                });
        },
        CapNhatNhanVien() {
            baseRequest
                .put('nhan-vien/update', this.nhan_vien_update)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.LayDuLieu();
                    } else {
                        toaster.error(res.data.message)
                    }
                })
        },
        XoaNhanVien() {
            baseRequest
                .delete('nhan-vien/delete/' + this.id_can_xoa)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.LayDuLieu();
                    } else {
                        toaster.error(res.data.message)
                    }
                })
        },
        doiTrangThai(xxx) {
            baseRequest
                .put('nhan-vien/doi-trang-thai', xxx)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.LayDuLieu();
                    } else {
                        toaster.error(res.data.message)
                    }
                })
        },
    },
}
</script>
<style></style>
