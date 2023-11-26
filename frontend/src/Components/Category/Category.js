import React from "react";
import { useNavigate } from "react-router-dom";
import "./Category.css";

import Cyber from "./images/cyber-security-icon.svg";
import FE from "./images/front-end-icon.svg";
import BE from "./images/back-end-icon.svg";
import ai from "./images/ai-ml-icon.svg";
import data from "./images/data-science-icon.svg";
import networking from "./images/networking-icon.svg";

const Category = () => {
    const navigate = useNavigate(); 

    const handleClick = (bannerName) => {
      console.log('You clicked the div!');
      navigate('/login');

    switch (bannerName) {
      case "Front-end":
        console.log("Front-end clicked");
        break;
      case "Back-end":
        console.log("Back-end clicked");
        break;
      case "Data Science":
        console.log("Data Science clicked");
        break;
      case "Cyber Security":
        console.log("Cyber Security clicked");
        break;
      case "AI & ML":
        console.log("AI & ML clicked");
        break;
      case "Networking":
        console.log("Networking clicked");
        break;
      default:
        break;
    }
  };

  return (
    <div className="dashboard-category">
      <div className="group-transition-banner11">
        <div className="group-frontend-banner">
          <div className="group-banner-child-2" onClick={() => handleClick("Front-end")} />
          <b className="front-end">Front-end</b>
          <img className="group-frontend-banner-item" alt="" src={FE} />
        </div>

        <div className="group-backend-banner">
          <div className="group-banner-child-3" onClick={() => handleClick("Back-end")}/>
          <div className="group-backend-banner-item" />
          <b className="back-end">Back-end</b>
          <img className="layers-icon" alt="" src={BE} />
        </div>

        <div className="group-datascience-banner">
          <div className="group-banner-child-1" onClick={() => handleClick("Data Science")}/>
          <b className="data-science">Data Science</b>
          <div className="group-datascience-banner-item" />
          <img className="icon-archive" alt="" src={data} />
        </div>

        <div className="group-cyber-sec-banner">
          <div className="group-banner-child-1" onClick={() => handleClick("Cyber Security")}/>
          <div className="group-cyber-sec-banner-item" />
          <img className="icon-lock" alt="" src={Cyber} />
          <b className="cyber-security">Cyber Security</b>
        </div>

        <div className="group-aiml-banner">
          <div className="group-banner-child-1" onClick={() => handleClick("AI & ML")}/>
          <div className="group-aiml-banner-item" />
          <b className="ai-ml">AI & ML</b>
          <img className="icon-people-rounded" alt="" src={ai} />
        </div>

        <div className="group-networking-banner">
          <div className="group-banner-child-2" onClick={() => handleClick("Networking")}/>
          <div className="group-datascience-banner-item" />
          <b className="networking">Networking</b>
          <img className="icon-network-alt" alt="" src={networking} />
        </div>
      </div>
    </div>
  );
};

export default Category;

