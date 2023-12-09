<script setup>
import { onBeforeMount, onMounted, ref } from 'vue';
import axios from 'axios';
// import {f} from '@/components/API.js';

let ans = ref();
let request = ref({
    token: "LwExDtUWhF3rH5ib",
    keyword: '关键字' 
});
// 同步等待
async function getList() {
    console.log('https://v2.alapi.cn/api/music/search?keyword=我爱你&token=' + request.value.token)

    await axios.get('https://v2.alapi.cn/api/music/search?keyword=' + request.value.keyword + '&token=' + request.value.token)
        .then(r => {
             ans =r.data.data.songs;
        }).catch(e => {
            alert('请求异常');
            console.log(e);
        })
    console.log("=========ans===========")
    console.log(ans)
    console.log("====================")

} 
// onMounted(async w=> {
//     await getList();
// })

</script>

<template>
    <input type="text" v-model="request.keyword">
    <button @click="getList">API按钮</button>
    <input type="text" v-model="request.keyword">
    <div v-for="item in ans" :key=" item">
        {{ item.name }}

        <h3>演唱者：</h3>
        <div v-for="er in item.artists" :key="er">
            {{ er.name }} 
            <img :src=er.img1v1Url>
        </div>
      </div>
      
</template>

<style></style>