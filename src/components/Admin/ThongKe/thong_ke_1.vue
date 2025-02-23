<template>
    <div class="row">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col">
                        Thống Kê Doanh Thu
                    </div>
                    
                </div>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-2"></div>
                    <div class="col-lg-8">
                        <Bar v-if="is_load" :data="chartData" />
                    </div>
                    <div class="col-lg-2"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import baseRequest from '../../../core/baseRequest';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
    components: { Bar },
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
                .get('hoa-don/thong-ke-1')
                .then((res) => {
                    if (res.data.status == false) {
                        toaster.error(res.data.message)
                    }
                    this.chartData.labels           = res.data.list_ngay;
                    this.chartData.datasets[0].data = res.data.list_tong_tien;
                    this.is_load = true;
                });
        }
    },
}
</script>
<style>
    
</style>
