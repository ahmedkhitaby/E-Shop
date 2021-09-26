import { TOGGLE_COLOR, CLEAR_COLORS, SET_COLORS } from "./colorsActionsTypes";

export const setColors = (colors) => {
  return {
    type: SET_COLORS,
    payload: colors,
  };
};
export const toggleColor = (color) => {
  return {
    type: TOGGLE_COLOR,
    payload: color,
  };
};
export const clearColors = () => {
  return {
    type: CLEAR_COLORS,
  };
};
