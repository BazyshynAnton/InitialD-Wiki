import Link from 'next/link'
import { Image } from '../../shared/nextjsImports'
import styles from '../HomePage.module.scss'

const NavigationBar = () => {
  return (
    <div className={styles.navigationBarContainer}>
      <Image
        width={500}
        height={500}
        src="/pictures/logoD.webp"
        alt="logoD"
        className={styles.logoD}
      />
      <ul>
        <li>
          <Link href="/introduction">Introduction</Link>
        </li>
        <li>
          <Link href="/">Character</Link>
        </li>
        <li>
          <Link href="/">Initial D -Product-</Link>
        </li>
        <li>
          <Link href="/">Goods</Link>
        </li>
        <li>
          <Link href="/">Youtube</Link>
        </li>
        <li>
          <Link href="/">Twitter</Link>
        </li>
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
