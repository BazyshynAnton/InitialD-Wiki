import Image from 'next/image'
import styles from '../HomePage.module.scss'
import Header from './Header'

const UnderIntro = () => {
  return (
    <div className={styles.underIntroContainer}>
      <div className={styles.textInfoContainer}></div>
      <div className={styles.videoContainer}>
        <Image
          width={500}
          height={500}
          src="/initialDVideo-min.gif"
          alt="intro-video"
        />
      </div>
      <Header />
    </div>
  )
}

export default UnderIntro
