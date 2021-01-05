import axios from "axios";
import { apiEndPoint } from "../config.json";

let createShopUrl = apiEndPoint + "create_shop";
let addProductUrl = apiEndPoint + "add_product";
let productDetail = apiEndPoint + "get_product_details/";
let addProductDeliveryTermUrl = apiEndPoint + "add_product_delivery_terms";
// let userToken = "92c6544f868181b32ad25533fc3633ec6d450d77";
let userToken = localStorage.getItem("token");

let shopDetailUrl = apiEndPoint + "get_shop_details/b98vmyx4sk";

export async function shopCreate(data) {
  return await axios({
    method: "post",
    url: createShopUrl,
    data: data,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: userToken,
    },
  });
}

export async function addProduct(data) {
  return await axios({
    method: "post",
    url: addProductUrl,
    data: data,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: userToken,
    },
  });
}

export async function productDeliveryTerm(data) {
  return await axios({
    method: "post",
    url: addProductDeliveryTermUrl,
    data: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: userToken,
    },
  });
}
export async function getCatalogData() {
  return await axios({
    method: "get",
    url: shopDetailUrl,
  });
}

export async function getProductDetail(id) {
  return await axios({
    method: "get",
    url: productDetail + id,
  });
}
