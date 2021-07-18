import { FC, useState } from "react";
import ChapterModal from "./ChapterModal";
import { ICharacterProps } from "./types";

const CharacterCard: FC<ICharacterProps> = (props): JSX.Element => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const toggleModalState = (e: any) => {
    e.stopPropagation();
    setModalOpen((prev) => !prev);
  };
  const { image, origin, location, name, episode, species, status, gender } =
    props;
  const episodes = episode.reduce((current, next) => {
    const newCurr = [...current];
    newCurr.push(next.data);
    return newCurr;
  }, []);
  return (
    <div className="characterCard">
      <img className="characterCard__img" src={image} alt="character" />
      <div className="characterCard__content">
        <div className="characterCard__top">
          <h3 className="characterCard__name">{name}</h3>
          <p className="characterCard__status">
            {status}
            <span className={status}></span>
          </p>
        </div>
        <div className="characterCard__desc">
          <div className="characterCard__block">
            <div className="characterCard__info">
              <p className="characterCard__info--title">Gender</p>
              <p className="characterCard__info--text">{gender}</p>
            </div>
            <div className="characterCard__info">
              <p className="characterCard__info--title">Specie</p>
              <p className="characterCard__info--text">{species}</p>
            </div>
          </div>
          <h4>ORIGIN INFORMATION</h4>
          <div className="characterCard__block">
            <div className="characterCard__info">
              <p className="characterCard__info--title">NAME</p>
              <p className="characterCard__info--text">{origin.name}</p>
            </div>
            <div className="characterCard__info">
              <p className="characterCard__info--title">DIMENSION</p>
              <p className="characterCard__info--text">
                {origin.dimension ? origin.dimension : "unknown"}
              </p>
            </div>
            <div className="characterCard__info">
              <p className="characterCard__info--title">RESIDENTS</p>
              <p className="characterCard__info--text">
                {origin.residents ? origin.residents.length : 0}
              </p>
            </div>
          </div>

          <h4>LOCATION INFORMATION</h4>
          <div className="characterCard__block">
            <div className="characterCard__info">
              <p className="characterCard__info--title">NAME</p>
              <p className="characterCard__info--text">{location.name}</p>
            </div>
            <div className="characterCard__info">
              <p className="characterCard__info--title">DIMENSION</p>
              <p className="characterCard__info--text">
                {location.dimension ? location.dimension : "unknown"}
              </p>
            </div>
            <div className="characterCard__info">
              <p className="characterCard__info--title">RESIDENTS</p>
              <p className="characterCard__info--text">
                {location.residents ? location.residents.length : 0}
              </p>
            </div>
          </div>

          <div className="characterCard__block">
            <div className="characterCard__info">
              <p className="characterCard__info--title">CHAPTERS</p>
              <div className="characterCard__info--text">
                <p>
                  Character featured in <span>{episode.length}</span> chapters
                </p>
                <button onClick={toggleModalState}>
                  View Chapter information
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && (
        <ChapterModal episodes={episodes} closeModal={toggleModalState} />
      )}
    </div>
  );
};

export default CharacterCard;
