import React from "react";
import "./CourseCart.css";
import LeftBar from "../../Components/LeftBar/Leftbar";
import Button from 'react-bootstrap/Button';
import {Col, Row, Card} from 'react-bootstrap';
import { Image } from "react-bootstrap";
import qr from "./images/qr.png"

const CourseCart = ({ cart, setCart, setShowCart }) => {
  console.log("Cart in CourseCart component:", cart);

  const totalPrice = cart.reduce((total, course) => total + course.currentPrice, 0);

  const onCloseCartHandler = () => {
    setShowCart(false);
  };

  return (
    <div className="dashboard-course-cart">
      <LeftBar />
      <Button className="close-button" onClick={onCloseCartHandler}>Close Cart</Button>
      <Row>
        <div className="cart-header">
          <h1>Course Cart</h1>
        </div>
      </Row>
      <Row>
        <Col md={8}>
        <div className="cart-body">
          {cart.map((course) => (
            <Col className="cart-item" key={course.id}>
              <Card className="cart-item-content">
                <Card.Body>
                  <Card.Title>{course.currentCourseName}</Card.Title>
                  <Card.Subtitle>${course.currentPrice}</Card.Subtitle>
                  <Card.Text>{course.currentCourseSkills}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </div>
        </Col>
        
        <Col md={4}>
        <div className="cart-footer">
          {cart.length === 0 && <p>Your cart is empty.</p>}
          {cart.length !== 0 && <p>Total Price: ${totalPrice}</p>}
          <Button className="button-checkout">Checkout</Button>
        </div>
        </Col>
        
      </Row>
    </div>
  );
};

export default CourseCart;







