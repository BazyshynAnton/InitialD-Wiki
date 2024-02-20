'use client'

import { useSwiper } from 'swiper/react'
import styles from '../../../CharacterPage.module.scss'

const CustomNavigation = () => {
  const swiper = useSwiper()

  return (
    <>
      <div
        className={styles.arrowLeft}
        onClick={() => swiper.slidePrev()}
      ></div>
      <div
        className={styles.arrowRight}
        onClick={() => swiper.slideNext()}
      ></div>
    </>
  )
}

export default CustomNavigation
