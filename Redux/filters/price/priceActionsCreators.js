import { UPDATE_FROM_RANGE, UPDATE_TO_RANGE } from "./priceActionsTyeps";

export const updateFromRange = (value) => {
  return {
    type: UPDATE_FROM_RANGE,
    payload: value,
  };
};

export const updateToRange = (value) => {
  return {
    type: UPDATE_TO_RANGE,
    payload: value,
  };
};
