import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import RenderProducts from "./Catalog/RenderProducts";
import { products } from "../../../DummyData/DummyData";
import { getCatalogData } from "../../../services/shopServices";
import { useSelector } from "react-redux";

import { imageEndPoint } from "../../../config.json";
const Container = Styled.div`
padding: 50px 30px;
border-radius: 0;
background: #F5F8FD;
min-height: 80%;
@media (max-width: 960px){
    padding: 20px 10px;
}
`;
const FlexContainer = Styled.div`
display: flex;
width: 100%;
justify-content:${(p) => (p.justify ? p.justify : "space-between")};
`;

const BrandSlogan = Styled.div`
    font-size: 18px; 
    color: #979FAA;
    
`;

export default function Catalog(props) {
  let [dumpData, setDumpData] = useState([]);
  const selectedShopId = useSelector(
    (state) => state.shopPreview.selectedShopId
  );
  let getCatalog = async () => {
    let { data } = await getCatalogData(selectedShopId);
    console.log(data);
    let result = data.Products;
    let shopResult = data.ShopDetails;
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
        shopId: shopResult[0].shop,
        shopName: shopResult[0].shop_name,
        shopBio: shopResult[0].shop_bio,
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
      <div style={{ marginBottom: "0px", position: "relative" }}>
        <FlexContainer>
          <div
            style={{
              width: "100px",
              right: "10px",
              top: "-30px",
              position: "absolute",
            }}
          >
            <FlexContainer>
              <BrandSlogan style={{ color: "#31BDF4", cursor: "pointer" }}>
                All
              </BrandSlogan>
              <BrandSlogan style={{ cursor: "pointer" }}>New</BrandSlogan>
            </FlexContainer>
          </div>
        </FlexContainer>
      </div>
      <RenderProducts products={dumpData} />
    </Container>
  );
}
