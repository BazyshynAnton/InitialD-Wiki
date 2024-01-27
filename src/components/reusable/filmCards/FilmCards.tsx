import Image from 'next/image'

import styles from './FilmCards.module.scss'

interface Prop {
  img: string
  text: string
  price: string
}

const FilmCards = ({ img, text, price }: Prop) => {
  return (
    <div>
      <div>
        <Image width={500} height={500} src={img} alt="film" />
      </div>
      <div>
        <h3>{text}</h3>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default FilmCards
