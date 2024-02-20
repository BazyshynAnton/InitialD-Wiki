'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel } from 'swiper/modules'
import styles from '../../CharacterPage.module.scss'

import 'swiper/css'
import 'swiper/css/pagination'
import CustomNavigation from './swiperComponents/CustomNavigation'
import CustomPagination from './swiperComponents/CustomPagination'

const CharacterSwiper = ({ characters }: any) => {
  return (
    <div style={{ width: '100%', height: '800px' }}>
      <Swiper
        slidesPerView={7}
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
        {characters.map((character: any) => {
          return (
            <SwiperSlide key={character.id} className={styles.slide}>
              <div className={styles.characterContainer}>
                <img src={character.img} alt="character" />
              </div>
              <p>{character.name}</p>
            </SwiperSlide>
          )
        })}

        <CustomNavigation />
        <CustomPagination characters={characters} />
      </Swiper>
    </div>
  )
}

export default CharacterSwiper
