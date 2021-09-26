import Image from "next/image";

import styles from "./ProductCard.module.css";
import StarIcon from "../../../public/star.svg";
export default function ProductCard({ image, name, rating, price, color }) {
  const starsArr = new Array(5).fill(false).map((star, index) => {
    if (index < rating) {
      return true;
    }
    return false;
  });

  return (
    <div className={styles["card"]}>
      <div className={styles["card_head"]}>
        <div className={styles["card_imgae"]}>
          <Image src={image} width='300' height='300' />
        </div>
        <h4>{name}</h4>
      </div>
      <div className={styles["card_body"]}>
        <div className={styles["stars_group "]}>
          {starsArr.map((star, index) => {
            if (star) {
              return (
                <button key={index} className={styles["star_btn"]}>
                  <StarIcon className={styles["yellow"]} />
                </button>
              );
            } else {
              return (
                <button key={index} className={styles["star_btn"]}>
                  <StarIcon />
                </button>
              );
            }
          })}
        </div>
        <div>{color}</div>
        <div className={styles["card_price"]}>${price}</div>
      </div>
    </div>
  );
}
