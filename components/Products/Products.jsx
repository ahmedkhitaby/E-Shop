import ProductCard from "./ProductCard/ProductCard";
import styles from "./Products.module.css";
export default function Products({ products }) {
  return (
    <section className={styles.products}>
      {products.map((product) => {
        return (
          <div key={product.id} className={styles["product_cell"]}>
            <ProductCard
              image={product.image}
              name={product.name}
              price={product.price}
              rating={product.rating}
              category={product.category}
              color={product.color}
            />
          </div>
        );
      })}
    </section>
  );
}
