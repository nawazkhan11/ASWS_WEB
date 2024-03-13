// CSS
import '../../../../assets/css/index.css';
import '../../../../assets/css/addstudent.css';
import '../../../../assets/css/font.css';
import '../../../../assets/css/flex.css';
import '../../../../assets/css/userprofile.css';

import * as React from 'react';
import { Link } from 'react-router-dom';

// useState react hook
import { useState } from 'react';

// Import user profile components
import UserProfile from '../../../../components/main/profile/userprofile';

// Import Components
import { PrimaryButton } from '../../../../components/main/common/buttons/buttons';

// import react icons
import { TiPlus } from 'react-icons/ti';

const SiblingInformationForm = () => {
  const [showContent, setShowContent] = useState(false);

  const handleRadioChange = (e) => {
    if (e.target.value === 'yes') {
      setShowContent(true);
    } else {
      setShowContent(false);
    }
  };

  const [selectedSibling, setSelectedSibling] = useState('');

  const handleRadioChangeSibling = (e) => {
    setSelectedSibling(e.target.value);
  };

  return (
    <div className="sibling-radio-container">
      <span className="poppins">Is your sibling studying here?</span>
      <div className="flex">
        <div>
          <input
            type="radio"
            name="siblingStudying"
            value="yes"
            id="yes"
            onChange={handleRadioChange}
          />
          <label htmlFor="yes">
            <span>yes</span>
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="siblingStudying"
            value="no"
            id="no"
            onChange={handleRadioChange}
          />
          <label htmlFor="no">
            <span>no</span>
          </label>
        </div>
      </div>

      {showContent && (
        <div className="sibling-content">
          <div>
            <div>
              <span className="poppins">Siblings</span>
              <div className="flex">
                <div>
                  <input
                    type="radio"
                    name="sibling"
                    value="sister"
                    id="sister"
                    className="poppins"
                    onChange={handleRadioChangeSibling}
                  />
                  <label htmlFor="sister">
                    <span>Sister</span>
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="sibling"
                    value="brother"
                    id="brother"
                    className="poppins"
                    onChange={handleRadioChangeSibling}
                  />
                  <label htmlFor="brother">
                    <span>Brother</span>
                  </label>
                </div>
              </div>
            </div>

            {selectedSibling === 'sister' && <SisterSibling />}
            {selectedSibling === 'brother' && <BrotherSibling />}
          </div>
        </div>
      )}
    </div>
  );
};

const SisterSibling = () => {
  return (
    <div id="sibling-details">
      <div>
        <label className="sibling-form-label" htmlFor="">
          name *
        </label>
        <input
          type="text"
          className="sibling-form-input poppin"
          id="student-details-input"
          placeholder="Afsha Fatima"
          required
        />
      </div>

      <div>
        <label className="sibling-form-label" htmlFor="">
          age *
        </label>
        <input
          type="text"
          className="sibling-form-input poppin"
          id="student-details-input"
          placeholder="08"
          required
        />
      </div>

      <div>
        <label className="sibling-form-label" htmlFor="">
          standard *
        </label>
        <input
          type="text"
          className="sibling-form-input poppin"
          id="student-details-input"
          placeholder="VI"
          required
        />
      </div>

      <div>
        <label className="sibling-form-label" htmlFor="">
          school *
        </label>
        <input
          type="text"
          className="sibling-form-input poppin"
          id="student-details-input"
          placeholder="Crown Mission High School"
          required
        />
      </div>
      <div className="add-more-btn-sibling">
        <TiPlus />
        <span>add more</span>
      </div>
    </div>
  );
};

