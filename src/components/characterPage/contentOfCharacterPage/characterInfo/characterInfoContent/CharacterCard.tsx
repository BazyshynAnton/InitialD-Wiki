const CharacterCard = ({ name, charText, carText }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{charText}</p>
      <h2>{carText}</h2>
    </div>
  )
}

export default CharacterCard
