import React, { useContext, useEffect, useRef } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Header from "../Header/Header";
import Player from "../Player/Player";
import Sidebar from "../Sidebar/Sidebar";
import { albumsData, assets, songsData } from "../../assets/assets";
import { PlayerContext } from "../../context/PlayerContext";
import "./Album.css";

const Album = () => {
  const { audioRef, track, playWithId } = useContext(PlayerContext);
  const albumRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");

  const { id } = useParams();
  const albumData = albumsData[id];
  const { bgColor, desc, image, name } = albumData;

  useEffect(() => {
    if (isAlbum) {
      albumRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      albumRef.current.style.background = "#121212";
    }
  });

  const renderHomeHeader = () => (
    <div className="album-navbar">
      <div className="album-arrow-container">
        <Link to="/">
          <img src={assets.arrow_left} alt="arrow_left" />
        </Link>
        <Link>
          <img src={assets.arrow_right} alt="arrow_right" />
        </Link>
      </div>
    </div>
  );

  return (
    <div>
      <Header />
      <div className="album-bg-container">
        <Sidebar />
        <div className="album-wrapper" ref={albumRef}>
          {renderHomeHeader()}

          <div className="album-container">
            <div className="album-top-section">
              <img src={image} alt={name} />
              <div className="album-details-container">
                <p>Playlist</p>
                <h1>{name}</h1>
                <p>{desc}</p>
                <div className="description-container">
                  <img src={assets.spotify_logo} alt="spotify_logo" />
                  <p>Spotify</p>
                  <p>50 songs,</p>
                  <p>About 1 hour</p>
                </div>
              </div>
            </div>
          </div>
          <div className="album-songs-container">
            <p>
              <b className="hash-tag">#</b>Title
            </p>
            <p>Album</p>
            <p>Date added</p>
            <img
              src={assets.clock_icon}
              alt="clock_icon"
              className="clock-icon"
            />
          </div>
          <div>
            {songsData.map((eachSong, index) => (
              <div
                onClick={() => playWithId(eachSong.id)}
                key={index}
                className="album-each-song-container"
              >
                <div className="image-container">
                  <p className="song-number">{index + 1}</p>
                  <img
                    src={eachSong.image}
                    alt="album_song"
                    className="album-song-image"
                  />
                  <div className="album-name-desc-container">
                    <p className="album-song-name">{eachSong.name}</p>
                    <p className="album-song-description">{eachSong.desc}</p>
                  </div>
                </div>
                <p>Happy</p>
                <p>5 days ago</p>
                <p>{eachSong.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Player />
      <audio preload="auto" ref={audioRef} src={track.file}></audio>
    </div>
  );
};

export default Album;
