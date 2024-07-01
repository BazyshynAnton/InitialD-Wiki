import CharacterInfoPage from '@/components/characterPage/characterInfoPage/CharacterInfoPage'
import { promises as fs } from 'fs'

export interface Character {
  name: string
  img: string
  prevLink: string
  link: string
  nextLink: string
  id: string
  aboutCharacter: string
  characterImg: string
  carName: string
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
