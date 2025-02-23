<template>
  <main class="container">
    <div class="row mb-2">
      <div class="col-md-6 d-flex">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col-8 p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary">Bài viết mới</strong>
            <h3 class="mb-0">Phòng Superior</h3>
            <div class="mb-1 text-muted">Nov 12</div>
            <p class="card-text mb-auto">
              Phòng superior là gì Phòng superior (SUP) là hạng phòng khách sạn
              cao cấp hơn phòng standard.
            </p>

          </div>
          <div class="col-md-4">
            <img src="https://th.bing.com/th/id/OIP.1TA7eGyx9jvLxRDwzQtMAwHaGW?w=212&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="..." class="card-img" />
          </div>
        </div>
      </div>
      <div class="col-md-6 d-flex">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col-8 p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-success">Bài viết truy cập nhiều nhất</strong>
            <h3 class="mb-0">Phòng View Biển</h3>
            <div class="mb-1 text-muted">Nov 11</div>
            <p class="mb-auto">khách sạn view đẹp ngắm biển Vũng Tàu.</p>

          </div>
          <div class="col-md-4">
            <img src="https://statics.vinpearl.com/Hinh-anh-lich-trinh-du-lich-phu-quoc-cho-nhom-ban-3-ngay-1.jpg"
              alt="..." class="card-img" />
          </div>
        </div>
      </div>
    </div>
    <div class="row g-5">
      <div class="col-md-12">
        <div class="row">

          <h3 class="pb-4 mb-4 fst-italic border-bottom"> BÀI VIẾT</h3>
        </div>
        <div class="row ">
          <template v-for="(v, k) in ds_bai_viet" :key="k">
            <div class="col-4 d-flex align-items-stretch ">
              <router-link :to="'/chi-tiet-bai-viet/' + v.id">
                <div class="card border-end shadow-none">
                  <img v-bind:src="v.hinh_anh" class="card-img-top" alt="..." style="height: 240px;">
                  <div class="card-body">
                    <h5 class="card-title">{{ v.ten_bai_viet }}</h5>
                    <p class="card-text">{{ v.mo_ta_ngan }}</p>
                  </div>
                  <div class="card-footer bg-white"> <small class="text-muted">Last updated 3 mins ago</small>
                  </div>
                </div>
              </router-link>

            </div>
          </template>
        </div>
      </div>

    </div>
  </main>
</template>
<script>
import axios from 'axios';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });

export default {
  props: ['slug_chuyen_muc'],
  data() {
    return {
      ds_bai_viet: [],
    }
  },
  mounted() {
    this.layDuLieuBaiViet();
  },
  watch: {
    $route(to, from) {
      this.layDuLieuBaiViet();
    }
  },
  methods: {
    layDuLieuBaiViet() {
      axios
        .get('http://127.0.0.1:8000/api/client/bai-viet/data/' + this.slug_chuyen_muc)
        .then((res) => {
          this.ds_bai_viet = res.data.bai_viet;
        })
    },

  },
}
</script>
<style></style>
