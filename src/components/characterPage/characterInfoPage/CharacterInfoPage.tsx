'use client'

import Image from 'next/image'
import { Character } from '../../../app/character/[characterLink]/page'
import { usePathname } from 'next/navigation'

import styles from './CharacterInfoPage.module.scss'
import Link from 'next/link'

export default function CharacterInfoPage({
  characters,
}: {
  characters: Character[]
}) {
  const pathname = usePathname()

  const currLink = pathname.substring(pathname.lastIndexOf('/') + 1)

  const character: Character | null = findCharacterByCurrentLink(
    characters,
    currLink
  )

  if (!character) return

  return (
    <div className={styles.characterContainer}>
      <span className={styles.characterBackground}></span>
      <Link href="/character" className={styles.closeCharacterInfo} />
      <div className={styles.characterVisualWrapper}>
        <div className={styles.characterFigure}>
          <Image
            className={styles.characterImg}
            width={1000}
            height={1000}
            src={character.characterImg}
            alt="characterCar"
            loading="eager"
          />
        </div>
      </div>
      <div className={styles.contentOfCharacter}>
        <div className={styles.characterTextInfo}>
          <h3>{character.name}</h3>
          <p>{character.aboutCharacter}</p>
          <Image
            width={900}
            height={500}
            src={character.carImg}
            alt="characterCar"
            loading="eager"
          />
          <h3>{character.carName}</h3>
          <p>{character.aboutCar}</p>
        </div>
      </div>
      <div className={styles.navigationArrows}>
        <Link href={character.prevLink} className={styles.arrowLeft}></Link>
        <Link href={character.nextLink} className={styles.arrowRight}></Link>
      </div>
    </div>
  )
}

// Find Character By Current Link
function findCharacterByCurrentLink(
  characters: Character[],
  currLink: string
): Character | null {
  for (let i = 0; i < characters.length; ++i) {
    if (characters[i].link === currLink) {
      return characters[i]
    }
  }

  return null
}
