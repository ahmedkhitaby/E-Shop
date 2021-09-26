import { CHANGE_RATING } from "./RatingActionsTypes";

export const changeRating = (value) => {
  return {
    type: CHANGE_RATING,
    payload: value,
  };
};
