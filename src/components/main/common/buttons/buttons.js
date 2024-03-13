// React & React Hooks
import React, { useState } from 'react';

// React Router Dom
import { Link } from 'react-router-dom';

// react icons
// import { FaFilter } from 'react-icons/fa';
import { TiPlus } from 'react-icons/ti';
import { BsCaretUpFill } from 'react-icons/bs';

//
import '../../../../assets/css/buttons.css';

// DropdownMenuButton button1
export const DropdownMenuButton = (props) => {
  const {
    title,
    address1,
    address2,
    address3,
    addressTitle1,
    addressTitle2,
    addressTitle3,
  } = props;

  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="btn-dropdownMenu-container">
      <button
        className="btn-dropdownMenu Montserrat flex-c"
        onClick={toggleContent}
      >
        <TiPlus />
        <span>{title}</span>
      </button>
      {showContent && (
        <div className="btn-dropdownMenu-content Montserrat">
          <div className="flex-r-sb" onClick={toggleContent}>
            <span>Select</span>
            <BsCaretUpFill />
          </div>
          <div className="flex-col">
            <Link to={address1}>{addressTitle1}</Link>
            <Link to={address2}>{addressTitle2}</Link>
            <Link to={address3}>{addressTitle3}</Link>
          </div>
        </div>
      )}
    </div>
  );
};

// DropdownNewMenuButton for zone, student, teacher
export const DropdownNewMenuButton = (props) => {
  const { title, address1, address2, addressTitle1, addressTitle2 } = props;

  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="btn-dropdownMenu-container">
      <button
        className="btn-dropdownMenu Montserrat flex-c"
        onClick={toggleContent}
      >
        <TiPlus />
        <span>{title}</span>
      </button>
      {showContent && (
        <div className="btn-dropdownMenu-content Montserrat">
          <div className="flex-r-sb" onClick={toggleContent}>
            <span>Select</span>
            <BsCaretUpFill />
          </div>
          <div className="flex-col">
            <Link to={address1}>{addressTitle1}</Link>
            <Link to={address2}>{addressTitle2}</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export const PrimaryButton = (props) => {
  const { title, address, onClick } = props;

  return (
    <div className="btn-primary-container" onClick={onClick}>
      <Link to={address}>
        <div>
          <span>{title}</span>
        </div>
      </Link>
    </div>
  );
};

export const PrimaryAddButton = (props) => {
  const { title } = props;

  return (
    <div className="btn-primary-add-container">
      <TiPlus />
      <span>{title}</span>
    </div>
  );
};


export const SecondaryButton = (props) => {
  const { title, address, onClick } = props;

  return (
    <button className="btn-secondary-container" onClick={onClick}>
      <Link to={address}>
        <div>
          <span>{title}</span>
        </div>
      </Link>
    </button>
  );
};