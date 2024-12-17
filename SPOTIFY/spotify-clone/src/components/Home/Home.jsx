import React, { useState } from "react";
import Header from "../Header/Header";
import Player from "../Player/Player";
import { assets } from "../../assets/assets";
import { albumsData } from "../../assets/assets";
import { songsData } from "../../assets/assets";
import AlbumItem from "../AlbumItem/AlbumItem";
import SongItem from "../SongItem/SongItem";

import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";

const Home = () => {
  const [expandSidebar, setSidebarExpand] = useState(false);

  const sidebarExpandHandle = () => {
    setSidebarExpand((prevState) => !prevState);
  };

  const renderHomeHeader = () => (
    <div className="home-navbar">
      {/* <div className="home-arrow-container">
        <button>
          <img src={assets.arrow_left} alt="arrow_left" />
        </button>
        <button>
          <img src={assets.arrow_right} alt="arrow_right" />
        </button>
      </div> */}
      <div className="music-type-container">
        <button>All</button>
        <button>Music</button>
        <button>Podcasts</button>
      </div>
    </div>
  );

  const renderAlbums = () => (
    <>
      <h1 className="featured-charts-text">Featured charts</h1>
      <div className="album-item-container">
        {albumsData.map((eachAlbum) => (
          <AlbumItem key={eachAlbum.id} albumDetails={eachAlbum} />
        ))}
      </div>
    </>
  );

  const renderSongs = () => (
    <>
      <h1 className="featured-charts-text">Today's biggest hits</h1>
      <div className="album-item-container">
        {songsData.map((eachSong) => (
          <SongItem key={eachSong.id} songDetails={eachSong} />
        ))}
      </div>
    </>
  );


  return (
    <>
      <Header />
      <div className="home-bg-container">
        {<Sidebar />}
        <div className="home-container">
          <div className="home-music-container">
            {renderHomeHeader()}
            {renderAlbums()}
            {renderSongs()}
          </div>
        </div>
      </div>
      <Player />
    </>
  );
};

export default Home;
