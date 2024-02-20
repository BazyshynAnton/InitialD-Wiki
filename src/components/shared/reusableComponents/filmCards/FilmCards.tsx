import Image from 'next/image'

import styles from './FilmCards.module.scss'

interface Prop {
  img: string
}

const FilmCards = ({ img }: Prop) => {
  return (
    <Image
      width={500}
      height={500}
      src={img}
      alt="film"
      className={styles.imageContainer}
      priority={true}
      loading="eager"
    />
  )
}

export default FilmCards
