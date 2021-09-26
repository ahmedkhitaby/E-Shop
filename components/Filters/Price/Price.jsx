import { useDispatch, useSelector } from "react-redux";
import styles from "./Price.module.css";
import {
  updateFromRange,
  updateToRange,
} from "../../../Redux/filters/price/priceActionsCreators";
export default function Price() {
  const dispatch = useDispatch();
  const price = useSelector((state) => state.filters.price);
  return (
    <div>
      <h3>Price Range:</h3>
      <div className={styles["price_inputs"]}>
        <div className={styles["price_control"]}>
          <label htmlFor='fromPrice'>from:</label>
          <input
            type='number'
            min={0}
            placeholder='0.00'
            id='fromPrice'
            value={price.from}
            onChange={(e) => dispatch(updateFromRange(e.target.value))}
          />
        </div>
        <div className={styles["price_control"]}>
          <label htmlFor='toPrice'>To:</label>
          <input
            type='number'
            min={0}
            placeholder='0.00'
            id='toPrice'
            value={price.to}
            onChange={(e) => dispatch(updateToRange(e.target.value))}
          />
        </div>
      </div>
      <button
        className='clear_btn'
        type='button'
        onClick={() => {
          dispatch(updateFromRange(""));
          dispatch(updateToRange(""));
        }}
      >
        Clear
      </button>
    </div>
  );
}
