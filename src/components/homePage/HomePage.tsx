import { Image } from '../shared/nextjsImports'

import HeaderForSmallScreens from '../header/headerForSmallScreens/HeaderForSmallScreens'
import NavigationBar from './contentOfHomePage/NavigationBar'
import UnderIntro from './contentOfHomePage/UnderIntro'

import styles from './HomePage.module.scss'

const HomePage = () => {
  return (
    <main>
      <section className={styles.containerOfIntroduce}>
        <HeaderForSmallScreens />
        <NavigationBar />
        <div className={styles.mainImgContainer}>
          <Image
            width={2000}
            height={3000}
            src="/pictures/previewPicture.jpg"
            alt="poster"
            priority={true}
          />
          <div className={styles.introTextImage}>
            <Image
              width={500}
              height={500}
              src="/pictures/introImgText.png"
              alt="poster"
            />
          </div>
        </div>
      </section>
      <UnderIntro />
    </main>
  )
}

export default HomePage
