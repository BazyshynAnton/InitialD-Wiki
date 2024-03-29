'use client'
import { useSwiper } from 'swiper/react'
import { Character } from '../../../../../app/character/page'

import { useEffect, useState } from 'react'

import styles from '../../../CharacterPage.module.scss'

const CustomPagination = ({ characters }: { characters: Character[] }) => {
  const swiper = useSwiper()
  const [activeIndex, setActiveIndex] = useState(swiper.activeIndex)
  const buttons = new Array(characters.length).fill(0)

  useEffect(() => {
    const handleSlideChange = () => {
      setActiveIndex(swiper.activeIndex)
    }

    swiper.on('slideChange', handleSlideChange)

    return () => {
      swiper.off('slideChange', handleSlideChange)
    }
  }, [swiper])

  return (
    <div className={styles.buttonsContainer}>
      {buttons.map((_, idx: number) => {
        return (
          <div
            className={`${
              activeIndex === idx ? styles.activeIdx : styles.navBtn
            }`}
            key={idx}
            onClick={() => {
              swiper.slideTo(idx)
            }}
          ></div>
        )
      })}
    </div>
  )
}

export default CustomPagination
