import ReusableLinks from '@/components/shared/reusableComponents/ReusableNavLinks'

import { Image } from '../../../shared/nextjsImports'
import styles from '../HeaderForSmallScreens.module.scss'

interface Props {
  menuOpen: boolean
}

const HeaderItems = ({ menuOpen }: Props) => {
  return (
    <div
      className={`${
        menuOpen ? styles.headerItemsOpen : styles.headerItemsClose
      }`}
    >
      <Image
        width={500}
        height={500}
        src="/pictures/logoD.webp"
        alt="logoD"
        className={styles.logoDInItems}
      />
      <ReusableLinks />
    </div>
  )
}

export default HeaderItems
