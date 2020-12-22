import React, { useState } from "react";
import Styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Input from "../../../CustomComponents/Input";
import Button from "../../../CustomComponents/Button";
import PurchaseSummary from "../../../CustomComponents/PurchaseSummary";
import Select from "../../../CustomComponents/Select";

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

  const priceDetail = useSelector((state) => state.checkout.checkoutUserDetail);

  const [shippingData, setShippingData] = useState({
    country: "",
    deliveryLocation: "",
    address: "",
    additionalNotes: "",
  });

  let handelShipingChange = (e) => {
    setShippingData({ ...shippingData, [e.target.name]: e.target.value });
  };

  let { country, deliveryLocation, address, additionalNotes } = shippingData;
  const processPayment = (event) => {
    event.preventDefault();
    dispatch(shipingAction(shippingData));
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
                placeholder="Select onChange={onChange} business type"
                label="Country"
                list={countryList}
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
                required
                list={countryList}
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
            totalCost: priceDetail.totalCost,
            deliveryCharge: 14,
          }}
        />
      </Grid>
    </Grid>
  );
};

export default ShippingDetail;
