import React from 'react';

function Header() {
    return (
      <div className="App">
          <header>
          <nav role="navigation" aria-labelledby="hamburger-mobile-menu" class="tds-header-nav--primary tds--hide_on_middle"></nav>
          <h2 class="visually-hidden" id="hamburger-mobile-menu">Hamburger Mobile</h2>
          </header>
      </div>
    );
  }
  
  export default Header;