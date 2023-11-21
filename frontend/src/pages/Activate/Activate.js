import React, {useState} from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { verify } from "../../actions/auth";
import { useParams } from "react-router-dom";
import Activateimg from "../../pages/Login/images/213.jpg";


const Activate = ({ verify }) => {
    const [verified, setVerified] = useState(false);
    const { uid, token } = useParams();

    const verify_user = e => {
        
        verify(uid, token);
        setVerified(true);
    };

    //If the user authenticated
    //Redirect to the home page

    if (verified) {
        return <Navigate to="/" />
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
export default connect(null,{ verify }) (Activate);
