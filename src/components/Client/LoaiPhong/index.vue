<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col mt-2">
                                <label class="form-label">Ngày Đến</label>
                                <input v-bind:min="tt_dat_phong.min_ngay_den" v-on:change="doiNgayDen()"
                                    v-model="tt_dat_phong.ngay_den" type="date" class="form-control">
                            </div>
                            <div class="col mt-2">
                                <label class="form-label">Ngày Đi</label>
                                <input v-bind:min="tt_dat_phong.min_ngay_di" v-model="tt_dat_phong.ngay_di" type="date"
                                    class="form-control">
                            </div>
                            <div class="col mt-2">
                                <label class="form-label">Số Phòng</label>
                                <input v-model="tt_dat_phong.so_phong" type="number" class="form-control"
                                    placeholder="Nhập số lượng phòng">
                            </div>
                            <div class="col mt-2">
                                <label class="form-label">Số Người Lớn</label>
                                <input v-model="tt_dat_phong.nguoi_lon" type="number" class="form-control"
                                    placeholder="Nhập số người lớn">
                            </div>
                            <div class="col mt-2">
                                <label class="form-label">Trẻ Em</label>
                                <input v-model="tt_dat_phong.tre_em" type="number" class="form-control"
                                    placeholder="Nhập số trẻ em">
                            </div>
                            <div class="col mt-2">
                                <button v-on:click="layDanhSachPhong()" class="btn btn-warning w-100"
                                    style="margin-top: 28px;">Tìm Kiếm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 mt-2">
                <div class="card">
                    <div class="card-body">
                        <table class="table table-bordered">
                            <tbody>
                                <tr>
                                    <th class="text-center">Tổng Phòng Đặt</th>
                                    <th class="text-center">Số Người Lớn Tối Đa</th>
                                    <th class="text-center">Số Người Trẻ Em Tối Đa</th>
                                    <th class="text-center">Số Tiền Cần Thanh Toán</th>
                                    <th class="text-center">Action</th>
                                </tr>
                                <tr>
                                    <td class="align-middle text-center">
                                        <h5 class="text-danger" v-if="tt_dat_phong.so_phong > info.so_phong">
                                            {{ info.so_phong }} <i>Chưa đủ số phòng đặt</i>
                                        </h5>
                                        <h5 v-else>
                                            {{ info.so_phong }}
                                        </h5>
                                    </td>
                                    <td class="align-middle text-center">
                                        <h5 class="text-danger" v-if="tt_dat_phong.nguoi_lon > info.so_lon">
                                            Phòng đặt còn thiếu {{ tt_dat_phong.nguoi_lon - info.so_lon }} người lớn
                                        </h5>
                                        <h5 v-else>
                                            {{ info.so_lon }}
                                        </h5>
                                    </td>
                                    <td class="align-middle text-center">
                                        <h5 class="text-danger" v-if="tt_dat_phong.tre_em > info.so_tre">
                                            Phòng đặt còn thiếu {{ tt_dat_phong.tre_em - info.so_tre }} trẻ em
                                        </h5>
                                        <h5 v-else>
                                            {{ info.so_tre }}
                                        </h5>
                                    </td>
                                    <td class="align-middle text-end">
                                        <h5>
                                            {{ formatVND(info.so_tien) }}
                                        </h5>
                                    </td>
                                    <td class="text-center">
                                        <button class="btn btn-primary" v-on:click="datPhong()">Đặt Phòng</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <template v-for="(value, index) in ds_loai_phong" :key="index">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-lg-6 d-flex justify-content-start">
                                    <b class="mt-2">
                                        <h4>Loại {{ value.ten_loai_phong }}</h4>
                                    </b>
                                </div>
                                <div class="col-lg-6 d-flex justify-content-end">
                                    <h5>
                                        <div class="form-check mt-2">
                                            <input v-model="value.chon_phong" v-on:change="inLog()"
                                                class="form-check-input" type="checkbox">
                                            <label class="mt-1 form-check-label">Chọn Phòng</label>
                                        </div>
                                    </h5>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-lg-3">
                                    <b class="fs-5 pd-4">Hình Ảnh</b>
                                    <img v-bind:src="value.hinh_anh" class="img-fluid w-100 mt-3" alt="">
                                    <hr>
                                    <p><i class="fa-solid fa-expand fa-xl me-2"></i> Diện tích phòng: {{ value.dien_tich
                                        }} m<sup>2</sup>
                                    </p>
                                    <p><i class="fa-solid fa-bed fa-xl me-2"></i> {{ value.so_giuong }} giường</p>
                                    <p class="text-success" data-bs-toggle="collapse"
                                        :href="'#collapseExample' + value.id">
                                        <i class="fa-solid fa-circle-plus fa-xl me-2"></i> Các tiện ích khác
                                    </p>
                                    <div class="collapse" :id="'collapseExample' + value.id">
                                        <div>
                                            <span v-html="value.tien_ich"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-9">
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr class="text-center">
                                                    <th class="fs-5 mb-2">
                                                        Giá này đã gồm
                                                    </th>
                                                    <th class="fs-5 mb-2">
                                                        Sức chứa
                                                    </th>
                                                    <th class="fs-5 mb-2">
                                                        Giá phòng/đêm
                                                    </th>
                                                    <th class="fs-5 mb-2">
                                                        Số phòng
                                                    </th>
                                                    <th class="fs-5 mb-2">
                                                        Đặt phòng
                                                    </th>
                                                </tr>

                                            </thead>
                                            <tbody class="border border-warning border-4 ">
                                                <tr>
                                                    <th class="align-middle text-light fs-5 text-nowrap"
                                                        style="background-color: orange;">
                                                        Giá thấp nhất!
                                                    </th>
                                                    <td class="text-center align-middle">
                                                        <i class="fa-solid fa-circle-info text-secondary"></i>
                                                    </td>
                                                    <td class="align-middle text-nowrap text-center">
                                                        <div
                                                            class="badge bg-danger text-white fs-6 text-decoration-line-through">
                                                            3.666.667 đ</div>
                                                    </td>
                                                    <td rowspan="2">
                                                        <div class="input-group d-flex justify-content-center flex-row mb-3 mt-5 mb-5"
                                                            style="flex-wrap: nowrap;">
                                                            <button class="btn btn-outline-secondary" type="button"
                                                                v-on:click="tru(value)">-</button>
                                                            <input type="text" v-model="value.so_phong_dat"
                                                                class="form-control text-center" style="width: 50px;">
                                                            <button class="btn btn-outline-secondary" type="button"
                                                                v-on:click="cong(value)">+</button>
                                                        </div>

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <b>Lợi ích</b>
                                                        <p><i class="fa-solid fa-check me-2 text-success me-2"></i> Giá
                                                            cực
                                                            thấp! (không hoàn tiền)</p>
                                                        <p><i class="fa-solid fa-check me-2 text-success me-2"></i> Miễn
                                                            phí
                                                            2 suất ăn sáng</p>
                                                        <p><i class="fa-solid fa-check me-2 text-success me-2"></i> Nước
                                                            uống chào đón, Cà phê & trà</p>
                                                        <p><i class="fa-solid fa-check me-2 text-success me-2"></i> Nhận
                                                            phòng nhanh</p>
                                                        <p><i class="fa-solid fa-check me-2 text-success me-2"></i> Wifi
                                                            miễn phí</p>
                                                        <p><i class="fa-solid fa-check me-2 text-success me-2"></i> Nước
                                                            uống miễn phí</p>
                                                    </td>
                                                    <td class="text-center text-nowrap">
                                                        <p>
                                                            <template v-for="(v, k) in value.so_nguoi_lon" :key="k">
                                                                <i class="text-primary fa-solid fa-person fa-2xl"></i>
                                                            </template>
                                                            <template v-for="(v, k) in value.so_tre_em" :key="k">
                                                                <i class="text-info fa-solid fa-baby fa-xl"></i>
                                                            </template>
                                                        </p>
                                                        <!-- <i>Vượt quá giới hạn phòng</i> -->
                                                    </td>
                                                    <td class="text-end">
                                                        <p class="text-success text-center"><b class="fs-5">{{
                                                                value.gia_trung_binh }}</b>
                                                            đ
                                                        </p>
                                                        <i class="text-wrap">Giá mỗi đêm chưa bao gồm thuế và phí</i>
                                                    </td>
                                                    <td rowspan="2">
                                                        <div class="d-flex flex-column">
                                                            <button class="btn btn-primary w-100">Đặt ngay</button>
                                                            <!-- <button
                                                                class="btn btn-outline-primary w-100 mt-2 mb-5 text-wrap">Giỏ
                                                                hàng</button> -->
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>
<script>
import axios from 'axios';
import { createToaster } from "@meforma/vue-toaster";
import baseRequest from '../../../core/baseRequest';
const toaster = createToaster({ position: "top-right" });
export default {
    data() {
        return {
            tt_dat_phong: {},
            ds_loai_phong: [],
            info: { so_phong: 0, so_tre: 0, so_lon: 0, so_tien: 0 },
            is_login: 0,
        }
    },
    mounted() {
        this.tt_dat_phong.ngay_den = this.$route.params.ngay_den;
        this.tt_dat_phong.ngay_di = this.$route.params.ngay_di;
        this.tt_dat_phong.so_phong = this.$route.params.so_phong;
        this.tt_dat_phong.nguoi_lon = this.$route.params.nguoi_lon;
        this.tt_dat_phong.tre_em = this.$route.params.tre_em;

        this.layDanhSachPhong();
        this.getToday();
        this.kiemTraDangNhap();
    },
    methods: {
        datPhong() {
            if (this.is_login) {
                if (this.info.so_phong > 0) {
                    var payload = {
                        'tt_dat_phong': this.tt_dat_phong,
                        'tt_loai_phong': this.ds_loai_phong
                    };
                    axios
                        .post("http://127.0.0.1:8000/api/khach-hang-dat-phong", payload, {
                            headers: {
                                Authorization: 'Bearer ' + localStorage.getItem("token_khachhang")
                            }
                        })
                        .then((res) => {
                            if (res.data.status) {
                                toaster.success(res.data.message);
                            }
                        });
                } else {
                    toaster.warning("Bạn chưa chọn bất kỳ phòng nào");
                }
            } else {
                toaster.error("Bạn cần đăng nhập trước khi đặt phòng");
                this.$router.push('/khach-hang/dang-nhap');
            }
        },
        kiemTraDangNhap() {
            axios
                .get("http://127.0.0.1:8000/api/kiem-tra-token-khach-hang", {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_khachhang")
                    }
                })
                .then((res) => {
                    this.is_login = res.data.status;
                });
        },
        formatVND(number) {
            return new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(number);
        },
        getToday() {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            today = yyyy + '-' + mm + '-' + dd;
            this.tt_dat_phong.min_ngay_di = today;
            this.tt_dat_phong.min_ngay_den = today;
        },
        doiNgayDen() {
            this.tt_dat_phong.min_ngay_di = this.tt_dat_phong.ngay_den;
            if (this.tt_dat_phong.ngay_di < this.tt_dat_phong.ngay_den) {
                this.tt_dat_phong.ngay_di = this.tt_dat_phong.ngay_den;
            }
        },
        inLog() {
            this.info.so_phong = 0;
            this.info.so_lon = 0;
            this.info.so_tre = 0;
            this.info.so_tien = 0;
            let date2 = new Date(this.tt_dat_phong.ngay_di);
            let date1 = new Date(this.tt_dat_phong.ngay_den);
            let Difference_In_Time = date2.getTime() - date1.getTime();
            let Difference_In_Days = Math.max(1, Math.round(Difference_In_Time / (1000 * 3600 * 24)));
            this.ds_loai_phong.forEach((value, index) => {
                if (value.chon_phong && value.chon_phong == true) {
                    this.info.so_phong = this.info.so_phong + value.so_phong_dat;
                    this.info.so_tien = this.info.so_tien + value.so_phong_dat * parseInt(value.gia_trung_binh_ko_format) * Difference_In_Days;
                    this.info.so_lon = this.info.so_lon + value.so_phong_dat * value.so_nguoi_lon;
                    this.info.so_tre = this.info.so_tre + value.so_phong_dat * value.so_tre_em;
                }
            })
        },
        tru(value) {
            value.so_phong_dat = Math.max(value.so_phong_dat - 1, 0);
            this.inLog();
        },
        cong(value) {
            value.so_phong_dat = Math.min(value.so_phong_dat + 1, value.so_phong_trong);
            this.inLog()
        },
        layDanhSachPhong() {
            baseRequest
                .post('danh-sach-phong-dat', this.tt_dat_phong)
                .then((res) => {
                    this.ds_loai_phong = res.data.data;
                    this.ds_loai_phong.forEach((v, k) => {
                        v.so_phong_dat = 0;
                    });
                })
        }
    },
}
</script>
<style></style>
