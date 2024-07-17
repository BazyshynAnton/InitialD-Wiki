import CharacterInfoPage from '@/components/characterPage/characterInfoPage/CharacterInfoPage'

import { promises as fs } from 'fs'
import { Character } from '@/types/character/characterInfo/characterInfoTypes'

export default async function AboutCharacter() {
  let characters: Character[]
  try {
    const data = await fs.readFile(
      process.cwd() + '/public/data/characters/characters.json',
      'utf8'
    )
    characters = JSON.parse(data)
  } catch (error) {
    console.error('Error reading or parsing JSON:', error)
    return <div>Error loading character data</div>
  }

  return <CharacterInfoPage characters={characters} />
}
