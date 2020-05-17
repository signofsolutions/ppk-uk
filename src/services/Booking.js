import axios from 'util/Api';
import {message} from 'antd';


function searchProperties (body){
  return axios.post(`properties/search`, body)
    .then(res => res.data)
    .catch(err => {
      message.error(err.response.data.message);
      return Promise.reject(err)
    })
}

function addBooking (body){
  return axios.post(`dashboard/bookings/create`, body)
    .then(res => res.data)
    
}

function getBooking (){
  return axios.get(`dashboard/bookings/cart`)
    .then(res => res.data)
    
}

function addAccRequest (body){
  return axios.post(`dashboard/bookings/accommodation-requests/create`, body)
    .then(res => res.data)    
}
function deleteBooking (id){
  return axios.delete(`/dashboard/bookings/delete/${id}`)
    .then(res => res.data)
    
}
export { searchProperties, addBooking, getBooking, addAccRequest, deleteBooking }