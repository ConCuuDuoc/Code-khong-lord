import React from "react";
import Navbar from "../Components/hihi";

const Layout = (props) => (
        <div>
            <Navbar />
            {props.children}
        </div>
);

export default Layout;