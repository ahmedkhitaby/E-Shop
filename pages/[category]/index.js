import Products from "../../components/Products/Products";
import { fetchProducts } from "../../utils/fetchProducts";

export default function CategoryPage({ products }) {
  {
    return products.length > 0 ? (
      <Products products={products} />
    ) : (
      <h2>No Products found!</h2>
    );
  }
}

export async function getServerSideProps(ctx) {
  if (ctx.query.category > 5) {
    return {
      redirect: {
        destination: "/1",
        permanent: false,
      },
    };
  }
  let products = await fetchProducts(
    "http://test-api.edfa3ly.io/product?categoryId=" + ctx.query.category
  );
  if (ctx.query.filter === "true") {
    let { rating, from, to, color, category } = ctx.query;

    category = category ? `categoryId=${category}` : "";
    rating = rating ? `&rating=${rating}` : "";
    color = color
      ? color
          .split("-")
          .map((c) => `&color=${c}`)
          .join("")
      : "";
    products = await fetchProducts(
      `http://test-api.edfa3ly.io/product?${category}${rating}${color}`
    );
    if (from || to) {
      products = products.filter((p) => {
        if (from && !to) return p.price >= from;
        else if (to && !from) return p.price <= to;
        else return p.price >= from && p.price <= to;
      });
    }
  }
  return {
    props: {
      products: products,
    },
  };
}
