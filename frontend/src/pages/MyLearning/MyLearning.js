import React from "react";
import "./MyLearning.css";
import meta from "./images/meta.svg"
import LeftBar from "../../Components/Leftbar/leftbar";
import Header from "../../Components/Header/header";
import { useNavigate } from "react-router-dom";



const CourseCard = ({ title, lessons, category, skills, progress, source, videoID }) => {
  const progressBarWidth = `${parseFloat(progress) * 12}px`; 

  const navigate = useNavigate(); 

  const continueto = () => {
    navigate(`/learningmode/${videoID}/${encodeURIComponent(title)}`);
  };

  return (
    <div className="course-card">
      <LeftBar />
      <Header />
      <div className="course-title">{title}</div>
      <div className="course-info">
        <div className="course-lessons">{`${lessons} Lessons`}</div>
        <div className="course-category">{category}</div>
      </div>
      <div className="course-progress">
        <div className="course-progress-bar" style={{ width: progressBarWidth }}>
          &nbsp;
        </div>
      </div>
      <img
          className="course-source"
          alt=""
          src={source}
        />
      <div className="course-skills">
        <span className="skills-label">Skills you'll gain:</span>
        <span>{skills}</span>
      </div>
      <button className="course-button" onClick={continueto}>Continue</button>
    </div>
  );
};

const MyLearning = () => {
  return (
    <div className="dashboard-my-learning">
      <div className="all-courses">All courses</div>
      <CourseCard
        title="Introduction to FE Development"
        lessons="25x"
        category="Front-end"
        skills="HTML and CSS, Web Development"
        progress="50%"
        source={meta}
        videoID='x8INk17lYgs'
      />

      <CourseCard
        title="Introduction to BE Development"
        lessons="30x"
        category="Back-end"
        skills="Python, Django Web Development"
        progress="100%"
        source={meta}
        videoID='X3zptTiGddY'
      />
    </div>
  );
};

export default MyLearning;

