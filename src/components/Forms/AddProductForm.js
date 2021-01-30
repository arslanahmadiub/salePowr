import React, { useState, useEffect, useRef } from "react";
import Styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Input from "../CustomComponents/Input";
import TextArea from "../CustomComponents/TextArea";
import Button from "../CustomComponents/Button";
import MiniFilePicker from "../CustomComponents/MiniFilePicker";
import Select from "../CustomComponents/Select";
import FlexContainer from "../CustomComponents/FlexContainer";

import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import { Switch } from "antd";
import { DataContext } from "../../contexts/DataContext";
import { WalletContext } from "../../contexts/WalletContext";
import { productDeliveryTerm } from "../../services/shopServices";
import { addProduct } from "../../services/shopServices";
import { showLoading } from "../../action/shopAction";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeliveryTerms from "./DeliveryTerms";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { LastIndexContext } from "antd/lib/space";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#31BDF4",
    background: "rgba(182,172,162,0.2)",
  },
}));

const ImageContainer = Styled.div`
    height: 100px;
    border: 1px grey dashed;
    padding: 2px;
    position: relative;
`;

const Container = Styled.div`
padding: 50px 30px;
border-radius: 0;
background: #F5F8FD;
min-height: 80%;
@media (max-width: 960px){
    padding: 20px 10px;
}
`;

