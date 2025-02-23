<template>
    <div class="container">
        <div class="row">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <label class="form-label">Ngày Đến</label>
                            <input v-model="tt_dat.ngay_den" type="date" class="form-control">
                        </div>
                        <div class="col">
                            <label class="form-label">Ngày Đi</label>
                            <input v-model="tt_dat.ngay_di" type="date" class="form-control">
                        </div>
                        <div class="col">
                            <label class="form-label">Số Phòng</label>
                            <input v-model="tt_dat.so_phong" type="number" class="form-control" placeholder="Nhập số lượng phòng">
                        </div>
                        <div class="col">
                            <label class="form-label">Số Người Lớn</label>
                            <input v-model="tt_dat.nguoi_lon" type="number" class="form-control" placeholder="Nhập số người lớn">
                        </div>
                        <div class="col">
                            <label class="form-label">Trẻ Em</label>
                            <input v-model="tt_dat.tre_em" type="number" class="form-control" placeholder="Nhập số trẻ em">
                        </div>
                        <div class="col">
                            <button v-on:click="chuyenTrang()" class="btn btn-warning w-100" style="margin-top: 28px;">Tìm Kiếm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <template v-for="(v,k) in ds_loai_phong" :key="k">
                <div class="col-lg-4">
                    <div class="card border-primary border-bottom border-3 border-0"><img
                           v-bind:src="v.hinh_anh" class="card-img-top" alt="..." style="height: 240px;">
                        <div class="card-body">
                            <h5 class="card-title text-dark"><b>{{ v.ten_loai_phong}}</b></h5>
                            <div class="row mt-4">
                                <div class="col-lg-12 d-flex flex-row">
                                    <p class="me-3"><i class="fa-solid fa-expand me-1"></i>{{ v.dien_tich}} m<sup>2</sup></p>
                                    <p class="me-3"><i class="fa-solid fa-bed me-1"></i> {{v.so_giuong}} Giường</p>
                                    <p class="me-3"><i class="fa-solid fa-person me-1"></i>{{ v.so_nguoi_lon}} Người lớn & {{ v.so_tre_em}} trẻ em </p>

                                </div>
                            </div>
                            <hr>
                            <div class="d-flex align-items-center gap-2 d-flex justify-content-between"><a
                                    href="javascript:;" class="btn btn-inverse-danger rounded-pill"><i
                                        class="bx bx-star"></i>Yêu Thích</a><a href="javascript:;"
                                    class="btn btn-primary rounded-pill">Chọn Phòng</a></div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
    data() {
        return {
            ds_loai_phong: [],
            tt_dat   : {},
        }
    },
    mounted() {
        this.LaydulieuLoaiPhong();
    },
    methods: {
        LaydulieuLoaiPhong() {
            axios
                .get('http://127.0.0.1:8000/api/client/loai-phong/data')
                .then((res) => {
                    this.ds_loai_phong = res.data.loai_phong;
                })
        },
        chuyenTrang() {
            this.$router.push({
                name    :   "datPhong",
                params  :   {
                    'ngay_den'  :   this.tt_dat.ngay_den,
                    'ngay_di'   :   this.tt_dat.ngay_di,
                    'so_phong'  :   this.tt_dat.so_phong,
                    'nguoi_lon' :   this.tt_dat.nguoi_lon,
                    'tre_em'    :   this.tt_dat.tre_em,
                },
            });
        }
    },
}
</script>
<style>

</style>
