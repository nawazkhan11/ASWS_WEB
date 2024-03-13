// style
import style from './buttons.module.css';

// React Router Dom
import { Link } from 'react-scroll';

// Teritairy Button
export const TertiaryButton = (props) => {
  const { title, address } = props;
  return (
    <div>
      <Link to={address} smooth={true} spy={true} offset={-60} duration={500}>
        <div className={style.btn_teritairy_container}>
          <span>{title}</span>
        </div>
      </Link>
    </div>
  );
};