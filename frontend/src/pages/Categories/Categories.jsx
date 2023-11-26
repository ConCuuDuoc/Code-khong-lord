import React, {useState} from "react";
import "./Categories.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import LeftBar from "../../Components/Leftbar/leftbar"; 

import CourseItem from "../../Components/CourseItem/CourseItem"; 
import Header from "../../Components/Header/header"; 
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cyber from "./images/cyber-security-icon.svg";
import FE from "./images/front-end-icon.svg";
import BE from "./images/back-end-icon.svg";
import ai from "./images/ai-ml-icon.svg";
import data from "./images/data-science-icon.svg";
import networking from "./images/networking-icon.svg";
const courseData = [
  {
      currentId: 1,
      currentPrice: 9,
      currentSkill: "Front-end",
      currentCourseName: "Introduction to Front-End",
      currentCourseSkills: "Web Development, HTML and CSS",
      //videoID: "x8INk17lYgs",
      //title: "Test youtube api"
  },
  {
      currentId: 2,
      currentPrice: 10,
      currentSkill: "Back-end",
      currentCourseName: "Introduction to Django",
      currentCourseSkills: "Web Development, Django, Python",
      //videoID: "zL8w9CytHCs",
      //title: "Test youtube api 2"
  },
  {
      currentId: 3,
      currentPrice: 15,
      currentSkill: "Data Science",
      currentCourseName: "Become a Data Analyst",
      currentCourseSkills: "Bi Tools, Python, SQL, Data Visualization",
      //videoID: "X3zptTiGddY",
      //title: "Test youtube api 3"
  },
  {
      currentId: 4,
      currentPrice: 10,
      currentSkill: "AI & ML",
      currentCourseName: "Introduction to Machine Learning",
      currentCourseSkills: "Machine Learning",
      //videoID: "zL8w9CytHCs",
      //title: "Test youtube api 2"
  },
  {
      currentId: 5,
      currentPrice: 15,
      currentSkill: "Cyber Security",
      currentCourseName: "Cryptography",
      currentCourseSkills: "Mathematics, Cryptography",
      //videoID: "X3zptTiGddY",
      //title: "Test youtube api 3"
  },
  {
      currentId: 6,
      currentPrice: 10,
      currentSkill: "Networking",
      currentCourseName: "Introduction to Networking",
      currentCourseSkills: "Networking",
      //videoID: "x8INk17lYgs",
      //title: "Test youtube api"
  },
];

function Categories () {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [isCardVisible, setCardVisibility] = useState(false);
  const [cart, setCart] = useState([]);


  
  const handleClick = (bannerName) => {
    console.log('You clicked the div!');
    setSelectedCategory(bannerName);
    setCardVisibility(true);

  const coursesForCategory = courseData.filter(course => course.currentSkill === bannerName);
    setFilteredCourses(coursesForCategory);
  };
  const addToCart = (course) => {
    setCart([...cart, course]);
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
            <b className="careers-name">{selectedCategory}</b>
          </Row>
          <Row>
            {filteredCourses.map((course, index) => (
              <Col key={index} >
                <CourseItem 
                  currentId={course.currentId}
                  currentPrice={course.currentPrice}
                  currentSkill={course.currentSkill}
                  currentCourseName={course.currentCourseName}
                  currentCourseSkills={course.currentCourseSkills}
                  addToCart={addToCart}
                  //videoID={course.videoID}
                  //title = {course.title}
                />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
};

export default Categories;