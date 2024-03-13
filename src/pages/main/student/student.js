// CSS
import '../../../assets/css/index.css';
import '../../../assets/css/student.css';
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

// // import svg
// import { ReactComponent as ThreeDotsIcons } from '../../../assets/svg/threedots.svg';

// import image address
// import StudentProfilePhoto from '../../../assets/images/studentprofile.png';


const SearchStudent = () => {
  return (
    <div className="search-student-div">
      <input
        type="text"
        id="search-student"
        placeholder="Search Student here.."
      />
      <HiOutlineSearch className="search-student-icon" />
    </div>
  );
};



const Student = () => {
  return (
    <section id="student">
      <div>
        <div>
          <div className="student-heading flex-r-sb">
            <div>
              <span className="poppins-heading">
                student <span className="poppins "></span>
              </span>
            </div>
            <UserProfile />
          </div>

          <div className="student-search-btn flex-r-sb">
            <SearchStudent />
            <div className="flex gap1rem">
              <SecondaryFilterButton />
              <DropdownNewMenuButton
                title="new student"
                address1="/addstudent"
                addressTitle1="add student"
                address2="/importstudent"
                addressTitle2="import student"
              />
            </div>
          </div>
        </div>

        {/* student table */}
        <div className="student-table-div">
          <div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Student;
