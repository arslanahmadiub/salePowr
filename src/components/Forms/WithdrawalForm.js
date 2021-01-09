import React, { useState } from "react";
//import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Select from "../CustomComponents/Select";
import Input from "../CustomComponents/Input";
import Button from "../CustomComponents/Button";
import { Form } from "antd";
import { DataContext } from "../../contexts/DataContext";
import { addCard } from "../../action/walletAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addWallet } from "../../services/walletServices";

export default function WithdrawalForm({ type, externalFunction, ...props }) {
  const { countryList, bankList, mobileOperators } = React.useContext(
    DataContext
  );
  const dispatch = useDispatch();
  const walletCard = useSelector((state) => state.wallet.card);

  const processWidrawal = (values) => {
    console.log(values);
    alert("");
    //externalFunction(0)
  };

  const [mobileMoneyData, setMobileMoneyData] = useState({
    country: "",
    momoNetwork: "",
    momoNumber: "",
    mobileMoneyClientName: "",
  });

  let {
    country,
    momoNetwork,
    momoNumber,
    mobileMoneyClientName,
  } = mobileMoneyData;

  let countryListNew = ["Ghana"];
  let networkListNew = ["vodafone", "mtn", "airtel"];

  let handelMobileMoneyChange = (e) => {
    setMobileMoneyData({ ...mobileMoneyData, [e.target.name]: e.target.value });
  };

  let addWalletButton = async () => {
    let form_data = new FormData();

    form_data.set("momo_network", momoNetwork);
    form_data.set("mobile_money_number", momoNumber);
    form_data.set("mobile_money_name", mobileMoneyClientName);

    console.log(momoNetwork);
    console.log(momoNumber);
    console.log(mobileMoneyClientName);
    // let walletData = {
    //   name: mobileMoneyClientName,
    //   country: country,
    //   number: momoNumber,
    //   date: "09/2020",
    //   type: "momo",
    // };

    // dispatch(addCard(walletData));
    try {
      let { data } = await addWallet(form_data);
      console.log(data);
    } catch (error) {
      // props.error(error.response.data.Errors.mobile_money_number[0]);
      console.log(error.response.data);
    }
  };

  return (
    <Form onFinish={processWidrawal}>
      <Grid container direction="row" spacing={5}>
        <Grid item xs={12} sm={6}>
          <Select
            list={countryListNew}
            label="Country"
            placeholder="Select country"
            required
            name="country"
            value={country}
            onChange={handelMobileMoneyChange}
          />
        </Grid>
        {type === "momo" && (
          <Grid item xs={12} sm={6}>
            <Select
              list={networkListNew}
              label="Momo Network"
              placeholder="Select network"
              required
              name="momoNetwork"
              value={momoNetwork}
              onChange={handelMobileMoneyChange}
            />
          </Grid>
        )}
        {type === "bank" && (
          <Grid item xs={12} sm={6}>
            <Select
              options={bankList}
              label="Bank name"
              placeholder="Select bank"
              required
            />
          </Grid>
        )}
        {type === "bank" && (
          <Grid item xs={12} sm={6}>
            <Input
              label="Bank account number"
              placeholder="Enter bank account number"
              required
            />
          </Grid>
        )}
        {type === "momo" && (
          <Grid item xs={12} sm={6}>
            <Input
              label="Momo number"
              placeholder="Enter the  momo account number"
              required
              name="momoNumber"
              value={momoNumber}
              onChange={handelMobileMoneyChange}
            />
          </Grid>
        )}
        {type === "momo" && (
          <Grid item xs={12} sm={6}>
            <Input
              label="Your Name"
              placeholder="Enter Your Name Here"
              required
              name="mobileMoneyClientName"
              value={mobileMoneyClientName}
              onChange={handelMobileMoneyChange}
            />
          </Grid>
        )}
        {type === "bank" && (
          <Grid item xs={12} sm={6}>
            <Input
              label="Bank branch"
              placeholder="Enter bank branch"
              required
            />
          </Grid>
        )}
        <Grid item xs={12}>
          <Button onClick={addWalletButton}>Add Wallet</Button>
        </Grid>
      </Grid>
    </Form>
  );
}
