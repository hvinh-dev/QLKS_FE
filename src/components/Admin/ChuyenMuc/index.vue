<template>
    <div class="row">
        <div class="col-lg-4 col-md-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="mt-2">Thêm Mới Chuyên Mục</h5>
                </div>
                <div class="card-body">
                    <div class="mb-2">
                        <label>Tên Chuyên Mục</label>
                        <input v-on:keyup="taoSlugCM()" v-model="chuyen_muc_create.ten_chuyen_muc" type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Slug Chuyên Mục</label>
                        <input v-model="chuyen_muc_create.slug_chuyen_muc" type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Tình Trạng</label>
                        <select v-model="chuyen_muc_create.tinh_trang" class="form-control mt-2">
                            <option value="1">Hoạt Động</option>
                            <option value="0">Tạm Dừng</option>
                        </select>
                    </div>
                </div>
                <div class="card-footer text-end">
                    <button v-on:click="themMoiChuyenMuc()" class="btn btn-primary">Thêm Mới</button>
                </div>
            </div>
        </div>
        <div class="col-lg-8 col-md-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="mt-2">Danh Sách Chuyên Mục</h5>
                    <div class="input-group mt-3 w-100">
                        <input v-on:keyup.enter="timKiemNe()" v-model="tim_kiem.noi_dung_tim" type="text"
                            class="form-control search-control border border-3 border-secondary"
                            placeholder="Search...">
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
                                <tr>
                                    <th class="text-center">#</th>
                                    <th class="text-center">Tên Chuyên Mục</th>
                                    <th class="text-center">Slug Chuyên Mục</th>
                                    <th class="text-center">Tình Trạng</th>
                                    <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(value, index) in ds_chuyen_muc" :key="index">
                                    <th class="text-center align-middle">{{ index + 1 }}</th>
                                    <td class="align-middle">{{ value.ten_chuyen_muc }}</td>
                                    <td class="align-middle">{{ value.slug_chuyen_muc }}</td>
                                    <td class="align-middle text-center">
                                        <button v-on:click="doiTrangThai(value)" v-if="value.tinh_trang == 0"
                                            class="btn btn-warning">Tạm Dừng</button>
                                        <button v-on:click="doiTrangThai(value)" v-else class="btn btn-primary">Hoạt
                                            Động</button>
                                    </td>
                                    <td class="text-center text-nowrap align-middle">
                                        <button v-on:click="Object.assign(chuyen_muc_update, value)"
                                            data-bs-toggle="modal" data-bs-target="#updateModal"
                                            class="btn btn-info me-1">Cập Nhật</button>
                                        <button data-bs-toggle="modal" data-bs-target="#deleteModal"
                                            v-on:click="id_can_xoa = value.id" class="btn btn-danger">Xoá Bỏ</button>
                                    </td>
                                </tr>
                                <div class="modal fade" id="deleteModal" tabindex="-1"
                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Xoá Chuyên Mục</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="alert alert-danger" role="alert">
                                                    Bạn thật sự có muốn xoá Chuyên Mục này không?
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button v-on:click="xoaChuyenMuc()" type="button" class="btn btn-danger"
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
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Chuyên Mục
                                                </h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">

                                                <div class="mb-2">
                                                    <label>Tên Chuyên Mục</label>
                                                    <input v-on:keyup="taoSlugCM()"  v-model="chuyen_muc_update.ten_chuyen_muc" type="text"
                                                        class="form-control mt-2">
                                                </div>
                                                <div class="mb-2">
                                                    <label>Slug Chuyên Mục</label>
                                                    <input v-model="chuyen_muc_update.slug_chuyen_muc" type="text"
                                                        class="form-control mt-2">
                                                </div>
                                                <div class="mb-2">
                                                    <label>Tình Trạng</label>
                                                    <select v-model="chuyen_muc_update.tinh_trang"
                                                        class="form-control mt-2">
                                                        <option value="1">Hoạt Động</option>
                                                        <option value="0">Tạm Dừng</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button v-on:click="capNhatChuyenMuc()" type="button"
                                                    class="btn btn-primary" data-bs-dismiss="modal">Xác Nhận Cập
                                                    Nhật</button>
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
            ds_chuyen_muc: [],
            chuyen_muc_create: {},
            chuyen_muc_update: {},
            id_can_xoa: '',
            tim_kiem: {},
        }
    },
    mounted() {
        this.layDuLieu();
    },
    methods: {
        timKiemNe() {
            baseRequest
                .post("chuyen-muc/tim-kiem", this.tim_kiem)
                .then((res) => {
                    if (res.data.status == false) {
                        toaster.error(res.data.message)
                    }
                    this.ds_chuyen_muc = res.data.data;
                });
        },
        layDuLieu() {
            baseRequest
                .get('chuyen-muc/data')
                .then((res) => {
                    if (res.data.status == false) {
                        toaster.error(res.data.message)
                    }
                    this.ds_chuyen_muc = res.data.chuyen_muc;
                })
        },
        themMoiChuyenMuc() {
            baseRequest
                .post("chuyen-muc/create", this.chuyen_muc_create)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.layDuLieu();
                    } else {
                        toaster.error(res.data.message)
                    }
                });
        },
        xoaChuyenMuc() {
            baseRequest
                .delete("chuyen-muc/delete/" + this.id_can_xoa)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.layDuLieu();
                    } else {
                        toaster.error(res.data.message)
                    }
                });
        },
        capNhatChuyenMuc() {
            baseRequest
                .put("chuyen-muc/update", this.chuyen_muc_update)
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
                .put('chuyen-muc/doi-trang-thai', xxx)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.layDuLieu();
                    } else {
                        toaster.error(res.data.message)
                    }
                })
        },

        taoSlugCM() {
            this.chuyen_muc_create.slug_chuyen_muc = this.toSluggg(this.chuyen_muc_create.ten_chuyen_muc)
            this.chuyen_muc_update.slug_chuyen_muc = this.toSluggg(this.chuyen_muc_update.ten_chuyen_muc)
        },
        toSluggg(title) {
            var slug = title.toLowerCase();
            //Đổi ký tự có dấu thành không dấu
            slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
            slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
            slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
            slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
            slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
            slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
            slug = slug.replace(/đ/gi, 'd');
            //Xóa các ký tự đặt biệt
            slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
            //Đổi khoảng trắng thành ký tự gạch ngang
            slug = slug.replace(/ /gi, "-");
            //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
            //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
            slug = slug.replace(/\-\-\-\-\-/gi, '-');
            slug = slug.replace(/\-\-\-\-/gi, '-');
            slug = slug.replace(/\-\-\-/gi, '-');
            slug = slug.replace(/\-\-/gi, '-');
            //Xóa các ký tự gạch ngang ở đầu và cuối
            slug = '@' + slug + '@';
            slug = slug.replace(/\@\-|\-\@|\@/gi, '');
            return slug;
        },

    },
}
</script>
<style></style>