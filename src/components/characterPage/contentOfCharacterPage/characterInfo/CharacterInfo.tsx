import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

import CharacterCard from './characterInfoContent/CharacterCard'

import characters from '../../../../../public/data/characters/characters.json'
// Import Swiper styles

import 'swiper/css'
import styles from './CharacterInfo.module.scss'

interface Character {
  name: string
  img: string
  link: string
  aboutCharacter: string
  aboutCar: string
  carImg: string
  id: string
}

const CharacterInfo = ({ character }: { character: Character }) => {
  return (
    <div className={styles.backgroundOfSlide}>
      <span className={styles.textures}></span>

      <Swiper className="mySwiper">
        <SwiperSlide>
          <CharacterCard
            name={character.name}
            charText={character.aboutCharacter}
            carText={character.aboutCar}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default CharacterInfo
