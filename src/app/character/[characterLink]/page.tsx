import CharacterInfoPage from '@/components/characterPage/characterInfoPage/CharacterInfoPage'
import { promises as fs } from 'fs'

export interface Character {
  name: string
  img: string
  link: string
  id: string
  aboutCharacter: string
  aboutCar: string
  carImg: string
}

export default async function AboutCharacter() {
  const data = await fs.readFile(
    process.cwd() + '/public/data/characters/characters.json',
    'utf8'
  )
  const characters: Character[] = JSON.parse(data)

  return <CharacterInfoPage characters={characters} />
}
