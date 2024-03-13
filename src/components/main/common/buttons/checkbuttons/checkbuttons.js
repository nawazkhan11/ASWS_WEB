import React from 'react';

import style from './checkbutton.module.css';

export const PrimaryCheckButtons = (props) => {
  const { title, checked, onChange } = props;

  return (
    <label className={style.primaryCheckButtons_label}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span>{title}</span>
    </label>
  );
};


export const SecondaryCheckButtons = (props) => {
  const { title } = props;

  return (
    <label className={style.secondaryCheckButtons_label}>
      <input type="checkbox" />
      <span>{title}</span>
    </label>
  );
};

export const TertiaryCheckButtons = (props) => {
  const { title } = props;

  return (
    <label className={style.tertiaryCheckButtons}>
      <input type="checkbox" />
      <span>{title}</span>
    </label>
  );
};
