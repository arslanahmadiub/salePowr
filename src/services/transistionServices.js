import axios from "axios";
import { apiEndPoint } from "../config.json";

// let userToken = "92c6544f868181b32ad25533fc3633ec6d450d77";
let userToken = localStorage.getItem("token");

let transistionProgressUrl = apiEndPoint + "get_transactions/inprogress";
let updateDeliveryStatusUrl = apiEndPoint + "update_delivery_status";

export async function getProgressTransistion() {
  return await axios({
    method: "get",
    url: transistionProgressUrl,
    headers: {
      Authorization: userToken,
    },
  });
}

export async function updateDeliveryStatus(data) {
  return await axios({
    method: "post",
    url: updateDeliveryStatusUrl,
    data: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: userToken,
    },
  });
}
