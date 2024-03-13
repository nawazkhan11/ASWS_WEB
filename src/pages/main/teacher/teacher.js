// CSS
import '../../../assets/css/index.css';
import '../../../assets/css/teacher.css';
import '../../../assets/css/font.css';
import '../../../assets/css/flex.css';

import * as React from 'react';

// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// Import user profile components
import UserProfile from '../../../components/main/profile/userprofile';

// Import Button Componenets
import { DropdownNewMenuButton } from '../../../components/main/common/buttons/buttons';
import { SecondaryFilterButton } from '../../../components/main/common/buttons/filterbuttons/filterbuttons';

// react icons
import { HiOutlineSearch } from 'react-icons/hi';

// Import Teacher Card
import TeacherCard from '../../../components/main/teacher/teacherscard';

const SearchTeacher = () => {
  return (
    <div className="search-teacher-div">
      <input
        type="text"
        id="search-teacher"
        placeholder="Search Teacher here.."
      />
      <HiOutlineSearch className="search-centre-icon" />
    </div>
  );
};

const Teacher = () => {
  return (
    <section id="teacher">
      <div>
        <div className="teacher-heading flex-r-sb">
          <div>
            <span className="poppins-heading">
              teacher <span className="poppins "></span>
            </span>
          </div>
          <UserProfile />
        </div>
        <div className="teacher-search-btn flex-r-sb">
          <SearchTeacher />
          <div className="flex gap1rem">
            <SecondaryFilterButton />
            <DropdownNewMenuButton
              title="new teacher"
              address1="/addteacher"
              addressTitle1="add teacher"
              address2="/importteacher"
              addressTitle2="import teacher"
            />
          </div>
        </div>
        <div id="teacher-cards-list">
          <TeacherCard />
        </div>
      </div>
    </section>
  );
};

export default Teacher;
