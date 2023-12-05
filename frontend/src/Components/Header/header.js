import React, { useState } from "react";
import "./header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from "react-bootstrap/Dropdown";
import Avatar from "./images/Allura Avatar.svg";
import Cart from "./images/Cart.svg";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { logout } from "../../actions/auth"
import { getVideoAPI } from "../../actions/video"

require('dotenv').config();

function Header({ numItems, setShowCart, logout }) {
  const [searchText, setSearchText] = useState("");
  const [videos, setVideos] = useState([]);
  

  const handleSearchChange = async (e) => {
    const query = e.target.value;
    setSearchText(query);

    if (query) {
      try{
        const response = getVideoAPI(query)
        if (response.data && response.data.videos) {
          setVideos(response.data.videos);
        }
        else {
          console.error("Error fetching videos from YouTube:", error);
        }
      }
      catch{
          console.error("Error fetching videos from YouTube:", error);

      }
    } 
    else {
      setVideos([]);
    }
  };

  const onShowCartHandler = () => {
    setShowCart(true);
  };

  const logout_user = () => {
    logout();
    console.log("User logged out");
  };

  return (
    <div className='box'>
      
      <div className="header">
        <div className="search-bar">
          <form class="form-inline my-2 my-lg-0">
            <input 
              class="form-control" 
              type="search" 
              value={searchText}
              placeholder="Search Courses, Documents, Activities..." 
              aria-label="Search"
              onChange={handleSearchChange}/>
          </form>
        </div>
        
        <div className="user">
            <div className="notification" onClick={onShowCartHandler}>
              <div className="overlap-group">
                <img
                  className="iconly-light-outline-2"
                  alt="Iconly light outline"
                  src={Cart}
                />

                <span className="number">
                  <sup>{numItems}</sup>
                </span>
                
                <div className="ellipse" />
              </div>
            </div>
            
            <Dropdown>
              <div className="profile">
                <div className="allura-avatar">
                  <div className="allura-avatar-2" />
                  <img
                    className="allura-avatar"
                    alt="Allura avatar"
                    src={Avatar}
                  />
                  <div className="text-wrapper">akwy666</div>
                  <Dropdown.Toggle id="dropdown-basic">
                  </Dropdown.Toggle>
                </div>
              </div>
            
            <Dropdown.Menu>
              {/* Add your dropdown menu items here */}
              <Dropdown.Item>Wow</Dropdown.Item>
              <Dropdown.Item>Không có</Dropdown.Item>
              <Dropdown.Item>Chức năng</Dropdown.Item>
              <Dropdown.Item>Gì ở đây cả</Dropdown.Item>
              <Dropdown.Item onClick={logout_user}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </div>
          
          {videos.length > 0 && (
            <div className="search-results">
              {videos.map((video) => (
                <Link to={`/learningmode/${video.snippet.resourceId.videoId}/${encodeURIComponent(video.snippet.title)}`} key={video.snippet.resourceId.videoId}>
                  <div>
                    <p>{video.snippet.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}


      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Header);


