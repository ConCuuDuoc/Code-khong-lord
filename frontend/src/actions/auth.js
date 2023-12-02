import axios from 'axios';
import {
    LOGOUT,
}
from "./types.js";


require("dotenv").config();

export const checkAuthenticated = (AccessToken) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const body = JSON.stringify({ AccessToken });
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api-auth/verify-token`, body,config);

        if (response.data.UserConfirmed === "Tokens are valid") {
            console.log("Tokens are valid", response.data);
            // Store the access token
            return true;
        } else {
            console.log('Login failed');
            return false;
        }
    } catch (error) {
        console.error('Login error:', error);
        return false;
    }
};

export const signup = (username, email, password) => async dispatch => {    
        
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
                
                const body = JSON.stringify({ username, email, password});
    
                // Replace with your Django backend endpoint
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/api-auth/register`, body, config);
                
                if (res.data.UserConfirmed === false) {
                    // If successful, set account created to true
                    return true;
                } else {
                    // User is confirmed
                    console.error('Registration failed:', res.data.message);
                    return false;
                }
            } catch (error) {
                console.error('Registration failed:', error);
                return false;
            }
        
    };

export const logout = () => async dispatch => {
    dispatch({
        type: LOGOUT
    });
};

export const load_user = () => async dispatch => {
   
}
export const loginwithGoogle = () => async dispatch => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api-auth/google`);
        window.location.replace (response.data.url)
    }
    catch (error) {
        console.error('Login with Google failed:', error);
    }
};

export const login =  (username, password)  => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const body = JSON.stringify({ username, password });
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api-auth/login`, body,config);

        if (response.data && response.data.AuthenticationResult) {
            console.log('Login successful', response.data);
            // Store the access token
            localStorage.setItem('access', response.data.AuthenticationResult.AccessToken);
            localStorage.setItem('refresh',response.data.AuthenticationResult.RefreshToken)
            return true;
        } else {
            console.log('Login failed');
            return false;
        }
    } catch (error) {
        console.error('Login error:', error);
        return false;
    }
};


export const confirm = (username, confirmation_code) => async dispatch  => {
    // Ensure state exists or provide fallback
   
   try {
       const config = {
           headers: {
               'Content-Type': 'application/json'
           }
       };
           const body = JSON.stringify({username, confirmation_code});
           // Now call the confirm endpoint
           const res = await axios.post(`${process.env.REACT_APP_API_URL}/api-auth/confirm`,body,config);
           if (res.data.message === "User confirmed successfully.") {
               // If successful, set account created to true
               return true;
           } else {
               // User is confirmed
               console.log('User not authorized', res.data.message);
               return false;
              // Proceed with post-registration logic
           }
       } catch (error) {
           console.error('User not authorized. Error');
           return false;
           // Handle registration failure
           
       }
}

export const reset_password = (username) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        
        const body = JSON.stringify({username});

        // Replace with your Django backend endpoint
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api-auth/forgot-password`, body, config);
        
        if (res.data.message === "Password reset initiated. Check your email for the verification code.") {
            // If successful, set account created to true
            return true;
        } else {
            // User is confirmed
            console.error('Reset password failed:', res.data.message);
            return false;// Proceed with post-registration logic
        }
    } catch {
        console.error('Reset password failed:: Error');
        // Handle registration failure
        return false;
    }
};

export const reset_password_confirm = (username, verification_code,new_password) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        
        const body = JSON.stringify({username, verification_code,new_password});

        // Replace with your Django backend endpoint
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api-auth/new-password`, body, config);
        
        if (res.data.message === "Password changed successfully.") {
            // If successful, set account created to true
            return true;
        } else {
            // User is confirmed
            console.error('Reset password failed:', res.data.message);
            return false;// Proceed with post-registration logic
        }
    } catch {
        console.error('Reset password failed:: Error');
        // Handle registration failure
        return false;
    }
};




