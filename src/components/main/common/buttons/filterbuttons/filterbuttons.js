import React, { useState } from 'react';
import style from './filterbuttons.module.css';

import { Devider, Devider1 } from '../../devider/devider';
import Backdrop from '../../backdrop/backdrop';

import { IoClose } from 'react-icons/io5';
import { ToggleRadioButton } from '../radiobuttons/radiobuttons';
import { SecondaryButton } from '../buttons';
import {
  SecondaryCheckButtons,
  TertiaryCheckButtons,
} from '../checkbuttons/checkbuttons';

import { ReactComponent as FilterIcon } from '../../../../../assets/svg/filters.svg';

export const PrimaryFilterButton = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div>
      <div className={`${style.btn}`} onClick={handleButtonClick}>
        <div>
          <FilterIcon className={style.filter_icon} />
        </div>
        <span>filter</span>
      </div>
      <Backdrop
        className={style.back_drop}
        show={showOptions}
        onClick={handleButtonClick}
      />
      <div
        className={`${style.filterOptions} ${
          showOptions ? style.showOptions : ''
        }`}
      >
        <div className={style.filter_heading_container}>
          <div></div>
          <div>
            <span>filter</span>
          </div>
          <div className={style.close_icon}>
            <IoClose onClick={handleButtonClick} />
          </div>
        </div>
        <div>
          <Devider />
        </div>

        <div className={style.radio_btn_container}>
          <div className={style.radio_btn_wrapper}>
            {/* centres */}
            <ToggleRadioButton
              heading="centre"
              btnTitle1="active"
              btnTitle2="inactive"
            />
            {/* gender */}
            <ToggleRadioButton
              heading="gender"
              btnTitle1="male"
              btnTitle2="female"
            />

            {/* Role */}
            <ToggleRadioButton
              heading="role"
              btnTitle1="student"
              btnTitle2="teacher"
            />
          </div>

          <Devider1 />
          <div className={style.filter_zone_list_container}>
            <div className={style.filter_zone_list_wrapper}>
              <div className={style.filter_zone_list_heading}>
                <span>zone</span>
              </div>
              <div className={style.filter_zone_list_btns}>
                <SecondaryCheckButtons title="east zone" />
                <SecondaryCheckButtons title="west zone" />
                <SecondaryCheckButtons title="south zone" />
                <SecondaryCheckButtons title="central zone" />
              </div>
            </div>
            <div className={style.filter_zone_list_name}>
              <TertiaryCheckButtons title="jamia masjid" />
              <TertiaryCheckButtons title="noor masjid" />
              <TertiaryCheckButtons title="zeba masjid" />
              <TertiaryCheckButtons title="yahiya masjid" />
              <TertiaryCheckButtons title="mohamadia masjid" />
              <TertiaryCheckButtons title="wazerali masjid" />
              <TertiaryCheckButtons title="youfian masjid" />
              <TertiaryCheckButtons title="abubakar masjid" />
              <TertiaryCheckButtons title="hussain masjid" />
            </div>
          </div>
        </div>

        <div>
          <Devider1 />
        </div>
        <div className={style.filter_footer_container}>
          <div className={style.filter_footer_heading}>
            <span>clear</span>
          </div>
          <div>
            <SecondaryButton title="apply" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const SecondaryFilterButton = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div>
      <div
        className={`${style.btn} ${style.btn_secondary}`}
        onClick={handleButtonClick}
      >
        <div>
          <FilterIcon className={style.filter_icon} />
        </div>
        <span>filter</span>
      </div>
      <Backdrop
        className={style.back_drop}
        show={showOptions}
        onClick={handleButtonClick}
      />
      <div
        className={`${style.filterOptionsSecondaryFilter} ${
          showOptions ? style.showOptionsSecondaryFilter : ''
        }`}
      >
        <div className={style.filter_heading_container}>
          <div></div>
          <div>
            <span>filter</span>
          </div>
          <div className={style.close_icon}>
            <IoClose onClick={handleButtonClick} />
          </div>
        </div>
        <div>
          <Devider />
        </div>
        <div className={style.radio_btn_container}>
          <div className={style.radio_btn_wrapper}>
            {/* centres */}
            <ToggleRadioButton
              heading="centre"
              btnTitle1="active"
              btnTitle2="inactive"
            />
            {/* gender */}
            <ToggleRadioButton
              heading="gender"
              btnTitle1="male"
              btnTitle2="female"
            />
            <div></div>
          </div>

          <Devider1 />
          <div className={style.filter_zone_list_container}>
            <div className={style.filter_zone_list_wrapper}>
              <div className={style.filter_zone_list_heading}>
                <span>zone</span>
              </div>
              <div className={style.filter_zone_list_btns}>
                <SecondaryCheckButtons title="east zone" />
                <SecondaryCheckButtons title="west zone" />
                <SecondaryCheckButtons title="south zone" />
                <SecondaryCheckButtons title="central zone" />
              </div>
            </div>
            <div className={style.filter_zone_list_name}>
              <TertiaryCheckButtons title="jamia masjid" />
              <TertiaryCheckButtons title="noor masjid" />
              <TertiaryCheckButtons title="zeba masjid" />
              <TertiaryCheckButtons title="yahiya masjid" />
              <TertiaryCheckButtons title="mohamadia masjid" />
              <TertiaryCheckButtons title="wazerali masjid" />
              <TertiaryCheckButtons title="youfian masjid" />
              <TertiaryCheckButtons title="abubakar masjid" />
              <TertiaryCheckButtons title="hussain masjid" />
            </div>
          </div>
        </div>
        <div>
          <Devider1 />
        </div>

        <div className={style.filter_footer_container}>
          <div className={style.filter_footer_heading}>
            <span>clear</span>
          </div>
          <div>
            <SecondaryButton title="apply" />
          </div>
        </div>
      </div>
    </div>
  );
};
