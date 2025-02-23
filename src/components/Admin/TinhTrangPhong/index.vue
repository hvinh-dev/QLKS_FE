<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-5">
                            <label class="form-lable mb-2">Ngày Bắt Đầu</label>
                            <input type="date" class="form-control">
                        </div>
                        <div class="col-lg-5">
                            <label class="form-lable mb-2">Ngày Kết Thúc</label>
                            <input type="date" class="form-control">
                        </div>
                        <div class="col-lg-2 d-flex align-items-end">
                            <button class="btn btn-outline-primary w-100">Tìm Kiếm</button>
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
                    <h5 class="mt-2">Danh Sách Thống Kê</h5>
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
                                    <th class="text-center">Số Phòng Trống</th>
                                    <th class="text-center">Số Phòng Cho Thuê</th>
                                    <th class="text-center">Số Phòng Đang Sửa</th>
                                    <th class="text-center">Số Phòng Đặt Cọc</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(v, k) in ds_thong_ke" :key="k">
                                    <th class="text-center align-middle">{{ k + 1 }}</th>
                                    <td class="align-middle text-center">{{ v.ngay_thue }}</td>
                                    <td class="align-middle text-center" data-bs-toggle="modal"
                                        data-bs-target="#chiTietModal">
                                        {{ v.phong_trong }}
                                    </td>
                                    <td class="align-middle text-center" data-bs-toggle="modal"
                                        data-bs-target="#chiTietModal">
                                        {{ v.phong_co_nguoi }}
                                    </td>
                                    <td class="align-middle text-center" data-bs-toggle="modal"
                                        data-bs-target="#chiTietModal">
                                        {{ v.phong_sua }}
                                    </td>
                                    <td class="align-middle text-center" data-bs-toggle="modal"
                                        data-bs-target="#chiTietModal">
                                        {{ v.phong_coc }}
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div class="modal fade" id="chiTietModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-xl">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Chi Tiết
                                        Thuê Phòng
                                    </h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
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
                                                </tr>
                                            </thead>
                                            <tbody>

                                                <tr>
                                                    <th class="text-center align-middle">1</th>
                                                    <td class="align-middle text-center">2024-04-24</td>
                                                    <td class="align-middle text-center"> Thứ 4</td>

                                                    <td class="align-middle text-center">Phòng 203</td>



                                                    <td class="align-middle text-center">500000 đ</td>
                                                    <td class="align-middle text-center">
                                                        <button class="btn btn-success">Đang Thuê</button>
                                                    </td>
                                                    <td class="align-middle"></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
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
            ds_thong_ke: [],
            tim_kiem : {},
        }
    },
    mounted() {
        this.layDuLieuThongKe();
    },
    methods: {
        timKiemNe() {
            baseRequest
                .post("thong-ke-thue-phong/tim-kiem", this.tim_kiem)
                .then((res) => {
                    if (res.data.status == false) {
                        toaster.error(res.data.message)
                    }
                    this.ds_thong_ke = res.data.data;
                });
        },
        layDuLieuThongKe() {
            baseRequest
                .get('data')
                .then((res) => {
                    if (res.data.status == false) {
                        toaster.error(res.data.message)
                    }
                    this.ds_thong_ke = res.data.data;
                })
        },
    }
}
</script>
<style></style>