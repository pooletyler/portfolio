import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="Navbar" data-test-name="Navbar">
      <div className="Navbar__titleContainer">
        <div className="Navbar__title" data-test-name="Navbar__title">
          T
        </div>
        <div className="Navbar__subTitle" data-test-name="Navbar__subTitle">
          P
        </div>
      </div>
      <div className="Navbar__descriptionContainer">
        <div className="Navbar__name">TYLER POOLE</div>
        <div className="Navbar__position">FRONT END ENGINEER</div>
      </div>
    </div>
  );
};

export default Navbar;
