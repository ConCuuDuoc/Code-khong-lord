import React, {useState, useEffect} from "react";
import "./Categories.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { courseData } from "../../data/course-data";
import LeftBar from "../../Components/LeftBar/Leftbar"; 
import Header from "../../Components/Header/Header"; 
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Cyber from "./images/cyber-security-icon.svg";
import FE from "./images/front-end-icon.svg";
import BE from "./images/back-end-icon.svg";
import ai from "./images/ai-ml-icon.svg";
import data from "./images/data-science-icon.svg";
import networking from "./images/networking-icon.svg";
import CourseCart from "../CourseCart/CourseCart";
import { useNavigate } from 'react-router-dom';

function Categories () {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [isCardVisible, setCardVisibility] = useState(false);
  const [cart, setCart] = useState([]);
  const [isShowCart, setShowCart] = useState(false);

  const handleClick = (bannerName) => {
    setSelectedCategory(bannerName);
    setCardVisibility(true);

  const coursesForCategory = courseData.filter(course => course.currentSkill === bannerName);
    setFilteredCourses(coursesForCategory);
  };

  const addToCart = (course) => {
    setCart([...cart, course]);
  };

  const navigate = useNavigate(); 
  
  const handleEnrollClick = (videoID, title) => {
    navigate(`/overview/${videoID}/${encodeURIComponent(title)}`);
  };
  
  const onAddtoCartHandler = (course) => {
    if (cart.indexOf(course) !== -1) return null;
    const arr = [...cart];
    course.amount = 1;
    arr.push(course);
    setCart([...arr]);
  };

  useEffect(() => {
    console.log(cart);
  });

  return (
    <div className="dashboard-categories">
      <LeftBar />
      <Header numItems={cart.length} setShowCart={setShowCart}/>
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

        {isCardVisible && !isShowCart && (
        <div className="careers">
          <Row>
            <b className="careers-name">{selectedCategory}</b>
          </Row>
          <Row>
            {filteredCourses.map((course) => (
              <Col key={course.id} >
                <Card className="careers-card">
                <Card.Header>
                  <Row className="careers-card-header">
                    <Col md={5}>
                      <span> ${course.currentPrice} </span>
                    </Col>
                    <Col md={5}>
                      <Card className="card-type">
                        <Card.Body>
                          <Card.Text>{course.currentSkill}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Card.Header>

                <Card.Body>
                  <Row className="careers-card-center">
                    <p>{course.currentCourseName}</p>
                    <span>{course.currentCourseSkills}</span>
                  </Row>
                </Card.Body>

                <Card.Footer>
                  <Row className="careers-card-footer">
                    <hr />
                    <Col md={5}>
                      <Button variant="primary" className="button-enroll" onClick={() => handleEnrollClick(course.videoID, course.title)}>
                        Enroll
                      </Button>
                    </Col>
                    <Col md={5}>
                      <Button variant="success" className="button-buy" onClick={() => onAddtoCartHandler(course)}>
                        Buy
                      </Button>
                    </Col>
                  </Row>
                </Card.Footer>
                </Card>
              </Col>
              ))}
          </Row>
        </div>
        )}

        {isShowCart && (
          <CourseCart cart={cart} setCart={setCart} setShowCart={setShowCart} />
        )}
    </div>
  );
};

export default Categories;