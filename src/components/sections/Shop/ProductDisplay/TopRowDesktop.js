import { Grid } from "@material-ui/core";
import { Facebook, Instagram, Twitter, WhatsApp } from "@material-ui/icons";
import React, { useEffect } from "react";
import Styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

const TopRowDesktop = (props) => {
  const {
    logo,
    name,
    brief,
    social,
    contacts,
    description,
    shopId,
  } = props.data;

  let handelFacebook = () => {
    console.log("Facebook Clcik");
    console.log(props);
  };

  useEffect(() => {
    showSucceessTag();
  }, []);

  let showShopId = () => {
    if (props.data.shopId.length > 0) {
      return (
        <ShopId style={{ fontSize: "16px" }}>
          Shop ID: {shopId && shopId}
        </ShopId>
      );
    }
  };
  const emailToast = () => {
    toast.success("Your Shop Created Successfully...", {
      position: "top-right",
      autoClose: 5000,
      draggable: false,
    });
  };
  let showSucceessTag = () => {
    if (props.data.shopId.length > 0) {
      return (
        // <div
        //   style={{ display: "flex", width: "100%", justifyContent: "center" }}
        // >
        //   <h1 style={{ color: "#28A745" }}>Shop Created Successfully...</h1>
        // </div>
        emailToast()
      );
    }
  };

  return (
    <>
      <div
        style={{
          marginBottom: "30px",
          borderBottom: "0.5px solid #979FAA",
        }}
      >
        <FlexContainer
          style={{ display: "flex", width: "90vw", overflow: "hidden" }}
        >
          <CompanyLogo src={logo && logo} />
          <div>
            <FlexContainer
              justify="space-between"
              style={{ display: "flex", width: "50%", overFlow: "hidden" }}
            >
              <Brand>
                <BrandName>{name && name}</BrandName>

                <div
                  style={{
                    display: "flex",
                    width: "70vw",
                    justifyContent: "space-between",
                  }}
                >
                  <BrandSlogan>{description && description}</BrandSlogan>
                  {showShopId()}
                </div>
              </Brand>
            </FlexContainer>
            <BrandBrief>{brief && brief}</BrandBrief>

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

                <Contact>{contacts && contacts.address}</Contact>
              </Grid>
              <Grid item xs={6} md={3}>
                <ContactLabel>Phone</ContactLabel>

                <Contact>{contacts && contacts.phone}</Contact>
              </Grid>
              <Grid item xs={6} md={3}>
                <ContactLabel>Email</ContactLabel>

                <Contact>{contacts && contacts.email}</Contact>
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
      <ToastContainer />
    </>
  );
};

export default TopRowDesktop;
