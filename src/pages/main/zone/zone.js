// CSS
import '../../../assets/css/index.css';
import '../../../assets/css/zone.css';
import '../../../assets/css/font.css';
import '../../../assets/css/flex.css';

// Import user profile components
import UserProfile from '../../../components/main/profile/userprofile';

// Import Button Componenets
import { DropdownNewMenuButton } from '../../../components/main/common/buttons/buttons';

// react icons
import { HiOutlineSearch } from 'react-icons/hi';

// Import zone card
import ZoneCard from '../../../components/main/zone/zonecard';

import { PrimaryCheckButtons } from '../../../components/main/common/buttons/checkbuttons/checkbuttons';

const SearchZone = () => {
  return (
    <div className="search-centre-div">
      <input type="text" id="search-centre" placeholder="Search here.." />
      <HiOutlineSearch className="search-centre-icon" />
    </div>
  );
};

export const ZoneCheckButtons = () => {
  return (
    <div id="zone-check-buttons">
      <PrimaryCheckButtons title="east zone" />
      <PrimaryCheckButtons title="west zone" />
      <PrimaryCheckButtons title="north zone" />
      <PrimaryCheckButtons title="south zone" />
    </div>
  );
};

const Zone = () => {
  return (
    <section id="zone">
      <div>
        <div className="zone-heading flex-r-sb">
          <div>
            <span className="poppins-heading">
              zone {'>'} <span className="poppins-sub-heading"> Centres</span>
            </span>
          </div>
          <UserProfile />
        </div>
        <div className="zone-search-btn flex-r-sb">
          <SearchZone />
          <DropdownNewMenuButton
            title="new centre"
            address1="/addzone"
            addressTitle1="add centre"
            address2="/importzone"
            addressTitle2="import centre"
          />
        </div>
        <div className="select-zone">
          <div className="select-zone-heading">
            <span className="poppins-sub-heading">select zone</span>
          </div>
          <ZoneCheckButtons />
        </div>
        <div id="zone-card-list">
          <ZoneCard />
        </div>
      </div>
    </section>
  );
};

export default Zone;
