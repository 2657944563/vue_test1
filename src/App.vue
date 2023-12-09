<script setup>
// 脚本
import axios from 'axios';
import { onMounted, ref } from 'vue';
import api from './components/API.vue'
// 变量
const msg = ref('消息1');
let flag = ref(0);
let yiyan = ref('');
// 函数
function test() {
  console.log(flag.value);
  console.log(flag.value % 2 == 0);
  flag.value++;

  axios.get('http://localhost:5173/').then(r => {
    console.log(r)
    this.yiyan = r.data;
  }).catch(e => {
    console.log(e)
  })
}

</script>

<template>
  <!-- 内容 -->
  <h1>{{ yiyan }}</h1>
  <br>
  <h1 class="text" @click="test">{{ msg }}</h1>
  <br>
  <input type="text" v-model="msg">
  <br>
  <!-- 控制窗体页面展示 -->
  <div>
    <api />
  </div>
  <br>
</template>

<style scoped>
/* 样式 */
.text {
  font-size: 180px;
  border: 3px;
  color: aquamarine;
}
</style>
