import React from "react";

import Grid from "@material-ui/core/Grid";
import Input from "../CustomComponents/Input";

import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";

function DeliveryTerms(props) {
  return (
    <React.Fragment>
      <Grid item xs={12} md={5}>
        <Input
          placeholder="Enter a city"
          label="City/Location"
          rows={5}
          required
          name="city"
          value={props.values.city}
          onChange={props.handelChange}
        />
      </Grid>
      <Grid item xs={12} md={5}>
        <Input
          placeholder="Enter Delivery Price"
          label="Delivery Price"
          rows={5}
          required
          type="number"
          name="price"
          maxlength="4"
          value={props.values.price}
          onChange={props.handelChange}
        />
      </Grid>
      <Grid item xs={12} md={2} style={{ marginTop: "2%" }}>
        {props.lastIndex === props.index ? (
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            onClick={() => props.add()}
          >
            <AddIcon />
          </IconButton>
        ) : (
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            onClick={() => props.remove()}
          >
            <RemoveIcon />
          </IconButton>
        )}
      </Grid>
    </React.Fragment>
  );
}

export default DeliveryTerms;
