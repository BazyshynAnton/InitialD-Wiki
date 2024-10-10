import ProductPage from "@/components/productPage/ProductPage"

import products from "../../../public/data/products/products.json"

export default async function InitialDProduct() {
  return <ProductPage products={products} />
}
