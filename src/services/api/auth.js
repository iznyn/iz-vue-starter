//
// Api authentication
//
import endpoint from './endpoint'
import {http} from './../http'

class Auth {
  login (data, successCb = null, errorCb = null, silent = false) {
    // http.post(endpoint.login, data, successCb, errorCb, silent)
    http.request('get', endpoint.login, data, successCb, errorCb, silent)
  }

  register (data, successCb = null, errorCb = null, silent = false) {
    http.post(endpoint.register, data, successCb, errorCb, silent)
  }
}
export default Auth
