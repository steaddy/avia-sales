import React from 'react';
import classes from './Header.module.scss';
import logo from './pic/logo.svg';

const Header = () => {
  
  return (
    <div className={classes.header}>
      <img src={logo} alt="Logo"/>
    </div>
  );
};

export default Header;