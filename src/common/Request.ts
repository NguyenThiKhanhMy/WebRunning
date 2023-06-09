import axios from 'axios'
import { Notification } from 'element-react'
import { Cookie } from './Cookie'

// create an axios instance
const service = axios.create({
  baseURL: process.env.API_URL, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(

  config => {
    config.headers['Authorization'] = 'Bearer ' + Cookie.getCookie("Token")
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.StatusCode === 200 && res.Success) {
      return res;
    } else {
      if (res.StatusCode === 401) {
        window.location.href = "/page401";
      } else {
        Notification({
          title: "Lỗi",
          message: res.Message,
          type: 'error'
        });  
      }      
    }
  },
  error => {
    if (error.response.status === 401) {
      window.location.href = "/page401";
      // Notification({
      //   title: "Cảnh báo",
      //   message: "Không có quyền truy cập",
      //   type: 'warning'
      // });   
    } else {
      Notification({
        title: "Lỗi",
        message: error.response.statusText,
        type: 'error'
      });              
    }    
  }
)

export default service
