import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

export default function PrivateRoutes() {
    let  userid = localStorage.getItem("access") == null ? false : true;

    if (!userid) {
      console.log("Navigating to /login");
    }

    return (
        <>
            {userid ? <Outlet  /> : <Navigate to="/login" />};
        </>
    )

}