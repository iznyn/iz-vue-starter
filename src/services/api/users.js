//
// Api User
//
import endpoint from './endpoint'
import Util from './util'
import {http} from './../http'

class Users extends Util {
  init () {
    this.endpoint = endpoint.users
    return this
  }

  update (id, data, successCb = null, errorCb = null, silent = false) {
    let endpoint = this.endpoint + '/' + id
    http.api('post', endpoint, data, successCb, errorCb, silent)
  }

  profile (userId, successCb = null, errorCb = null) {
    let endpoint = this.endpoint + '/profile/' + userId
    http.api('get', endpoint, {}, successCb, errorCb)
  }

  changePassword (data, successCb = null, errorCb = null) {
    let endpoint = this.endpoint + '/change-password'
    http.api('post', endpoint, data, successCb, errorCb)
  }

  check (args = null, successCb = null, errorCb = null) {
    let endpoint = this.endpoint + '/check'
    if (args) {
      endpoint += '?' + args
    }
    http.api('get', endpoint, {}, successCb, errorCb)
  }
}
export default Users
