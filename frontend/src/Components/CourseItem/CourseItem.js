import React from "react";
import "./CourseItem.css";

const CourseItem = ({ title, lessons, skills, category, source, price }) => {
    return (
    <div className="course-item">
    <div className="course-title">{title}</div>
    <div className="course-info">
      <div className="course-lessons">{`${lessons} Lessons`}</div>
      <div className="course-category">{category}</div>
      <div className="course-price">{`$${price}`}</div>
    </div>
    <img
        className="course-source"
        alt=""
        src={source}
      />
      <div className="line" />
    <div className="course-skills">
      <span className="skills-label">Skills you'll gain:</span>
      <span>{skills}</span>
    </div>
    <button className="course-button">Join</button>
  </div>  
    );
};

export default CourseItem;