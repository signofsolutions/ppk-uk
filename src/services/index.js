import { message } from "antd";
import axios from "utils/Api";
export * from "./Users";

export const ShowError = (err) => {
  console.log(err);
  let body = {
    user_id: 1,
    api_name: "",
    log_text: JSON.stringify(err),
  };
  axios
    .post(`dev/front-log`, body)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
  if (err.response && err.response.status === 422) {
    let text = Object.values(err.response.data.errors);
    text = text.join("\n");
    message.error(text);
  } else {
    let text = "Network error " + (err.response && err.response.status);
    message.error(text);
  }
};
