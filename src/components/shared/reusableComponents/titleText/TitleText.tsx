'use client'
import { usePathname } from 'next/navigation'
import styles from './TitleText.module.scss'

interface Props {
  title: string
  underTitle: string
}
const TitleText = ({ title, underTitle }: Props) => {
  const currentPath = usePathname()
  return (
    <h1 className={styles.textBlock}>
      <span
        className={`${
          currentPath === '/introduction' ? styles.titleIntroduction : ''
        } ${currentPath === '/character' ? styles.titleCharacter : ''}`}
      >
        {title}
      </span>
      <span
        className={`${
          currentPath === '/introduction' ? styles.underTitleIntroduction : ''
        } ${currentPath === '/character' ? styles.underTitleCharacter : ''}`}
      >
        {underTitle}
      </span>
    </h1>
  )
}

export default TitleText
