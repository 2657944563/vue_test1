import { ElMessage } from 'element-plus'

export const deleteSuccessMsg = () => {
    ElMessage({
        message: '删除成功',
        type: 'success',
      })
}
export const insertSuccessMsg = () => {
    ElMessage({
        message: '新增成功',
        type: 'success',
      })
}
export const errMsg = () => {
    ElMessage.error('请求错误，请重试')
}
export const successMsg = () => {
    ElMessage({
        message: '操作成功',
        type: 'success',
      })
}
