import { promises as fs } from 'fs'
import CharacterPage from '@/components/characterPage/CharacterPage'

export interface Character {
  name: string
  img: string
  link: string
  id: string
}

export default async function Character() {
  const data = await fs.readFile(
    process.cwd() + '/public/data/characters/characters.json',
    'utf8'
  )
  const characters: Character[] = JSON.parse(data)

  return <CharacterPage characters={characters} />
}
