import { Product } from '@/types/product/initialdProductType'

import ProductCard from './ProductCard'

import styles from '@/styles/productPage/ProductPage.module.scss'

export default function AllProducts({ products }: { products: Product[] }) {
  return (
    <div className={styles.productsContainer}>
      {products.map((product: Product) => (
        <ProductCard key={product.productNumber} product={product} />
      ))}
    </div>
  )
}
