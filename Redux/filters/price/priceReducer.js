import { UPDATE_FROM_RANGE, UPDATE_TO_RANGE } from "./priceActionsTyeps";
const initialState = {
  from: "",
  to: "",
};

const priceReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FROM_RANGE: {
      return { ...state, from: action.payload };
    }
    case UPDATE_TO_RANGE: {
      return { ...state, to: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default priceReducer;
