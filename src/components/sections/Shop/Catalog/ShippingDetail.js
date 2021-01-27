import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Input from "../../../CustomComponents/Input";
import Button from "../../../CustomComponents/Button";
import PurchaseSummary from "../../../CustomComponents/PurchaseSummary";
import Select from "../../../CustomComponents/Select";
import { shippingDetailService } from "../../../../services/shippingServices";
import { DataContext } from "../../../../contexts/DataContext";

import { shipingAction } from "../../../../action/checkoutAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Quatnity = Styled.div`
    font-size: 30px;
    font-weight: 600;
    line-height: 50px;
`;

const ChangeButton = Styled.div`
    height: 60px;
    width: 60px;
`;

const ShippingDetail = (props) => {
  const [state, setState] = React.useState({ quantity: 1 });
  const { countryList, currencies } = React.useContext(DataContext);
  const dispatch = useDispatch();
  let productId = props.productIdDetail.productId;
  const [deliveryCountry, setDeliveryCountry] = useState(null);
  const [deliveryCountryLocation, setdeliveryCountryLocation] = useState(null);
  const priceDetail = useSelector((state) => state.checkout.checkoutUserDetail);
  const [shippingCountry, setshippingCountry] = useState(null);
  const [shippingLocation, setshippingLocation] = useState(null);
  const [fullData, setfullData] = useState(null);
  const [finalDeliveryCharges, setDeliveryCharges] = useState(null);
  const [finalCost, setfinalCost] = useState(0);

  useEffect(() => {
    totalAmoutnPayable();
  }, [finalDeliveryCharges]);

  let getShippingDetails = async () => {
    let { data } = await shippingDetailService(productId);
    setfullData(data.Details);
    let countries = [data.Details[0].delivery_country];
    let countriesLocation = [];
    data.Details.map((item, index) => {
      countriesLocation.push(item.delivery_location);
    });

    setshippingCountry(countries);
    setshippingLocation(countriesLocation);
  };

  useEffect(() => {
    getShippingDetails();
  }, []);

  const [shippingData, setShippingData] = useState({
    country: "",
    deliveryLocation: "",
    address: "",
    additionalNotes: "",
  });

  let handelShipingChange = (e) => {
    setShippingData({ ...shippingData, [e.target.name]: e.target.value });
    if (e.target.name === "deliveryLocation") {
      let result = fullData.filter(
        (item) => item.delivery_location === e.target.value
      );

      setDeliveryCharges(result[0].delivery_price);
    }
  };

  let totalAmoutnPayable = () => {
    let finalAmount =
      parseInt(priceDetail.totalCost) + parseInt(finalDeliveryCharges);

    setfinalCost(finalAmount);
  };

  let {
    country,
    deliveryLocation,
    address,
    additionalNotes,
    deliveryCharges,
    finalCostWithCharges,
  } = shippingData;
  const processPayment = (event) => {
    event.preventDefault();
    let deliveryObject = {
      deliveryCharges: finalDeliveryCharges,
      finalCostWithCharges: finalCost,
    };
    let finalObject = { ...deliveryObject, ...shippingData };

    dispatch(shipingAction(finalObject));
    props.update(2);
  };

  const changeQuanty = (value) => (event) =>
    setState({ ...state, quantity: state.quantity + value || 1 });

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <form
          onSubmit={processPayment}
          style={{ borderBottom: "0.5px solid #000", paddingBottom: "30px" }}
        >
          <Grid container direction="row" spacing={3}>
            <Grid item xs={12} sm={6}>
              <Select
                id="type"
                placeholder="Select Delivery Country"
                label="Country"
                list={shippingCountry !== null ? shippingCountry : []}
                required
                name="country"
                value={country}
                onChange={handelShipingChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Select
                id="type"
                label="Delivery Locations"
                placeholder="Select Delivery Location"
                required
                list={shippingLocation !== null ? shippingLocation : []}
                name="deliveryLocation"
                value={deliveryLocation}
                onChange={handelShipingChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                type={"text"}
                placeholder="Be precise as possible"
                label="Address"
                name="address"
                value={address}
                onChange={handelShipingChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                type={"text"}
                placeholder="Anything else you want the seller to know"
                label="Additional Notes"
                name="additionalNotes"
                value={additionalNotes}
                onChange={handelShipingChange}
              />
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <Button type="submit">Continue</Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item>
        <PurchaseSummary
          data={{
            item: priceDetail.item,
            itemCost: priceDetail.itemCost,
            totalCost: isNaN(finalCost) ? 0 : finalCost,
            deliveryCharge:
              finalDeliveryCharges !== null ? finalDeliveryCharges : "0",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default ShippingDetail;
