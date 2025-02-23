<template>
    AAAA
</template>
<script>
import axios from 'axios';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
import baseRequest from '../../../core/baseRequest';
export default {
    mounted() {
        this.guiTokenLenBE();
    },
    methods: {
        guiTokenLenBE() {
            baseRequest
                .post('kiem-tra-token-admin', {}, {
                    headers : {
                        Authorization : 'Bearer ' +  localStorage.getItem("token_admin")
                    }
                })
                .then((res) => {
                    if(res.data.status) {
                        toaster.success(res.data.message);
                    } else {
                        toaster.error(res.data.message);
                    }
                });
        }
    },
}
</script>
<style>
    
</style>