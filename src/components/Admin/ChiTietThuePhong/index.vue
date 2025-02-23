<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="mt-2">Danh Sách Chi Tiết Thuê Phòng</h5>
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
                                    <th class="text-center">Ngày</th>
                                    <th class="text-center">Thứ</th>
                                    <th class="text-center">Tên Phòng</th>
                                    <th class="text-center">Giá Phòng</th>
                                    <th class="text-center">Tình Trạng</th>
                                    <th class="text-center">Ghi Chú</th>
                                    <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(value, index) in ds_chi_tiet_thue_phong" :key="index">
                                    <tr>
                                        <th class="text-center align-middle">{{ index + 1 }}</th>
                                        <td class="align-middle text-center">{{ value.ngay_thue }}</td>
                                        <td class="align-middle text-center">{{ value.thu }}</td>
                                        <template v-for="(v, k) in ds_phong" :key="k">
                                            <template v-if="value.id_phong == v.id">
                                                <td class="align-middle text-center">{{ v.ten_phong }}</td>
                                            </template>

                                        </template>
                                        <td class="align-middle text-center">{{ value.gia_thue }} đ</td>
                                        <td class="align-middle text-center">
                                            <button v-if="value.tinh_trang == 0" class="btn btn-danger w-50">Phòng Đang Sửa</button>
                                            <button v-if="value.tinh_trang == 1" class="btn btn-primary w-50">Phòng Trống</button>
                                            <button v-if="value.tinh_trang == 2" class="btn btn-warning w-50">Phòng Đặt Cọc</button>
                                            <button v-if="value.tinh_trang == 3" class="btn btn-success w-50">Phòng Cho Thuê</button>
                                        </td>
                                        <td class="align-middle">{{ value.ghi_chu }}</td>
                                        <td class="text-center text-nowrap align-middle">
                                            <button v-on:click="Object.assign(update_chi_tiet_thue_phong, value)" data-bs-toggle="modal" data-bs-target="#updateModal"
                                                class="btn btn-info w-100">Cập Nhật</button>
                                        </td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>

                    <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Chi Tiết Thuê Phòng
                                    </h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <label>Giá phòng</label>
                                    <input v-model="update_chi_tiet_thue_phong.gia_thue" type="text"
                                        class="form-control mt-2 mb-2">
                                    <label>Ghi Chú</label>
                                    <textarea v-model="update_chi_tiet_thue_phong.ghi_chu" name="" id="" cols="30"
                                        rows="5" class="mt-2 mb-2 form-control"></textarea>
                                    <label for="">Tình Trạng</label>
                                    <select v-model="update_chi_tiet_thue_phong.tinh_trang" class="form-control mt-2">
                                        <option value="0">Phòng Đang Sửa</option>
                                        <option value="1">Phòng Trống</option>
                                        <option value="2">Phòng Đặt Cọc</option>
                                        <option value="3">Phòng Cho Thuê</option>
                                    </select>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button v-on:click="capNhatChiTietThuePhong()" type="button" class="btn btn-info"
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
            ds_chi_tiet_thue_phong: [],
            ds_phong: [],
            update_chi_tiet_thue_phong: {},
            tim_kiem : {},
        }
    },
    mounted() {
        this.layDuLieuThuePhong();
        this.layDuLieuPhong();
    },
    methods: {
        timKiemNe() {
            baseRequest
                .post("chi-tiet-thue-phong/tim-kiem", this.tim_kiem)
                .then((res) => { 
                    if (res.data.status == false) {
                        toaster.error(res.data.message)
                    }
                    this.ds_chi_tiet_thue_phong = res.data.data;
                });
        },
        layDuLieuThuePhong() {
            baseRequest
                .get('chi-tiet-thue-phong/data')
                .then((res) => {
                    if (res.data.status == false) {
                        toaster.error(res.data.message)
                    }
                    this.ds_chi_tiet_thue_phong = res.data.data;
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
        capNhatChiTietThuePhong() {
            baseRequest
                .put("chi-tiet-thue-phong/update", this.update_chi_tiet_thue_phong)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.layDuLieuThuePhong();
                    } else {
                        toaster.error(res.data.message)
                    }

                });
        },
    },
}
</script>
<style></style>