// CSS
import '../../../../assets/css/index.css';

import '../../../../assets/css/index.css';
import '../../../../assets/css/addteacher.css';
import '../../../../assets/css/font.css';
import '../../../../assets/css/flex.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';

// Import user profile components
import UserProfile from '../../../../components/main/profile/userprofile';

// Import Components
import { PrimaryButton } from '../../../../components/main/common/buttons/buttons';

const AddTeacher = () => {
  const [text, setText] = useState('');

  function handleTextChange(event) {
    const newText = event.target.value;
    setText(newText);
  }

  return (
    <section id="addteacher">
      <div>
        <div className="addteacher-heading flex-r-sb">
          <div>
            <span className="poppins-heading">
              <Link to="/teacher">teacher</Link>
              {' > '}
              <span className="poppins-sub-heading"> add teacher</span>
            </span>
          </div>
          <UserProfile />
        </div>
        <div>
          {/* personal details */}
          <div className="personal-details-div">
            <div className="personal-details">
              <div className="personal-details-heading poppins">
                <span>personal details</span>
              </div>
              <div id="personal-details-grid">
                <div>
                  <label className="teacher-personal-form-label" htmlFor="">
                    first name *
                  </label>
                  <input
                    type="text"
                    className="teacher-personal-form-input poppins"
                    id="teacher-personal-details-input"
                    placeholder="Ahmed"
                    required
                  />
                </div>
                <div>
                  <label className="teacher-personal-form-label" htmlFor="">
                    last name *
                  </label>
                  <input
                    type="text"
                    className="teacher-personal-form-input poppins"
                    id="teacher-personal-details-input"
                    placeholder="Qureshi"
                    required
                  />
                </div>
                <div>
                  <label className="teacher-personal-form-label" htmlFor="">
                    email *
                  </label>
                  <input
                    type="text"
                    className="teacher-personal-form-input poppins"
                    id="teacher-personal-details-input"
                    placeholder="Ahmedqureshi@gmail.com"
                    required
                  />
                </div>
                <div>
                  <label className="teacher-personal-form-label" htmlFor="">
                    phone *
                  </label>
                  <input
                    type="number"
                    className="teacher-personal-form-input poppins"
                    id="teacher-personal-details-input"
                    placeholder="+91 987654321"
                    required
                  />
                </div>
                <div>
                  <label className="teacher-personal-form-label" htmlFor="">
                    address *
                  </label>
                  <textarea
                    type="text"
                    className="teacher-personal-form-input teacher-form-input-address poppins "
                    id="teacher-personal-details-input"
                    placeholder="address"
                    value={text}
                    onChange={handleTextChange}
                    required
                  >
                    {' '}
                  </textarea>
                  <p className="teacher-form-input-textarea-count">
                    {text.length}/300
                  </p>
                </div>
                <div>
                  <label className="teacher-personal-form-label" htmlFor="">
                    photo *
                  </label>
                  <div className="teacher-photo-box">
                    <span>drang and drop or</span>
                    <span>click here to select file</span>
                  </div>
                </div>

                <div>
                  <label className="teacher-personal-form-label" htmlFor="">
                    date of birth *
                  </label>
                  <input
                    type="text"
                    className="teacher-personal-form-input poppins"
                    id="teacher-personal-details-input"
                    placeholder="24 July 1997"
                    required
                  />
                </div>
                <div>
                  <label className="teacher-personal-form-label" htmlFor="">
                    aadhar no *
                  </label>
                  <input
                    type="number"
                    className="teacher-personal-form-input poppins"
                    id="teacher-personal-details-input"
                    placeholder="0042 5651 2238"
                    required
                  />
                </div>
                <div>
                  <label className="teacher-personal-form-label" htmlFor="">
                    place of birth *
                  </label>
                  <input
                    type="text"
                    className="teacher-personal-form-input poppins"
                    id="teacher-personal-details-input"
                    placeholder="Hyderabad"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* education */}
          <div className="education-details-div">
            <div className="education-details">
              <div className="education-details-heading poppins">
                <span>education</span>
              </div>
              <div id="education-details-grid">
                <div>
                  <label className="teacher-education-form-label" htmlFor="">
                    university *
                  </label>
                  <input
                    type="text"
                    className="teacher-education-form-input poppins"
                    id="teacher-education-details-input"
                    placeholder="Osmania University"
                    required
                  />
                </div>
                <div>
                  <label className="teacher-education-form-label" htmlFor="">
                    degree *
                  </label>
                  <input
                    type="text"
                    className="teacher-education-form-input poppins"
                    id="teacher-education-details-input"
                    placeholder="History Major"
                    required
                  />
                </div>
                <div>
                  <label className="teacher-education-form-label" htmlFor="">
                    start & end data *
                  </label>
                  <div id="start-end-date-id">
                    <input
                      type="text"
                      className="teacher-education-form-input poppins"
                      id="teacher-education-details-input"
                      placeholder="September 2013"
                      required
                    />
                    <input
                      type="text"
                      className="teacher-education-form-input poppins"
                      id="teacher-education-details-input"
                      placeholder="September 2017"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="teacher-education-form-label" htmlFor="">
                    city *
                  </label>
                  <input
                    type="text"
                    className="teacher-education-form-input poppins"
                    id="teacher-education-details-input"
                    placeholder="Hyderabad"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* experience */}
          <div className="experience-details-div">
            <div className="experience-details">
              <div className="experience-details-heading poppins">
                <span>experience</span>
              </div>
              <div id="experience-details-grid">
                <div>
                  <label className="teacher-experience-form-label" htmlFor="">
                    orgnisation *
                  </label>
                  <input
                    type="text"
                    className="teacher-experience-form-input poppins"
                    id="teacher-experience-details-input"
                    placeholder="Osmania University"
                    required
                  />
                </div>
                <div>
                  <label className="teacher-experience-form-label" htmlFor="">
                    designation *
                  </label>
                  <input
                    type="text"
                    className="teacher-experience-form-input poppins"
                    id="teacher-experience-details-input"
                    placeholder="Teacher"
                    required
                  />
                </div>
                <div>
                  <label className="teacher-experience-form-label" htmlFor="">
                    start & end data *
                  </label>
                  <div id="start-end-date-id">
                    <input
                      type="text"
                      className="teacher-experience-form-input poppins"
                      id="teacher-experience-details-input"
                      placeholder="September 2013"
                      required
                    />
                    <input
                      type="text"
                      className="teacher-experience-form-input poppins"
                      id="teacher-experience-details-input"
                      placeholder="September 2017"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="teacher-experience-form-label" htmlFor="">
                    city *
                  </label>
                  <input
                    type="text"
                    className="teacher-experience-form-input poppins"
                    id="teacher-experience-details-input"
                    placeholder="Hyderabad"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* submit button */}
          <div className="teacher-submit-button-div">
            <div>
              <PrimaryButton title="submit" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddTeacher;
