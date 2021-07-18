import useFetchCharacters from '../hooks/useFetchCharacters';
import CharacterCard from '../components/CharacterCard';
import rickMorty from '../assets/screen-5.png';

const Home = () => {
  const {characters} = useFetchCharacters();

  const renderCharacterCard = () => {
    if(characters.length > 0) {
      return characters.map(character => {
        const {id, name, gender, species, status, image, origin, location, episode} = character;
        return (
        <CharacterCard
          key={id}
          name={name}
          gender={gender}
          species={species}
          status={status}
          image={image}
          origin={origin}
          location={location}
          episode={episode}/>)
      })
    }
  }
  return (
    <main className="home">
      <section className="home__banner">
        <div className="home__banner-content">
          <h1>Rick</h1>
          <img src={rickMorty} alt="rick and morty" />
          <h1>Morty</h1>
        </div>
      </section>
      <section className="home__body">
        <div className="home__content">
          {renderCharacterCard()}
        </div>
      </section>
    </main>
  )
}

export default Home
