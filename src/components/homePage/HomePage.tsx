import { Image } from '../shared/nextjsImports'
import NavigationBar from './contentOfHomePage/NavigationBar'
import UnderIntro from './contentOfHomePage/UnderIntro'

import styles from './HomePage.module.scss'

const HomePage = () => {
  return (
    <main>
      <section className={styles.containerOfIntroduce}>
        <NavigationBar />
        <div className={styles.mainImgContainer}>
          <Image
            width={2000}
            height={3000}
            src="/pictures/previewPicture.jpg"
            alt="poster"
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
