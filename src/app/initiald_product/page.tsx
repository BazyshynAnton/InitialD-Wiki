import ProductPage from '@/components/productPage/ProductPage'

import products from '../../../public/data/product/product.json'

export default async function InitialDProduct() {
  return <ProductPage products={products} />
}
