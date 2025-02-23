<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <div id="carouselExampleCaptions" class="carousel slide">
                            <div class="carousel-indicators">
                                <template v-for="(v, k) in ds_slide" :key="k">
                                    <template v-if="k == 0">
                                        <button type="button" data-bs-target="#carouselExampleCaptions"
                                            :data-bs-slide-to="k" class="active" aria-current="true"></button>
                                    </template>
                                    <template v-else>
                                        <button type="button" data-bs-target="#carouselExampleCaptions"
                                            :data-bs-slide-to="k"></button>
                                    </template>
                                </template>
                            </div>
                            <div class="carousel-inner">
                                <template v-for="(v, k) in ds_slide" :key="k">
                                    <template v-if="k == 0">
                                        <div class="carousel-item active">
                                            <img v-bind:src="v.link_hinh_anh" class="d-block w-100"
                                                style="height: 700px;" alt="...">
                                        </div>
                                    </template>
                                    <template v-else>
                                        <div class="carousel-item">
                                            <img v-bind:src="v.link_hinh_anh" class="d-block w-100"
                                                style="height: 700px;" alt="...">
                                        </div>
                                    </template>
                                </template>
                            </div>
                            <button class="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="card">
                <div class="card-body">
                    <div class="row g-0">
                        <div class="col-md-6">
                            <img src="../../../assets/img_homepage/poster.jpeg" alt="..." class="card-img">
                        </div>
                        <div class="col-md-6">
                            <div class="card-body">
                                <h5 class="card-title mt-1 text-danger">DZFullStack Resort</h5>
                                <h2 class="card-title">Relax in our Hotel Resort</h2>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <p style="height: 170px;">DZFullStack Resort không chỉ là một khách
                                            sạn bình thường, mà là
                                            một thiên đường nghỉ dưỡng, mang đến trải nghiệm nghỉ dưỡng đỉnh
                                            cao cho khách hàng. Khách sạn này được thiết kế với phong cách
                                            hiện đại, sang trọng, mỗi phòng nghỉ đều có view đẹp mắt hướng
                                            ra biển cả hoặc khu vườn xanh mát. .</p>
                                        <p style="height: 170px;">DZFullStack Resort cung cấp đầy đủ tiện
                                            ích cao cấp như spa,
                                            phòng tập gym, nhà hàng ẩm thực quốc tế, bar tại hồ bơi, và
                                            nhiều hoạt động giải trí khác, đáp ứng mọi nhu cầu của du khách
                                            từ nghỉ dưỡng đến làm việc hay tổ chức sự kiện.</p>
                                    </div>
                                    <div class="col-lg-6">
                                        <p style="height: 170px;">Dịch vụ khách hàng tại DZFullStack Resort
                                            luôn được đặt lên hàng
                                            đầu. Đội ngũ nhân viên chuyên nghiệp, thân thiện sẵn sàng hỗ trợ
                                            khách hàng 24/7, đảm bảo mỗi kỳ nghỉ tại đây là một trải nghiệm
                                            thú vị và không thể quên. </p>
                                        <p style="height: 170px;">Không chỉ là nơi nghỉ dưỡng lý tưởng,
                                            DZFullStack Resort còn là
                                            điểm đến hoàn hảo cho những ai muốn tổ chức các sự kiện quan
                                            trọng như hội nghị, tiệc cưới, với các phòng chức năng đa dạng,
                                            rộng rãi và được trang bị đầy đủ tiện nghi. </p>
                                    </div>
                                </div>
                                <!-- <div class="row">
                                        <a class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret"
                                            href="#" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <img src="../../../assets/img_homepage/assets/images/avatars/avatar-4.png" class="user-img"
                                                alt="user avatar">
                                            <div class="user-info ps-3">
                                                <p class="user-name mb-0">DZFullStack Resort</p>
                                                <p class="designattion mb-0">Nguyễn Quốc Long</p>
                                            </div>
                                        </a>
                                    </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <label class="form-label">Ngày Đến</label>
                            <input v-bind:min="tt_dat.min_ngay_den" v-on:change="doiNgayDen()" v-model="tt_dat.ngay_den"
                                type="date" class="form-control">
                        </div>
                        <div class="col">
                            <label class="form-label">Ngày Đi</label>
                            <input v-bind:min="tt_dat.min_ngay_di" v-model="tt_dat.ngay_di" type="date"
                                class="form-control">
                        </div>
                        <div class="col">
                            <label class="form-label">Số Phòng</label>
                            <input v-model="tt_dat.so_phong" type="number" class="form-control"
                                placeholder="Nhập số lượng phòng">
                        </div>
                        <div class="col">
                            <label class="form-label">Số Người Lớn</label>
                            <input v-model="tt_dat.nguoi_lon" type="number" class="form-control"
                                placeholder="Nhập số người lớn">
                        </div>
                        <div class="col">
                            <label class="form-label">Trẻ Em</label>
                            <input v-model="tt_dat.tre_em" type="number" class="form-control"
                                placeholder="Nhập số trẻ em">
                        </div>
                        <div class="col">
                            <button v-on:click="chuyenTrang()" class="btn btn-warning w-100"
                                style="margin-top: 28px;">Tìm
                                Kiếm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="card radius-10 bg-gradient-cosmic">
                                <div class="card-body">
                                    <div class="d-flex align-items-center">
                                        <div class="me-auto">
                                            <p class="mb-0 text-white">Phòng Suite</p>
                                            <h4 class="my-1 text-white">4805 khách</h4>
                                            <p class="mb-0 font-13 text-white">Giảm 10% khi đặt từ 2 phòng
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="card radius-10 bg-gradient-ibiza">
                                <div class="card-body">
                                    <div class="d-flex align-items-center">
                                        <div class="me-auto">
                                            <p class="mb-0 text-white">Phòng Standard</p>
                                            <h4 class="my-1 text-white">3550 khách</h4>
                                            <p class="mb-0 font-13 text-white">Giảm 15% khi đặt phòng đôi
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="card radius-10 bg-gradient-ohhappiness">
                                <div class="card-body">
                                    <div class="d-flex align-items-center">
                                        <div class="me-auto">
                                            <p class="mb-0 text-white">Phòng Superior</p>
                                            <h4 class="my-1 text-white">3220 khách</h4>
                                            <p class="mb-0 font-13 text-white">Giảm 12 % khi đi nhóm bạn từ
                                                5 người</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="card radius-10 bg-gradient-kyoto">
                                <div class="card-body">
                                    <div class="d-flex align-items-center">
                                        <div class="me-auto">
                                            <p class="mb-0 text-white">Phòng Deluxe</p>
                                            <h4 class="my-1 text-white">3217 khách</h4>
                                            <p class="mb-0 font-13 text-white">Giảm 3$ cho khách đặt qua đêm
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="card">
                <div class="card-body">
                    <div class="row align-items-center mb-3">
                        <div class="col-lg-3 col-xl-2">

                        </div>
                        <div class="col-lg-9 col-xl-10">
                            <form class="float-lg-end">
                                <div class="row row-cols-lg-2 row-cols-xl-auto g-2">
                                    <div class="col">
                                        <div class="position-relative">
                                            <input type="text" class="form-control ps-5"
                                                placeholder="Tìm Kiếm Loại Phòng">
                                            <span class="position-absolute top-50 product-show translate-middle-y"><i
                                                    class="bx bx-search"></i></span>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="btn-group" role="group"
                                            aria-label="Button group with nested dropdown">
                                            <button type="button" class="btn btn-white">Loại Phòng</button>
                                            <div class="btn-group" role="group">
                                                <button id="btnGroupDrop1" type="button"
                                                    class="btn btn-white dropdown-toggle dropdown-toggle-nocaret px-1"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bx bx-chevron-down"></i>
                                                </button>
                                                <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                                    <li><a class="dropdown-item" href="#">Phòng Standard</a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">Phòng Superior</a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">Phòng Deluxe</a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">Phòng Suite</a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">Phòng View
                                                            Biển</a></li>
                                                    <li><a class="dropdown-item" href="#">Phòng VIP</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <carousel :items-to-show="3">
                        <slide v-for="(v, k) in ds_loai_phong" :key="k">
                            <div class="col-lg-10">
                                <div class="card border-primary border-bottom border-3 border-0">
                                    <img v-bind:src="v.hinh_anh" style=" width: 100%; height: 230px; object-fit: contain; vertical-align: middle;" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title text-dark"><b>{{ v.ten_loai_phong }}</b></h5>
                                        <div class="row mt-4">
                                            <div class="col-lg-12 d-flex flex-row ">
                                                <p class="me-3"><i class="fa-solid fa-expand"></i>
                                                    {{ v.dien_tich }}m<sup>2</sup>
                                                </p>
                                                <p><i class="fa-solid fa-bed"></i> {{ v.so_giuong }} Giường</p>
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="d-flex align-items-center gap-2 d-flex justify-content-between">
                                            <a href="javascript:;" class="btn btn-inverse-danger rounded-pill"><i
                                                    class="bx bx-star"></i>Yêu Thích</a>
                                            <a href="javascript:;" class="btn btn-primary rounded-pill">Chọn
                                                Phòng</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </slide>

                        <template #addons>
                            <navigation />
                            <pagination />
                        </template>
                    </carousel>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <img src="../../../assets/img_homepage/banner.png" class="img-fluid">
            </div>
        </div>
    </div>


    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h2><b>Review</b></h2>
                <hr>
            </div>
        </div>
        <div class="row">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div id="carouselExampleCaptions_2" class="carousel slide">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions_2" data-bs-slide-to="0"
                                    class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions_2" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions_2" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="row">
                                        <template v-for="(v, k) in ds_review" :key="k">
                                            <template v-if="k < 3">
                                                <div class="col-lg-4 ">
                                                    <div class="card">
                                                        <div class="card-body ">
                                                            <div class="row">
                                                                <div class="col-md-12 text-center mb-2">
                                                                    <img v-bind:src="v.avatar" alt="" class="user-img">
                                                                </div>
                                                                <hr>
                                                                <h5 class="mt-0">{{ v.ho_va_ten }}</h5>
                                                                <p class="mb-2">{{ v.noi_dung }}</p>
                                                                <hr>
                                                                <div class="d-flex align-items-center mt-2 fs-6">
                                                                    <div class="cursor-pointer">
                                                                        <template v-for="items in v.sao_danh_gia"
                                                                            :key="items">
                                                                            <i class="bx bxs-star text-warning"></i>
                                                                        </template>
                                                                        <template v-for="items in (5 - v.sao_danh_gia)"
                                                                            :key="items">
                                                                            <i class="bx bxs-star text-secondary"></i>
                                                                        </template>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </template>
                                        </template>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="row">
                                        <template v-for="(value, key) in ds_review" :key="key">
                                            <template v-if="key > 2 && key < 6">
                                                <div class="col-lg-4 d-flex">
                                                    <div class="card">
                                                        <div class="card-body ">
                                                            <div class="row">
                                                                <div class="col-md-12 text-center mb-2">
                                                                    <img v-bind:src="value.avatar" alt=""
                                                                        class="user-img">
                                                                </div>
                                                                <hr>
                                                                <h5 class="mt-0">{{ value.ho_va_ten }}</h5>
                                                                <p class="mb-2">{{ value.noi_dung }}</p>
                                                                <hr>
                                                                <div class="d-flex align-items-center mt-2 fs-6">
                                                                    <div class="cursor-pointer">
                                                                        <template v-for="items in value.sao_danh_gia"
                                                                            :key="items">
                                                                            <i class="bx bxs-star text-warning"></i>
                                                                        </template>
                                                                        <template
                                                                            v-for="items in (5 - value.sao_danh_gia)"
                                                                            :key="items">
                                                                            <i class="bx bxs-star text-secondary"></i>
                                                                        </template>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </template>
                                        </template>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleCaptions_2" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleCaptions_2" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
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
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data() {
        return {
            ds_review: [],
            ds_slide: [],
            ds_loai_phong: [],
            tt_dat: {},
        }
    },
    mounted() {
        this.layDuLieuHomepage();
        // this.layDuLieuSlide();
        this.getToday();
    },
    methods: {
        getToday() {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            today = yyyy + '-' + mm + '-' + dd;
            this.tt_dat.min_ngay_di = today;
            this.tt_dat.min_ngay_den = today;
        },
        doiNgayDen() {
            this.tt_dat.min_ngay_di = this.tt_dat.ngay_den;
            if (this.tt_dat.ngay_di < this.tt_dat.ngay_den) {
                this.tt_dat.ngay_di = this.tt_dat.ngay_den;
            }
        },
        layDuLieuHomepage() {
            axios
                .get('http://127.0.0.1:8000/api/homepage/data')
                .then((res) => {
                    this.ds_review = res.data.dataReview;
                    this.ds_slide = res.data.dataSlide;
                    this.ds_loai_phong = res.data.dataLoaiPhong;
                })
        },
        // layDuLieuReview() {
        //     axios
        //         .get('http://127.0.0.1:8000/api/review/data')
        //         .then((res) => {
        //             this.ds_review = res.data.review;
        //         })
        // },
        // layDuLieuSlide() {
        //     axios
        //         .get('http://127.0.0.1:8000/api/slide/data')
        //         .then((res) => {
        //             this.ds_slide = res.data.slide;
        //         })
        // },
        chuyenTrang() {
            this.$router.push({
                name: "datPhong",
                params: {
                    'ngay_den': this.tt_dat.ngay_den,
                    'ngay_di': this.tt_dat.ngay_di,
                    'so_phong': this.tt_dat.so_phong,
                    'nguoi_lon': this.tt_dat.nguoi_lon,
                    'tre_em': this.tt_dat.tre_em,
                },
            });
        }
    },
}
</script>
<style></style>
