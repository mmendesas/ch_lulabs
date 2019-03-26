import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import logger from "./logger";

export default composeWithDevTools(applyMiddleware(thunk, logger));
