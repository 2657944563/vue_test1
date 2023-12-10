// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import locale from 'element-plus/dist/locale/zh-cn.js'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


createApp(App).use(ElementPlus, { locale }).mount('#app')
