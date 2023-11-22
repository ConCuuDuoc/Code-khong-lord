import axios from 'axios';

require("dotenv").config();

export const checkAuthenticated = () => async dispatch => {
    
};

export const logout = () => async dispatch => {

};

export const load_user = () => async dispatch => {
   
};

export const login =  (username, password)  => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const body = JSON.stringify({ username, password });
        const response = await axios.post('http://localhost:6969/api-auth/login', body,config);

        if (response.data && response.data.AuthenticationResult) {
            console.log('Login successful', response.data);
            // Store the access token
            localStorage.setItem('access', response.data.AuthenticationResult.AccessToken);
            localStorage.setItem('refresh',response.data.AuthenticationResult.RefreshToken)
            return false;
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
                const res = await axios.post('http://localhost:6969/api-auth/register', body, config);
                
                if (res.data.UserConfirmed === false) {
                    // If successful, set account created to true
                    return true;
                } else {
                    // User is confirmed
                    console.error('Registration failed:', res.data.message);
                    return false;// Proceed with post-registration logic
                }
            } catch {
                console.error('Registration failed: Error');
                // Handle registration failure
                return false;
            }
        
    };

export const confirm = (username) => async dispatch  => {
    // Ensure state exists or provide fallback
   
   try {
       const config = {
           headers: {
               'Content-Type': 'application/json'
           }
       };
           const code = "";
           const body = JSON.stringify({username,code});
           // Now call the confirm endpoint
           const res = await axios.post(`http://localhost:6969/api-auth/confirm`,body,config);
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

export const reset_password = (email) => async dispatch => {
    
};

export const reset_password_confirm = (uid, token, new_password, re_new_password) => async dispatch => {
   
};




