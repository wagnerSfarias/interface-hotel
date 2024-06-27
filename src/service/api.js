import axios from 'axios'
import { toast } from 'react-toastify'

const apiHotel = axios.create({
  baseURL: 'http://localhost:3001'
})

apiHotel.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('userData:hotel')
  const token = userData && JSON.parse(userData).token
  config.headers.Authorization = `Bearer ${token}`
  return config
})

apiHotel.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response?.status === 401) {
      toast.error('Ocorreu um erro com sua autenticação! Tente novamente.')

      localStorage.removeItem('userData:hotel')

      setTimeout(() => {
        window.location.href = '/login'
      }, 2000)
    } else {
      toast.error('Falha no sistema! Tente novamente.')
    }
    return Promise.reject(error)
  }
)
export default apiHotel
