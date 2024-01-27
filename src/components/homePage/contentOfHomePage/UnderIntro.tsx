import Image from 'next/image'
import styles from '../HomePage.module.scss'
import Footer from './Footer'

const UnderIntro = () => {
  return (
    <div className={styles.underIntroContainer}>
      <div className={styles.textInfoContainer}>
        <div className={styles.watchNowContainer}>
          <h2>Watch</h2>
          <h2>Now</h2>
        </div>
      </div>
      <div className={styles.videoContainer}>
        <Image
          width={500}
          height={500}
          src="/pictures/initialDVideo-min.gif"
          alt="intro-video"
        />
      </div>
      <Footer />
    </div>
  )
}

export default UnderIntro
