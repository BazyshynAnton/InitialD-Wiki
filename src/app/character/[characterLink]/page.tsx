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
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error reading or parsing JSON:', error.message)
    } else {
      console.error('Unexpected error:', error)
    }

    return <div style={{ color: '#fff' }}>Error</div>
  }

  return <CharacterInfoPage characters={characters} />
}
