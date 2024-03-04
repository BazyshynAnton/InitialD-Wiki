'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel } from 'swiper/modules'
import { Character } from '../../../../app/character/page'
import styles from '../../CharacterPage.module.scss'

import 'swiper/css'
import 'swiper/css/pagination'
import CustomNavigation from './swiperComponents/CustomNavigation'
import CustomPagination from './swiperComponents/CustomPagination'
import Image from 'next/image'
import Link from 'next/link'

const CharacterSwiper = ({ characters }: { characters: Character[] }) => {
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
        {characters.map((character: Character) => {
          return (
            <SwiperSlide key={character.id} className={styles.slide}>
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
          )
        })}

        <CustomNavigation />
        <CustomPagination characters={characters} />
      </Swiper>
    </div>
  )
}

export default CharacterSwiper
