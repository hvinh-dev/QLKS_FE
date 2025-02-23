<template>
    <div class="row">
        <div class="col-lg-4">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-lg-6">
                            Danh Sách Quyền
                        </div>
                        <div class="col-lg-6 text-end">
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#themMoiModal">Thêm
                                Quyền</button>
                        </div>
                        <div class="col-lg-12">
                            <div class="input-group mt-3 w-100">
                                <input v-on:keyup.enter="timKiemNe()" v-model="tim_kiem.noi_dung_tim" type="text"
                                    class="form-control search-control border border-3 border-secondary"
                                    placeholder="Search...">
                                <span class="position-absolute top-50 search-show translate-middle-y"
                                    style="left: 15px;"><i class="bx bx-search"></i></span>
                                <button v-on:click="timKiemNe()" class="btn btn-outline-secondary" type="button"
                                    id="button-addon2">Tìm Kiếm</button>
                            </div>
                        </div>
                        <div class="modal fade" id="themMoiModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm Mới Quyền</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="col-12 mb-2">
                                            <label class="form-label">Tên Quyền</label>
                                            <input v-model="create_quyen.ten_quyen" type="text" class="form-control">
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                        <button v-on:click="themMoiPhanQuyen()" type="button" class="btn btn-primary"
                                            data-bs-dismiss="modal">Tạo
                                            Mới</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead class="text-center align-middle">
                                <tr>
                                    <th>#</th>
                                    <th>Tên Quyền</th>
                                    <th>Cấp Quyền</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(v, k) in listPhanQuyen" :key="k" class="align-middle">
                                    <th class="text-center">{{ k + 1 }}</th>
                                    <td>{{ v.ten_quyen }}</td>
                                    <td class="text-center">
                                        <button v-on:click="quyen_dang_chon = v" class="btn btn-info text-white">Phân
                                            Quyền</button>
                                    </td>
                                    <td class="text-center">
                                        <i v-on:click="Object.assign(update_quyen, v)"
                                            class="fa-solid fa-square-pen fa-3x text-primary me-2"
                                            data-bs-toggle="modal" data-bs-target="#updateModal"></i>
                                        <i v-on:click="Object.assign(delete_quyen, v)"
                                            class="fa-solid fa-trash fa-3x text-danger" data-bs-toggle="modal"
                                            data-bs-target="#xoaModal"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Quyền</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="col-12 mb-2">
                                        <label class="form-label">Tên Quyền</label>
                                        <input v-model="update_quyen.ten_quyen" type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button v-on:click="capNhatPhanQuyen()" type="button" class="btn btn-primary"
                                        data-bs-dismiss="modal">Xác Nhận</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Quyền</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div
                                        class="alert alert-warning border-0 bg-warning alert-dismissible fade show py-2">
                                        <div class="d-flex align-items-center">
                                            <div class="font-35 text-dark"><i class="bx bx-info-circle"></i>
                                            </div>
                                            <div class="ms-3">
                                                <h6 class="mb-0 text-dark">Warning</h6>
                                                <div class="text-dark">
                                                    <p>Bạn có muốn xóa quyền <b>{{ delete_quyen.ten_quyen }}</b> này
                                                        không?
                                                    </p>
                                                    <p>
                                                        <b>Lưu ý:</b> Điều này không thể hoàn tác!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button v-on:click="xoaPhanQuyen()" type="button" class="btn btn-danger"
                                        data-bs-dismiss="modal">Xóa</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-4">
            <div class="card">
                <div class="card-header">
                    Danh Sách Chức Năng
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr class="text-center text-nowrap align-middle">
                                        <th>#</th>
                                        <th>Tên Chức Năng</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(v, k) in listChucNang" :key="k" class="align-middle">
                                        <th class="text-center">{{ k + 1 }}</th>
                                        <td>{{ v.ten_chuc_nang }}</td>
                                        <td class="text-center">
                                            <button v-on:click="capQuyen(v)" class="btn btn-primary">Cấp Quyền</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card">
                <div class="card-header">
                    Đang Phân Quyền Cho <b class="text-danger"> {{ quyen_dang_chon.ten_quyen }} </b>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr class="text-center text-nowrap align-middle">
                                        <th>STT</th>
                                        <th>Tên Chức Năng</th>
                                        <th>Tên Quyền</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-for="(v, k) in locMang()" :key="k">
                                            <tr class="align-middle">
                                                <th>{{ k+1 }}</th>
                                                <td>{{ v.ten_chuc_nang }}</td>
                                                <td>{{ v.ten_quyen }}</td>
                                                <td class="text-center">
                                                    <button v-on:click="xoaQuyen(v)" class="btn btn-danger">Xóa</button>
                                                </td>
                                            </tr>
                                    </template>
                                </tbody>
                            </table>
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
            listChucNang: [],
            listPhanQuyen: [],
            create_quyen: {},
            delete_quyen: {},
            update_quyen: {},
            tim_kiem: {},
            quyen_dang_chon: {},
            list_chi_tiet: [],
        }
    },
    mounted() {
        this.layDuLieuPhanQuyen();
        this.layDuLieuChucNang();
        this.loadData();
    },
    methods: {
        xoaQuyen(payload) {
            baseRequest
                .post("chi-tiet-phan-quyen/xoa-quyen", payload)
                .then((res) => {
                    if(res.data.status) {
                        toaster.success(res.data.message);
                        this.loadData();
                    } else {
                        toaster.error(res.data.message)
                    }
                    
                });
        },
        locMang() {
            return this.list_chi_tiet.filter(value => value.id_quyen == this.quyen_dang_chon.id);
        },
        loadData() {
            baseRequest
                .post("chi-tiet-phan-quyen/danh-sach", {})
                .then((res) => {
                    if (res.data.status == false) {
                        toaster.error(res.data.message)
                    }
                    this.list_chi_tiet = res.data.data;
                });
        },
        capQuyen(chuc_nang) {
            var payload = {
                'id_quyen': this.quyen_dang_chon.id,
                'id_chuc_nang': chuc_nang.id
            };

            baseRequest
                .post("chi-tiet-phan-quyen/cap-quyen", payload)
                .then((res) => {
                    if(res.data.status) {
                        toaster.success(res.data.message);
                        this.loadData();
                    } else {
                        toaster.error(res.data.message)
                    }
                   
                });
        },
        timKiemNe() {
            baseRequest
                .post("phan-quyen/tim-kiem", this.tim_kiem)
                .then((res) => {
                    if (res.data.status == false) {
                        toaster.error(res.data.message)
                    }
                    this.listPhanQuyen = res.data.data;
                });
        },
        layDuLieuChucNang() {
            baseRequest
                .get('chuc-nang/data')
                .then((res) => {
                    if (res.data.status == false) {
                        toaster.error(res.data.message)
                    }
                    this.listChucNang = res.data.data;
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
        themMoiPhanQuyen() {
            baseRequest
                .post('phan-quyen/create', this.create_quyen)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.layDuLieuPhanQuyen();
                        this.create_quyen = {};
                    } else {
                        toaster.error(res.data.message)
                    }
                });
        },
        xoaPhanQuyen() {
            baseRequest
                .delete('phan-quyen/delete/' + this.delete_quyen.id)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.layDuLieuPhanQuyen();
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                })
        },
        capNhatPhanQuyen() {
            baseRequest
                .put('phan-quyen/update', this.update_quyen)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.layDuLieuPhanQuyen();
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                });
        },
    },
}
</script>
<style></style>