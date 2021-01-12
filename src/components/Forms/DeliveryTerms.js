import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Input from "../CustomComponents/Input";
import Select from "../CustomComponents/Select";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
function DeliveryTerms(props) {
  let countryList = ["Pakistan"];
  let currencies = ["Pakistan"];
  const [addButton, setaddButton] = useState(false);
  let index = props.lengthOfItem.length;
  let lastNumber = props.lengthOfItem[index - 1];

  let handelClick = () => {
    props.addItem();
  };
  let handelClickRemove = () => {
    props.removeItem();
  };

  const [deliveryData, setdeliveryData] = useState({
    location: "",
    currency: "",
  });
  let clearData = () => {
    setdeliveryData({
      location: "",
      currency: "",
    });
  };

  useEffect(() => {
    if (props.clearData === true) {
      clearData();
    }
  }, [props.clearData]);

  useEffect(() => {
    props.getData(deliveryData, props.itemIndex);
  }, [deliveryData]);

  let handelChange = async (e) => {
    await setdeliveryData({ ...deliveryData, [e.target.name]: e.target.value });
  };

  let { location, currency } = deliveryData;
  return (
    <React.Fragment>
      <Grid item xs={12} md={5}>
        <Input
          placeholder="Enter a city"
          label="City/Location"
          rows={5}
          required
          name="location"
          value={location}
          onChange={handelChange}
        />
      </Grid>
      <Grid item xs={12} md={5}>
        <Input
          placeholder="Enter Delivery Price"
          label="Delivery Price"
          rows={5}
          required
          name="currency"
          value={currency}
          onChange={handelChange}
        />
      </Grid>
      <Grid item xs={12} md={2} style={{ marginTop: "2%" }}>
        {props.itemIndex === lastNumber - 1 ? (
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            onClick={handelClick}
          >
            <AddIcon />
          </IconButton>
        ) : (
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            onClick={handelClickRemove}
          >
            <RemoveIcon />
          </IconButton>
        )}
      </Grid>
    </React.Fragment>
  );
}

export default DeliveryTerms;
