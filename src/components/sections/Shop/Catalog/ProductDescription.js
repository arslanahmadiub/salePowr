import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import companyLogo from "../../../../assets/images/company-logo.png";
import Styled from "styled-components";
import Button from "../../../CustomComponents/Button";

import ShopBrand, { ShopBrandMobile } from "./ShopBrand";
import { Security } from "@material-ui/icons";
import { Hidden } from "@material-ui/core";
import CustomLink from "../../../CustomComponents/CustomLink";
import { getProductDetail } from "../../../../services/shopServices";
import { imageEndPoint } from "../../../../config.json";
import move from "lodash-move";

import { useSelector } from "react-redux";

const Container = Styled.div`
    background: #F5F8FD;
    padding: 0 15px 0px 15px;
    min-height: 100vh;
`;
const DetailsContainer = Styled.div`
    background: #F5F8FD;
    padding: 0px 0;
    min-height: 50vh;
`;

const ProductName = Styled.div`
    font-size: 30px;
    font-weight: 600;
    margin: 20px 0;
`;
const Description = Styled.div`
    font-size: 14px;
    font-weight: normal;
`;
const Price = Styled.div`
    font-size: 20px;
    font-weight: 600;
    margin: 30px 0;
`;
const Delivery = Styled.div`
    font-size: 20px;
    font-weight: 600;
    margin-top: 20px;
`;

const TiledImage = Styled.img`
    height: 100px;
    width: 100px;
    background: #FFFFFF;
    border-radius: 15px;
    margin: auto;
    padding: 10px;
    @media (max-width: 960px){
        height: 80px;
        width: 80px;
        padding: 5px;
    }
`;

const CoverImage = Styled.img`
 
    max-width:300px;
    max-height:300px;
    min-width:300px;
    min-height:300px;
    width: auto;
  height: auto;
    background: #FFFFFF;
    border-radius: 15px;
    //margin: 0 0 0 5px;
    padding: 15px;
    @media (max-width: 960px){
      max-width:300px;
      max-height:300px;
      width: auto;
    height: auto;
    }
`;

const CopyRight = Styled.div`
    padding: 15px 0;
    border-top: 0.5px solid #979FAA;
    text-align: center;
`;

