import Image from 'next/image'
import Footer from './Footer'
import styles from '../HomePage.module.scss'
import FilmCards from '@/components/reusable/filmCards/FilmCards'

const UnderIntro = () => {
  return (
    <div className={styles.underIntroContainer}>
      <div className={styles.textInfoContainer}>
        <div className={styles.watchNowContainer}>
          <div className={styles.watchPlusMovieContainer}>
            <h2>Watch</h2>
            <FilmCards img="/pictures/fifthStageLogo.jpg" />
          </div>
          <div className={styles.playLinkToMovies}></div>
          <div className={styles.nowPlusMovieContainer}>
            <h2>Now</h2>
            <FilmCards img="/pictures/firstStageLogo.jpg" />
          </div>
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
      <Footer />
    </div>
  )
}

export default UnderIntro
