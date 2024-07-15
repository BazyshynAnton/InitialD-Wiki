'use client'

import TitleText from '../shared/reusableComponents/titleText/TitleText'
import ReusablePage from '../shared/reusableComponents/reusablePage/ReusablePage'
import CharacterSwiper from './contentOfCharacterPage/characterSwiper/CharacterSwiper'

import { Character } from '@/types/character/characterTypes'

import styles from '@/styles/characterPage/CharacterPage.module.scss'
import Footer from '../footer/Footer'
import dynamic from 'next/dynamic'

const DynamicCharacterSwiper = dynamic(
  () => import('./contentOfCharacterPage/characterSwiper/CharacterSwiper'),
  { ssr: false }
)

export default function CharacterPage({
  characters,
}: {
  characters: Character[]
}) {
  return (
    <>
      <ReusablePage>
        <main className={styles.mainContainer}>
          <div className={styles.textContainer}>
            <TitleText title={'CHARACTER'} underTitle={'キャラクター'} />
          </div>
          <DynamicCharacterSwiper characters={characters} />
        </main>
      </ReusablePage>
      <Footer />
    </>
  )
}
