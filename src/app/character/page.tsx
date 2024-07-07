import CharacterPage from '@/components/characterPage/CharacterPage'

import { promises as fs } from 'fs'
import { Character } from '@/types/character/characterTypes'

export default async function AllCharacter() {
  const data = await fs.readFile(
    process.cwd() + '/public/data/characters/characters.json',
    'utf8'
  )
  const characters: Character[] = JSON.parse(data)

  return <CharacterPage characters={characters} />
}
