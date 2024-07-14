import UnderIntro from './contentOfHomePage/UnderIntro'
import NavigationBar from './contentOfHomePage/NavigationBar'
import HeaderForSmallScreens from '../header/headerForSmallScreens/HeaderForSmallScreens'

import { Image } from '@/components/shared/nextjsImports'

import styles from '@/styles/homePage/HomePage.module.scss'
import Footer from '../footer/Footer'

export default function HomePage() {
  return (
    <>
      <main>
        <section className={styles.containerOfIntroduce}>
          <HeaderForSmallScreens />

          <NavigationBar />
          <div className={styles.mainImgContainer}>
            <Image
              width={2000}
              height={3000}
              src="/pictures/userInterface/previewPicture.jpg"
              alt="poster"
              priority={true}
              loading="eager"
            />
            <div className={styles.introTextImage}>
              <Image
                width={500}
                height={500}
                src="/pictures/userInterface/introImgText.png"
                alt="poster"
                loading="eager"
              />
            </div>
          </div>
        </section>
        <UnderIntro />
      </main>
      <Footer />
    </>
  )
}
