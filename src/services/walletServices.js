import axios from "axios";
import { apiEndPoint } from "../config.json";

// let userToken = "92c6544f868181b32ad25533fc3633ec6d450d77";
let userToken = localStorage.getItem("token");

let addWalletUrl = apiEndPoint + "add_wallet";
console.log(addWalletUrl);

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
