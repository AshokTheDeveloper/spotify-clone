import React from "react";
import "./SongItem.css"

const SongItem = (props) => {
  const { songDetails } = props;
  const { name, image, desc, id } = songDetails;
  return (
    <div className="song-item">
      <img src={image} alt={name} className="song-image" />
      <p className="song-name">{name}</p>
      <p className="song-description">{desc}</p>
    </div>
  );
};

export default SongItem;
