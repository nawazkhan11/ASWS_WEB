// CSS
import '../../../assets/css/index.css';
import '../../../assets/css/syllabus.css';
import '../../../assets/css/font.css';
import '../../../assets/css/flex.css';
import '../../../assets/css/color.css';
import React, { useState } from 'react';
import UserProfile from '../../../components/main/profile/userprofile';

// Buttons
import {
  PrimaryButton,
  SecondaryButton,
} from '../../../components/main/common/buttons/buttons';
import data from '../../../json/subjects/subject.json';

const Syllabus = () => {
  const [subjects, setSubjects] = useState(data.subjects);

  const handleDeleteSubject = (subjectToDelete) => {
    const updatedSubjects = subjects.filter(
      (subject) => subject.name !== subjectToDelete
    );
    setSubjects(updatedSubjects);

    // Update the JSON file
    updateJsonFile(updatedSubjects);
  };

  const updateJsonFile = async (updatedSubjects) => {
    const updatedData = { subjects: updatedSubjects };
    const filePath =
      process.env.PUBLIC_URL + '../../../json/subjects/subject.json';

    try {
      const response = await fetch(filePath);
      const existingData = await response.json();

      const mergedData = { ...existingData, ...updatedData };

      await fetch(filePath, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mergedData),
      });

      setSubjects(updatedSubjects);
    } catch (error) {
      console.error('Error updating JSON file:', error);
    }
  };

  return (
    <section id="syllabus">
      <div>
        <div className="syllabus-heading flex-r-sb">
          <div>
            <span className="poppins-heading">syllabus</span>
          </div>
          <UserProfile />
        </div>
        <div className="syllabus-container">
          <div className="syllabus-heading flex-r-sb">
            <div>
              <span className="poppins-sub-heading">all subjects</span>
            </div>
            <div>
              <PrimaryButton title="add subject" address="/addsubject" />
            </div>
          </div>
          <div className="syllabus-subject-list-container">
            {subjects.map((subject, index) => (
              <div
                key={subject.name}
                className="syllabus-subject-list flex-r-sb"
              >
                <div className="subject-list-item">
                  <div className="syllabus-subject-box flex-c">
                    <span className="poppins-heading color-white">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <span className="poppins-heading-2rem-600">
                      {subject.name}
                    </span>
                  </div>
                </div>
                <div className="btn-container">
                  <SecondaryButton
                    title="view"
                    address={`/subject/${subject.name}`}
                  />
                  <SecondaryButton
                    title="delete"
                    onClick={() => handleDeleteSubject(subject.name)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Syllabus;
