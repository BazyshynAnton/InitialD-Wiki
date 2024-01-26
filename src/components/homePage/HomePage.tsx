import { Image } from '../shared/nextjsImports'
import Header from './contentOfHomePage/Header'
import NavigationBar from './contentOfHomePage/NavigationBar'
import UnderIntro from './contentOfHomePage/UnderIntro'

import styles from './HomePage.module.scss'

const HomePage = () => {
  return (
    <main>
      <section className={styles.containerOfIntroduce}>
        <NavigationBar />

        <Image
          priority={true}
          width={2000}
          height={3000}
          src="/prev.jpg"
          alt="poster"
        />
      </section>
      <UnderIntro />
    </main>
  )
}

export default HomePage
