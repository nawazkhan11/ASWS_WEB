import React from 'react';
// import './whiteStyle.css';
import './redStyle.css';
import Bismilla from '../../../assets/images/bismillah.png';
import AswsLogo from '../../../assets/images/asws_logo.png';
import style from './curtain.module.css';

export const Curtain = () => {
  const showTime = () => {
    const curtain = document.getElementById('curtain');
    curtain.className = 'open';

    const scene = document.getElementById('scene');
    scene.className = 'expand';

    const starter = document.getElementById('starter');
    starter.className = 'fade-out';

    document.body.style.backgroundColor = 'white';

    // Revert back to the original background color after 3 minutes
     setTimeout(() => {
      document.body.style.backgroundColor = ''; // Revert to default
    }, 3 * 60 * 1000);

    
    setTimeout(() => {
      starter.style.display = 'none';

    }, 2000);

    setTimeout(() => {
      window.location.replace('#/homepage'); // Navigate to the homepage and replace the current history entry
    }, 5000);
  };

  return (
    <div className={style.curtain_container}>
      {' '}
      <div>
        <div id="starter">
          <div className={style.button_container} onClick={showTime} >
            <img src={Bismilla} alt="" />
          </div>
        </div>
        <div id="scene">
          <div id="curtain">
            <div className="left"></div>
            <div className="right"></div>
            <h1>
              <img src={AswsLogo} alt="" className={style.asws_logo} />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};