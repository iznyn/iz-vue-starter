import endpoint from './api/endpoint'
import App from './api/app'

export default {
  init () {
    this.endpoint = endpoint
    this.app = new App().init()
  }
}
