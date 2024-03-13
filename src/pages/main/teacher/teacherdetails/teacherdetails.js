// CSS
import '../../../../assets/css/index.css';
import '../../../../assets/css/teacherdetails.css';
import '../../../../assets/css/detailscard.css';
import '../../../../assets/css/font.css';
import '../../../../assets/css/flex.css';

import { Link } from 'react-router-dom';
import * as React from 'react';

// Import user profile components
import UserProfile from '../../../../components/main/profile/userprofile';

// Import teacher profile components
import TeacherProfilePhoto from '../../../../assets/images/teacherprofile.png';
import OsmaniaUniversityLogo from '../../../../assets/images/osmaniauniversitylogo.png';
import JamiaNizamiaLogo from '../../../../assets/images/jamianizamialogo.png';

// Import icons using SVG
import { ReactComponent as EditPencil } from '../../../../assets/svg/edit.svg';

// Import icons using react icons
import { BsThreeDotsVertical, BsPerson } from 'react-icons/bs';

const OsmaniaUniversity = () => {
  return (
    <>
      <img
        src={OsmaniaUniversityLogo}
        className="OsmaniaUniversityLogo"
        alt="OsmaniaUniversityLogo"
      />
    </>
  );
};

const JamiaNizamia = () => {
  return (
    <>
      <img
        src={JamiaNizamiaLogo}
        className="JamiaNizamiaLogo"
        alt="JamiaNizamiaLogo"
      />
    </>
  );
};

const TeacherDetailsCardData = () => {
  return (
    <div>
      <div className="details-card-data-heading poppins">
        <span>teacher's information</span>
      </div>
      <div id="details-card-data-grid">
        <div className="details-field flex-col">
          <div className="label-heading poppins">
            <span>email address</span>
          </div>
          <div className="field-data-div flex ">
            <div className="field-icon-div">
              <BsPerson className="field-icon" />
            </div>
            <div className="field-text-data">
              <span>ahmedqureshi@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="details-field flex-col">
          <div className="label-heading poppins">
            <span>aadhar no.</span>
          </div>
          <div className="field-data-div flex ">
            <div className="field-icon-div">
              <BsPerson className="field-icon" />
            </div>
            <div className="field-text-data">
              <span>4455 256 21133</span>
            </div>
          </div>
        </div>
        <div className="details-field flex-col">
          <div className="label-heading poppins">
            <span>phone</span>
          </div>
          <div className="field-data-div flex ">
            <div className="field-icon-div">
              <BsPerson className="field-icon" />
            </div>
            <div className="field-text-data">
              <span>+91 8801970518</span>
            </div>
          </div>
        </div>
        <div className="details-field flex-col">
          <div className="label-heading poppins">
            <span>data of birth</span>
          </div>
          <div className="field-data-div flex ">
            <div className="field-icon-div">
              <BsPerson className="field-icon" />
            </div>
            <div className="field-text-data">
              <span>30/05/2002</span>
            </div>
          </div>
        </div>
        <div className="details-field flex-col">
          <div className="label-heading poppins">
            <span>address</span>
          </div>
          <div className="field-data-div flex ">
            <div className="field-icon-div">
              <BsPerson className="field-icon" />
            </div>
            <div className="field-text-data">
              <span>shah ali banda, hyderabad</span>
            </div>
          </div>
        </div>
        <div className="details-field flex-col">
          <div className="label-heading poppins">
            <span>city</span>
          </div>
          <div className="field-data-div flex ">
            <div className="field-icon-div">
              <BsPerson className="field-icon" />
            </div>
            <div className="field-text-data">
              <span>hyderabad</span>
            </div>
          </div>
        </div>
        <div className="details-field flex-col">
          <div className="label-heading poppins">
            <span>pin code</span>
          </div>
          <div className="field-data-div flex ">
            <div className="field-icon-div">
              <BsPerson className="field-icon" />
            </div>
            <div className="field-text-data">
              <span>500065</span>
            </div>
          </div>
        </div>
        <div className="details-field flex-col">
          <div className="label-heading poppins">
            <span>state</span>
          </div>
          <div className="field-data-div flex ">
            <div className="field-icon-div">
              <BsPerson className="field-icon" />
            </div>
            <div className="field-text-data">
              <span>telangana</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeacherDetails = () => {
  return (
    <section id="teacherdetails">
      <div>
        <div className="teacherdetails-heading flex-r-sb">
          <div>
            <span className="poppins-heading">
              <Link to="/teacher">teacher</Link>
              {' > '} <span className="poppins "> teacher details</span>
            </span>
          </div>
          <UserProfile />
        </div>

        <div id="details-card-div">
          <div className="details-card">
            <div className="details-card-heading">
              <div className="details-profile flex-r-sb poppins">
                <div className="flex">
                  <div className="details-profile-img">
                    <img src={TeacherProfilePhoto} alt="TeacherProfilePhoto" />
                  </div>
                  <div className="details-profile-user flex-col">
                    <span className="details-profile-username">
                      ahmed qureshi
                    </span>
                    <span>zone: east zone</span>
                    <span>
                      centre: jahanuma masjid, hussaini masjid, ayesha masjid
                    </span>
                  </div>
                </div>
                <div className="details-profile-id flex-col">
                  <div>
                    <span>ID: 23152523335</span>
                  </div>
                  <div className="details-profile-icons">
                    <div>
                      <EditPencil />
                    </div>
                    <div>
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="details-card-data">
              <TeacherDetailsCardData />
            </div>
          </div>
          <div className="teacher-details-card">
            <div className="teacher-qualification">
              <div className="details-card-data-heading poppins">
                <span>teacher qualification</span>
              </div>

              <div className="qualification-list flex-col poppins">
                <div className="qualification-card ">
                  <div className="university-logo">
                    <OsmaniaUniversity />
                  </div>
                  <div>
                    <div className="university-name">
                      <span>osmania university</span>
                    </div>
                    <div className="degree-title">
                      <span>batchelor of computer application</span>
                    </div>
                    <div className="degree-duration">
                      <span>may 2019 - apr 2022</span>
                    </div>
                  </div>
                </div>

                <div className="qualification-card">
                  <div className="university-logo">
                    <JamiaNizamia />
                  </div>
                  <div>
                    <div className="university-name">
                      <span>jamia nizamia</span>
                    </div>
                    <div className="degree-title">
                      <span>alim - fazil</span>
                    </div>
                    <div className="degree-duration">
                      <span>may 2015 - apr 2018</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="teacher-experience">
              <div className="details-card-data-heading poppins">
                <span>experience</span>
              </div>

              <div className="experience-list flex-col poppins">
                <div className="experience-card ">
                  <div className="organisation-logo">
                    <OsmaniaUniversity />
                  </div>
                  <div>
                    <div className="organisation-name">
                      <span>osmania university</span>
                    </div>
                    <div className="experience-title">
                      <span>Worked as Tutor in Canvas Junior College</span>
                    </div>
                    <div className="experience-duration">
                      <span>may 2019 - apr 2022</span>
                    </div>
                  </div>
                </div>

                <div className="experience-card">
                  <div className="organisation-logo">
                    <JamiaNizamia />
                  </div>
                  <div>
                    <div className="organisation-name">
                      <span>jamia nizamia</span>
                    </div>
                    <div className="experience-title">
                      <span>Worked as Tutor in JMCC School</span>
                    </div>
                    <div className="experience-duration">
                      <span>may 2015 - apr 2018</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherDetails;
