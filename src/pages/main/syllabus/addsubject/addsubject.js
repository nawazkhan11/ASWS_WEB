// Import css Style
import '../../../../assets/css/index.css';
import '../../../../assets/css/font.css';
import '../../../../assets/css/flex.css';
import '../../../../assets/css/addsubject.css';

import React, { useState } from 'react';

import { Link } from 'react-router-dom';

// Import user profile components
import UserProfile from '../../../../components/main/profile/userprofile';

// Import Components
import { PrimaryAddButton, PrimaryButton } from '../../../../components/main/common/buttons/buttons';

const AddSubjectTitle = () => {
  const [text, setText] = useState('');

  function handleTextChange(event) {
    const newText = event.target.value;
    setText(newText);
  }
  return (
    <div className="addsubject-form-container">
      <div className="addsubject-form-input-container">
        <label className="addsubject-form-label" htmlFor="">
          subject name *
        </label>
        <input
          type="text"
          className="addsubject-form-input poppins"
          id="addsubject-details-input"
          placeholder="sura"
          required
        />
      </div>
      <div className="addsubject-form-input-container">
        <label className="addsubject-form-label" htmlFor="">
          description ( optional )
        </label>
        <textarea
          type="text"
          className="addsubject-form-input addsubject-form-input-description poppins"
          id="addsubject-details-input"
          placeholder="description"
          value={text}
          onChange={handleTextChange}
          required
        >
          {' '}
        </textarea>
        <p className="addsubject-form-input-textarea-count">
          {text.length}/300
        </p>
      </div>
    </div>
  );
};

const AddChapterTitle = () => {
  return (
    <div className="addchapter-form-container">
      <div className="addchapter-form-input-container">
        <label className="addsubject-form-label" htmlFor="">
          chapter name *
        </label>
        <div className="addchapter-form-input">
          <input
            type="text"
            className="addsubject-form-input poppins"
            id="addsubject-details-input"
            placeholder="surah fatiha"
            required
          />
          <div className="addchapters-button-container">
            <PrimaryAddButton title="add more" />
          </div>
        </div>
      </div>
    </div>
  );
};

const AddSubject = () => {
  return (
    <section id="syllabus">
      <div>
        <div className="syllabus-heading flex-r-sb">
          <div>
            <span className="poppins-heading">
              <Link to="/syllabus">syllabus</Link>
              {' > '} <span className="poppins-sub-heading"> add subject</span>
            </span>
          </div>
          <UserProfile />
        </div>

        <div className="addsubject-container">
          <div className="addsubject-title-container">
            <div className="addsubject-heading-container">
              <span>add subject title </span>
            </div>
            <div className="addsubject-title-data">
              <AddSubjectTitle />
            </div>
          </div>
        </div>

        <div className="addsubject-container">
          <div className="addsubject-chapters-container">
            <div className="addsubject-heading-container">
              <span>add chapters </span>
            </div>
            <div className="addsubject-chapters-data">
              <AddChapterTitle />
            </div>
          </div>
        </div>

        <div className="addsubject-button-container">
          <div>
            <PrimaryButton title="submit" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddSubject;
