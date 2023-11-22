import React, {useState} from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Activateimg from "../../pages/Login/images/213.jpg";
import { useLocation } from 'react-router-dom';
import { confirm } from "../../actions/auth";

const Confirm = () => {
    const [isConfirmed, setIsConfirmed] = useState(false);
    const location = useLocation();
    const username = location.state ;
    const verify_user = async (e) => {
         // Ensure state exists or provide fallback
        try {
            try {
                setIsConfirmed(confirm(username));
                }
                catch {
                setIsConfirmed(false);
                }
            } catch (error) {
                console.error('User not authorized', error.response.data);
                setIsConfirmed(false);
                // Handle registration failure
                
            }
}

    //If the user confirmed
    //Redirect to the login

    if (isConfirmed) {
        return <Navigate to="/login" />
    }
   

    return (
        <Container className="activate" style={{
            backgroundImage: `url(${Activateimg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh'
          }}>
            <Col className = "d-flex flex-column justify-content-center align-items-center h-100">
                <h2>Verify</h2>
                <Button className="btn btn-primary" onClick={verify_user} type="button">Verify</Button>
            </Col>
        </Container>
    );
};
export default connect(null) (Confirm);
