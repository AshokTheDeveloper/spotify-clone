import React from "react";
import { assets } from "../../assets/assets";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <img
        src={assets.spotify_svg}
        alt="header_logo"
        className="header-logo-icon"
      />
      <div className="header-right-container">
        <div className="right-search-container">
          <div className="header-home-icon-container">
            <img
              src={assets.home_icon}
              alt="home_icon"
              className="header-icons"
            />
          </div>
          <div className="header-search-container">
            <div className="search-input-container">
              <img
                src={assets.search_icon}
                alt="search_icon"
                className="header-icons"
              />
              <input type="text" placeholder="What do you want to play?" />
            </div>
          </div>
        </div>
        <div className="right-profile-bg-container">
          <button className="explore-premium-button">Explore Premium</button>
          <div className="right-profile-container">
            <div className="install-app-container">
              <MdOutlineDownloadForOffline className="download-icon" />
              <button>Install App</button>
            </div>
            <div className="notifications-container">
              <IoNotificationsOutline className="bell-icon" />
            </div>
            <div className="user-profile-container">
              <p className="profile">A</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
