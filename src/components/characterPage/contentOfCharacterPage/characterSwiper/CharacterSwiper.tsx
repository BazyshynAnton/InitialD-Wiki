'use client'

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Mousewheel } from 'swiper/modules'
import { Character } from '../../../../app/character/page'
import React, { useState } from 'react'

import Image from 'next/image'
import CustomNavigation from './swiperComponents/CustomNavigation'
import CustomPagination from './swiperComponents/CustomPagination'
import CharacterInfo from '../characterInfo/CharacterInfo'

import 'swiper/css'
import 'swiper/css/pagination'
import styles from '../../CharacterPage.module.scss'

const CharacterSwiper = ({ characters }: { characters: Character[] }) => {
  const [showInfo, setShowInfo] = useState<boolean>(false)

  const handleCardClick = (link: string) => {
    setShowInfo(true)
    window.history.pushState(null, '', `/character/${link}`)
  }

  return (
    <>
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
              <React.Fragment key={character.id}>
                <SwiperSlide
                  key={`slide-${character.id}`}
                  className={styles.slide}
                >
                  <div
                    onClick={() => handleCardClick(character.link)}
                    className={styles.characterContainer}
                  >
                    <Image
                      width={500}
                      height={500}
                      src={character.img}
                      alt="character"
                      loading="eager"
                    />
                  </div>
                  <p>{character.name}</p>
                </SwiperSlide>
                {showInfo && <CharacterInfo character={character} />}
              </React.Fragment>
            )
          })}

          <CustomNavigation />
          <CustomPagination characters={characters} />
        </Swiper>
      </div>
    </>
  )
}

export default CharacterSwiper
