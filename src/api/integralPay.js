import request from '@/utils/request'

// 获取用户账户列表
export function  loginByPass(data) {
    return request({
      url: '/api/mem/loginByPass',
      method: 'post',
      data
    })
  }
