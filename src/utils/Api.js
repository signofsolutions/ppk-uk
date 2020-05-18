import axios from "axios";

export default axios.create({
  baseURL: "https://pppn.co.uk/3rdly/api/",
  headers: {
    "Content-Type": "application/json",
  },
});
