import { combineReducers } from "redux";
import { logoImageReducer } from "./imagesReducer";
import { shopProfileReducer } from "./shopProfileReducer";
export default combineReducers({
  logoImage: logoImageReducer,
  shopPreview: shopProfileReducer,
});
