import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import RenderProducts from "./Catalog/RenderProducts";
import { products } from "../../../DummyData/DummyData";
import { getCatalogData } from "../../../services/shopServices";
import axios from "axios";
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

  let getCatalog = async () => {
    let { data } = await getCatalogData();
    let result = data.Products;

    let freshData = [];
    result.map((item) => {
      let newData = {
        name: item.product_name,
        image:
          "https://medilifefood.com/wp-content/uploads/2019/10/purepng.com-red-appleappleapplesfruitsweet-1701527180174lrnig-930x1024.png",
        description: item.description,
        price: item.price,
        tiles: {
          first_tile:
            "https://medilifefood.com/wp-content/uploads/2019/10/purepng.com-red-appleappleapplesfruitsweet-1701527180174lrnig-930x1024.png",
        },
        delivery: "24hrs",
      };
      freshData.push(newData);
    });
    setDumpData(freshData);
  };
  useEffect(() => {
    getCatalog();
  }, []);
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
