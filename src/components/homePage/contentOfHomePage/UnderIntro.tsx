'use client'

import FilmCards from '@/components/shared/reusableComponents/filmCards/FilmCards'

import { useEffect, useState } from '../../shared/reactImports'

import styles from '../HomePage.module.scss'

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
                <FilmCards img="/pictures/userInterface/fifthStageLogo.jpg" />
              </div>
              <div className={styles.playLinkToMovies}></div>
              <div className={styles.nowPlusMovieContainer}>
                <h2>Now</h2>
                <FilmCards img="/pictures/userInterface/firstStageLogo.jpg" />
              </div>
            </>
          ) : (
            <>
              <div className={styles.smallScreenTextContainer}>
                <h2>Watch</h2>
                <h2>Now</h2>
              </div>
              <div className={styles.playLinkToMovies}></div>
              <div className={styles.smallScreenMovieContainer}>
                <FilmCards img="/pictures/userInterface/fifthStageLogo.jpg" />
                <FilmCards img="/pictures/userInterface/firstStageLogo.jpg" />
              </div>
            </>
          )}
        </div>
      </div>
      <div className={styles.videoContainer}>
        <iframe
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            width: '100%',
            height: '100%',
          }}
          src="https://www.youtube.com/embed/D6T6MeMdjfo?controls=0&autoplay=1&mute=1&loop=1&playlist=D6T6MeMdjfo"
          title="initd"
          allow="accelerometer; autoplay; loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default UnderIntro
