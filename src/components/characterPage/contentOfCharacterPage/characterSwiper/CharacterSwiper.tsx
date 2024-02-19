'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import Image from 'next/image'

import styles from '../../CharacterPage.module.scss'

import 'swiper/css'
import 'swiper/css/pagination'

const CharacterSwiper = ({ characters }: any) => {
  return (
    <div style={{ width: '100%', height: '800px' }}>
      <Swiper
        slidesPerView={15}
        spaceBetween={40}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        style={{
          overflow: 'visible',
          overflowX: 'clip',
          overflowY: 'visible',
          height: 'auto',
          zIndex: '200',
        }}
        modules={[Pagination]}
      >
        {characters.map((character: any) => {
          return (
            <SwiperSlide key={character.id} className={styles.slide}>
              <div className={styles.characterContainer}>
                <Image
                  width={200}
                  height={300}
                  src={character.img}
                  alt="character"
                />
              </div>
              <p>{character.name}</p>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default CharacterSwiper
