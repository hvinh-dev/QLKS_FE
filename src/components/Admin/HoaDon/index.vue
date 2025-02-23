<template>
    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-5">
                            <label class="mb-2"><b>Từ Ngày</b></label>
                            <input type="date" class="form-control mb-2">
                        </div>
                        <div class="col-lg-5">
                            <label class="mb-2"><b>Đến Ngày</b></label>
                            <input type="date" class="form-control mb-2">
                        </div>
                        <div class="col-lg-2">
                            <label class="mb-2">&nbsp;</label>
                            <button class="mb-2 btn btn-primary w-100">Tìm Kiếm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-header mt-2">
                    <h6><b>Danh Sách Hoá Đơn</b></h6>
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
                                    <th class="text-center">Mã Hoá Đơn</th>
                                    <th class="text-center">Tên Khách Hàng</th>
                                    <th class="text-center">Ngày Đến</th>
                                    <th class="text-center">Ngày Đi</th>
                                    <th class="text-center">Tổng Tiền</th>
                                    <th class="text-center">Tình Trạng</th>
                                    <th class="text-center">Ngày Đặt Phòng</th>
                                    <th class="text-center">Chi Tiết</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(value, index) in list_hoa_don" :key="index">
                                    <th class="text-center align-middle">{{ index + 1 }}</th>
                                    <td class="text-center align-middle">{{ value.ma_hoa_don }}</td>
                                    <td class="align-middle">{{ value.ho_lot }} {{ value.ten }}</td>
                                    <td class="text-center align-middle">{{ formatDateA(value.ngay_den) }}</td>
                                    <td class="text-center align-middle">{{ formatDateA(value.ngay_di) }}</td>
                                    <td class="text-end align-middle">{{ formatVND(value.tong_tien) }}</td>
                                    <td class="text-center">
                                        <button v-if="value.is_thanh_toan == -1" class="btn btn-danger">Huỷ Đặt Phòng</button>
                                        <button v-on:click="Object.assign(chi_tiet, value)" data-bs-toggle="modal"
                                            data-bs-target="#thanhToanModal" v-else-if="value.is_thanh_toan == 0" class="btn btn-warning">Chưa Thanh
                                            Toán</button>
                                        <button v-else class="btn btn-success">Đã Thanh Toán</button>
                                    </td>
                                    <td class="text-center align-middle">{{ formatDate(value.created_at) }}</td>
                                    <td class="text-center">
                                        <button v-on:click="chiTietThue(value)" data-bs-toggle="modal"
                                            data-bs-target="#chiTietModal" class="btn btn-primary">Chi Tiết</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <!-- Chi Tiết Modal -->

                    </div>
                </div>
                <div class="modal fade" id="chiTietModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Danh Sách Phòng Đặt Từ Ngày
                                    <b class="text-danger">{{ formatDateA(chi_tiet.ngay_den) }}</b>
                                    Đến Ngày
                                    <b class="text-danger">{{ formatDateA(chi_tiet.ngay_di) }}</b>
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
                                                <th class="text-center">Ngày Thuê</th>
                                                <th class="text-center">Loại Phòng</th>
                                                <th class="text-center">Số Phòng</th>
                                                <th class="text-center">Số Tiền</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(value, index) in chi_tiet_thue" :key=index>
                                                <th class="text-center">{{ index + 1 }}</th>
                                                <td class="text-center">{{ formatDateA(value.ngay_thue) }}</td>
                                                <td>{{ value.ten_loai_phong }}</td>
                                                <td>{{ value.ten_phong }}</td>
                                                <td class="text-end">{{ formatVND(value.gia_thue) }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="thanhToanModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">
                                    Xác Nhận Thanh Toán
                                </h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="form-check">
                                    <input v-model="check_tt" class="form-check-input" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault1">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Khách hàng đã thanh toán
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input v-model="check_huy" class="form-check-input" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault2" checked>
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        Khách hàng đã huỷ đặt phòng
                                    </label>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button v-on:click="xacNhan()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Xác Nhận</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });import baseRequest from '../../../core/baseRequest'
import moment from 'moment'
export default {
    data() {
        return {
            list_hoa_don    : [],
            chi_tiet_thue   : [],
            chi_tiet        : {},
            check_tt        : null,
            check_huy       : null,
            tim_kiem        : {},
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        timKiemNe() {
            baseRequest
                .post("hoa-don/tim-kiem", this.tim_kiem)
                .then((res) => {
                    if (res.data.status == false) {
                        toaster.error(res.data.message)
                    }
                    this.list_hoa_don = res.data.data;
                });
        },
        xacNhan() {
            var payload = {
                'thanh_toan'    :   this.check_tt,
                'huy'           :   this.check_huy,
                'id_hoa_don'    :   this.chi_tiet.id
            };
            baseRequest
                .post("hoa-don/xac-nhan-don-hang", payload)
                .then((res) => {
                    if(res.data.status) {
                        toaster.success(res.data.message);
                        this.loadData();
                    } else {
                        toaster.error(res.data.message)
                    }
                });
        },
        formatVND(number) {
            return new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(number);
        },
        formatDateA(ngay) {
            return moment(ngay).format("DD/MM/YYYY")
        },
        formatDate(ngay) {
            return moment(ngay).format("DD/MM/YYYY HH:mm:ss")
        },
        loadData() {
            baseRequest
                .get("hoa-don/data")
                .then((res) => {
                    if (res.data.status == false) {
                        toaster.error(res.data.message)
                    }
                    this.list_hoa_don = res.data.data;
                })
        },
        chiTietThue(payload) {
            this.chi_tiet = payload;
            baseRequest
                .post("hoa-don/chi-tiet-thue", payload)
                .then((res) => {
                    if (res.data.status == false) {
                        toaster.error(res.data.message)
                    }
                    this.chi_tiet_thue = res.data.data;
                })
        }
    },
}
</script>
<style></style>