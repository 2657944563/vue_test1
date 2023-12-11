<script lang="ts" setup>
import { getList, remove, insert } from './request';
import { ref, reactive, onMounted } from 'vue';
import { deleteSuccessMsg, insertSuccessMsg, errMsg } from './elm'

import {
    Check,
    Delete,
    Edit,
    Message,
    Search,
    Star,
} from '@element-plus/icons-vue'


let ans = ref([]);

// 复用函数
const setList = async () => {
    await getList(formData.name).then(r => {
        ans.value = r;
    })
}



// 为表单赋值
onMounted(() => {
    setList()
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

const formData = reactive({
    name: '',
    date: '',
})

const onSubmit = () => {
    setList()
}

const onRemove = (id: number) => {
    console.log(id)

    remove(id).then(r => {
        setList()
    }).then(r => {
        deleteSuccessMsg()
    })
    console.log("onRemove")
}

const dialogTableVisible = ref(false)
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const form = reactive({
    name: '',
    birthday: '',
    age: '',
    height: '',
})
const insertStudent = async () => {
    insert(form).then(r => {
        dialogFormVisible.value = false
        insertSuccessMsg()
    }).catch(e => {
        console.log(e)
        errMsg()
    })

}
</script>
 
<template>
    <!-- 菜单栏展示 -->
    <el-card class="box-card">
        <div class="card-header">
            <span>学生信息</span>
            <el-button @click="dialogFormVisible = true" type="primary">新增学生</el-button>
        </div>
        <!-- Form -->

        <el-dialog v-model="dialogFormVisible" title="Shipping address">
            <el-form :model="form">
                <el-form-item label="姓名" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off" />
                </el-form-item>
                <el-form-item label="年龄" :label-width="formLabelWidth">
                    <el-input-number v-model="form.age" :step="1" autocomplete="off" step-strictly />
                </el-form-item>
                <el-form-item label="出生日期" :label-width="formLabelWidth">
                    <el-date-picker v-model="form.birthday" type="datetime" placeholder="出生日期" />
                </el-form-item>
                <el-form-item label="身高" :label-width="formLabelWidth">
                    <el-input-number v-model="form.height" :precision="2" :step="0.1" :max="10" />
                </el-form-item>
            </el-form>

            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取消</el-button>
                    <el-button type="primary" @click="insertStudent">提交</el-button>
                </span>
            </template>
        </el-dialog>













        <el-divider />

        <!-- 表单查询 -->
        <el-form :inline="true" :model="formData" class="demo-form-inline">
            <el-form-item label="姓名">
                <el-input v-model="formData.name" placeholder="请填写姓名" clearable />
            </el-form-item>
            <el-form-item label="生日">
                <el-date-picker v-model="formData.date" type="date" placeholder="请输入生日" clearable />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>

        <!-- 数据展示 -->
        <el-table :data="ans" style="width: 100%">
            <el-table-column prop="id" label="id" width="180" />
            <el-table-column prop="name" label="姓名" />
            <el-table-column prop="age" label="年龄" />
            <el-table-column prop="birthday" label="生日" />
            <el-table-column prop="height" label="身高" />
            <el-table-column label="操作" width="180">
                <template #default="scope">
                    <el-button type="primary" size="default" :icon="Edit" circle></el-button>
                    <el-button @click="onRemove(scope.row.id)" type="danger" size="default" :icon="Delete"
                        circle></el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 分页导航栏 -->
        <div class="demo-pagination-block">
            <el-pagination class="el-p" v-model:current-page="currentPage4" v-model:page-size="pageSize4"
                :page-sizes="[5, 15, 30, 50]" :small="small" :disabled="disabled" :background="background"
                layout="jumper, sizes, prev, pager, next, total" :total="totle" @size-change="handleSizeChange"
                @current-change="handleCurrentChange" />
        </div>
    </el-card>
</template>
<style scoped>
.el-p {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
}

.demo-form-inline {
    margin-top: 10px;
}

.card-header {
    display: flex;
    justify-content: space-between;
}

.el-button--text {
    margin-right: 15px;
}

.el-select {
    width: 300px;
}

.el-input {
    width: 300px;
}

.dialog-footer button:first-child {
    margin-right: 10px;
}
</style>
  