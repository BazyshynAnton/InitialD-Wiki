import TitleText from '../shared/reusableComponents/titleText/TitleText'
import ReusablePage from '../shared/reusableComponents/reusablePage/ReusablePage'
import CharacterSwiper from './contentOfCharacterPage/characterSwiper/CharacterSwiper'

import { Character } from '@/types/character/characterTypes'

import styles from '@/styles/characterPage/CharacterPage.module.scss'

const CharacterPage = ({ characters }: { characters: Character[] }) => {
  return (
    <ReusablePage>
      <main className={styles.mainContainer}>
        <div className={styles.textContainer}>
          <TitleText title={'CHARACTER'} underTitle={'キャラクター'} />
        </div>
        <CharacterSwiper characters={characters} />
      </main>
    </ReusablePage>
  )
}

export default CharacterPage
