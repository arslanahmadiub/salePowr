import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Input from "../CustomComponents/Input";
import TextArea from "../CustomComponents/TextArea";
import Button from "../CustomComponents/Button";
import MiniFilePicker from "../CustomComponents/MiniFilePicker";
import Select from "../CustomComponents/Select";
import FlexContainer from "../CustomComponents/FlexContainer";
import { Switch } from "antd";
import { DataContext } from "../../contexts/DataContext";
import { WalletContext } from "../../contexts/WalletContext";
import { productDeliveryTerm } from "../../services/shopServices";
import { addProduct } from "../../services/shopServices";
import { showLoading } from "../../action/shopAction";
import { useDispatch } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import DeliveryTerms from "./DeliveryTerms";

const ImageContainer = Styled.div`
    height: 100px;
    border: 1px grey dashed;
    padding: 2px;
    position: relative;
`;

export default function AddProductForm(props) {
  const [state, setState] = React.useState({ delivery: "24hrs" });
  let dispatch = useDispatch();
  let [loading, setLoading] = useState(false);
  let [deliveryTermNumber, setDeliveryTermNumber] = useState([1]);
  const [cityLocationData, setCityLocationData] = useState([]);
  const [imagesData, setImagesData] = useState([]);

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
  };

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

  const processWidrawal = async (event) => {
    event.preventDefault();
    let form_data = new FormData();
    await form_data.set("shop", "b98vmyx4sk");
    await form_data.set("product_name", productName);
    await form_data.set("description", productDescription);
    await form_data.set("price", productPrice);
    imagesData.forEach((item, index) => {
      form_data.append(index, item);
    });

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

    // let deliveryTerms = [];
    // let dataObject = {
    //   delivery_country: productCountry,
    //   delivery_location: productCity,
    //   delivery_price: productPrice,
    // };
    // deliveryTerms.push(dataObject);
    // setLoading(true);

    // clearForm();

    let { data } = await addProduct(form_data);
    console.log(data);
    if (data.Success) {
      let productId = data.ID;

      let finalData = {
        product_id: productId,
        delivery_terms: newDeliveryTerm,
      };
      try {
        let result = await productDeliveryTerm(finalData);
        console.log(result);
        setLoading(false);
      } catch (ex) {
        if (ex.response) {
          console.log(ex.response.data);
        }
      }
    }
    setLoading(false);

    // console.log(imagesData);
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

  let onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const loadingStyle = {
    zIndex: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(46, 5, 5, 0.44)",
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: "0",
    left: "0",
  };

  const unLoadingStyle = {
    zIndex: -50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(46, 5, 5, 0.44)",
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: "0",
    left: "0",
  };
  return (
    <div>
      <form
        onSubmit={processWidrawal}
        style={{ paddingBottom: "60px", borderBottom: "0.5 solid grey" }}
      >
        <Grid container direction="row" spacing={4}>
          <Grid item xs={12}>
            <MiniFilePicker getFiles={(value) => getImages(value)} />
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
                  <div style={loading ? loadingStyle : unLoadingStyle}>
                    <CircularProgress color="inherit" />
                  </div>
                  <Grid item xs={12}>
                    <Input
                      placeholder="Price"
                      label="Price"
                      required
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
              />
            );
          })}

          {/* here is delivery Terms */}

          <Grid item xs={12}>
            <FlexContainer>
              <div>Note: Powrsale service charge is 5%</div>
              <div style={{ fontWeight: "600", fontSize: "22px" }}>
                {`${currency} 0`}
              </div>
            </FlexContainer>

            <FlexContainer>
              <div style={{ fontWeight: 600, fontSize: "24px" }}>
                Total amount payable
              </div>
              <div style={{ fontWeight: "600", fontSize: "24px" }}>
                {`${currency} 0`}
              </div>
            </FlexContainer>
            <hr />
            <p>Also share on social media</p>
            <FlexContainer>
              <span>Instagram</span>
              <Switch size="small" onChange={ToggleInstagram} />
            </FlexContainer>
            <FlexContainer>
              <span>Facebook</span>
              <Switch size="small" onChange={ToggleFacebook} />
            </FlexContainer>
            <FlexContainer>
              <span>Twitter</span>
              <Switch size="small" onChange={ToggleTwitter} />
            </FlexContainer>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button type="submit">SEND REQUEST</Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
