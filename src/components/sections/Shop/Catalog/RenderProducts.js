import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./Product";
import { RightSideBarContext } from "../../../../contexts/RightSideBarContext";

const RenderProducts = (props) => {
  const { showRightSideBar } = React.useContext(RightSideBarContext);

  const products = props.products;

  return (
    <Grid container direction="row" spacing={3}>
      {products &&
        products.map((product, index) => {
          return (
            <Grid item xs={6} sm={4} md={showRightSideBar ? 4 : 3} key={index}>
              <Product
                key={product.name + index.toString()}
                details={product}
                shopNameData={props.shopNameData}
              />
            </Grid>
          );
        })}
    </Grid>
  );
};

export default RenderProducts;
