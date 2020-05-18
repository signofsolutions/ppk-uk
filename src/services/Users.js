import axios from "utils/Api";

function listerRegister(body) {
  return axios.post(`users/lister/register`, body).then((res) => res.data);
}

function listerRegisterVerification(body) {
  return axios
    .post(`users/lister/register-verification`, body)
    .then((res) => res.data);
}

export { listerRegister, listerRegisterVerification };
