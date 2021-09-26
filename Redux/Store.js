import { createStore, combineReducers } from "redux";
import colorsReducer from "./filters/colors/colorsReducer";
import priceReducer from "./filters/price/priceReducer";
import ratingReducer from "./filters/Rating/RatingReducer";

const filters = combineReducers({
  price: priceReducer,
  colors: colorsReducer,
  rating: ratingReducer,
});

const rootReducer = combineReducers({
  filters,
});

const store = createStore(rootReducer);

export default store;
