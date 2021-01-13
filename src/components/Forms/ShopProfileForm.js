import React, { useState, useEffect } from "react";
import TextArea from "../CustomComponents/TextArea";
import Button from "../CustomComponents/Button";
import Input from "../CustomComponents/Input";
import Select from "../CustomComponents/Select";
import FilePicker from "../CustomComponents/FilePicker";
import { DataContext } from "../../contexts/DataContext";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { apiEndPoint } from "../../config.json";
import { shopPreview } from "../../action/shopAction";
import { saveShopData } from "../../action/shopAction";
import { shopPreviewDialog } from "../../action/shopAction";
import { clearFormData } from "../../action/shopAction";
import { clearFilePicker } from "../../action/shopAction";

let createShopEndpoint = apiEndPoint + "create_shop";

const ShopProfileForm = (props) => {
  const [state, setState] = useState({
    name: "",
    type: "",
    address: "",
    phone: "",
    email: "",
    twitter: "",
    facebook: "",
    instagram: "",
    bio: "",
    city: "",
    country: "",
    whatsapp: "",
  });
  let [data, setData] = useState();
  const {
    name,
    type,
    address,
    phone,
    email,
    twitter,
    facebook,
    instagram,
    bio,
    city,
    country,
    whatsapp,
  } = state;

  let clearForm = () => {
    setState({
      name: "",
      type: "",
      address: "",
      phone: "",
      email: "",
      twitter: "",
      facebook: "",
      instagram: "",
      bio: "",
      city: "",
      country: "",
      whatsapp: "",
    });
    dispatch(clearFilePicker(true));
  };

  const { countryList, businessTypes } = React.useContext(DataContext);
  const fileData = useSelector((state) => state.logoImage.logo);
  const formData = useSelector((state) => state.shopPreview.formData);

  const dispatch = useDispatch();

  useEffect(() => {
    if (formData) {
      clearForm();
      dispatch(clearFormData(false));
    }
  }, [formData]);

  const saveShopProfile = async (event) => {
    event.preventDefault();

    const brandDetails = {
      logo: fileData,
      name: name,
      brief: bio,
      social: { fb: facebook, ig: instagram, wp: whatsapp, tt: twitter },
      contacts: {
        phone: phone,
        email: email,
        address: address,
      },
      description: type,
      shopId: "",
    };
    dispatch(shopPreview(brandDetails));
    dispatch(shopPreviewDialog(true));
    dispatch(saveShopData(state));
  };

  let onChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  let handelLogoChange = (event) => {
    console.log(event);
  };

  let handelCheck = () => {
    console.log(props.fileName);
  };

  let handelImageUrl = () => {
    console.log(fileData);
    // var reader = new FileReader();
    // var url = reader.readAsDataURL(fileData);
    // reader.onloadend = function (e) {
    //   console.log(reader.result);
    // }.bind(this);
    // console.log(url); // Would see a path?
    // // TODO: concat files
    let newUrl = URL.createObjectURL(fileData);
    console.log(newUrl);
  };
  return (
    <form onSubmit={saveShopProfile}>
      <Grid container direction="row" spacing={5}>
        <Grid item xs={12}>
          <Grid container direction="row" spacing={5}>
            <Grid item xs={12} sm={6} md={4}>
              <Input
                id="name"
                value={name}
                onChange={onChange}
                type="text"
                placeholder="Enter shop name"
                label="Business/Shop name"
                required
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Select
                id="type"
                value={type}
                onChange={onChange}
                list={businessTypes}
                placeholder="Select Business Type"
                label="Business type"
                required
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Select
                id="country"
                value={country}
                onChange={onChange}
                list={countryList}
                placeholder="Select Country"
                label="Country"
                required
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Input
                id="city"
                value={city}
                onChange={onChange}
                type="text"
                placeholder="Enter city name"
                label="City"
                required
              />
            </Grid>

            <Grid item xs={12} md={8}>
              <Input
                id="address"
                value={address}
                onChange={onChange}
                type="text"
                placeholder="Enter Shop Address"
                label="Address"
                required
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={5} direction="row">
            <Grid item xs={12} sm={6}>
              <Input
                id="phone"
                value={phone}
                onChange={onChange}
                type="tel"
                placeholder="Enter phone number"
                label="Business Phone"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                id="email"
                value={email}
                onChange={onChange}
                type="email"
                placeholder="Enter Email address"
                label="Business email"
                required
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={5} direction="row">
            <Grid item xs={12} md={6}>
              <TextArea
                id="bio"
                value={bio}
                onChange={onChange}
                placeholder="Enter shop bio"
                label="Shop bio"
                required
                rows={3}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FilePicker id="file" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={5} direction="row">
            <Grid item xs={12} sm={6} md={3}>
              <Input
                id="instagram"
                value={instagram}
                onChange={onChange}
                placeholder="Enter Instagram username"
                onChange={onChange}
                name="instagram"
                label="Instagram"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Input
                id="facebook"
                value={facebook}
                onChange={onChange}
                placeholder="Enter Facebook username"
                label="Facebook"
                onChange={onChange}
                name="facebook"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Input
                id="twitter"
                value={twitter}
                onChange={onChange}
                placeholder="Enter Twitter username"
                label="Twitter"
                onChange={onChange}
                name="twitter"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Input
                id="whatsapp"
                value={whatsapp}
                onChange={onChange}
                placeholder="Enter Whatsapp number"
                type="tel"
                onChange={onChange}
                name="whatsapp"
                label="Whatsapp"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          style={{
            display: "flex",
            width: "100vw",
            justifyContent: "flex-end",
            paddingRight: "3%",
            paddingBottom: "3%",
          }}
        >
          <Button type="submit">Create</Button>
          <br />
        </Grid>
      </Grid>
    </form>
  );
};

export default ShopProfileForm;
