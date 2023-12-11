import axios from 'axios';
import { errMsg ,successMsg} from './elm'
const url = 'http://localhost:1234/'
const axiosInatance = axios.create({
    baseURL: url,
    timeout: 5000,
});

export async function getList(name) {
    return await axiosInatance.get('student/getList?name=' + name)
        .then(async r => {
            return await r.data.data
        })
        .catch(e => {
            alert("错误请求")
            console.log(e)
        });
}
export async function remove(id) {
    return await axiosInatance.get('student/delete?id=' + id)
        .then(async r => {
            return await r.data
        })
        .catch(e => {
            alert("错误请求")
            console.log(e)
        });
}

export async function insert(data) {
    return await axiosInatance.post("student/insertStudent", data).then(r => {
        console.log(r);
        console.log("添加成功");
        return r

    }).catch(r => {
        console.log("添加错误");
    })
}




// 请求拦截器
const requestInterceptor = axiosInatance.interceptors.request.use(
    // 在发送请求之前调用
    (config) => {
        const newConfig = config;
        // 添加 token
        Object.assign(newConfig.headers, { 'x-token': 'some-token' });
        return newConfig;
    },
    (error) => {
        // 对请求错误时调用，可自己定义
        return Promise.reject(error);
    }
);

// 响应拦截器
const responseInterceptor = axiosInatance.interceptors.response.use(
    (response) => {
        // 2xx 范围内的状态码都会触发该函数。对响数据成功时调用。
        successMsg();
        return response;
    },
    (error) => {
        // 超出 2xx 范围的状态码都会触发该函数。对响应错误时调用。
        console.error('请求错误: ', error);
        errMsg()
        return Promise.reject(error);
    }
);

// 移除请求拦截器
// axiosInatance.interceptors.request.eject(requestInterceptor);

// 移除响应拦截器
// axiosInatance.interceptors.response.eject(responseInterceptor);




export default axiosInatance;