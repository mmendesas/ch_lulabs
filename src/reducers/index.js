import { combineReducers } from "redux";

import cep from "./cep";
import loading from "./loading";
import location from "./location";

export default combineReducers({
  loading,
  data: cep,
  geoInfo: location
});
