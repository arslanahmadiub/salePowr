import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import PublicShopDesktop from "./PublicShopDesktop";
import PublicShopMobile from "./PublicShopMobile";
import { Hidden } from "@material-ui/core";
import RenderProducts from "../Shop/Catalog/RenderProducts";
import { getCatalogData } from "../../../services/shopServices";
import { imageEndPoint } from "../../../config.json";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const Container = Styled.div`
padding: 50px 30px;
border-radius: 0;
background: #F5F8FD;
min-height: 80%;
@media (max-width: 960px){
    padding: 20px 10px;
}
`;

const PublicShop = () => {
  let id = window.location.href;

  let shopId = id.slice(id.lastIndexOf("/") + 1, id.length);

  let [dumpData, setDumpData] = useState([]);
  const selectedShopId = useSelector(
    (state) => state.shopPreview.selectedShopId
  );

  let getCatalog = async () => {
    let { data } = await getCatalogData(shopId);

    let result = data.Products;

    let freshData = [];
    result.map((item) => {
      let newData = {
        name: item.product_name,
        image:
          item.thumbnail.length > 0
            ? imageEndPoint + item.thumbnail[0].image
            : "",
        description: item.description,
        price: item.price,
        tiles: {
          first_tile: "",
        },
        delivery: "24hrs",
        productId: item.product,
      };
      freshData.push(newData);
    });
    setDumpData(freshData);
  };
  useEffect(() => {
    getCatalog();
  }, [selectedShopId]);

  return (
    <Container>
      <Hidden smDown>
        <PublicShopDesktop />
      </Hidden>

      <Hidden mdUp>
        <PublicShopMobile />
      </Hidden>
      <div style={{ padding: "30px" }}>
        <RenderProducts products={dumpData} />
      </div>
    </Container>
  );
};

export default PublicShop;
