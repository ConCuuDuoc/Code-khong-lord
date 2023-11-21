import React from "react";
import "./leftbar.css";

function LeftBar () {
  return (
      <div className="box">
          <div className="left-bar">
            <div className="overlap-12">
              <div className="rectangle-6" />
              <div className="profile-2">
                <div className="rectangle-7" />
                <div className="group-41">
                  <div className="text-wrapper-93">Profile</div>
                  <img
                    className="iconly-bold-home"
                    alt="Iconly bold home"
                    src="./images/iconly-bold-home@2x.png"
                  />
                </div>
              </div>
              <div className="my-learning">
                <div className="group-42">
                  <div className="text-wrapper-94">My Learning</div>
                </div>
                <img
                  className="iconly-light-outline-6"
                  alt="Iconly light outline"
                  src="./images/iconly-light-outline-3-user@2x.png"
                />
              </div>
              <div className="categories">
                <div className="text-wrapper-95">Categories</div>
                <img
                  className="iconly-light-outline-7"
                  alt="Iconly light outline"
                  src="./images/iconly-light-outline-document-2@2x.png"
                />
              </div>
              <div className="course-cart">
                <div className="text-wrapper-96">Course Cart</div>
                <img className="group-43" alt="Group" src="./images/group@2x.png" />
              </div>
              <div className="settings">
                <div className="text-wrapper-97">Settings</div>
                <img
                  className="iconly-light-outline-8"
                  alt="Iconly light outline"
                  src="./images/iconly-light-outline-setting@2x.png"
                />
              </div>
              <div className="sign-out">
                <div className="text-wrapper-98">Sign Out</div>
                <img
                  className="iconly-light-outline-9"
                  alt="Iconly light outline"
                  src="./images/iconly-light-outline-logout@2x.png/"
                />
              </div>
              <p className="codelord-logo">
                <span className="text-wrapper-99">CodeLord</span>
              </p>
              </div>   
        </div>
      </div>
  );
};

export default LeftBar;