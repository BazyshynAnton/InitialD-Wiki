import HeaderForBigScreensNextLayout from '../header/headerForBigScreensNextLayout/HeaderForBigScreensNextLayout'
import styles from './IntroductionPage.module.scss'

const IntroductionPage = () => {
  return (
    <>
      <HeaderForBigScreensNextLayout />
      <main className={styles.introMainContainer}>
        <div className={styles.contentContainer}>
          <h1>
            <span className={styles.header}>INTRODUCTION</span>
            <span className={styles.underHeader}>イントロダクション</span>
          </h1>

          <p>
            Initial D (頭文字イニシャルD, Inisharu Dī) is a Japanese seinen
            street racing manga by Shuichi Shigeno that ran from 1995 to 2013.
            It was adapted into an eleven part anime series, beginning with
            Initial D (commonly known as First Stage) in 1998 and ending with
            Initial D Final Stage in 2014.
          </p>

          <p>
            The series also spawned several video games, including a series of
            arcade games by SEGA.{' '}
          </p>
          <p>
            In 2005 a Hong Kong live action adaptation film was released. A
            trilogy of films known as New Initial D the Movie (or the Legends
            Trilogy) was released between 2014 and 2016. It was followed with a
            sequel manga series known as MF Ghost in 2017, which was
            subsequently followed by an anime adaptation in 2023.
          </p>
        </div>
      </main>
    </>
  )
}

export default IntroductionPage
