import ReusablePage from '../shared/reusableComponents/reusablePage/ReusablePage'
import TitleText from '../shared/reusableComponents/titleText/TitleText'

import { Product } from '@/types/product/initialdProductType'

import styles from '@/styles/productPage/ProductPage.module.scss'
import AllProducts from './allProducts/AllProducts'

export default function ProductPage({ products }: { products: Product[] }) {
  return (
    <ReusablePage>
      <main className={styles.mainContainer}>
        <div className={styles.textContainer}>
          <TitleText
            title={'INITIAL D -PRODUCT-'}
            underTitle={'頭文字D』プロダクト'}
          ></TitleText>
        </div>

        <div className={styles.contentContainer}>
          <AllProducts products={products} />
        </div>
      </main>
    </ReusablePage>
  )
}
