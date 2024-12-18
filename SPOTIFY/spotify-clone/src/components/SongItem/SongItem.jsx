import React, { useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";
import "./SongItem.css";

const SongItem = (props) => {
  const { songDetails } = props;
  const { name, image, desc, id } = songDetails;
  const { playWithId } = useContext(PlayerContext);

  const playSong = () => {
    playWithId(id);
  };
  return (
    <div onClick={playSong} className="song-item">
      <img src={image} alt={name} className="song-image" />
      <p className="song-name">{name}</p>
      <p className="song-description">{desc}</p>
    </div>
  );
};

export default SongItem;
