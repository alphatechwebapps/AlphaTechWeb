import React from "react";
import './style.css';
import logo from '../../logo.png';
/**
 * Header Component: display application info and description 
 */
const Header: React.FC = ( ) => {

   
    return (
       
        <header id="header">
			<span className="avatar"><img src={logo} alt="logo" /> 
			</span><h1><strong>Alpha Technology</strong></h1>
			<h1 id="category"><strong>  </strong></h1>
			<h1>Development of systems, sites and applications web/mobile.</h1>
				
		</header>

      
    );    
};

export default Header;