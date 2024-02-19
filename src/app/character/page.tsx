import { promises as fs } from 'fs'
import CharacterPage from '@/components/characterPage/CharacterPage'

// async function getCharacters() {
//   const res: any = await fetch('/data/characters/characters.json')

//   return res.json()
// }

export default async function Character() {
  const data = await fs.readFile(
    process.cwd() + '/public/data/characters/characters.json',
    'utf8'
  )
  const characters = JSON.parse(data)

  return <CharacterPage characters={characters} />
}
