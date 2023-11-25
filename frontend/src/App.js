import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Resetpassword from './pages/Resetpassword/Resetpassword';
import Confirm from './pages/Confirm/Confirm';
import Resetpasswordconfirm from './pages/Resetpasswordconfirm/Resetpasswordconfirm';
import { Provider } from 'react-redux';
import React, { useState, useEffect } from 'react';
import store from './Store';
import Layout from './layout/Layout.js';
import Dashboard from './pages/Dashboard/Dashboard';
import Setting from './pages/Setting/Setting';
import ChangePassword from './pages/ChangePassword/ChangePassword';
// import Categories from './pages/Categories/Categories';
import Categories from './pages/Categories/Categories.jsx';
import MyLearning from './pages/MyLearning/MyLearning';
import Overview from './pages/Overview/Overview';
import axios from 'axios';
// import CourseItem from './Components/CourseItem/CourseItem'
// import CourseCart from './pages/CourseCart/CourseCart'



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          
        </Routes>
      </div>
    </Router>
  );
}

export function Auth() {

  return (
      <Provider store={store}>
          <Router>
              <div className="Auth">
                  <Layout>
                      <Routes>
                          {/* Conditionally render routes based on isLoggedIn */}
                          
                              <>
                                  {/* Routes available only when logged in */}
                                  <Route exact path="/dashboard" element={<Dashboard />} />
                                  {/* ... other authenticated routes ... */}
                              </>
                          
                              <>
                                  {/* Public routes */}
                                  <Route exact path="/" element={<Home />} />
                                  <Route exact path="/signup" element={<Register />} />
                                  <Route exact path="/login" element={<Login />} />
                                  <Route exact path="/confirm/:username" element={<Confirm />} />
                                  <Route exact path="/reset_password" element={<Resetpassword />} />
                                  <Route exact path="/password/reset/confirm/:username" element={<Resetpasswordconfirm />} />
                                  {/* ... other public routes ... */}
                              </>
                          
                      </Routes>
                  </Layout>
              </div>
          </Router>
      </Provider>
  );
}

export default App;












