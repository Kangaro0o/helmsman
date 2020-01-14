import statusCode from './statusCode'

export default {
  getStatus(code) {
    return Object.values(statusCode).find(status => code === status.code)
  }
}