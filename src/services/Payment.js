import axios from 'util/Api';
import { message } from 'antd';


function getDetailPayment(body) {
  return axios.post(`dashboard/payments/get-payment-detail`, body)
    .then(res => res.data)
    
}

function paymentBooking(body) {
  return axios.post(`dashboard/payments/booking`, body)
    .then(res => res.data)
    
}
function saveCard(body) {
  return axios.post(`dashboard/credit-cards/create`, body)
    .then(res => res.data)
    
}


export { getDetailPayment, paymentBooking, saveCard }
