import React, {useState} from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

import { reset_password } from "../../actions/auth";
 
import "./Resetpassword.css"


const Resetpassword = ({ reset_password }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        email: ''
    });
    
    const {email} = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        reset_password(email);
        setRequestSent(true);
    };

    //If the user authenticated
    //Redirect to the home page

    if (requestSent) {
        return <Navigate to="/" />
    }

    return (
        <div className="auth">
            <div className="div">
                <div className="resetoverlap">
                    <div className="text-wrapper">Còn Cứu Được</div>
                    <div className="frame">
                        <p className="code-lord">
                            <span className="span">Code</span>
                            <span className="text-wrapper-2">Lord</span>
                        </p>
                    </div>
                </div>
            <div className="resetellipse" />
                <div className="overlap-group">
                    <div className="resetellipse-2" />
                        <div className="frame-wrapper">
                            <div className="frame-2">
                                <div className="frame-3">
                                    <div className="upper-section">
                                        <div className="auth-text">
                                            <div className="text-wrapper-3">Forgot your password?</div>
                                            <div className="text-wrapper-4">Please enter your email</div>
                                        </div>
                                    <div className="credentials">
                                        <form onSubmit={e=>onSubmit(e)}>
                                            <div className="form-group email">
                                                <input type="email" className="form-control" placeholder="Email" name="email" value={email} onChange={e=>onChange(e)} required/>
                                            </div>
                                            <button class="btn auth-bt-fp resetdiv-wrapper" type="submit">
                                                <p className="text-wrapper-5">Reset password</p>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="frame-5">
                        <p className="resetdon-t-have-an">
                            <span className="text-wrapper-9">Don't have an account?</span>
                            <span> 
                                <a className="text-wrapper-10" href="/signup"> Sign up</a>
                            </span>
                        </p>
                    </div>
                    <div className="resetcustomer-care">
                        <div className="text-wrapper-11">Terms & Conditions</div>
                        <div className="text-wrapper-11">Support</div>
                        <div className="text-wrapper-11">Customer Care</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default connect(null,{ reset_password }) (Resetpassword);
