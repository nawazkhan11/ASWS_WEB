// CSS
import '../../../../assets/css/index.css';
import '../../../../assets/css/syllabus.css';
import '../../../../assets/css/subject.css';
import '../../../../assets/css/font.css';
import '../../../../assets/css/flex.css';
import '../../../../assets/css/color.css';

// import React, { useState } from 'react';

import { useParams, Link } from 'react-router-dom';

import UserProfile from '../../../../components/main/profile/userprofile';

import { PrimaryButton } from '../../../../components/main/common/buttons/buttons';

// import { RiDeleteBin5Line } from 'react-icons/ri';

const Subject = () => {
  const { subjectName } = useParams();

  // Use the extracted subjectName to fetch subject details or perform other actions
  // For example:
  // You can fetch subject details using an API call
  // You can render the subject details based on the extracted subjectName

  return (
    <section id="syllabus">
      <div>
        <div className="syllabus-heading flex-r-sb">
          <div>
            <span className="poppins-heading">
              <Link to="/syllabus">syllabus</Link>
              {' > '}
              <span className="poppins ">{subjectName}</span>
            </span>
          </div>
          <UserProfile />
        </div>
        <div className="syllabus-container">
          <div className="syllabus-heading flex-r-sb">
            <div>
              <span className="poppins-sub-heading">
                {subjectName} all chapters
              </span>
            </div>
            <div>
              <PrimaryButton title="add chapter" address="/addsubject" />
            </div>
          </div>

          <div className="subject-container">
            <div className="subject-wrapper">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subject;
