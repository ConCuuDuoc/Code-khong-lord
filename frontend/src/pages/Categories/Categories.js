import React, {useState} from "react";
import "./Categories.css";

import LeftBar from "../../Components/Leftbar/leftbar"; 
import Header from "../../Components/Header/header"; 
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cyber from "./images/cyber-security-icon.svg";
import FE from "./images/front-end-icon.svg";
import BE from "./images/back-end-icon.svg";
import ai from "./images/ai-ml-icon.svg";
import data from "./images/data-science-icon.svg";
import networking from "./images/networking-icon.svg";
import meta from "./images/meta.svg"
// import iconplaypurple from "./images/icon-play-purple.svg"
import iconplayyellow from "./images/icon-play-yellow.svg"

const Categories = () => {
  const [currentBannerName, setCurrentBannerName] = useState(false);
  const [currentLesson, setCurrentLesson] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(false);
  const [currentCourseName, setCourseName] = useState(false);
  const [currentCourseSkills, setCourseSkills] = useState(false);
  const [isCardVisible, setCardVisibility] = useState(false)
  
  const handleClick = (bannerName) => {
    console.log('You clicked the div!');
    setCurrentBannerName(bannerName);
    setCardVisibility(true);
    switch (bannerName) {
      case "Front-end":
        setCurrentLesson("xxx Lesson");
        setCurrentSkill("Front-end");
        setCourseName("Test FE");
        setCourseSkills("Front end, Web Development");
        break;
      case "Back-end":
        setCurrentLesson("xxx Lesson");
        setCurrentSkill("Back-end");
        setCourseName("Test BE");
        setCourseSkills("Back end, Web Development");
        break;
      case "Data Science":
        setCurrentLesson("xxx Lesson");
        setCurrentSkill("Data Science");
        setCourseName("Test Data Science");
        setCourseSkills("Data Science, Web Development");
        break;
      case "Cyber Security":
        setCurrentLesson("xxx Lesson");
        setCurrentSkill("Cyber Security");
        setCourseName("Test Cyber Security");
        setCourseSkills("Cyber Security, Web Development");
        break;
      case "AI & ML":
        setCurrentLesson("xxx Lesson");
        setCurrentSkill("AI & ML");
        setCourseName("Test AI & ML");
        setCourseSkills("AI & ML, Web Development");
        break;
      case "Networking":
        setCurrentLesson("xxx Lesson");
        setCurrentSkill("Networking");
        setCourseName("Test Networking");
        setCourseSkills("Networking, Web Development");
        break;
      default:
        break;
  }
};

  return (
    <div className="dashboard-categories">
      <LeftBar />
      <Header />
      <div className="careerpath">Career Paths</div>

        <div className="group-transition-banner">

          <div className="group-frontend-banner">
            <div className="group-banner-child-2" onClick={() => handleClick("Front-end")} />
            <b className="front-end">Front-end</b>
            <img
              className="group-frontend-banner-item"
              alt=""
              src={FE}
            />
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
            <img
              className="icon-people-rounded"
              alt=""
              src={ai}
            />
          </div>

          <div className="group-networking-banner">
            <div className="group-banner-child-2" onClick={() => handleClick("Networking")}/>
            <div className="group-datascience-banner-item" />
            <b className="networking">Networking</b>
            <img
              className="icon-network-alt"
              alt=""
              src={networking}
            />
          </div>
        </div>
        
        {isCardVisible && (
        <div className="careers">
          <Row>
            <b className="careers-name">{currentBannerName}</b>
          </Row>

          <Row>    
            <Col>
              <Card className="careers-card">
              <Card.Header>
                <Row className="careers-card-header">
                  <Col md={5}>
                    <Card.Img variant="left" src={iconplayyellow} height={'27px'} />
                    <span> {currentLesson} </span>
                  </Col>
                  <Col md={2}></Col>
                  <Col md={4}>
                  <Card className="card-type">
                    <Card.Body>
                      <Card.Text>{currentSkill}</Card.Text>
                    </Card.Body>
                  </Card>
                  </Col>
                </Row>
              </Card.Header>

              <Card.Body>
                <Row className="careers-card-center">
                    <p>{currentCourseName}</p>
                    <span>{currentCourseSkills}</span>
                </Row>
              </Card.Body>

              <Card.Footer>
                <Row className="careers-card-footer">
                  <hr />
                  <Col md={5}>
                    <Button variant="primary" className="button-join">Join</Button>
                  </Col>
                  <Col md={4}></Col>
                  <Col md={3} className="meta-icon">
                    <Card.Img variant="right" src={meta} height={'61px'}/>
                  </Col>
                  
                </Row>
              </Card.Footer>
            </Card>
            </Col>   
            
            <Col>
            
            </Col>
          </Row>
        </div>
        )}
      </div>
  );
};

export default Categories;