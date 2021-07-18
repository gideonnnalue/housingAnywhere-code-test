import { FC } from "react";
import { ICharacterModalProps, EpisodeData } from "./types";

const ChapterModal: FC<ICharacterModalProps> = ({
  episodes,
  closeModal,
}): JSX.Element => {
  return (
    <div className="modal__backdrop">
      <div className="modal__body" data-testid="modal-body">
        <button className="modal__close" onClick={closeModal}>
          X
        </button>
        <h3>CHAPTERS CHARACTER FEATURED IN</h3>
        <div className="characterCard__info--text" data-testid="chapter-list">
          {episodes.map((episode: EpisodeData) => (
            <p key={episode.id} data-testid="chapter-item">
              {episode.episode} - <span>{episode.name}</span>,
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChapterModal;
