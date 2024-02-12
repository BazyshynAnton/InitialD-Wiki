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
      <ul>
        <li>Introduction</li>
        <li>Character</li>
        <li>Initial D -Product-</li>
        <li>Goods</li>
        <li>Youtube</li>
        <li>Twitter</li>
      </ul>
    </div>
  )
}

export default HeaderItems
