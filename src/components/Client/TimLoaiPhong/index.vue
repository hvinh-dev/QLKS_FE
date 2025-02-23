<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col mt-2">
                <label class="form-label">Ngày Đến</label>
                <input v-model="tt_dat_phong.ngay_den" type="date" class="form-control" />
              </div>
              <div class="col mt-2">
                <label class="form-label">Ngày Đi</label>
                <input v-model="tt_dat_phong.ngay_di" type="date" class="form-control" />
              </div>
              <div class="col mt-2">
                <label class="form-label">Số Phòng</label>
                <input v-model="tt_dat_phong.so_phong" type="number" class="form-control"
                  placeholder="Nhập số lượng phòng" />
              </div>
              <div class="col mt-2">
                <label class="form-label">Số Người Lớn</label>
                <input v-model="tt_dat_phong.nguoi_lon" type="number" class="form-control"
                  placeholder="Nhập số người lớn" />
              </div>
              <div class="col mt-2">
                <label class="form-label">Trẻ Em</label>
                <input v-model="tt_dat_phong.tre_em" type="number" class="form-control" placeholder="Nhập số trẻ em" />
              </div>
              <div class="col mt-2">
                <button class="btn btn-warning w-100" style="margin-top: 28px">
                  Tìm Kiếm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <div class="accordion accordion-flush" id="accordionFlushExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        style="padding-bottom: 2px;" data-bs-target="#flush-collapseOne" aria-expanded="true"
                        aria-controls="flush-collapseOne">
                        <h5 style="font-size: 12px" class="card-title">
                          Tìm kiếm phổ biến
                        </h5>
                      </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse show"
                      aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" style="">
                      <div class="accordion-body" style="    padding-left: 3px;">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="" />
                          <label class="form-check-label text-nowrap">Khách sạn</label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="" />
                          <label class="form-check-label text-nowrap">Hồ bơi</label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="" />
                          <label class="form-check-label text-nowrap">
                            <div class="d-flex align-items-center ">
                              <div class="cursor-pointer">
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-secondary"></i>
                              </div>
                            </div>
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="" />
                          <label class="form-check-label text-nowrap">
                            <div class="d-flex align-items-center ">
                              <div class="cursor-pointer">
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                              </div>
                            </div>
                          </label>
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
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-6">
                    <b style="font-size: 14px">Phạm vi giá</b>
                    <p style="font-size: 10px">1 phòng, 1 đêm</p>
                  </div>
                  <div class="col-6 text-end text-primary"><a type="button">Đặt lai</a></div>
                </div>
                <div class="row">
                  <div class="row mb-2">
                    <div class="col-4"><input class="form-control" placeholder="0 đ" type="text"></div>
                    <div class="col-2" style="padding: 0px 0px">
                      <hr>
                    </div>
                    <div class="col-6"><input class="form-control" placeholder="540.000 đ" type="text"></div>
                  </div>
                  <input type="range" class="form-range" id="customRange1">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <div class="accordion accordion-flush" id="accordionFlushExample1">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        style="padding-bottom: 2px;" data-bs-target="#flush-collapseOne1" aria-expanded="true"
                        aria-controls="flush-collapseOne1">
                        <h5 style="font-size: 12px" class="card-title">
                          Hạng sao
                        </h5>
                      </button>
                    </h2>
                    <div id="flush-collapseOne1" class="accordion-collapse collapse show"
                      aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample1" style="">
                      <div class="accordion-body" style="    padding-left: 3px;">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="" />
                          <label class="form-check-label text-nowrap">
                            <div class="d-flex align-items-center ">
                              <div class="cursor-pointer">
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-secondary"></i>
                                <i class="bx bxs-star text-secondary"></i>
                                <i class="bx bxs-star text-secondary"></i>
                                <i class="bx bxs-star text-secondary"></i>
                              </div>
                            </div>
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="" />
                          <label class="form-check-label text-nowrap">
                            <div class="d-flex align-items-center ">
                              <div class="cursor-pointer">
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-secondary"></i>
                                <i class="bx bxs-star text-secondary"></i>
                                <i class="bx bxs-star text-secondary"></i>
                              </div>
                            </div>
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="" />
                          <label class="form-check-label text-nowrap">
                            <div class="d-flex align-items-center ">
                              <div class="cursor-pointer">
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-secondary"></i>
                                <i class="bx bxs-star text-secondary"></i>
                              </div>
                            </div>
                          </label>
                        </div>

                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="" />
                          <label class="form-check-label text-nowrap">
                            <div class="d-flex align-items-center ">
                              <div class="cursor-pointer">
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-secondary"></i>
                              </div>
                            </div>
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="" />
                          <label class="form-check-label text-nowrap">
                            <div class="d-flex align-items-center ">
                              <div class="cursor-pointer">
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                              </div>
                            </div>
                          </label>
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
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <div class="accordion accordion-flush" id="accordionFlushExample2">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        style="padding-bottom: 2px;" data-bs-target="#flush-collapseOne2" aria-expanded="true"
                        aria-controls="flush-collapseOne2">
                        <h5 style="font-size: 12px" class="card-title">
                          Tiện nghi
                        </h5>
                      </button>
                    </h2>
                    <div id="flush-collapseOne2" class="accordion-collapse collapse show"
                      aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample2" style="">
                      <div class="accordion-body" style="    padding-left: 3px;">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="" />
                          <label class="form-check-label text-nowrap">Khách sạn</label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="" />
                          <label class="form-check-label text-nowrap">Wifi</label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="" />
                          <label class="form-check-label text-nowrap">Chỗ đậu xe</label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="" />
                          <label class="form-check-label text-nowrap">Lễ tân 24/24</label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="" />
                          <label class="form-check-label text-nowrap">Hồ bơi</label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="" />
                          <label class="form-check-label text-nowrap">Thang máy</label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="" />
                          <label class="form-check-label text-nowrap">Phòng họp</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-9">
        <template v-for="(value, index) in ds_loai_phong" :key="index">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-lg-12 d-flex justify-content-start">
                      <b class="mt-2">
                        <h4>Loại {{ value.ten_loai_phong }}</h4>
                      </b>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-lg-3">
                      <b class="fs-5 pd-4">Hình Ảnh</b>
                      <img v-bind:src="value.hinh_anh" class="img-fluid w-100 mt-3" alt="" />
                      <hr />
                      <p>
                        <i class="fa-solid fa-expand fa-xl me-2"></i> Diện tích
                        phòng: {{ value.dien_tich }} m<sup>2</sup>
                      </p>
                      <p>
                        <i class="fa-solid fa-bed fa-xl me-2"></i>
                        {{ value.so_giuong }} giường
                      </p>
                      <p class="text-success" data-bs-toggle="collapse" :href="'#collapseExample' + value.id">
                        <i class="fa-solid fa-circle-plus fa-xl me-2"></i> Các
                        tiện ích khác
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
                              <th class="fs-5 mb-2">Giá này đã gồm</th>
                              <th class="fs-5 mb-2">Sức chứa</th>
                              <th class="fs-5 mb-2">Giá phòng/đêm</th>
                              <th class="fs-5 mb-2">Số phòng</th>
                              <th class="fs-5 mb-2">Đặt phòng</th>
                            </tr>
                          </thead>
                          <tbody class="border border-warning border-4">
                            <tr>
                              <th class="align-middle text-light fs-5 text-nowrap" style="background-color: orange">
                                Giá thấp nhất!
                              </th>
                              <td class="text-center align-middle">
                                <i class="fa-solid fa-circle-info text-secondary"></i>
                              </td>
                              <td class="align-middle text-nowrap text-center">
                                <div class="badge bg-danger text-white fs-6 text-decoration-line-through">
                                  3.666.667 đ
                                </div>
                              </td>
                              <td rowspan="2">
                                <div class="input-group d-flex justify-content-center flex-row mb-3 mt-5 mb-5"
                                  style="flex-wrap: nowrap">
                                  <button class="btn btn-outline-secondary" type="button">
                                    -
                                  </button>
                                  <input type="text" value="0" class="form-control text-center" style="width: 50px" />
                                  <button class="btn btn-outline-secondary" type="button">
                                    +
                                  </button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <b>Lợi ích</b>
                                <p>
                                  <i class="fa-solid fa-check me-2 text-success me-2"></i>
                                  Giá cực thấp! (không hoàn tiền)
                                </p>
                                <p>
                                  <i class="fa-solid fa-check me-2 text-success me-2"></i>
                                  Miễn phí 2 suất ăn sáng
                                </p>
                                <p>
                                  <i class="fa-solid fa-check me-2 text-success me-2"></i>
                                  Nước uống chào đón, Cà phê & trà
                                </p>
                                <p>
                                  <i class="fa-solid fa-check me-2 text-success me-2"></i>
                                  Nhận phòng nhanh
                                </p>
                                <p>
                                  <i class="fa-solid fa-check me-2 text-success me-2"></i>
                                  Wifi miễn phí
                                </p>
                                <p>
                                  <i class="fa-solid fa-check me-2 text-success me-2"></i>
                                  Nước uống miễn phí
                                </p>
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
                                <p class="text-success text-center">
                                  <b class="fs-5">599.999</b>
                                  đ
                                </p>
                                <i class="text-wrap">Giá mỗi đêm chưa bao gồm thuế và phí</i>
                              </td>
                              <td rowspan="2">
                                <div class="d-flex flex-column">
                                  <button class="btn btn-primary w-100">
                                    Đặt ngay
                                  </button>
                                  <button class="btn btn-outline-primary w-100 mt-2 mb-5 text-wrap">
                                    Giỏ hàng
                                  </button>
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
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
  data() {
    return {
      tt_dat_phong: {},
      ds_loai_phong: [],
    };
  },
  mounted() {
    this.tt_dat_phong.ngay_den = this.$route.params.ngay_den;
    this.tt_dat_phong.ngay_di = this.$route.params.ngay_di;
    this.tt_dat_phong.so_phong = this.$route.params.so_phong;
    this.tt_dat_phong.nguoi_lon = this.$route.params.nguoi_lon;
    this.tt_dat_phong.tre_em = this.$route.params.tre_em;

    this.layDanhSachPhong();
  },
  methods: {
    layDanhSachPhong() {
      axios.get("http://127.0.0.1:8000/api/client/loai-phong/data").then((res) => {
        this.ds_loai_phong = res.data.loai_phong;
      });
    },
  },
};
</script>
<style></style>
