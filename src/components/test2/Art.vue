<script lang="ts" setup>
import { getList } from './request';
import { ref } from 'vue';

import {
    Check,
    Delete,
    Edit,
    Message,
    Search,
    Star,
} from '@element-plus/icons-vue'

let ans = ref([]);

// 为表单赋值
getList().then(r => {
    ans.value = r;
})

const currentPage4 = ref(4)
const pageSize4 = ref(10)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)
const totle = ref(100)

const handleSizeChange = (val: number) => {
    console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
    console.log(`current page: ${val}`)
}
</script>
 
<template>
    <el-table :data="ans" style="width: 100%">
        <el-table-column prop="id" label="id" width="180" />
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="age" label="年龄" />
        <el-table-column prop="birthday" label="生日" />
        <el-table-column prop="height" label="身高" />
        <el-table-column label="操作" width="180">
            <el-button type="primary" size="default" :icon="Edit" circle></el-button>
            <el-button type="danger" size="default" :icon="Delete" circle></el-button>
        </el-table-column>
    </el-table>

    <div class="demo-pagination-block">
        <el-pagination class="el-p" v-model:current-page="currentPage4" v-model:page-size="pageSize4"
            :page-sizes="[5, 15, 30, 50]" :small="small" :disabled="disabled" :background="background"
            layout="jumper, sizes, prev, pager, next, total" :total="totle" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
    </div>
</template>
<style scoped>
.el-p {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
}
</style>
  