//
// Api utils
//
import {http} from './../http'

class Util {
  get (args = null, successCb = null, errorCb = null, silent = false) {
    let endpoint = this.endpoint
    if (args) {
      endpoint += '?' + args
    }
    http.api('get', endpoint, {}, successCb, errorCb, silent)
  }

  detail (id, successCb = null, errorCb = null, silent = false) {
    let endpoint = this.endpoint + '/' + id
    http.api('get', endpoint, {}, successCb, errorCb, silent)
  }

  create (data, successCb = null, errorCb = null, silent = false) {
    let endpoint = this.endpoint
    http.api('post', endpoint, data, successCb, errorCb, silent)
  }

  update (id, data, successCb = null, errorCb = null, silent = false) {
    let endpoint = this.endpoint + '/' + id
    http.api('put', endpoint, data, successCb, errorCb, silent)
  }

  delete (id, data = {}, successCb = null, errorCb = null, silent = false) {
    let endpoint = this.endpoint + '/' + id
    http.api('delete', endpoint, data, successCb, errorCb, silent)
  }
}
export default Util
