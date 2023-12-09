<script setup>
import { onMounted, ref } from 'vue';
const msg = ref('消息')
const i = ref(0)

onMounted(f => {
    alert(this.msg);
})
function btnc(){
    i.value++;
    console.log(i.value)
}
</script>

<template>
    <div>
        <button @click="btnc">{{i}}</button>
    </div>
</template>

<style>
</style>