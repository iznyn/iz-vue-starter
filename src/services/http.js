import axios from 'axios'
import NProgress from 'nprogress'
import qs from 'qs'
import sweetalert from 'sweetalert'

export const http = {
  auth: false,
  request (method, url, data, successCb = null, errorCb = null, headers = {}, silent = false) {
    if (!silent) {
      NProgress.start()
    }
    axios.request({
      url,
      data: data instanceof FormData ? data : qs.stringify(data),
      method,
      headers: Object.assign({}, {
        'Content-Type': 'application/x-www-form-urlencoded'
      }, headers)
    }).then(successCb).catch(errorCb)
  },

  get (url, successCb = null, errorCb = null, silent = false) {
    return this.request('get', url, {}, successCb, errorCb, silent)
  },

  post (url, data, successCb = null, errorCb = null, headers = {}, silent = false) {
    return this.request('post', url, data, successCb, errorCb, headers, silent)
  },

  put (url, data, successCb = null, errorCb = null, silent = false) {
    return this.request('put', url, data, successCb, errorCb, silent)
  },

  delete (url, data = {}, successCb = null, errorCb = null, silent = false) {
    return this.request('delete', url, data, successCb, errorCb, silent)
  },

  api (method, url, data = {}, successCb = null, errorCb = null, silent = false) {
    if (!this.auth) {
      sweetalert({
        title: 'Unauthorized',
        text: 'Unable to process this request!',
        icon: 'error',
        dangerMode: true
      }).then(response => {
        window.location.reload(true)
      })
    } else {
      this.request(method, url, data, successCb, errorCb, {
        'Authorization': 'Bearer ' + this.auth.getToken()
      }, silent)
    }
  },

  init () {
    // axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1'
    axios.defaults.baseURL = 'http://localhost:3000'

    // Intercept the request to make sure the token is injected into the header.
    axios.interceptors.request.use(config => {
      // we intercept axios request and add authorizatio header before perform send a request to the server
      // config.headers.Authorization = `Bearer ${ls.get('jwt-token')}`
      return config
    })

    // Intercept the response and…
    axios.interceptors.response.use(response => {
      return response
    }, error => {
      NProgress.done()
      // Also, if we receive a Bad Request / Unauthorized error
      if (error.response.status === 400 || error.response.status === 401) {

      } else if (error.response.status === 500) {

      }

      return Promise.reject(error)
    })
  }
}
