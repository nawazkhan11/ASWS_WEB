// CSS
import '../../../assets/css/index.css';
import '../../../assets/css/import.css';
import '../../../assets/css/font.css';
import '../../../assets/css/flex.css';

import { Link } from 'react-router-dom';

// Import user profile components
import UserProfile from '../profile/userprofile';

// Import SVG
import { ReactComponent as FileIcon } from '../../../assets/svg/file_document_icon.svg';

// Import Zone Page Component
import { PrimaryButton } from '../common/buttons/buttons';

export const ImportZone = () => {
  return (
    <section id="import">
      <div>
        <div className="import-heading flex-r-sb">
          <div>
            <span className="poppins-heading">
              <Link to="/zone">centre</Link>
              {' > '}{' '}
              <span className="poppins-sub-heading"> import centre</span>
            </span>
          </div>
          <UserProfile />
        </div>

        <div id="upload">
          <div>
            <span className="poppins-heading-2rem">upload your files</span>
          </div>
          <div className="upload-card">
            <div className="poppins">
              <div className="center">
                <FileIcon />
              </div>
              <span>Drag and drop or choose a file</span>
              <span>.Csv file type is suported</span>
            </div>
          </div>

          <div className="upload-button">
            <PrimaryButton
              title="upload"
              onClick={() => alert('Zone Data has been Uploaded Successfully')}
            />
          </div>

          <div className="download-template-file">
            <span className="poppins">download template file</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Import Teacher Page Component

export const ImportTeacher = () => {
  return (
    <section id="import">
      <div>
        <div className="import-heading flex-r-sb">
          <div>
            <span className="poppins-heading">
              <Link to="/teacher">teacher</Link>
              {' > '}
              <span className="poppins-sub-heading"> import teacher</span>
            </span>
          </div>
          <UserProfile />
        </div>

        <div id="upload">
          <div>
            <span className="poppins-heading-2rem">upload your files</span>
          </div>
          <div className="upload-card">
            <div className="poppins">
              <div className="center">
                <FileIcon />
              </div>
              <span>Drag and drop or choose a file</span>
              <span>.Csv file type is suported</span>
            </div>
          </div>
          <div className="upload-button">
            <PrimaryButton
              title="upload"
              onClick={() => alert('Teacher Data has been Uploaded Successfully')}
            />
          </div>
          <div className="download-template-file">
            <span className="poppins">download template file</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Import Zone Page Component
export const ImportStudent = () => {
  return (
    <section id="import">
      <div>
        <div className="import-heading flex-r-sb">
          <div>
            <span className="poppins-heading">
              <Link to="/student">student</Link>
              {' > '}{' '}
              <span className="poppins-sub-heading"> import student</span>
            </span>
          </div>
          <UserProfile />
        </div>

        <div id="upload">
          <div>
            <span className="poppins-heading-2rem">upload your files</span>
          </div>
          <div className="upload-card">
            <div className="poppins">
              <div className="center">
                <FileIcon />
              </div>
              <span>Drag and drop or choose a file</span>
              <span>.Csv file type is suported</span>
            </div>
          </div>
          <div className="upload-button">
            <PrimaryButton
              title="upload"
              onClick={() => alert('Student Data has been Uploaded Successfully')}
            />
          </div>
          <div className="download-template-file">
            <span className="poppins">download template file</span>
          </div>
        </div>
      </div>
    </section>
  );
};
