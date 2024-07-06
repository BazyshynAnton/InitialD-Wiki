'use client'

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Mousewheel } from 'swiper/modules'
import { Character } from '../../../../app/character/page'
import React, { useEffect, useState } from 'react'

import Image from 'next/image'
import CustomNavigation from './swiperComponents/CustomNavigation'
import CustomPagination from './swiperComponents/CustomPagination'

import 'swiper/css'
import 'swiper/css/pagination'
import styles from '../../CharacterPage.module.scss'
import { Link } from '@/components/shared/nextjsImports'

const CharacterSwiper = ({ characters }: { characters: Character[] }) => {
  if (typeof window === 'undefined') {
  }

  const sortedCharactersByChapters = characters.sort(
    (a, b) => parseInt(a.chapter) - parseInt(b.chapter)
  )

  const [slidesNumber, setSlidesNumber] = useState<number>(7)

  useEffect(() => {
    const handleSlidesNumberChange = () => {
      const width = window.innerWidth
      if (width <= 1120) {
        setSlidesNumber(3)
      } else if (width <= 1400) {
        setSlidesNumber(4)
      } else if (width <= 1660) {
        setSlidesNumber(5)
      } else if (width < 1920) {
        setSlidesNumber(6)
      } else {
        setSlidesNumber(7)
      }
    }

    handleSlidesNumberChange()
    window.addEventListener('resize', handleSlidesNumberChange)

    return () => {
      window.removeEventListener('resize', handleSlidesNumberChange)
    }
  }, [])

  const [isSwiper, setIsSwiper] = useState<boolean | undefined>()
  useEffect(() => {
    const handleResize = () => {
      setIsSwiper(window.innerWidth <= 1000)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <>
      {!isSwiper ? (
        <div style={{ width: '100%', height: '800px' }}>
          <Swiper
            slidesPerView={slidesNumber}
            spaceBetween={30}
            mousewheel={true}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            modules={[Mousewheel]}
            style={{
              overflow: 'visible',
              overflowX: 'clip',
              overflowY: 'visible',
              height: 'auto',
              zIndex: '200',
            }}
          >
            {sortedCharactersByChapters.map((character: Character) => {
              return (
                <React.Fragment key={character.id}>
                  <SwiperSlide
                    key={`slide-${character.id}`}
                    className={styles.slide}
                  >
                    <Link href={`/character/${character.link}`}>
                      <div className={styles.characterContainer}>
                        <Image
                          width={500}
                          height={500}
                          src={character.img}
                          alt="character"
                          loading="eager"
                        />
                      </div>
                      <p>{character.name}</p>
                    </Link>
                  </SwiperSlide>
                </React.Fragment>
              )
            })}

            <CustomNavigation />
            <CustomPagination characters={sortedCharactersByChapters} />
          </Swiper>
        </div>
      ) : (
        <div className={styles.notSlide}>
          {sortedCharactersByChapters.map((character: Character) => {
            return (
              <Link
                key={character.id}
                href={`/character/${character.link}`}
                style={{
                  display: 'block',
                  width: 'fit-content',
                  height: 'fit-content',
                  textAlign: 'center',
                }}
              >
                <div className={styles.characterContainer}>
                  <Image
                    width={500}
                    height={500}
                    src={character.img}
                    alt="character"
                    loading="eager"
                  />
                </div>
                <p>{character.name}</p>
              </Link>
            )
          })}
        </div>
      )}
    </>
  )
}

export default CharacterSwiper
