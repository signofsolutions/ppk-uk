import axios from 'axios';

export default axios.create({
  baseURL: "https://pppn.co.uk/3rdly/api/",
  headers: {
    'Content-Type': 'application/json',
  },
  validateStatus: function (status) {
    return status >= 200 && status < 400}
});
