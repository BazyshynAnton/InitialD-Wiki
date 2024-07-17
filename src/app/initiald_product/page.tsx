import ProductPage from '@/components/productPage/ProductPage'

import { Product } from '@/types/product/initialdProductType'
import { promises as fs } from 'fs'

export default async function InitialDProduct() {
  const data = await fs.readFile(
    process.cwd() + '/data/product/product.json',
    'utf8'
  )

  const products: Product[] = JSON.parse(data)

  return <ProductPage products={products} />
}
