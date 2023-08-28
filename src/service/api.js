import axios from 'axios'

const apiHotel = axios.create({
  baseURL: 'http://localhost:3001'
})

apiHotel.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('userData:hotel')
  const token = userData && JSON.parse(userData).token
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default apiHotel
