import axios from 'axios'

const apiHotel = axios.create({
  baseURL: 'http://localhost:3001'
})

export default apiHotel
