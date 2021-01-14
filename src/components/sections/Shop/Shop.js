import React, { useState, useEffect, useRef } from "react";
import Button from "../../CustomComponents/Button";
import ShopProfileForm from "../../Forms/ShopProfileForm";
import AddProductForm from "../../Forms/AddProductForm";
import Tabs from "../../CustomComponents/Tabs";
import Catalog from "./Catalog";
import CircularProgress from "@material-ui/core/CircularProgress";

import DesktopHeaderRow from "../../CustomComponents/DesktopHeaderRow";
import Grid from "@material-ui/core/Grid";
import { Dialog, DialogActions } from "@material-ui/core";
import ProductDisplay from "./ProductDisplay/ProductDisplay";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { shopPreviewDialog } from "../../../action/shopAction";
import { clearFormData } from "../../../action/shopAction";
import { shopCreate } from "../../../services/shopServices";
import { selectedShopId } from "../../../action/shopAction";
import { selectedShopName } from "../../../action/shopAction";
import { shopIdsAction } from "../../../action/shopAction";
import { getShopIds } from "../../../services/dashboardService";

export default function Shop(props) {
  // const [preview, togglePreview] = React.useState(false);
  const [publish, togglePublish] = React.useState(false);
  const [enable, setEnable] = useState(false);
  let [loading, setLoading] = useState(false);

  const [publishData, setPublishData] = useState({});
  const createShop = useSelector((state) => state.shopPreview.shopData);
  const selectedTabIndex = useSelector(
    (state) => state.shopPreview.selectedTab
  );
  const createShopData = useSelector((state) => state.shopPreview);
  const preview = useSelector((state) => state.shopPreview.preview);
  const logoFile = useSelector((state) => state.logoImage.logoFile);
  const logoUrl = useSelector((state) => state.logoImage.logo);
  const loadingComponent = useSelector(
    (state) => state.shopPreview.loadingDialog
  );

  let shopWidthRef = useRef();

  let dispatch = useDispatch();

  useEffect(() => {
    if (loadingComponent) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [loadingComponent]);
  const shopNameFromRedux = useSelector(
    (state) => state.shopPreview.selectedShop
  );
  useEffect(() => {
    shopsIdsCollections();
  }, []);

  let togglePreview = () => {
    dispatch(shopPreviewDialog(false));
  };
  let userToken = localStorage.getItem("token");
  let shopsIdsCollections = async () => {
    let { data } = await getShopIds(userToken);
    if (data.Success && data.Details.length > 0) {
      if (shopNameFromRedux.length < 1) {
        dispatch(shopIdsAction(data.Details));
        dispatch(selectedShopId(data.Details[0].shop));
        dispatch(selectedShopName(data.Details[0].shop_name));
      }
    }
  };
  let shopIdsCollectionForCreateShop = async () => {
    let { data } = await getShopIds(userToken);
    if (data.Success && data.Details.length > 0) {
      dispatch(shopIdsAction(data.Details));
    }
  };

  let handelPublishShop = async () => {
    if (Object.keys(createShop).length > 0) {
      setLoading(true);
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
      } = createShop;

      let form_data = new FormData();
      form_data.append("shop_name", name);
      form_data.append("business_type", type);
      form_data.append("country", country);
      form_data.append("city", city);
      form_data.append("address", address);
      form_data.append("business_phone", phone);
      form_data.append("business_email", email);
      form_data.append("shop_bio", bio);
      form_data.append("shop_logo", logoFile);
      form_data.append("instagram_link", instagram);
      form_data.append("facebook_link", facebook);
      form_data.append("twitter_link", twitter);
      form_data.append("whatsapp_number", whatsapp);

      let { data } = await shopCreate(form_data, userToken);

      if (data.Success) {
        let shopPreview = {
          logo: logoUrl,
          name: name,
          brief: bio,
          social: { fb: facebook, ig: instagram, wp: whatsapp, tt: twitter },
          contacts: {
            phone: phone,
            email: email,
            address: address,
          },
          description: type,
          shopId: data.ID,
        };
        setPublishData(shopPreview);
        togglePublish(true);
        setLoading(false);
        dispatch(clearFormData(true));
        shopIdsCollectionForCreateShop();
      }
      setLoading(false);
    }
  };

  let publicButton = () => {
    if (Object.keys(createShop).length > 0) {
      return <Button onClick={handelPublishShop}>PUBLISH A SHOP</Button>;
    } else {
      return (
        <Button onClick={handelPublishShop} disabled>
          PUBLISH A SHOP
        </Button>
      );
    }
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

  // let contianerRef = shopWidthRef;
  // if (contianerRef.current) {
  //   console.log(contianerRef);
  // }

  return (
    <div ref={shopWidthRef}>
      <DesktopHeaderRow title="Shop">
        <Grid container spacing={5}>
          {/* <Grid item xs={6}> */}
          {/* <Button onClick={() => togglePreview(true)}>SHOP PREVIEW</Button> */}
          {/* <Button onClick={() => togglePreview(true)} outlined>
              SHOP PREVIEW
            </Button> */}
          {/* </Grid> */}
          <Grid item xs={12}>
            {/* <Button onClick={() => togglePublish(true)}>PUBLISH A SHOP</Button> */}
            {/* <Button onClick={handelPublishShop}>PUBLISH A SHOP</Button> */}
            {selectedTabIndex === 0 ? publicButton() : null}
          </Grid>
        </Grid>
      </DesktopHeaderRow>
      <div style={loading ? loadingStyle : unLoadingStyle}>
        <CircularProgress color="inherit" />
      </div>
      <Tabs headers={["Shop Profile", "Catalog", "Add Product"]}>
        <ShopProfileForm />
        <Catalog />
        <AddProductForm />
      </Tabs>

      {/* Preveiw version */}
      <Dialog open={preview} fullScreen>
        <DialogActions>
          <Button onClick={togglePreview}>Exit PREVIEW</Button>
        </DialogActions>
        <ProductDisplay shopData={createShopData.shopPreview} />
      </Dialog>

      {/* The published version */}
      <Dialog open={publish} fullScreen onClose={() => togglePublish(false)}>
        <DialogActions>
          <Button onClick={() => togglePublish(false)}>Exit PREVIEW</Button>
        </DialogActions>
        <ProductDisplay shopData={publishData} />
      </Dialog>
    </div>
  );
}
