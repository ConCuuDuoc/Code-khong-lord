import React from "react";
import "./MyLearning.css";
import meta from "./images/meta.svg"
import LeftBar from "../../Components/LeftBar/Leftbar";
import Header from "../../Components/Header/Header";

const CourseCard = ({ title, lessons, category, skills, progress, source }) => {
  const progressBarWidth = `${parseFloat(progress) * 12}px`; 

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
      <button className="course-button">Continue</button>
    </div>
  );
};

const MyLearning = () => {
  return (
    <div className="dashboard-my-learning">
      <div className="all-courses">All courses</div>
      <CourseCard
        title="Introduction to Front-End Development"
        lessons="25x"
        category="Front-end"
        skills="HTML and CSS, Web Development"
        progress="50%"
        source={meta}

      />

      <CourseCard
        title="Introduction to Back-End Development"
        lessons="30x"
        category="Back-end"
        skills="Python, Django Web Development"
        progress="100%"
        source={meta}
      />
    </div>
  );
};

export default MyLearning;

