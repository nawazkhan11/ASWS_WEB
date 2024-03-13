import style from './withLoader.module.css';

import React from 'react';

// Logo / Image as SVG
// import { ReactComponent as AswsLogo } from '../../assets/images/asws_logo.png';

import AswsLogo from '../../assets/images/asws_logo.png';

const WithLoader = () => {
  return (
    <>
      <section className={style.loading_container}>
        <img src={AswsLogo} alt="asws_logo"  className={style.asws_logo} />
      </section>
    </>
  );
};

export default WithLoader;
