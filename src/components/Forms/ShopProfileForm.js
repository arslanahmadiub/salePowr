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
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import { selectedShopId, shopPreview } from "../../action/shopAction";
import { saveShopData } from "../../action/shopAction";
import { shopPreviewDialog } from "../../action/shopAction";
import { clearFormData } from "../../action/shopAction";
import { clearFilePicker } from "../../action/shopAction";
import { makeStyles } from "@material-ui/core/styles";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { getOnlyShopDetail } from "../../services/shopServices";
import { editShopDetail } from "../../services/shopServices";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const ShopProfileForm = (props) => {
  let userToken = localStorage.getItem("token");

  const classes = useStyles();
  const [loading, setLoading] = useState(false);
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

  const [open, setOpen] = React.useState(false);
  const slectedShop = useSelector((state) => state.shopPreview.selectedShopId);

  let getShopDetailsOnly = async () => {
    try {
      setLoading(true);
      let { data } = await getOnlyShopDetail(slectedShop);
      setLoading(false);

      if (data.Success) {
        let newObject = data.ShopDetails[0];

        let dataObject = {
          name: newObject.shop_name,
          type: newObject.business_type,
          address: newObject.address,
          phone: newObject.business_phone,
          email: newObject.business_email,
          twitter: newObject.twitter_link,
          facebook: newObject.facebook_link,
          instagram: newObject.instagram_link,
          bio: newObject.shop_bio,
          city: newObject.city,
          country: newObject.country,
          whatsapp: newObject.whatsapp_number,
        };
        setState(dataObject);
      }
    } catch (error) {
      setLoading(false);
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
    }
  };

  useEffect(() => {
    if (slectedShop) {
      getShopDetailsOnly();
    }
  }, [slectedShop]);

  const handleClose = () => {
    setOpen(false);
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

    if (slectedShop.length > 0) {
      let {
        address,
        bio,
        city,
        country,
        email,
        facebook,
        instagram,
        name,
        phone,
        twitter,
        type,
        whatsapp,
      } = state;

      let form_data = new FormData();
      form_data.append("shop_name", name);
      form_data.append("business_type", type);
      form_data.append("country", country);
      form_data.append("city", city);
      form_data.append("address", address);
      form_data.append("business_phone", phone);
      form_data.append("business_email", email);
      form_data.append("shop_bio", bio);
      // form_data.append("shop_logo", logoFile);
      form_data.append("instagram_link", instagram);
      form_data.append("facebook_link", facebook);
      form_data.append("twitter_link", twitter);
      form_data.append("whatsapp_number", whatsapp);

      try {
        setLoading(true);
        let { data } = await editShopDetail(slectedShop, form_data, userToken);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    } else {
      setOpen(true);
    }
  };

  let agreeWithShopProfile = () => {
    setOpen(false);

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
    <>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
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
            <Button type="submit">{slectedShop ? "Save" : "Create"}</Button>
            <br />
          </Grid>
        </Grid>
      </form>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Shop Create Confirmation..."}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure to create a shop with this information.....
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={agreeWithShopProfile} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default ShopProfileForm;
