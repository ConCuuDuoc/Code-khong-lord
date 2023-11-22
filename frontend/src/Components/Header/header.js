import React, { useState } from "react";
import "./Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from "react-bootstrap/Dropdown";
import Avatar from "./images/Allura Avatar.svg";
import Noti from "./images/Notification.svg";

function Header() {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
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
            <div className="notification">
              <div className="overlap-group">
                <img
                  className="iconly-light-outline-2"
                  alt="Iconly light outline"
                  src={Noti}
                />
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
              <Dropdown.Item>Item 1</Dropdown.Item>
              <Dropdown.Item>Item 2</Dropdown.Item>
              <Dropdown.Item>Item 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          </div>

      </div>
    </div>
  );
}

export default Header;


