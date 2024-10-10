import ReusableLinks from "@/components/shared/reusableComponents/ReusableNavLinks"

import { Image, Link } from "@/components/shared/nextjsImports"

import styles from "@/styles/header/headerForSmallScreens/HeaderForSmallScreens.module.scss"

interface Props {
  menuOpen: boolean
}

export default function HeaderContent({ menuOpen }: Props) {
  return (
    <div
      className={`${
        menuOpen
          ? styles.headerSmall__content_open
          : styles.headerSmall__content_close
      }`}
    >
      <Link href="/">
        <Image
          width={500}
          height={500}
          src="/pictures/userInterface/logoD.webp"
          alt="logoD"
          loading="eager"
          className={styles.logoDInContent}
        />
      </Link>
      <ReusableLinks />
    </div>
  )
}
