import { combineReducers } from "redux";
import cep from "./cep";
import loading from "./loading";

export default combineReducers({
  loading,
  cep
});
