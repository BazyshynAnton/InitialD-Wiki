'use client'

import { Character } from '../../../app/character/page'
import { usePathname } from 'next/navigation'

import styles from './CharacterInfoPage.module.scss'

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
    <div>
      <span className={styles.characterContainer}></span>
      <div className={styles.contentOfCharacter}>
        <div className={styles.characterTextInfo}>
          <h3>{character.name}</h3>
          <p>{character.aboutCharacter}</p>
          {/* CAR IMG */}
          {/* ABOUT CAR */}
        </div>
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
