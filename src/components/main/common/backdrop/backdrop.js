import React from 'react';
import style from './backdrop.module.css'; // Adjust the import path based on your project structure

const Backdrop = ({ show, onClick }) => {
  return show ? <div className={style.backdrop} onClick={onClick}></div> : null;
};

export default Backdrop;
