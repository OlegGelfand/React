import React from 'react';
import './Header.css';
import Nav from '../Nav/Nav';


function Header(props) {
    return (
        <div>
    <p className="header">
            Tesla
            </p>
        <Nav/>
     </div>
    );
  }

  export default Header;