const BrotherSibling = () => {
  return (
    <div id="sibling-details">
      <div>
        <label className="sibling-form-label" htmlFor="">
          name *
        </label>
        <input
          type="text"
          className="sibling-form-input poppin"
          id="student-details-input"
          placeholder="Syed Ahmed"
          required
        />
      </div>

      <div>
        <label className="sibling-form-label" htmlFor="">
          age *
        </label>
        <input
          type="text"
          className="sibling-form-input poppin"
          id="student-details-input"
          placeholder="08"
          required
        />
      </div>

      <div>
        <label className="sibling-form-label" htmlFor="">
          standard *
        </label>
        <input
          type="text"
          className="sibling-form-input poppin"
          id="student-details-input"
          placeholder="VI"
          required
        />
      </div>

      <div>
        <label className="sibling-form-label" htmlFor="">
          school *
        </label>
        <input
          type="text"
          className="sibling-form-input poppin"
          id="student-details-input"
          placeholder="Crown Mission High School"
          required
        />
      </div>
      <div className="add-more-btn-sibling">
        <TiPlus />
        <span>add more</span>
      </div>
    </div>
  );
};

const FamilyInformationForm = () => {
  const [selectedParentalStatus, setSelectedParentalStatus] = useState('');

  const handleRadioChangeParental = (e) => {
    setSelectedParentalStatus(e.target.value);
  };

  return (
    <div className="parental-status">
      <div className="parental-status-heading poppins">
        <span>parental status</span>
      </div>
      <div className="flex">
        <div>
          <input
            type="radio"
            name="parentalstatus"
            value="father"
            id="father"
            className="poppins"
            onChange={handleRadioChangeParental}
          />
          <label htmlFor="father">
            <span>father</span>
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="parentalstatus"
            value="mother"
            id="mother"
            className="poppins"
            onChange={handleRadioChangeParental}
          />
          <label htmlFor="mother">
            <span>mother</span>
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="parentalstatus"
            value="guardian"
            id="guardian"
            className="poppins"
            onChange={handleRadioChangeParental}
          />
          <label htmlFor="guardian">
            <span>guardian</span>
          </label>
        </div>
      </div>
      {selectedParentalStatus === 'father' && <ParentalInformationFather />}
      {selectedParentalStatus === 'mother' && <ParentalInformationMother />}
      {selectedParentalStatus === 'guardian' && <ParentalInformationGuardian />}
    </div>
  );
};

const ParentalInformationFather = () => {
  return (
    <div className="parental-status-father">
      <div>
        <span className="poppins">father information *</span>
      </div>
      <div id="father-details-grid">
        <div>
          <label className="father-form-label" htmlFor="">
            {' '}
            first name *{' '}
          </label>
          <input
            type="text"
            className="father-form-input poppins"
            id="father-details-input"
            placeholder="Mohmmed"
            required
          />
        </div>

        <div>
          <label className="father-form-label" htmlFor="">
            {' '}
            last name *{' '}
          </label>
          <input
            type="text"
            className="father-form-input poppins"
            id="father-details-input"
            placeholder="Javeed"
            required
          />
        </div>

        <div>
          <label className="father-form-label" htmlFor="">
            {' '}
            email *{' '}
          </label>
          <input
            type="text"
            className="father-form-input poppins"
            id="father-details-input"
            placeholder="Mohd@gmail.com"
            required
          />
        </div>

        <div>
          <label className="father-form-label" htmlFor="">
            {' '}
            phone *{' '}
          </label>
          <input
            type="number"
            className="father-form-input poppins"
            id="father-details-input"
            placeholder="+91 987654321"
            required
          />
        </div>

        <div>
          <label className="father-form-label" htmlFor="">
            {' '}
            education qualification *{' '}
          </label>
          <input
            type="text"
            className="father-form-input poppins"
            id="father-details-input"
            placeholder="Gradution"
            required
          />
        </div>

        <div>
          <label className="father-form-label" htmlFor="">
            {' '}
            occupation *{' '}
          </label>
          <input
            type="text"
            className="father-form-input poppins"
            id="father-details-input"
            placeholder="Driver"
            required
          />
        </div>
      </div>
    </div>
  );
};

