'use client'

import ReusablePage from '../shared/reusableComponents/reusablePage/ReusablePage'
import TitleText from '../shared/reusableComponents/titleText/TitleText'
import AllProducts from './allProducts/AllProducts'
import Footer from '../footer/Footer'

import { motion } from '@/components/shared/framerMotionImports'
import { Product } from '@/types/product/initialdProductType'
import { useState } from '@/components/shared/reactImports'
import { initialSortStateType } from '@/types/productPage/productPageTypes'

import styles from '@/styles/productPage/ProductPage.module.scss'

export default function ProductPage({ products }: { products: Product[] }) {
  const initialSortState: initialSortStateType = {
    all: true,
    cd: false,
    blueRay: false,
  }

  const [sortState, setSortState] =
    useState<initialSortStateType>(initialSortState)

  const [sortedProducts, setSortedProducts] = useState<Product[]>(products)

  const handleSortProducts = (sortBy: string) => {
    let updatedProducts = products
    if (sortBy === 'cd') {
      updatedProducts = products.filter((product) => product.type === 'cd')
      setSortState({ all: false, cd: true, blueRay: false })
    } else if (sortBy === 'blue-ray') {
      updatedProducts = products.filter(
        (product) => product.type === 'blue-ray'
      )
      setSortState({ all: false, cd: false, blueRay: true })
    } else {
      setSortState({ all: true, cd: false, blueRay: false })
      updatedProducts = products
    }

    setSortedProducts(updatedProducts)
  }

  return (
    <>
      <ReusablePage>
        <main className={styles.mainContainer}>
          <div className={styles.textContainer}>
            <TitleText
              title={'INITIAL D -PRODUCT-'}
              underTitle={'頭文字D』プロダクト'}
            ></TitleText>
          </div>
          <motion.div
            className={styles.contentContainer}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
            viewport={{ once: true }}
          >
            <div className={styles.sortProducts}>
              <button
                className={`${sortState.all && styles.activeButton}`}
                onClick={() => handleSortProducts('all')}
              >
                All
              </button>
              <button
                className={`${sortState.cd && styles.activeButton}`}
                onClick={() => handleSortProducts('cd')}
              >
                CD
              </button>
              <button
                className={`${sortState.blueRay && styles.activeButton}`}
                onClick={() => handleSortProducts('blue-ray')}
              >
                Blue-Ray
              </button>
            </div>
            <AllProducts products={sortedProducts} />
          </motion.div>
        </main>
      </ReusablePage>
      <Footer />
    </>
  )
}
