import styles from "./Rating.module.css";
import StarIcon from "../../../public/star.svg";

import { useSelector, useDispatch } from "react-redux";
import { changeRating } from "../../../Redux/filters/Rating/RatingActionsCreators";
export default function Rating() {
  const dispatch = useDispatch();
  const rating = useSelector((state) => state.filters.rating);
  const starsArr = new Array(5).fill(false).map((star, index) => {
    if (index < rating) {
      return true;
    }
    return false;
  });
  return (
    <div>
      <h3>Rating:</h3>
      <div className={styles["stars_group"]}>
        {starsArr.map((star, index) => {
          if (star) {
            return (
              <button
                type='button'
                key={index}
                className={styles["star_btn"]}
                onClick={() => {
                  dispatch(changeRating(index + 1));
                }}
              >
                <StarIcon className={styles["yellow"]} />
              </button>
            );
          } else {
            return (
              <button
                key={index}
                className={styles["star_btn"]}
                onClick={() => {
                  dispatch(changeRating(index + 1));
                }}
              >
                <StarIcon />
              </button>
            );
          }
        })}
      </div>
    </div>
  );
}