const ParentalInformationMother = () => {
  return (
    <div className="parental-status-mother">
      <div>
        <span className="poppins">mother information *</span>
      </div>
      <div id="mother-details-grid">
        <div>
          <label className="mother-form-label" htmlFor="">
            {' '}
            first name *{' '}
          </label>
          <input
            type="text"
            className="mother-form-input poppins"
            id="mother-details-input"
            placeholder="Afsha"
            required
          />
        </div>

        <div>
          <label className="mother-form-label" htmlFor="">
            {' '}
            last name *{' '}
          </label>
          <input
            type="text"
            className="mother-form-input poppins"
            id="mother-details-input"
            placeholder="Fatima"
            required
          />
        </div>

        <div>
          <label className="mother-form-label" htmlFor="">
            {' '}
            email *{' '}
          </label>
          <input
            type="text"
            className="mother-form-input poppins"
            id="mother-details-input"
            placeholder="Afsha@gmail.com"
            required
          />
        </div>

        <div>
          <label className="mother-form-label" htmlFor="">
            {' '}
            phone *{' '}
          </label>
          <input
            type="number"
            className="mother-form-input poppins"
            id="mother-details-input"
            placeholder="+91 987654321"
            required
          />
        </div>

        <div>
          <label className="mother-form-label" htmlFor="">
            {' '}
            education qualification *{' '}
          </label>
          <input
            type="text"
            className="mother-form-input poppins"
            id="mother-details-input"
            placeholder="Gradution"
            required
          />
        </div>

        <div>
          <label className="mother-form-label" htmlFor="">
            {' '}
            occupation *{' '}
          </label>
          <input
            type="text"
            className="mother-form-input poppins"
            id="mother-details-input"
            placeholder="Homemaker"
            required
          />
        </div>
      </div>
    </div>
  );
};

const ParentalInformationGuardian = () => {
  return (
    <div className="parental-status-guardian">
      <div>
        <span className="poppins">guardian information *</span>
      </div>
      <div id="guardian-details-grid">
        <div>
          <label className="guardian-form-label" htmlFor="">
            {' '}
            first name *{' '}
          </label>
          <input
            type="text"
            className="guardian-form-input poppins"
            id="guardian-details-input"
            placeholder="Mohammed"
            required
          />
        </div>

        <div>
          <label className="guardian-form-label" htmlFor="">
            {' '}
            last name *{' '}
          </label>
          <input
            type="text"
            className="guardian-form-input poppins"
            id="guardian-details-input"
            placeholder="Irfan"
            required
          />
        </div>

        <div>
          <label className="guardian-form-label" htmlFor="">
            {' '}
            email *{' '}
          </label>
          <input
            type="text"
            className="guardian-form-input poppins"
            id="guardian-details-input"
            placeholder="Mohd@gmail.com"
            required
          />
        </div>

        <div>
          <label className="guardian-form-label" htmlFor="">
            {' '}
            phone *{' '}
          </label>
          <input
            type="number"
            className="guardian-form-input poppins"
            id="guardian-details-input"
            placeholder="+91 987654321"
            required
          />
        </div>

        <div>
          <label className="guardian-form-label" htmlFor="">
            {' '}
            education qualification *{' '}
          </label>
          <input
            type="text"
            className="guardian-form-input poppins"
            id="guardian-details-input"
            placeholder="Gradution"
            required
          />
        </div>

        <div>
          <label className="guardian-form-label" htmlFor="">
            {' '}
            occupation *{' '}
          </label>
          <input
            type="text"
            className="guardian-form-input poppins"
            id="guardian-details-input"
            placeholder="Business"
            required
          />
        </div>
      </div>
    </div>
  );
};