export default function AddProductForm(props) {
  const [state, setState] = React.useState({ delivery: "24hrs" });
  const [clearImageData, setClearImageData] = useState(false);
  const shopIds = useSelector((state) => state.shopPreview.shopIdCollections);
  const [errorMessage, setErrorMessage] = useState(null);

  const classes = useStyles();

  let dispatch = useDispatch();
  let [loading, setLoading] = useState(false);
  let [deliveryTermNumber, setDeliveryTermNumber] = useState([1]);
  const [cityLocationData, setCityLocationData] = useState([]);
  const [imagesData, setImagesData] = useState([]);
  const [clearFormData, setClearFormData] = useState(false);
  const selectedShopId = useSelector(
    (state) => state.shopPreview.selectedShopId
  );
  let [data, setData] = useState({
    productName: "",
    productPrice: "",
    productDescription: "",
    productCountry: "",
    productCity: "",
    productCurrency: "",
    instaGram: false,
    facebook: false,
    twitter: false,
  });

  const { countryList, currencies } = React.useContext(DataContext);
  const { currency } = React.useContext(WalletContext);

  let {
    productName,
    productPrice,
    productDescription,
    productCountry,
    productCity,
    productCurrency,
    instaGram,
    facebook,
    twitter,
  } = data;

  useEffect(() => {
    if (facebook) {
      facebookClick();
    }
  }, [facebook]);

  useEffect(() => {
    if (twitter) {
      twitterClick();
    }
  }, [twitter]);

  let clearForm = () => {
    setData({
      productName: "",
      productPrice: "",
      productDescription: "",
      productCountry: "",
      productCity: "",
      productCurrency: "",
      instaGram: false,
      facebook: false,
      twitter: false,
    });
    setClearImageData(true);
    setDeliveryTermNumber([1]);
    setClearFormData(true);
    setClearFormData(false);
  };

  let shareAbleData =
    "Product Name = " +
    productName +
    "\n" +
    "Product Price = " +
    productPrice +
    "\n" +
    "Product Description = " +
    productDescription;

  useEffect(() => {
    getLocationData();
  }, [props.getData]);

  let addDeliveryItem = () => {
    let index = deliveryTermNumber.length;
    let newDeliveryTerm = [...deliveryTermNumber];
    newDeliveryTerm.push(index + 1);
    setDeliveryTermNumber(newDeliveryTerm);
  };
  let removeDeliveryItem = () => {
    let index = deliveryTermNumber.length;
    let newDeliveryTerm = [...deliveryTermNumber];
    newDeliveryTerm.splice(-1, 1);

    setDeliveryTermNumber(newDeliveryTerm);
  };
  let userToken = localStorage.getItem("token");

  const emailToast = () => {
    toast.success("Product Added!", {
      position: "top-right",
      autoClose: 5000,
      draggable: false,
    });
  };

  let facebookClick = () => {
    document.getElementById("facebookShare").click();
  };
  let twitterClick = () => {
    document.getElementById("twitterShare").click();
  };

  const processWidrawal = async (event) => {
    event.preventDefault();

    let form_data = new FormData();
    await form_data.set("shop", selectedShopId);
    await form_data.set("product_name", productName);
    await form_data.set("description", productDescription);
    await form_data.set("price", productPrice);
    if (imagesData) {
      imagesData.forEach((item, index) => {
        form_data.append(index, item);
      });
    }

    cityLocationData.splice(0, 1);
    let newDeliveryTerm = [];

    cityLocationData.map((item, index) => {
      let newData = {
        delivery_country: productCountry,
        delivery_location: item.locationCurrency.location,
        delivery_price: item.locationCurrency.currency,
      };
      newDeliveryTerm.push(newData);
    });

    setErrorMessage(null);
    setLoading(true);
    try {
      let { data } = await addProduct(form_data, userToken);

      if (data.Success) {
        let productId = data.ID;

        let finalData = {
          product_id: productId,
          delivery_terms: newDeliveryTerm,
        };
        try {
          let result = await productDeliveryTerm(finalData, userToken);
          emailToast();
          clearForm();
          setLoading(false);
        } catch (ex) {
          setLoading(false);
          setErrorMessage(
            <Alert variant="filled" severity="error">
              Some thing went wrong or server error...
            </Alert>
          );
        }
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage(
        <Alert variant="filled" severity="error">
          Some thing went wrong or server error...
        </Alert>
      );
    }
  };

  let getImages = (value) => {
    setImagesData(value);
  };
  useEffect(() => {
    getImages();
  }, [props.getFiles]);

  let getLocationData = (event, id) => {
    let data = cityLocationData;

    if (data.length > 0) {
      let newArray = data.filter(function (obj) {
        return obj.id !== id;
      });

      let newObject = {
        id: id,
        locationCurrency: event,
      };
      newArray.push(newObject);
      setCityLocationData(newArray);
    } else {
      let newData = [];
      let newObject = {
        id: id,
        locationCurrency: event,
      };
      newData.push(newObject);
      setCityLocationData(newData);
    }
  };

  let ToggleInstagram = (e) => {
    setData({ ...data, instaGram: e });
  };
  let ToggleFacebook = (e) => {
    setData({ ...data, facebook: e });
  };
  let ToggleTwitter = (e) => {
    setData({ ...data, twitter: e });
  };

  let handelSharing = () => {};

  let onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  // const loadingStyle = {
  //   zIndex: 50,
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   background: "rgba(46, 5, 5, 0.44)",
  //   width: "100%",
  //   height: "100%",
  //   position: "absolute",
  //   bottom: "0",
  //   left: "0",
  // };

  // const unLoadingStyle = {
  //   zIndex: -50,
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   background: "rgba(46, 5, 5, 0.44)",
  //   width: "100%",
  //   height: "100%",
  //   position: "absolute",
  //   bottom: "0",
  //   left: "0",
  // };
  let siteAddress = window.location.href;

  let finalUrl =
    siteAddress.slice(0, siteAddress.lastIndexOf("/") + 1) +
    "/shopPreview/" +
    selectedShopId;

  return (
    <>
      {shopIds.length < 1 || selectedShopId.length < 1 ? (
        <Container>
          <h2>
            Sorry!!! you don’t have any shop listed yet click on the
            <span style={{ color: "#31BDF4" }}> “Shop Profile” </span>tab to
            create shop. Once shop is created you can start sharing your shop
            link or product link.
          </h2>
        </Container>
      ) : (
        <div>
          <div
            // onSubmit={processWidrawal}
            style={{ paddingBottom: "60px", borderBottom: "0.5 solid grey" }}
          >
            <Grid container direction="row" spacing={4}>
              <Grid item xs={12}>
                {errorMessage && errorMessage}
              </Grid>

              <Grid item xs={12}>
                <MiniFilePicker
                  getFiles={(value) => getImages(value)}
                  clearImages={clearImageData}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={3} direction="row">
                  <Grid item xs={12} md={6}>
                    <Grid container spacing={2} direction="column">
                      <Grid item xs={12}>
                        <Input
                          placeholder="Enter product name"
                          label="Name of product"
                          required
                          name="productName"
                          onChange={onChange}
                          value={productName}
                        />
                      </Grid>

                      <Backdrop className={classes.backdrop} open={loading}>
                        <CircularProgress color="inherit" />
                      </Backdrop>

                      <Grid item xs={12}>
                        <Input
                          placeholder="Price"
                          label="Price"
                          required
                          type="number"
                          name="productPrice"
                          onChange={onChange}
                          value={productPrice}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextArea
                      placeholder="Enter description"
                      label="Description"
                      rows={5}
                      required
                      name="productDescription"
                      onChange={onChange}
                      value={productDescription}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <h4>Delivery Terms</h4>
              </Grid>
              <Grid item xs={12} md={4}>
                <Select
                  placeholder="Select country"
                  list={countryList}
                  label="Country"
                  rows={5}
                  required
                  name="productCountry"
                  onChange={onChange}
                  value={productCountry}
                />
              </Grid>
              <Grid item xs={12} md={8}></Grid>

              {deliveryTermNumber.map((item, index) => {
                return (
                  <DeliveryTerms
                    key={index}
                    itemIndex={index}
                    addItem={addDeliveryItem}
                    removeItem={removeDeliveryItem}
                    lengthOfItem={deliveryTermNumber}
                    getData={(value, value2) => getLocationData(value, value2)}
                    clearData={clearFormData}
                  />
                );
              })}

              <Grid item xs={12}>
                <hr />

                <p>Also share on social media</p>

                <FlexContainer>
                  <span>Facebook</span>
                  <FacebookShareButton
                    quote={shareAbleData}
                    url={finalUrl}
                    onClick={handelSharing}
                  >
                    <button
                      id="facebookShare"
                      onClick={facebookClick}
                      style={{ display: "none" }}
                    >
                      Facebook Share
                    </button>
                  </FacebookShareButton>
                  <Switch size="small" onChange={ToggleFacebook} />
                </FlexContainer>

                <FlexContainer>
                  <span>Twitter</span>

                  <TwitterShareButton
                    title="Here is description of Product"
                    via={shareAbleData}
                    url={finalUrl}
                  >
                    <button
                      id="twitterShare"
                      onClick={twitterClick}
                      style={{ display: "none" }}
                    >
                      Twitter Share
                    </button>
                  </TwitterShareButton>
                  <Switch size="small" onChange={ToggleTwitter} />
                </FlexContainer>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Button onClick={processWidrawal}>Add Product</Button>
              </Grid>
            </Grid>
          </div>
          <ToastContainer />
        </div>
      )}
    </>
  );
}
