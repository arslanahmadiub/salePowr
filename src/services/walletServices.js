import axios from "axios";
import { apiEndPoint } from "../config.json";

// let userToken = "92c6544f868181b32ad25533fc3633ec6d450d77";
let userToken = localStorage.getItem("token");

let addWalletUrl = apiEndPoint + "add_wallet";
let getWalletUrl = apiEndPoint + "account_money_details";
let cashoutUrl = apiEndPoint + "cash_out";

export async function addWallet(data) {
  return await axios({
    method: "post",
    url: addWalletUrl,
    data: data,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: userToken,
    },
  });
}

export async function getWallet() {
  return await axios({
    method: "get",
    url: getWalletUrl,
    headers: {
      "Content-Type": "application/json",
      Authorization: userToken,
    },
  });
}

export async function cashOut(data) {
  return await axios({
    method: "post",
    url: cashoutUrl,
    data: data,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: userToken,
    },
  });
}
