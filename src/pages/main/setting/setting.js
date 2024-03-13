// CSS
import '../../../assets/css/index.css';
import '../../../assets/css/setting.css';
import '../../../assets/css/font.css';
import '../../../assets/css/flex.css';

// Import user profile components
import UserProfile from '../../../components/main/profile/userprofile';

const Setting = () => {
  return (
    <section id="setting">
      <div>
        <div className="setting-heading flex-r-sb">
          <div>
            <span className="poppins-heading">setting</span>
          </div>
          <UserProfile />
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Setting;
