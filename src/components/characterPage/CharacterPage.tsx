import ReusablePage from '../shared/reusableComponents/reusablePage/ReusablePage'
import TitleText from '../shared/reusableComponents/titleText/TitleText'
import styles from './CharacterPage.module.scss'
import CharacterSwiper from './contentOfCharacterPage/characterSwiper/CharacterSwiper'

const CharacterPage = ({ characters }: any) => {
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