export default function ProductDescription({
  description,
  image,
  price,
  tiles,
  delivery,
  name,
  data,

  ...props
}) {
  let handelBuyNow = () => {
    props.updateDialog(true);
    props.updateValue(newData);
  };
  const [productDetail, setproductDetail] = useState(null);
  const [sideUrl, setsideUrl] = useState(null);
  const shopIds = useSelector((state) => state.shopPreview.shopIdCollections);
  const [userWithOwnShop, setUserWithOwnShop] = useState(false);

  useEffect(() => {
    getDetailData();
  }, []);

  useEffect(() => {
    findShopId();
  }, [productDetail]);

  // if (productDetail !== null && productDetail.length > 0) {
  //
  // }

  let findShopId = () => {
    if (productDetail !== null && productDetail.length > 0) {
      let result = shopIds.filter(
        (item) => item.shop === productDetail[0].shop_id
      );
      if (result.length > 0) {
        setUserWithOwnShop(true);
      } else {
        setUserWithOwnShop(false);
      }
    }
  };

  let getDetailData = async () => {
    let result = await getProductDetail(data.productId);

    setproductDetail(result.data.Details);

    let sideImageUrl = [];

    result.data.Details[0].Images.map((item, index) => {
      sideImageUrl.push(imageEndPoint + item.image);
    });
    setsideUrl(sideImageUrl);
  };
  let newData = {
    delivery: "24hrs",
    description: productDetail !== null ? productDetail[0].description : "",
    price: productDetail !== null ? productDetail[0].price : "",
    productId: productDetail !== null ? productDetail[0].product : "",
    shop_id: productDetail !== null ? productDetail[0].shop_id : "",
    name: productDetail !== null ? productDetail[0].product_name : "",
  };

  const [userAvailability, setUserAvailability] = useState(false);

  let verifyUser = () => {
    let user = localStorage.getItem("token");
    if (user !== null && user.length > 0) {
      setUserAvailability(true);
    } else {
      setUserAvailability(false);
    }
  };
  useEffect(() => {
    verifyUser();
  }, []);

  let handelTiledImage = (item, index) => {
    let newArray = [...sideUrl];

    let arr = move(newArray, index, 0);
    setsideUrl(arr);
  };

  return (
    <Container>
      <div>
        <Grid container direction="row" spacing={0}>
          <Grid item xs={4} sm={2} md={2}>
            <Grid container direction="column" spacing={2}>
              {sideUrl !== null
                ? sideUrl.map((item, index) => {
                    if (index === 0) {
                      return null;
                    } else {
                      return (
                        <Grid item key={index}>
                          <TiledImage
                            src={item}
                            style={{ cursor: "pointer" }}
                            onClick={() => handelTiledImage(item, index)}
                          />
                        </Grid>
                      );
                    }
                  })
                : null}
            </Grid>
          </Grid>
          <Grid item xs={8} md={4}>
            {sideUrl !== null && sideUrl.length > 0 ? (
              <CoverImage
                // src={imageEndPoint + productDetail[0].Images[0].image}
                src={sideUrl[0]}
                alt="First tile"
              />
            ) : null}
          </Grid>
          <Grid item xs={12} md={5}>
            <DetailsContainer>
              <Grid container direction="column" spacing={0}>
                <Grid item xs={12}>
                  {/* <ProductName>{name && name}</ProductName> */}
                  <ProductName>{data.name}</ProductName>
                </Grid>
                <Grid item xs={12}>
                  {/* <Description>{description && description}</Description> */}
                  <Description>{data.description}</Description>
                </Grid>
                <Grid item xs={12}>
                  {/* <Price>GHS {price && price}</Price> */}
                  <Price>GHS {data.price}</Price>
                </Grid>
                <Grid item xs={12} sm={2}></Grid>
                <Grid container direction="row">
                  <Grid item xs={12} sm={4}>
                    {userAvailability && userWithOwnShop === false ? (
                      <Button onClick={handelBuyNow}>Buy Now</Button>
                    ) : (
                      <Button disable faded>
                        Buy Now
                      </Button>
                    )}
                  </Grid>
                  {/* <Button onClick={handelBuyNow}>Buy Now</Button> */}
                </Grid>
                <br />
                <Grid item xs={12}>
                  {userAvailability ? null : (
                    <p style={{ fontSize: "15px" }}>
                      Please <a href="/"> Login</a> Or{" "}
                      <a href="/">Create Account</a> To Buy This Product
                    </p>
                  )}
                </Grid>
                {/* <Grid item xs={12}>
                  {userWithOwnShop ? (
                    <p style={{ fontSize: "15px", color: "red" }}>
                      You are not able to purchase from your own shop...
                    </p>
                  ) : null}
                </Grid> */}
              </Grid>
              <Grid item xs={12}>
                <Delivery>Delivery Applicable</Delivery>
              </Grid>
              <Grid item xs={12}>
                {/* <Description>{delivery && delivery}</Description> */}
                <Description>Yes, Price based on location</Description>
              </Grid>
            </DetailsContainer>
          </Grid>
        </Grid>
      </div>

      <div style={{ borderTop: "0.5px solid #979FAA" }}>
        <Hidden smDown>
          <ShopBrand
            logo={
              productDetail !== null
                ? imageEndPoint + productDetail[0].Images[0].image
                : ""
            }
            name={props.shopNameData && props.shopNameData}
            slogan={data.shopBio}
            shopid={
              productDetail !== null ? "#" + productDetail[0].shop_id : ""
            }
          />
        </Hidden>
        <Hidden mdUp>
          <ShopBrandMobile
            logo={companyLogo}
            name={"GoPare"}
            slogan={"Electronic"}
            shopid={
              productDetail !== null ? "#" + productDetail[0].shop_id : ""
            }
          />
        </Hidden>
      </div>

      <Hidden smDown>
        <CopyRight>
          <Grid container direction="row" spacing={5}>
            <Grid item xs={6} md={2}>
              <CustomLink>Terms {"&"} </CustomLink>
              <CustomLink>Conditions</CustomLink>
            </Grid>
            <Grid item xs={12} md={7}>
              <Security style={{ color: "#31BDF4", lineHeight: "16px" }} /> This
              purchase is protected by{" "}
              <a href="https://powrsale.com">Powrsale.com.</a> Your funds are
              escrow protected
            </Grid>
            <Grid item xs={6} md={3}>
              <CustomLink>Create your Profile</CustomLink>
            </Grid>

            <Grid item xs={12} md={4}></Grid>
          </Grid>
        </CopyRight>
      </Hidden>

      <Hidden mdUp>
        <CopyRight>
          <Grid container direction="row" spacing={5}>
            <Grid item xs={12} md={7}>
              <Security style={{ color: "#31BDF4", lineHeight: "16px" }} /> This
              purchase is protected by
              <a href="https://powrsale.com">Powrsale.com.</a> Your funds are
              escrow protected
            </Grid>

            <Grid item xs={6} md={2}>
              <CustomLink>Terms {"&"} </CustomLink>
              <CustomLink>Conditions</CustomLink>
            </Grid>

            <Grid item xs={6} md={3}>
              <CustomLink>Create your Profile</CustomLink>
            </Grid>

            <Grid item xs={12} md={4}></Grid>
          </Grid>
        </CopyRight>
      </Hidden>
    </Container>
  );
}
