import charactersInfo from '../../../public/data/characters/charactersInfo.json'
import { Character } from '@/app/character/page'
import styles from './CharacterInformationPage.module.scss'
import Link from 'next/link'
import { inherits } from 'util'

const CharacterInformationPage = () => {
  return (
    <div className={styles.backgroundOfSlide}>
      <span className={styles.textures}></span>
      {charactersInfo.map((character, idx) => {
        const prevCharacter = idx > 0 ? charactersInfo[idx - 1] : null
        const nextCharacter =
          idx < charactersInfo.length - 1 ? charactersInfo[idx + 1] : null

        return (
          <div style={{ position: 'relative' }} key={character.id}>
            {prevCharacter && (
              <Link
                href={`/character/${prevCharacter.link}`}
                style={{ fontSize: '2rem', color: 'white', cursor: 'pointer' }}
              >
                prev
              </Link>
            )}
            {nextCharacter && (
              <Link href={`/character/${nextCharacter.link}`}>next</Link>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default CharacterInformationPage
