import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearColors,
  toggleColor,
  setColors,
} from "../../../Redux/filters/colors/colorssActionsCreators";
import styles from "./Colors.module.css";
export default function Colors() {
  const dispatch = useDispatch();
  const colors = useSelector((state) => state.filters.colors);
  useEffect(() => {
    async function getColors() {
      try {
        const res = await fetch("https://test-api.edfa3ly.io/product");
        const products = await res.json();
        const colors = [
          ...new Set(products.map((product) => product.color)),
        ].map((color) => ({
          name: color,
          selected: false,
        }));
        dispatch(setColors(colors));
      } catch (err) {
        console.log(err);
      }
    }

    getColors();
  }, []);
  return (
    <div>
      <h3>Colors:</h3>
      <ul className={styles["colors_list"]}>
        {colors.map((color) => {
          return (
            <li key={color.name}>
              <label htmlFor={color.name}>
                <input
                  checked={color.selected}
                  type='checkbox'
                  name='color.name'
                  id={color.name}
                  value={color.name}
                  onChange={(e) => {
                    dispatch(toggleColor(e.target.value));
                  }}
                />
                {color.name}
              </label>
            </li>
          );
        })}
      </ul>
      <button
        className='clear_btn'
        type='button'
        onClick={() => {
          dispatch(clearColors());
        }}
      >
        Clear
      </button>
    </div>
  );
}
