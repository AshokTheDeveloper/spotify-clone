import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { assets } from "../../assets/assets";
import "./Sidebar.css";

const Sidebar = () => {
  const [expandSidebar, setSidebarExpand] = useState(false);

  const sidebarExpandHandle = () => {
    setSidebarExpand((prevState) => !prevState);
  };
  return (
    <div className={`sidebar-bg-container ${expandSidebar ? "expand" : ""}`}>
      <div className="sidebar-middle-container">
        <div className="sidebar-nav-container">
          <div className="sidebar-nav">
            <img src={assets.stack_icon} alt="stack_icon" />
            <p>Your Library</p>
          </div>
          <div className="sidebar-nav-play">
            <button className="sidebar-buttons">
              <img
                src={assets.plus_icon}
                alt="play_icons"
                className="play-plus-icon"
              />
            </button>
            <button className="sidebar-buttons" onClick={sidebarExpandHandle}>
              {expandSidebar ? (
                <IoMdArrowBack className="play-plus-icon-back-arrow" />
              ) : (
                <img
                  src={assets.arrow_icon}
                  alt="play_icons"
                  className="play-plus-icon"
                />
              )}
            </button>
          </div>
        </div>
        <div className="sidebar-bottom-container">
          <h1>Create your first playlist</h1>
          <p>It's easy, we'll help you</p>
          <button>Create Playlist</button>
        </div>
        <div className="sidebar-bottom-container">
          <h1>Lets find some podcasts to follow</h1>
          <p>We will keep you update on new episodes</p>
          <button>Browse Podcasts</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
