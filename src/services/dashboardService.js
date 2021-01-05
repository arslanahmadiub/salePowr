import axios from "axios";
import { apiEndPoint } from "../config.json";

// let userToken = "92c6544f868181b32ad25533fc3633ec6d450d77";
let userToken = localStorage.getItem("token");

let dashboardUrl = apiEndPoint + "get_dashboard";

export async function getDashboardData() {
  return await axios({
    method: "get",
    url: dashboardUrl,
    headers: {
      Authorization: userToken,
    },
  });
}
