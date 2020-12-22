import { combineReducers } from "redux";
import { logoImageReducer } from "./imagesReducer";
import { shopProfileReducer } from "./shopProfileReducer";
import { authReducer } from "./authReducer";
import { checkoutReducer } from "./checkoutReducer";
export default combineReducers({
  logoImage: logoImageReducer,
  shopPreview: shopProfileReducer,
  auth: authReducer,
  checkout: checkoutReducer,
});
