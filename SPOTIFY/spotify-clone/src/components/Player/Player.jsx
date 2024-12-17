import React from "react";
import { songsData } from "../../assets/assets";
import { assets } from "../../assets/assets";
import { IoMdPlay } from "react-icons/io";

import "./Player.css";

const Player = () => {
  return (
    <div className="player-container">
      <div className="player-left-container">
        <img
          src={songsData[0].image}
          alt="album_image"
          className="song-album-image"
        />
        <div className="player-song-info">
          <p>{songsData[0].name}</p>
          <p>{songsData[0].desc.slice(0, 12)}</p>
        </div>
      </div>
      <div>
        <div className="player-controllers-container">
          <img
            src={assets.shuffle_icon}
            alt="shuffle_icon"
            className="shuffle-icon"
          />
          <img
            src={assets.prev_icon}
            alt="shuffle_icon"
            className="shuffle-icon"
          />
          <div className="play-icon-container">
            <IoMdPlay className="player-play-icon" />
          </div>
          <img
            src={assets.next_icon}
            alt="shuffle_icon"
            className="shuffle-icon"
          />
          <img
            src={assets.loop_icon}
            alt="shuffle_icon"
            className="shuffle-icon"
          />
        </div>
        <div className="seek-bar-bg-container">
          <p>1:06</p>
          <div className="seek-bar-container">
            <hr className="seek-bar" />
          </div>
          <p>3:01</p>
        </div>
      </div>
      <div className="player-right-container">
        <img
          src={assets.plays_icon}
          alt="play_icon"
          className="player-right-icons"
        />
        <img
          src={assets.mic_icon}
          alt="play_icon"
          className="player-right-icons"
        />
        <img
          src={assets.queue_icon}
          alt="play_icon"
          className="player-right-icons"
        />
        <img
          src={assets.speaker_icon}
          alt="play_icon"
          className="player-right-icons"
        />
        <img
          src={assets.volume_icon}
          alt="play_icon"
          className="player-right-icons"
        />
        <div className="mini-player"></div>
        <img
          src={assets.mini_player_icon}
          alt="play_icon"
          className="player-right-icons"
        />
        <img
          src={assets.zoom_icon}
          alt="play_icon"
          className="player-right-icons"
        />
      </div>
    </div>
  );
};

export default Player;
