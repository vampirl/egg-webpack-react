import { http } from '../utils/http'

export const getUserinfo = function getUserinfo() {
  return http.get('/getUserInfo')
}