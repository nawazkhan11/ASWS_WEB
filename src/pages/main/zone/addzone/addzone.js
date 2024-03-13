// CSS
import '../../../../assets/css/index.css';
import '../../../../assets/css/addzone.css';
import '../../../../assets/css/font.css';
import '../../../../assets/css/flex.css';
import '../../../../assets/css/userprofile.css';

import { useState } from 'react';

import { Link } from 'react-router-dom';

// Import user profile components
import UserProfile from '../../../../components/main/profile/userprofile';

// Import Componenets
import { PrimaryButton } from '../../../../components/main/common/buttons/buttons';

const AddZone = () => {
  const [text, setText] = useState(''); // Define the 'text' state

  const handleTextChange = (event) => {
    // Define the 'handleTextChange' function
    const newText = event.target.value;
    setText(newText);
  };

  return (
    <section id="addzone">
      <form>
        <div className="addzone-heading flex-r-sb">
          <div>
            <span className="poppins-heading">
              <Link to="/zone">centre</Link>
              {' > '}{' '}
              <span className="poppins-sub-heading"> create centre</span>
            </span>
          </div>
          <UserProfile />
        </div>

        <div id="zone-information">
          <div className="zone-information-heading">
            <span>zone information</span>
          </div>

          <div className="zone-information-form poppin">
            <div>
              <label className="zone-form-label" htmlFor="centrename">
                centre name *
              </label>
              <input
                type="text"
                className="zone-form-input poppin"
                id="centre-name-input"
                placeholder=" "
                name="centreName"
                required
              />
            </div>
            <div>
              <label className="zone-form-label" htmlFor="masjidcommitemember">
                masjid commitee member name *
              </label>
              <input
                type="text"
                className="zone-form-input poppin"
                id="masjid-committe-member-name"
                placeholder=" "
                required
              />
            </div>
            <div>
              <label className="zone-form-label" htmlFor="email">
                eamil *
              </label>
              <input
                type="text"
                className="zone-form-input poppin"
                id="centre-email-input"
                placeholder=" "
                required
              />
            </div>
            <div>
              <label className="zone-form-label" htmlFor="email">
                phone *
              </label>
              <input
                type="text"
                className="zone-form-input poppin"
                id="centre-phone-input"
                placeholder=" "
                required
              />
            </div>
            <div>
              <label className="zone-form-label" htmlFor="address">
                address *
              </label>
              <textarea
                type="text"
                className="zone-form-input zone-form-input-address poppin"
                id="centre-address-input"
                placeholder="address"
                value={text}
                onChange={handleTextChange}
                required
              ></textarea>
              <p className="zone-form-input-textarea-count">
                {text.length}/300
              </p>
            </div>
            <div>
              <label className="zone-form-label" htmlFor="waqboardno">
                waqt board no *
              </label>
              <input
                type="text"
                className="zone-form-input poppin"
                id="centre-waqt-board-no"
                placeholder=" "
                required
              />
            </div>
          </div>
        </div>

        {/* photo collection */}
        <div id="zone-photo-collection">
          <div className="zone-photo-collection-heading poppins">
            <span>photo collections *</span>
          </div>
          <div className="photo-card-collection-card">
            <input type="file" accept="image/*" />
            <button>Upload Photo</button>
          </div>
        </div>

        <div className="zone-submit-button-div">
          <div>
            <PrimaryButton title="submit" type="submit" />
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddZone;
