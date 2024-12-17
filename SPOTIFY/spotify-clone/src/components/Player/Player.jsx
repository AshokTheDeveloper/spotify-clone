import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { IoMdPlay, IoIosPause } from "react-icons/io";
import { PlayerContext } from "../../context/PlayerContext";
import "./Player.css";

const Player = () => {
  const { track, seekBg, seekBar, playStatus, play, pause, time, totalTime } =
    useContext(PlayerContext);
  return (
    <div className="player-container">
      <div className="player-left-container">
        <img src={track.image} alt="album_image" className="song-album-image" />
        <div className="player-song-info">
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
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
          {playStatus ? (
            <div onClick={pause} className="play-icon-container">
              <IoIosPause className="player-play-icon" />
            </div>
          ) : (
            <div onClick={play} className="play-icon-container">
              <IoMdPlay className="player-play-icon" />
            </div>
          )}
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
          <p>
            {time.currentTime.minute}:{time.currentTime.second}
          </p>
          <div ref={seekBg} className="seek-bar-container">
            <hr ref={seekBar} className="seek-bar" />
          </div>
          <p>
            {time.totalTime.minute}:{time.totalTime.second}
          </p>
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
