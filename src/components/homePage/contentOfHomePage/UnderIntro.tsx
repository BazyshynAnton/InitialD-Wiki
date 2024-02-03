'use client'
import { useEffect, useState } from 'react'

import Image from 'next/image'
import Footer from './Footer'
import styles from '../HomePage.module.scss'
import FilmCards from '@/components/reusable/filmCards/FilmCards'

const UnderIntro = () => {
  // Hydration
  const [isDesktop, setIsDesktop] = useState<boolean | null>()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsDesktop(window.innerWidth >= 1001)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsDesktop(window.innerWidth >= 1001)
      }

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return (
    <div className={styles.underIntroContainer}>
      <div className={styles.textInfoContainer}>
        <div className={styles.watchNowContainer}>
          {isDesktop ? (
            <>
              <div className={styles.watchPlusMovieContainer}>
                <h2>Watch</h2>
                <FilmCards img="/pictures/fifthStageLogo.jpg" />
              </div>
              <div className={styles.playLinkToMovies}></div>
              <div className={styles.nowPlusMovieContainer}>
                <h2>Now</h2>
                <FilmCards img="/pictures/firstStageLogo.jpg" />
              </div>
            </>
          ) : (
            <>
              <div className={styles.smallScreenTextContainer}>
                <h2>Watch</h2>
                <h2 style={{ color: '#c23220' }}>Now</h2>
              </div>
              <div className={styles.playLinkToMovies}></div>
              <div className={styles.smallScreenMovieContainer}>
                <FilmCards img="/pictures/fifthStageLogo.jpg" />
                <FilmCards img="/pictures/firstStageLogo.jpg" />
              </div>
            </>
          )}
        </div>
      </div>
      <div className={styles.videoContainer}>
        <Image
          width={500}
          height={500}
          src="/pictures/initialDVideo.gif"
          alt="intro-video"
        />
      </div>
      <div className={styles.footerHelper}>
        <Footer />
      </div>
    </div>
  )
}

export default UnderIntro
