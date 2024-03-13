import React, { useState, useRef, useEffect } from 'react';

// style
import style from './buttons.module.css';

// React Router Dom
import { Link } from 'react-router-dom';

// import react icons
import {
  BsChevronDown,
  BsChevronRight,
  BsArrowRightShort,
  BsX,
} from 'react-icons/bs';


// import svg as react component
import { ReactComponent as PlayIcon } from '../../../assets/svg/homepage/play_icon.svg';

// upi image
import UpiImg from '../../../assets/images/homepage/upi_qrcode.jpg';

export const SigninButton = (props) => {
  const { btnName, dropDownBtnName1, dropDownBtnName2, address1, address2 } =
    props;

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const buttonClassName = isOpen
    ? `${style.btn_signin_container} ${style.btn_open}`
    : style.btn_signin_container;

  return (
    <div ref={dropdownRef}>
      <button className={buttonClassName} onClick={toggleDropdown}>
        <div>
          <span>{btnName}</span>
        </div>
        <BsChevronDown />
      </button>
      {isOpen && (
        <ul className={style.btn_signin_wrapper}>
          <Link to={address1}>
            <li>
              <div className={style.signin_font_wrapper}>
                <span>{dropDownBtnName1}</span>
              </div>
              <BsChevronRight />
            </li>
          </Link>

          <Link to={address2}>
            <li>
              <div>
                <span>{dropDownBtnName2}</span>
              </div>
              <BsChevronRight />
            </li>
          </Link>
        </ul>
      )}
    </div>
  );
};

// Play Button

export const PlayButton = (props) => {
  const { title, address } = props;
  return (
    <div>
      <Link to={address}>
        <div className={style.btn_play_container}>
          <div>
            <PlayIcon />
          </div>
          <div>
            <span>{title}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

// Primary Button
export const PrimaryButton = (props) => {
  const { title, address } = props;

  return (
    <div>
      <Link to={address}>
        <div className={style.btn_primary_container}>
          <span>{title}</span>
        </div>
      </Link>
    </div>
  );
};

// Secondary Button
export const SecondaryButton = (props) => {
  const { title, address } = props;

  return (
    <div>
      <Link to={address}>
        <div className={style.btn_secondary_container}>
          <span>{title}</span>
        </div>
      </Link>
    </div>
  );
};



// DonationButton
export const DonationButton = (props) => {
  const { title } = props;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button className={style.btn_primary_container} onClick={toggleDropdown}>
        <span>{title}</span>
      </button>
      {isOpen && (
        <div className={style.donation_payment_container}>
          <BsX
            className={style.donation_close_icon}
            onClick={toggleDropdown}
          />
          <br />
          <img src={UpiImg} alt="UPI Payment" className={style.donation_upi_img} />
        </div>
      )}
    </div>
  );
};

export const CirclePrimaryButton = (props) => {
  const { address } = props;
  return (
    <div>
      <Link to={address}>
        <div className={style.btn_circle_primary_container}>
          <BsArrowRightShort />
        </div>
      </Link>
    </div>
  );
};
