import { SET_COLORS, TOGGLE_COLOR, CLEAR_COLORS } from "./colorsActionsTypes";

const initialState = [];

const colorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLORS: {
      return [...state, ...action.payload];
    }
    case TOGGLE_COLOR: {
      return [...state].map((color) => {
        if (color.name === action.payload) {
          return { ...color, selected: !color.selected };
        }
        return color;
      });
    }
    case CLEAR_COLORS: {
      return [...state].map((color) => ({ ...color, selected: false }));
    }
    default:
      return state;
  }
};

export default colorsReducer;
