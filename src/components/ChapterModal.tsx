import { FC } from "react"
import { ICharacterModalProps, EpisodeResponse } from "./types"

const ChapterModal: FC<ICharacterModalProps> = ({episodes, closeModal}): JSX.Element => {
  return (
    <div className="modal__backdrop">
      <div className="modal__body">
        <button className="modal__close" onClick={closeModal}>X</button>
        <h3>CHAPTERS CHARACTER FEATURED IN</h3>
        <div className="characterCard__info--text">
          {episodes.map((episode: EpisodeResponse) => (
            <p key={episode.data.id}>{episode.data.episode} - <span>{episode.data.name}</span>,</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChapterModal
