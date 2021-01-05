import axios from "axios";

import { apiEndPoint } from "../config.json";
let checkOutUrl = apiEndPoint + "checkout";

let shippingDetailUrl = apiEndPoint + "get_shipping_details/";

// let userToken = "92c6544f868181b32ad25533fc3633ec6d450d77";
let userToken = localStorage.getItem("token");

export async function shippingDetailService(data) {
  return await axios({
    method: "get",
    url: shippingDetailUrl + data,
  });
}

export async function checkOut(data) {
  return await axios({
    method: "post",
    url: checkOutUrl,
    data: data,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: userToken,
    },
  });
}
