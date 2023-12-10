import axios from 'axios';
const baseurl = 'http://localhost:1234'
const instance = axios.create({ baseurl });

export async function getList() {
    return await axios.get('http://localhost:1234/student/getList')
        .then(async r => {
            return await r.data
        })
        .catch(e => {
            alert("错误请求")
            console.log(e)
        });
}
