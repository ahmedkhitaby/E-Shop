import { useEffect, useState } from "react";
import Categories from "../Categories/Categories";
import Filters from "../Filters/Filters";
import styles from "./Layout.module.css";
export default function Layout({ children }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function fetchCategories() {
      const catRes = await fetch("https://test-api.edfa3ly.io/category");
      const categories = await catRes.json();
      setCategories(categories);
    }

    fetchCategories();
  }, []);
  return (
    <div className={styles.container}>
      <Categories categories={categories} />
      <div className={styles.content}>
        <Filters />
        {children}
      </div>
    </div>
  );
}
