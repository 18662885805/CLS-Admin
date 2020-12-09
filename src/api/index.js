
import base from './base'; // 导入接口域名列表

import axios from '../request/http'; // 导入http中创建的axios实例

var apm = 'https://apm-wechat-service.31ten.cn'
const demoApi = {
  getstocks(params) {
    return axios.get(`${base}/api/get_stocks_by_lables3`, {
      params: params
    })
  },

  getExchange10(params) {
    return axios.get(`${base}/api/get_stocks_by_lables3`, {
      params: params
    })
  },

  getTrading10(params) {
    return axios.get(`${base}/api/get_stocks_by_lables3`, {
      params: params
    })
  },

  getRecommend(params) {
    return axios.get(`${apm}/api/goods/recommend`, {
      params: params
    })
  },

  getHot(params) {
    return axios.get(`${apm}/api/goods/hot`, {
      params: params
    })
  },

  goodDetail(params){
    return axios.get(`${apm}/Api/Goods/goodsDetail`, {
      params: params
    })
  }




  // 其他接口…………
}

export default demoApi;
