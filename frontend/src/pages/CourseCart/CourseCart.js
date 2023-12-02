import React from "react";
import "./CourseCart.css";
import LeftBar from "../../Components/Leftbar/leftbar";
import Button from 'react-bootstrap/Button';
import { Image } from "react-bootstrap";
import qr from "./images/qr.png"

function CourseCart() {

  return (
    <div className="dashboard-course-cart">
      <LeftBar />
        <div id="outer_container">
          <div id="container">
            <Image src='https://api.vietqr.io/image/970418-1880276313-wth3jnC.jpg?accountName=TRAN%20THI%20MY%20HUYEN&amount=10000&addInfo=Order%20Courses' />
              <h3 className="firstline">Improve your skills by learning</h3>
              <p className="secondline">Scan the QR code to donate for team: Few, then five eggs - Many, then one To bun bo </p>
          </div>
      </div>
    </div>
  );
}

export default CourseCart;







