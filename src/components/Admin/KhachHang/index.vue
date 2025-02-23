<template>
    <div class="row">
        <div class="card">
            <div class="card-header">
                <h6><b>Danh Sách Khách Hàng</b></h6>
                <div class="input-group mt-3 w-100">
                    <input v-on:keyup.enter="timKiemNe()" v-model="tim_kiem.noi_dung_tim" type="text"
                        class="form-control search-control border border-3 border-secondary" placeholder="Search...">
                    <span class="position-absolute top-50 search-show translate-middle-y" style="left: 15px;"><i
                            class="bx bx-search"></i></span>
                    <button v-on:click="timKiemNe()" class="btn btn-outline-secondary" type="button"
                        id="button-addon2">Tìm Kiếm</button>
                </div>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr class="align-middle">
                                <th class="text-center">#</th>
                                <th class="text-center">Họ Và Tên</th>
                                <th class="text-center">Email</th>
                                <th class="text-center">Ngày Sinh</th>
                                <th class="text-center">Số Điện Thoại</th>
                                <th class="text-center">Tình Trạng</th>
                                <th class="text-center">Active</th>
                                <th class="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(value, index) in list_khach_hang" :key="index">
                                <tr class="align-middle">
                                    <th class="text-center">{{ index + 1 }}</th>
                                    <td>{{ value.ho_lot }} {{ value.ten }}</td>
                                    <td class="text-center">{{ value.email }}</td>
                                    <td class="text-center">{{ value.ngay_sinh }}</td>
                                    <td class="text-center">{{ value.so_dien_thoai }}</td>
                                    <td class="text-center">
                                        <button v-if="value.is_block == 0" class="btn btn-success"
                                            v-on:click="doiTrangThai(value)">Hoạt Động</button>
                                        <button v-else class="btn btn-danger" v-on:click="doiTrangThai(value)">Tạm
                                            Tắt</button>
                                    </td>
                                    <td class="text-center">
                                        <button v-if="value.is_active == 1" class="btn btn-primary">Đã Kích
                                            Hoạt</button>
                                        <button v-else class="btn btn-warning">Chưa Kích Hoạt</button>
                                    </td>
                                    <td class="text-center text-nowrap">
                                        <button v-on:click="Object.assign(khach_hang_update, value)"
                                            data-bs-toggle="modal" data-bs-target="#updateModal"
                                            class="btn btn-primary me-1">Cập Nhật</button>
                                        <button v-on:click="id_can_xoa = value.id" data-bs-toggle="modal"
                                            data-bs-target="#deleteModal" class="btn btn-danger">Xoá</button>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
                <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Khách Hàng</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-6 mt-2">
                                        <label class="form-label">Họ Đệm</label>
                                        <input type="text" class="form-control" v-model="khach_hang_update.ho_lot">
                                    </div>
                                    <div class="col-6 mt-2">
                                        <label class="form-label">Tên Khách Hàng</label>
                                        <input type="text" class="form-control" v-model="khach_hang_update.ten">
                                    </div>
                                    <div class="col-12">
                                        <label class="form-label">Địa Chỉ Email</label>
                                        <input type="email" class="form-control" v-model="khach_hang_update.email">
                                    </div>
                                    <div class="col-6 mt-2">
                                        <label class="form-label">Số Điện Thoại</label>
                                        <input type="tel" class="form-control"
                                            v-model="khach_hang_update.so_dien_thoai">
                                    </div>
                                    <div class="col-6 mt-2">
                                        <label class="form-label">Ngày Sinh</label>
                                        <input type="date" class="form-control" v-model="khach_hang_update.ngay_sinh">
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button v-on:click="CapNhatKhachHang()" type="button" class="btn btn-primary"
                                    data-bs-dismiss="modal">Xác
                                    Nhận Cập Nhật</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Xoá Khách Hàng</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="alert alert-danger" role="alert">
                                    Bạn thật sự có muốn xoá khách hàng này không?
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button v-on:click="XoaKhachHang()" type="button" class="btn btn-danger"
                                    data-bs-dismiss="modal">Xác
                                    Nhận
                                    Xoá</button>
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
            list_khach_hang: [],
            khach_hang_update: {},
            id_can_xoa: 0,
            tim_kiem : {},
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        timKiemNe() {
            baseRequest
                .post("khach-hang/tim-kiem", this.tim_kiem)
                .then((res) => {
                    if (res.data.status == false) {
                        toaster.error(res.data.message)
                    }
                    this.list_khach_hang = res.data.data;
                });
        },
        loadData() {
            baseRequest
                .get('khach-hang/data')
                .then((res) => {
                    if (res.data.status == false) {
                        toaster.error(res.data.message)
                    }
                    this.list_khach_hang = res.data.data;
                })
        },

        doiTrangThai(xxx) {
            baseRequest
                .put('khach-hang/doi-trang-thai', xxx)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success(res.data.message);
                        this.loadData();
                    } else {
                        toaster.error(res.data.message)
                    }
                })
        },

        CapNhatKhachHang() {
            baseRequest
                .put('khach-hang/update', this.khach_hang_update)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.loadData();
                    } else {
                        toaster.error(res.data.message)
                    }
                })
        },

        XoaKhachHang() {
            baseRequest
                .delete('khach-hang/delete/' + this.id_can_xoa)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.loadData();
                    } else {
                        toaster.error(res.data.message)
                    }
                })
        },
    },
}
</script>
<style></style>