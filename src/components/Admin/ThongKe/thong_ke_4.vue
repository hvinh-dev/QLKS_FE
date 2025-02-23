<template>
    <div class="row">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col">
                        Thống Kê Số Phòng Thuê Của Khách
                    </div>
                    
                </div>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-2"></div>
                    <div class="col-lg-8">
                        <PolarArea v-if="is_load" :data="chartData" />
                    </div>
                    <div class="col-lg-2"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import baseRequest from '../../../core/baseRequest';
import { PolarArea } from 'vue-chartjs'
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend)
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
    components: { PolarArea },
    data() {
        return {
            is_load     : false,
            chartData   : null,
            chartData   : {
                labels: [],
                datasets: [ 
                    {
                        label: 'Thống Kê',
                        backgroundColor: [
                            "#C0392B", "#1ABC9C", "#F1C40F", "#E67E22", "#8E44AD", "#2980B9", "#27AE60"
                        ],
                        data: []
                    }
                 ]
            },
            chartOptions: {
                responsive: true
            }
        }
    },  
    mounted () {
        this.loadData();
    },
    methods: {
        loadData() {
            this.loaded = false
            baseRequest
                .get('hoa-don/thong-ke-4')
                .then((res) => {
                    if (res.data.status == false) {
                        toaster.error(res.data.message)
                    }
                    this.chartData.labels           = res.data.list_ten;
                    this.chartData.datasets[0].data = res.data.list_so_luong;
                    this.is_load = true;
                });
        }
    },
}
</script>
<style>
    
</style>
