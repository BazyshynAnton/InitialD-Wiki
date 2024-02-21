import ReusablePage from '../shared/reusableComponents/reusablePage/ReusablePage'
import TitleText from '../shared/reusableComponents/titleText/TitleText'
import styles from './CharacterPage.module.scss'
import CharacterSwiper from './contentOfCharacterPage/characterSwiper/CharacterSwiper'
import { Character } from '../../app/character/page'

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
