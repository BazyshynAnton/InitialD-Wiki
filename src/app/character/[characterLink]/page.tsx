import CharacterInfoPage from '@/components/characterPage/characterInfoPage/CharacterInfoPage'

import { promises as fs } from 'fs'
import { Character } from '@/types/character/characterInfo/characterInfoTypes'

export default async function AboutCharacter() {
  const data = await fs.readFile(
    process.cwd() + '/public/data/characters/characters.json',
    'utf8'
  )
  console.log(data)

  const characters: Character[] = JSON.parse(data)

  return <CharacterInfoPage characters={characters} />
}
