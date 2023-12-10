<script lang="ts" setup>
import {
    Check,
    Delete,
    Edit,
    Message,
    Search,
    Star,
} from '@element-plus/icons-vue'
import { searchForWorkspaceRoot } from 'vite';
</script>

<template>
    <el-row class="mb-4">
        <el-button :icon="Search" round size="samil">搜索</el-button>
        <el-button  loading type="primary" :icon="Edit">Primary</el-button>
        <el-button disabled type="success" :icon="Delete">Success</el-button>
        <el-button color = "green" type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
    </el-row>

    <el-row class="mb-4">
        <el-button plain>Plain</el-button>
        <el-button type="primary" plain>Primary</el-button>
        <el-button type="success" plain>Success</el-button>
        <el-button type="info" plain>Info</el-button>
        <el-button type="warning" plain>Warning</el-button>
        <el-button type="danger" plain>Danger</el-button>
    </el-row>
</template>

  
<style></style>
