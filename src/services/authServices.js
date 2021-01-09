import axios from "axios";

import { apiEndPoint } from "../config.json";

let createUserUrl = apiEndPoint + "create_user";
let loginUserUrl = apiEndPoint + "login";
let completeUserProfileUrl = apiEndPoint + "complete_profile";
let getUserDetailUrl = apiEndPoint + "get_user_details";
// let userToken = "92c6544f868181b32ad25533fc3633ec6d450d77";
let userToken = localStorage.getItem("token");

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

export async function getFullUserDetails() {
  return await axios({
    method: "get",
    url: getUserDetailUrl,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: userToken,
    },
  });
}
