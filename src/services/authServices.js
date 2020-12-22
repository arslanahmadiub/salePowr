import axios from "axios";

import { apiEndPoint } from "../config.json";

let createUserUrl = apiEndPoint + "create_user";
let loginUserUrl = apiEndPoint + "login";
let completeUserProfileUrl = apiEndPoint + "complete_profile";
let userToken = "fde1ecb257987d6f43d35391eb58f439c8c4290b";

export async function createUser(data) {
  return await axios({
    method: "post",
    url: createUserUrl,
    data: data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export async function loginUser(data) {
  return await axios({
    method: "post",
    url: loginUserUrl,
    data: data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export async function completeUserProfile(data) {
  return await axios({
    method: "post",
    url: completeUserProfileUrl,
    data: data,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: userToken,
    },
  });
}
