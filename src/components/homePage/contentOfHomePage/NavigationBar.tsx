import { Image, Link } from '@/components/shared/nextjsImports'

import styles from '@/styles/homePage/HomePage.module.scss'

const NavigationBar = () => {
  return (
    <div className={styles.navigationBarContainer}>
      <Image
        width={500}
        height={500}
        src="/pictures/userInterface/logoD.webp"
        alt="logoD"
        loading="eager"
        className={styles.logoD}
      />
      <ul>
        <li>
          <Link href="/introduction">Introduction</Link>
        </li>
        <li>
          <Link href="/character">Character</Link>
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
            src="/pictures/userInterface/videoPreview.png"
            alt="logoD"
            loading="eager"
          />
        </div>
      </section>
    </div>
  )
}

export default NavigationBar
