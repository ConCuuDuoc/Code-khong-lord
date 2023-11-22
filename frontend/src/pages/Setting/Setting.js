import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Setting.css";
import LeftBar from "../../Components/LeftBar/Leftbar";


const Setting = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    language: "English",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="dashboard-profile-settings">
      <div className="dashboard-profile-settings-child" />
      <LeftBar />

      <div className="change-settings-wrapper">
        <h1 className="change-settings-title">Change Settings</h1>
        <h3 className="change-settings-password">
          <Link to="/changepassword">Change Password</Link>
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="language">Language:</label>
            <select
              id="language"
              name="language"
              value={formData.language}
              onChange={handleChange}
            >
              <option value="English">English</option>
              <option value="Vietnamese">Vietnamese</option>
              <option value="Spanish">Laos</option>
            </select>
          </div>
          <div className="form-group">
            <button type="submit" className="save-button">
              Save Changes
            </button>
            <button type="submit" className="cancel-button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Setting;