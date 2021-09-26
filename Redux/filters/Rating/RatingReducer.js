import { CHANGE_RATING } from "./RatingActionsTypes";

const initialState = 2;

const ratingReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_RATING: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default ratingReducer;
