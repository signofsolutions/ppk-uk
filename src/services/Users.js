import axios from 'util/Api';
import {message} from 'antd';


function usersLogin(body) {
  return axios.post(`users/login`, body)
    .then(res => res.data)
}
function usersRegister(body) {
  return axios.post(`users/register`, body)
    .then(res => res.data)
}

function usersProfileView() {
  return axios.get(`dashboard/users/profile/view`)
    .then(res => res.data)
    
}
function usersList() {
  return axios.get(`admin/dashboard/users/index/0/user`)
    .then(res => res.data)
    
}
function growingData() {
  return axios.get(`properties/growing-fast-detail`)
    .then(res => res.data)
    
}


export { usersLogin, usersProfileView, usersList, usersRegister, growingData }