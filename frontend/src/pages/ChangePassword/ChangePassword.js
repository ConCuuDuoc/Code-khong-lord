import React, { useState } from "react";
import LeftBar from "../../Components/LeftBar/Leftbar"; 
import "./ChangePassword.css";

const Setting = () => {
  const [formData, setFormData] = useState({
    oldpass: "",
    newpass: "",
    confirm: ""

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newpass === formData.confirm) {
      console.log("Form data submitted:", formData);
    } else {
      alert("New Password and Confirm Password must match.");
    }
  };

  return (
    <div className="dashboard-profile-settings">
      <LeftBar />
      <div className="dashboard-profile-settings-child" />
      <div className="change-settings-wrapper">
        <h1 className="change-settings-title">Change Password</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Old Password: </label>
            <input
              type="password"
              id="oldpass"
              name="oldpass"
              value={formData.oldpass}
              onChange={handleChange}
              minlength="6" required
            />
          </div>
          <div className="form-group">
            <label htmlFor="newpass">New Password:</label>
            <input
              type="password"
              id="newpass"
              name="newpass"
              value={formData.newpass}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm">Confirm Password:</label>
            <input
              type="password"
              id="confirm"
              name="confirm"
              value={formData.confirm}
              onChange={handleChange}
            />
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
