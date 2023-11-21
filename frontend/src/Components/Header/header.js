import React from "react";
import "./header.css";

function header(){
  return (
    <div className="box">
      <header className="header">
        <div className="search">
          <div className="group">
            <input className="search-courses" placeholder="Search Courses, Documents, Activities..." type="text" />
            <img
              className="iconly-light-outline"
              alt="Iconly light outline"
              src="./images/iconly-light-outline-search@2x.png"
            />
          </div>
        </div>
        <div className="user">
          <div className="profile">
            <div className="div">
              <div className="overlap-group">
                <div className="allura-avatar" />
                <img
                  className="overlap-group"
                  alt="Allura avatar"
                  src="./images/allura-avatar@2x.png"
                />
              </div>
              <div className="text-wrapper">akwy666</div>
            </div>
          </div>
          <div className="notification">
            <div className="overlap">
              <img
                className="img"
                alt="Iconly light outline"
                src="./images/iconly-light-outline-notification@2x.png"
              />
              <div className="ellipse" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default header;