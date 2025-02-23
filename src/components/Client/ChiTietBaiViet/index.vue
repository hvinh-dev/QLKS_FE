<template>
    <div class="py-5 mb-5" :style="{ backgroundImage: 'url(' + bai_viet.hinh_anh + ')',
                                             backgroundPosition: 'center center',
                                             backgroundRepeat: 'no-repeat',
                                             backgroundSize: 'cover',
                                             height: '1000px' }">
    </div>
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5 align-items-center">
                <div class="container">
                    <div class="col-lg-12">
                        <h1 class="mb-4">{{ bai_viet.ten_bai_viet }}</h1>
                        <p class="mb-4">{{ bai_viet.mo_ta_ngan }}</p>
                        <p class="mb-4">{{ bai_viet.mo_ta_chi_tiet }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import baseRequest from '../../../core/baseRequest';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
    props : ['id'],
    data() {
        return {
            bai_viet: {},
        }
    },
    mounted() {
        this.loadDataBaiViet();
    },
    beforeRouteUpdate(to, from, next) {
        this.loadDataBaiViet();
    },
    methods: {
        loadDataBaiViet() {
            baseRequest
                .get(`client/chi-tiet-bai-viet/` + this.id)
                .then((res) => {
                    this.bai_viet = res.data.bai_viet;
                });
        },
    }
}
</script>
<style></style>