import React, { useState, useEffect } from 'react';

import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import { Image } from "react-bootstrap";
import { login, checkAuthenticated, loginwithGoogle } from "../../actions/auth";
import "./Login.css"
import facebook from "./images/facebook.svg";
import google from "./images/google.svg";
import github from "./images/github.svg";
import line1 from "./images/line-1.svg";
import axios from 'axios';

require('dotenv').config();

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '' 
    });

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const {username, password} = formData;
    

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async(e) => {
        e.preventDefault();
        const success = await login(username, password);
        if (success) {
            setIsLoggedIn(true); 
          } else {
            console.log('Login failed.');
          }
    };

    const continuewithGoogle = async() => {
        try{
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api-auth/google`);
            window.location.replace (response.data.url)
        } catch (err) {
        console.error('Error during Google OAuth request:', err);
    }
    };

    
    if (isLoggedIn) {
        console.log('Redirecting to /dashboard');
        return <Navigate to="/dashboard" />
    }

    return (
        <div className="auth">
            <div className="div">
                <div className="overlap">
                    <div className="text-wrapper">Welcome!</div>
                    <div className="frame">
                        <p className="code-lord">
                            <span className="span">Code</span>
                            <span className="text-wrapper-2">Lord</span>
                        </p>
                    </div>
                </div>

            <div className="ellipse" />
                <div className="overlap-group">
                    <div className="ellipse-2" />
                        <div className="frame-wrapper">
                            <div className="frame-2">
                                <div className="frame-3">
                                    <div className="upper-section">
                                        <div className="auth-text">
                                            <div className="text-wrapper-3">Log in</div>
                                            <div className="text-wrapper-4">Glad you're back!</div>
                                        </div>
                                    <div className="credentials">
                                        <form onSubmit={e=>onSubmit(e)}>
                                            <div className="form-group username">
                                                <input type="username" className="form-control" placeholder="Username" name="username" value={username} onChange={e=>onChange(e)} required/>
                                            </div>
                                            <div className="form-group passwd">
                                                <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={e=>onChange(e)} minlength="6" required/>
                                            </div>
                                            <div className="form-group rememberMe mb-3">
                                                <input type="checkbox" id="rememberMe"/>
                                                <label className="text">Remember me</label>
                                            </div>
                                            <button class="btn auth-bt-fp div-wrapper" type="submit">
                                                <p className="text-wrapper-5">Login</p>
                                            </button>
                                        </form>
                                    </div>

                                    <a className="text-wrapper-6" href='/reset_password'> Forgot Password?</a>
                                </div>
                            </div>
                            <div className="other-auths">
                                <div className="or">
                                    <Image className="line" alt="Line" src={line1} />
                                    <div className="text-wrapper-8">Or</div>
                                    <Image className="line" alt="Line" src={line1} />
                                </div>
                                <div className="social">
                                    <Image className="frame-4" alt="google" src={google} onClick={continuewithGoogle} />
                                    <Image className="frame-4" alt="facebook" src={facebook} />
                                    <Image className="frame-4" alt="github" src={github} />
                                </div>
                            
                            </div>
                        </div>
                    <div className="frame-5">
                        <p className="don-t-have-an">
                            <span className="text-wrapper-9">Don't have an account?</span>
                            <span> 
                                <a className="text-wrapper-10" href="/signup"> Sign up</a>
                            </span>
                        </p>
                    </div>
                    <div className="customer-care">
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

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps,{ login }) (Login);

