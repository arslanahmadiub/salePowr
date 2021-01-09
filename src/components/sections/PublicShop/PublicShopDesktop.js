import React from "react";
import { Grid, Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CompanyLogoImage from "../../../assets/images/company-logo.png";
import { Facebook, Instagram, Twitter, WhatsApp } from "@material-ui/icons";
import Styled from "styled-components";

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
const Brand = Styled.div`
    padding: 15px 0;
`;

const BrandName = Styled.div`
    font-size: 30px;
    font-weight: bold;
    color: #010101;
`;

const BrandSlogan = Styled.div`
    font-size: 18px; 
    color: #979FAA;
    
`;

const ShopId = Styled.div`
    color: #31BDF4;
    font-size: 12px;
`;

const BrandBrief = Styled.div`
    font-size: 16px;
    color: #010101;
    padding: 15px 0 30px 0;
    display:flex;
    width:100vw;
`;

const ContactLabel = Styled.div`
    font-size: 14px;
    color: #979FAA;
    padding: 15px 0 0 0;
`;
const Contact = Styled.div`
    font-size: 16px;
    color: #010101;
    font-weight: 600;
    padding:  0 0 25px 0;
`;

const CompanyLogo = Styled.img`
    display: block;
    height: 180px;
    width: 200px;
    margin: 0 15px 0 0;    
`;

// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: "inline-block",
//     margin: "0 2px",
//     transform: "scale(0.8)",
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

const PublicShopDesktop = (props) => {
  // const classes = useStyles();
  // const {
  //   logo,
  //   name,
  //   brief,
  //   social,
  //   contacts,
  //   description,
  //   shopId,
  // } = props.data;
  let handelFacebook = () => {
    console.log("Facebook Clcik");
    console.log(props);
  };
  return (
    <>
      <div
        style={{
          padding: "30px",
          borderBottom: "0.5px solid #979FAA",
        }}
      >
        <FlexContainer
          style={{ display: "flex", width: "90vw", overflow: "hidden" }}
        >
          <CompanyLogo src={CompanyLogoImage} />
          <div>
            <FlexContainer
              justify="space-between"
              style={{ display: "flex", width: "50%", overFlow: "hidden" }}
            >
              <Brand>
                {/* <BrandName>{name && name}</BrandName> */}
                <BrandName>Lahore Products</BrandName>

                <div
                  style={{
                    display: "flex",
                    width: "70vw",
                    justifyContent: "space-between",
                  }}
                >
                  <BrandSlogan>We sale Electornic Products</BrandSlogan>
                  {/* {showShopId()} */}
                  <ShopId style={{ fontSize: "16px" }}>Shop ID: 1578899</ShopId>
                </div>
              </Brand>
            </FlexContainer>
            <BrandBrief>Retail Marketing Services...</BrandBrief>

            <Grid
              container
              direction="row"
              spacing={1}
              style={{
                display: "flex",
                width: "100vw",
                justifyContent: "space-around",
                paddingRight: "20%",
                overflow: "hidden",
              }}
            >
              <Grid item xs={6} md={3}>
                <ContactLabel>Address</ContactLabel>

                <Contact>Civic Center Lahore</Contact>
                {/* <Contact>{contacts && contacts.address}</Contact> */}
              </Grid>
              <Grid item xs={6} md={3}>
                <ContactLabel>Phone</ContactLabel>

                <Contact>03023338991</Contact>
                {/* <Contact>{contacts && contacts.phone}</Contact> */}
              </Grid>
              <Grid item xs={6} md={3}>
                <ContactLabel>Email</ContactLabel>

                {/* <Contact>{contacts && contacts.email}</Contact> */}
                <Contact>arslanahmadiub@gamil.com</Contact>
              </Grid>
              <Grid item xs={6} md={3}>
                <ContactLabel>Social</ContactLabel>

                <Contact>
                  <FlexContainer style={{ width: "80px" }}>
                    <Facebook
                      style={{ width: "20px" }}
                      onClick={handelFacebook}
                    />
                    <Twitter style={{ width: "20px" }} />
                    <Instagram style={{ width: "20px" }} />
                    <WhatsApp style={{ width: "20px" }} />
                  </FlexContainer>
                </Contact>
              </Grid>
            </Grid>
          </div>
        </FlexContainer>
      </div>
    </>
  );
};

export default PublicShopDesktop;
