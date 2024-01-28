import Image from 'next/image'
import styles from '../HomePage.module.scss'

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <Image
          width={500}
          height={500}
          src="/pictures/logoD.webp"
          alt="logoD"
          className={styles.footerLogoD}
        />
        <div className={styles.televisionLinks}>
          <Image
            width={500}
            height={500}
            src="/pictures/ntvLogo.jpg"
            alt="logoD"
          />
          <Image
            width={500}
            height={500}
            src="/pictures/netflixLogo.jpg"
            alt="logoD"
          />
          <Image
            width={500}
            height={500}
            src="/pictures/tbsLogo.png"
            alt="logoD"
          />
        </div>
        <h5>Copyright © {new Date().getFullYear()} All rights are reserved.</h5>
      </div>
    </div>
  )
}

export default Footer
