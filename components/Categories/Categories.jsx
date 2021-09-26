import styles from "./Categories.module.css";
import Link from "next/link";
import Image from "next/image";
export default function Categories({ categories }) {
  return (
    <ul className={styles["category_list"]}>
      {categories.map((category) => (
        <li key={category.id} className={styles["category_listItem"]}>
          <Link href={`${category.id}`} scroll={false}>
            <div className={styles["category_img"]}>
              <Image
                src={category.image}
                width='300'
                height='300'
                alt={category.name}
                title={category.name}
              />
            </div>
          </Link>
          <Link href={`${category.id}`} scroll={false}>
            <a className={styles["category_name"]}>{category.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
