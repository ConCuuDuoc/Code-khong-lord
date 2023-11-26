import React from "react";
import "./CourseCart.css";
import LeftBar from "../../Components/Leftbar/leftbar";
import Button from 'react-bootstrap/Button';

function CourseCart() {

  return (
    <div className="dashboard-course-cart">
      <LeftBar />
      <div className="cart-header">
        <h1>Course Cart</h1>
      </div>
     
      <div className="cart-footer">
        <div>Total: $</div>
        <Button>Checkout</Button>
      </div>
    </div>
  );
}

export default CourseCart;







