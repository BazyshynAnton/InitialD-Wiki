import { Product } from '@/types/product/initialdProductType'

import ProductCard from './ProductCard'

export default function AllProducts({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product: Product) => (
        <ProductCard key={product.productNumber} product={product} />
      ))}
    </>
  )
}
