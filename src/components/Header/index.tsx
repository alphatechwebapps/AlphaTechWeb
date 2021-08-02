import React from "react";
import './style.css';
import logo from '../../logo.png';

const Header: React.FC = ( ) => {

   
    return (
        <div>
             <h1>Alpha Technology</h1>
            <img src={logo} className="logo" alt="logo" />
            <p>
            Development of systems, sites and applications web/mobile.
            </p>

      
        </div>
    );    
};

export default Header;