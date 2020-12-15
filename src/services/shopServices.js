import axios from "axios";

import { apiEndPoint } from "../config.json";

let createShopUrl = apiEndPoint + "create_shop";
let addProductUrl = apiEndPoint + "add_product";
let addProductDeliveryTermUrl = apiEndPoint + "add_product_delivery_terms/";
let userToken = "fde1ecb257987d6f43d35391eb58f439c8c4290b";

let shopDetailUrl = apiEndPoint + "get_shop_details/nb3llsmwcn";

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

export async function productDeliveryTerm(data, shopId) {
  return await axios({
    method: "post",
    url: addProductDeliveryTermUrl + shopId,
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
