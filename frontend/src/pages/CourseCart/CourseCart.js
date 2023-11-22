import React, { useState } from "react";
import "./CourseCart.css";
import LeftBar from "../../Components/LeftBar/Leftbar";
import QR from './images/qr.jpg';
import Modal from 'react-bootstrap/Modal';

const CourseCart = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    <div className="dashboard-course-cart">
        <LeftBar /> 
      <img className="toggle-icon" alt="" src="/toggle.svg" />
      <div className="shopping-cart">
        <img className="group-child" alt="" src="" />
        <div className="resources">Shopping Cart</div>
        <div className="resources2">1 Course in cart</div>
        <div className="resources4">Total</div>
        <div className="div">$100</div>
        <div className="pay">
            <button className="check-out" onClick={handleShowModal}>{`CHECK OUT `}</button>
        </div>
      </div>     
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Title className="custom-title">You must pay $100</Modal.Title>
        <img src={QR} alt="QR Code" />
      </Modal>
    </div>
  );
};

export default CourseCart;



