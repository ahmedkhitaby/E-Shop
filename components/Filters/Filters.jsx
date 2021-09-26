import Colors from "./Colors/Colors";
import styles from "./Filters.module.css";
import Price from "./Price/Price";
import Rating from "./Rating/Rating";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
export default function Filters() {
  const router = useRouter();
  const { price, colors, rating } = useSelector((state) => state.filters);
  const filteredColors = colors
    .filter((color) => color.selected)
    .map((color) => color.name);
  console.log(router.query.category);
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(
      `${router.query.category}?filter=true&from=${price.from}&to=${
        price.to
      }&rating=${rating}&color=${filteredColors.join("-")}`,
      "",
      { scroll: false }
    );
  };

  return (
    <aside className={styles["filters"]}>
      <form onSubmit={handleSubmit}>
        <Price />
        <Colors />
        <Rating />
        <button type='submit' className='main_btn'>
          search
        </button>
      </form>
    </aside>
  );
}
