import ReusableLinks from '@/components/shared/reusableComponents/ReusableNavLinks'

import { Image } from '@/components/shared/nextjsImports'

import styles from '@/styles/header/headerForSmallScreens/HeaderForSmallScreens.module.scss'

interface Props {
  menuOpen: boolean
}

export default function HeaderItems({ menuOpen }: Props) {
  return (
    <div
      className={`${
        menuOpen ? styles.headerItemsOpen : styles.headerItemsClose
      }`}
    >
      <Image
        width={500}
        height={500}
        src="/pictures/userInterface/logoD.webp"
        alt="logoD"
        loading="eager"
        className={styles.logoDInItems}
      />
      <ReusableLinks />
    </div>
  )
}
