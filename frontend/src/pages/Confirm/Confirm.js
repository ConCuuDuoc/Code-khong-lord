import React, { useState} from "react";
import { Navigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { connect } from "react-redux";
import { Container, Col } from "react-bootstrap";
import Activateimg from "../../pages/Login/images/213.jpg";
import { confirm } from "../../actions/auth";
import "./Confirm.css"

const Confirm = ({ confirm }) => {
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [formData, setFormData] = useState({
        confirmationCode: ''
    });
    const { username } = useParams();
    const { confirmationCode } = formData;

    const onChange = e => setFormData({ ...formData, confirmationCode: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            // Assuming confirm is an async function
            const result = confirm(username, confirmationCode);
            setIsConfirmed(result);
        } catch (error) {
            console.error('User not authorized', error.response.data);
            setIsConfirmed(false);
        }
    }

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
            <Col className="d-flex flex-column justify-content-center align-items-center h-100">
                <h2>Verify</h2>
                <div className="credentials">
                    <form onSubmit={onSubmit}>
                        <div className="form-group username">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="code"
                                name="confirmationCode"
                                value={confirmationCode}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <button className="btn auth-bt-fp div-wrapper" type="submit">
                            <p className="text-wrapper-5">Verify</p>
                        </button>
                    </form>
                </div>
            </Col>
        </Container>
    );
};

export default connect(null, { confirm })(Confirm);
