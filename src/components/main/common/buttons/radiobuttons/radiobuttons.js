import React, { useState } from 'react';

import style from './radiobuttons.module.css';

export const PrimaryRadioButton = () => {
  return <div>radiobuttons</div>;
};

// Toggle Radio Button for Filter
export const ToggleRadioButton = (props) => {
  const { heading, btnTitle1, btnTitle2 } = props;

  const [selectedOption, setSelectedOption] = useState('option1');

  const handleRadioToggle = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div>
        <span className={style.radio_btn_heading}>{heading}</span>
      </div>

      <div className={style.radio_btn_label_container}>
        <label className={style.radio_btn_label_wrapper}>
          <input
            type="radio"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={handleRadioToggle}
          />
          <span className={style.radio_btn_label_heading}>{btnTitle1}</span>
        </label>
        <br />
        <label className={style.radio_btn_label_wrapper}>
          <input
            type="radio"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={handleRadioToggle}
          />
          <span className={style.radio_btn_label_heading}>{btnTitle2}</span>
        </label>
      </div>
    </div>
  );
};
