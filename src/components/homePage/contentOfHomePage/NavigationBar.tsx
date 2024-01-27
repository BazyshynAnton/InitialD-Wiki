import { Image } from '../../shared/nextjsImports'
import styles from '../HomePage.module.scss'

const NavigationBar = () => {
  return (
    <div className={styles.navigationBarContainer}>
      <Image width={500} height={500} src="/pictures/logoD.webp" alt="logoD" />
      <ul>
        <li>Introduction</li>
        <li>Character</li>
        <li>Initial D -Product-</li>
        <li>Goods</li>
        <li>Youtube</li>
        <li>Twitter</li>
      </ul>
      <section className={styles.videoAd}>
        <div>
          <Image
            width={500}
            height={500}
            src="/pictures/videoPreview.png"
            alt="logoD"
          />
        </div>
      </section>
    </div>
  )
}

export default NavigationBar