const AddStudent = () => {
  const [text, setText] = useState('');

  function handleTextChange(event) {
    const newText = event.target.value;
    setText(newText);
  }

  return (
    <section id="addstudent">
      <div>
        <div className="addstudent-heading flex-r-sb">
          <div>
            <span className="poppins-heading">
              <Link to="/student">student</Link>
              {' > '} <span className="poppins-sub-heading"> add student</span>
            </span>
          </div>
          <UserProfile />
        </div>

        <div id="student-details">
          <div className="student-details-heading">
            <span>student details</span>
          </div>

          <div className="student-details-form poppins">
            <div className="student-photo-div">
              <label className="student-form-label" htmlFor="">
                photo *
              </label>
              <div className="student-photo-box">
                <span>drang and drop or</span>
                <span>click here to select file</span>
              </div>
            </div>

            <div id="student-details-grid">
              <div>
                <label className="student-form-label" htmlFor="">
                  select zone *
                </label>
                <input
                  type="text"
                  className="student-form-input poppins"
                  id="student-details-input"
                  placeholder="Select"
                  required
                />
              </div>

              <div>
                <label className="student-form-label" htmlFor="">
                  select centre *
                </label>
                <input
                  type="text"
                  className="student-form-input poppins"
                  id="student-details-input"
                  placeholder="Select"
                  required
                />
              </div>

              <div>
                <label className="student-form-label" htmlFor="">
                  first name *
                </label>
                <input
                  type="text"
                  className="student-form-input poppins"
                  id="student-details-input"
                  placeholder="Syed"
                  required
                />
              </div>

              <div>
                <label className="student-form-label" htmlFor="">
                  last name *
                </label>
                <input
                  type="text"
                  className="student-form-input poppins"
                  id="student-details-input"
                  placeholder="Aleem"
                  required
                />
              </div>

              <div>
                <label className="student-form-label" htmlFor="">
                  date & place of birth *
                </label>
                <div id="dob-place-div">
                  <input
                    type="text"
                    className="student-form-input poppins dob-place"
                    id="student-details-input"
                    placeholder="24 February 2005"
                    required
                  />
                  <input
                    type="text"
                    className="student-form-input dob-place poppins"
                    id="student-details-input"
                    placeholder="Hyderabad"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="student-form-label" htmlFor="">
                  school name *
                </label>
                <input
                  type="text"
                  className="student-form-input poppins"
                  id="student-details-input"
                  placeholder="School Name"
                  required
                />
              </div>

              <div>
                <label className="student-form-label" htmlFor="">
                  email *
                </label>
                <input
                  type="text"
                  className="student-form-input poppins"
                  id="student-details-input"
                  placeholder="SyedAleem@gmail.com"
                  required
                />
              </div>

              <div>
                <label className="student-form-label" htmlFor="">
                  phone *
                </label>
                <input
                  type="number"
                  className="student-form-input poppins"
                  id="student-details-input"
                  placeholder="+91 123456789"
                  required
                />
              </div>

              <div>
                <label className="student-form-label" htmlFor="">
                  address *
                </label>
                <textarea
                  type="text"
                  className="student-form-input poppins student-form-input-address"
                  id="student-details-input"
                  placeholder="Select"
                  value={text}
                  onChange={handleTextChange}
                  required
                ></textarea>
                <p className="student-form-input-textarea-count">
                  {text.length}/300
                </p>
              </div>

              <div>
                <label className="student-form-label" htmlFor="">
                  city *
                </label>
                <input
                  type="text"
                  className="student-form-input poppins"
                  id="student-details-input"
                  placeholder="Hyderabad"
                  required
                />
              </div>

              <div>
                <label className="student-form-label" htmlFor="">
                  pin *
                </label>
                <input
                  type="number"
                  className="student-form-input poppins"
                  id="student-details-input"
                  placeholder="500002"
                  required
                />
              </div>

              <div>
                <label className="student-form-label" htmlFor="">
                  state *
                </label>
                <input
                  type="text"
                  className="student-form-input poppins"
                  id="student-details-input"
                  placeholder="Select State"
                  required
                />
              </div>

              <div>
                <label className="student-form-label" htmlFor="">
                  aadhaar no *
                </label>
                <input
                  type="number"
                  className="student-form-input poppins"
                  id="student-details-input"
                  placeholder="4456 4112 4452"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Student Sibling Information */}
        <div id="sibling-information">
          <div className="sibling-information-heading">
            <span>sibling information</span>
          </div>
          <div className="sibling-information-form-div">
            <SiblingInformationForm />
          </div>
        </div>

        {/* Family Information */}
        <div id="family-information">
          <div className="family-information-heading">
            <span>family information</span>
          </div>
          <div className="family-information-form-div">
            <FamilyInformationForm />
          </div>
        </div>

        {/* submit button */}
        <div className="student-submit-button-div">
          <div>
            <PrimaryButton title="submit" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddStudent;
