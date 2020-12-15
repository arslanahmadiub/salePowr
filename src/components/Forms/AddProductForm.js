import React, { useState } from "react";
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

  const processWidrawal = async (event) => {
    event.preventDefault();
    let form_data = new FormData();
    form_data.append("shop", "nb3llsmwcn");
    form_data.append("product_name", productName);
    form_data.append("description", productDescription);
    form_data.append("price", productPrice);

    let deliveryTerms = [];
    let dataObject = {
      delivery_country: productCountry,
      delivery_location: productCity,
      delivery_price: productPrice,
    };
    deliveryTerms.push(dataObject);
    setLoading(true);
    clearForm();
    let { data } = await addProduct(form_data);
    if (data.Success) {
      let productId = data.ID;
      let result = await productDeliveryTerm(deliveryTerms, productId);
      setLoading(false);
    }
    setLoading(false);
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
            <ImageContainer>
              <MiniFilePicker />
            </ImageContainer>
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
          <Grid item xs={12} md={4}>
            <Input
              placeholder="Enter a city"
              label="City/Location"
              rows={5}
              required
              name="productCity"
              onChange={onChange}
              value={productCity}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Select
              list={currencies}
              placeholder="Currency"
              label="Currency"
              rows={5}
              required
              name="productCurrency"
              onChange={onChange}
              value={productCurrency}
            />
          </Grid>

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
