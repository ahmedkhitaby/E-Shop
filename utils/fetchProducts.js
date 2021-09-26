export async function fetchProducts(url) {
  try {
    const prodRes = await fetch(url);
    const products = await prodRes.json();
    return products;
  } catch (err) {
    console.log(err);
  }
}
