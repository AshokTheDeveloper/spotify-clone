import React from "react";
import "./AlbumItem.css";
import { Link } from "react-router-dom";

const AlbumItem = (props) => {
  const { albumDetails } = props;
  const { image, name, desc, id } = albumDetails;
  return (
    <Link to={`/album/${id}`} className="album-links">
      <div className="album-item">
        <img src={image} alt={name} className="album-image" />
        <p className="album-name">{name}</p>
        <p className="album-description">{desc}</p>
      </div>
    </Link>
  );
};

export default AlbumItem;
