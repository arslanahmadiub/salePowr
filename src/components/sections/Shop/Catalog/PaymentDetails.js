import React, { useState } from "react";
import Styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Input from "../../../CustomComponents/Input";
import FancyInput from "../../../CustomComponents/FancyInput";
import Button from "../../../CustomComponents/Button";
import PurchaseSummary from "../../../CustomComponents/PurchaseSummary";
import Select from "../../../CustomComponents/Select";
import DatePicker from "../../../CustomComponents/DatePicker";
import { shipingAction } from "../../../../action/checkoutAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { DataContext } from "../../../../contexts/DataContext";

const Quatnity = Styled.div`
    font-size: 30px;
    font-weight: 600;
    line-height: 50px;
`;

const ChangeButton = Styled.div`
    height: 60px;
    width: 60px;
`;

const PaymentDetails = (props) => {
  const [state, setState] = React.useState({ quantity: 1 });
  const priceDetail = useSelector((state) => state.checkout.checkoutUserDetail);
  const { countryList, currencies } = React.useContext(DataContext);

  let [selectedButton, setSelectedButton] = useState(true);

  const processPayment = (event) => {
    event.preventDefault();
  };

  let handelMobileMoney = () => {
    setSelectedButton(false);
  };
  let handelCard = () => {
    setSelectedButton(true);
  };

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <h1>Payout Options</h1>
      </Grid>
      <Grid container direction="row" spacing={3}>
        <Grid item style={{ marginLeft: "1%" }}>
          {selectedButton ? (
            <Button outlined faded onClick={handelMobileMoney}>
              Mobile Money
            </Button>
          ) : (
            <Button onClick={handelMobileMoney}>Mobile Money</Button>
          )}
        </Grid>

        <Grid item>
          {selectedButton ? (
            <Button onClick={handelCard}>Card</Button>
          ) : (
            <Button outlined faded onClick={handelCard}>
              Card
            </Button>
          )}
        </Grid>
      </Grid>
      <Grid item>
        <form
          onSubmit={processPayment}
          style={{ borderBottom: "0.5px solid #000", paddingBottom: "30px" }}
        >
          {!selectedButton ? (
            <Grid container direction="row" spacing={3}>
              <Grid item xs={12} sm={6}>
                <Select
                  id="type"
                  placeholder="Select onChange={onChange} business type"
                  label="MoMo Network"
                  list={countryList}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Input
                  type={"text"}
                  placeholder="024571992"
                  label="Mobile Money Number"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Input
                  type={"text"}
                  placeholder="Full Name"
                  label="Mobile Money Name"
                />
              </Grid>

              <Grid item xs={12} sm={6}></Grid>
              <Grid item xs={12} sm={6}>
                <Button type="submit">Pay</Button>
              </Grid>
            </Grid>
          ) : (
            <Grid container direction="row" spacing={3}>
              <Grid item xs={12} sm={6}>
                <DatePicker label="Epiry Date" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Input
                  type={"text"}
                  placeholder="Full Name"
                  label="Card Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Input
                  type={"number"}
                  placeholder="0000 0000 0000 0000"
                  label="Card Number"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FancyInput
                  type={"number"}
                  placeholder="..."
                  label="CVV/ CSV"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button type="submit">Pay</Button>
              </Grid>
            </Grid>
          )}
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

export default PaymentDetails;
