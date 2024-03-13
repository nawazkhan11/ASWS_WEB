// React
import React, { useState } from 'react';
import { Link } from 'react-scroll';
//  style
import style from './section.module.css';

// import button componenet
import {
  SigninButton,
  PrimaryButton,
  SecondaryButton,
  CirclePrimaryButton,
} from '../buttons/buttons';

// import svg as react component
import { ReactComponent as Line } from '../../../assets/svg/homepage/Line.svg';
import { ReactComponent as StartLeftDesign } from '../../../assets/svg/homepage/star_left_group.svg';
import { ReactComponent as StartRightDesign } from '../../../assets/svg/homepage/star_right_group.svg';
import { ReactComponent as SquireIcon1 } from '../../../assets/svg/homepage/list_icon1.svg';
import { ReactComponent as SquireIcon2 } from '../../../assets/svg/homepage/list_icon2.svg';
import { ReactComponent as SquireIcon3 } from '../../../assets/svg/homepage/list_icon2.svg';
import { ReactComponent as SquireIcon4 } from '../../../assets/svg/homepage/list_icon2.svg';

// import Chart Component
import { PieChart, Pie, Cell } from 'recharts';

// React Icons
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

// NavigationBar
export const NavigationBar = () => {
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);

  return (
    <div className={click ? style.nav_container.active : style.nav_container}>
      <div>
        <h1>
          {' '}
          <Link
            activeClass={style.active}
            className={style.nav_font}
            to="home"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
            onClick={closeMenu}
          >
            <span>home</span>
          </Link>
        </h1>
      </div>
      <div>
        <h1>
          {' '}
          <Link
            activeClass={style.active}
            className={style.nav_font}
            to="aboutus"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            onClick={closeMenu}
          >
            <span>about us</span>
          </Link>
        </h1>
      </div>
      <div>
        <h1>
          <Link
            activeClass={style.active}
            className={style.nav_font}
            to="whatwedo"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            onClick={closeMenu}
          >
            <span>what we do</span>
          </Link>
        </h1>
      </div>
      <div>
        <h1>
          <Link
            activeClass={style.active}
            className={style.nav_font}
            to="projectwehavedone"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            onClick={closeMenu}
          >
            <span>media</span>
          </Link>
        </h1>
      </div>
      <div>
        <h1>
          <Link
            activeClass={style.active}
            className={style.nav_font}
            to="footer"
            spy={true}
            smooth={true}
            offset={-300}
            duration={500}
            onClick={closeMenu}
          >
            <span>contact</span>
          </Link>
        </h1>
      </div>
    </div>
  );
};

// Navbar Menu with Hamburger
export const NavBarMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const [click, setClick] = useState(false);
  // const closeMenu = () => setClick(false);

  return (
    <div className={style.navbarmenu_container}>
      <div className={style.navbar_hamburger}>
        <GiHamburgerMenu onClick={toggleMenu} />
      </div>
      {isMenuOpen && (
        <div className={style.navmenuList_container}>
          <ul className={style.navbar_unorderdlist_container}>
            <li>
              {' '}
              <h1>
                {' '}
                <Link
                  activeClass={style.active}
                  className={style.nav_font}
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={500}
                >
                  <span>home</span>
                </Link>
              </h1>
            </li>
            <li>
              <h1>
                {' '}
                <Link
                  activeClass={style.active}
                  className={style.nav_font}
                  to="aboutus"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}
                >
                  <span>about us</span>
                </Link>
              </h1>
            </li>
            <li>
              <h1>
                <Link
                  activeClass={style.active}
                  className={style.nav_font}
                  to="whatwedo"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}
                >
                  <span>what we do</span>
                </Link>
              </h1>
            </li>
            <li>
              <h1>
                <Link
                  activeClass={style.active}
                  className={style.nav_font}
                  to="projectwehavedone"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}
                >
                  <span>media</span>
                </Link>
              </h1>
            </li>

            <li>
              <h1>
                <Link
                  activeClass={style.active}
                  className={style.nav_font}
                  to="footer"
                  spy={true}
                  smooth={true}
                  offset={-300}
                  duration={500}
                >
                  <span>contact</span>
                </Link>
              </h1>
            </li>
            <li>
              <SigninButton
                btnName="sign in"
                dropDownBtnName1="sign in"
                dropDownBtnName2="sign up"
                address1="/signin"
                address2="/signup"
              />
            </li>
          </ul>

          <GrClose className={style.navmenu_closeicon} onClick={toggleMenu}  />
        </div>
      )}
    </div>
  );
};

// Section
export const Section = ({ children }) => {
  return <div className={style.section_container}>{children}</div>;
};

// Title
export const Title = (props) => {
  const { title } = props;
  return (
    <div className={style.title_container}>
      <div className={style.title_line}>
        <Line />
      </div>
      <div className={style.title_wrapper}>
        <span>{title}</span>
      </div>
    </div>
  );
};

// Content
export const Content = ({ children }) => {
  return <div className={style.content_container}>{children}</div>;
};

// List
export const List = ({ children }) => {
  return <div className={style.list_container}>{children}</div>;
};

export const ListItems = (props) => {
  const {
    Item1,
    Item2,
    Item3,
    Item4,
    paragraph1,
    paragraph2,
    paragraph3,
    paragraph4,
  } = props;
  return (
    <div>
      <div className={style.list_item_container}>
        <div className={style.list_item_title}>
          <div className={style.list_icon_container}>
            <SquireIcon1 />
          </div>
          <div>
            <span>{Item1}</span>
          </div>
        </div>
        <div className={style.list_item_paragraph}>
          <span>{paragraph1}</span>
        </div>
      </div>
      <div className={style.list_item_container}>
        <div className={style.list_item_title}>
          <div className={style.list_icon_container}>
            <SquireIcon2 />
          </div>
          <div>
            <span>{Item2}</span>
          </div>
        </div>
        <div className={style.list_item_paragraph}>
          <span>{paragraph2}</span>
        </div>
      </div>
      <div className={style.list_item_container}>
        <div className={style.list_item_title}>
          <div className={style.list_icon_container}>
            <SquireIcon3 />
          </div>
          <div>
            <span>{Item3}</span>
          </div>
        </div>
        <div className={style.list_item_paragraph}>
          <span>{paragraph3}</span>
        </div>
      </div>
      <div className={style.list_item_container}>
        <div className={style.list_item_title}>
          <div className={style.list_icon_container}>
            <SquireIcon4 />
          </div>
          <div>
            <span>{Item4}</span>
          </div>
        </div>
        <div className={style.list_item_paragraph}>
          <span>{paragraph4}</span>
        </div>
      </div>
    </div>
  );
};

// Project Card
export const ProjectCard = (props) => {
  const { cardHeading, cardParagraph, btnTitle, btnAddress } = props;
  return (
    <div className={style.projectcard_container}>
      <div className={style.projectcard_wrapper}>
        <div className={style.project_heading_container}>
          <div>
            <h3>{cardHeading}</h3>
          </div>
          <div className={style.projectcard_paragraph}>
            <span>{cardParagraph}</span>
          </div>
        </div>
        <div className={style.projectcard_button}>
          <PrimaryButton title={btnTitle} address={btnAddress} />
        </div>
      </div>
    </div>
  );
};

// Statistics
export const Statistics = (props) => {
  const {
    percentage1,
    dataLabel1,
    percentage2,
    dataLabel2,
    percentage3,
    dataLabel3,
    percentage4,
    dataLabel4,
    percentage5,
    dataLabel5,
  } = props;
  return (
    <div className={style.statistics_container}>
      <div className={style.statistics_wrapper}>
        <div className={style.statistic_data_container}>
          <div className={style.statistic_data_1}></div>
          <div>
            <span>
              {' '}
              {percentage1}% {dataLabel1}
            </span>
          </div>
        </div>
        <div className={style.statistic_data_container}>
          <div className={style.statistic_data_2}></div>
          <div className={style}>
            <span>
              {' '}
              {percentage2}% {dataLabel2}
            </span>
          </div>
        </div>
        <div className={style.statistic_data_container}>
          <div className={style.statistic_data_3}></div>
          <div className={style}>
            <span>
              {' '}
              {percentage3}% {dataLabel3}
            </span>
          </div>
        </div>
        <div className={style.statistic_data_container}>
          <div className={style.statistic_data_4}></div>
          <div className={style}>
            <span>
              {' '}
              {percentage4}% {dataLabel4}
            </span>
          </div>
        </div>
        <div className={style.statistic_data_container}>
          <div className={style.statistic_data_5}></div>
          <div className={style}>
            <span>
              {' '}
              {percentage5}% {dataLabel5}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Chart
export const Chart = () => {
  const data = [
    { name: 'Group A', value: 40 },
    { name: 'Group B', value: 35 },
    { name: 'Group C', value: 13 },
    { name: 'Group D', value: 10 },
    { name: 'Group D', value: 5 },
  ];
  const COLORS = ['#bef3c0', '#ac94f1', '#fff0ca', '#f9cf64', '#f38fbf'];

  return (
    <div>
      <PieChart width={330} height={310} id="pie-chart">
        <Pie
          data={data}
          cx={160}
          cy={150}
          innerRadius={80}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
          stroke="none" // This will remove the border
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

// Donation Card
export const DonationCard = ({ children }) => {
  return (
    <div className={style.donationcard_container}>
      <div className={style.donationcard_wrapper}>
        <div className={style.donationcard_heading}>
          <span>
            "Empower Positive Change: Extend a Helping Hand through Your
            Generous Donations and Make a Lasting Difference"
          </span>
        </div>
        <div>{children}</div>
      </div>
      <div className={style.start_left_container}>
        <StartLeftDesign />
      </div>
      <div className={style.start_right_container}>
        <StartRightDesign />
      </div>
    </div>
  );
};

// Event Title
export const EventTitle = (props) => {
  const { title } = props;

  return (
    <div className={style.eventtitle_container}>
      <div className={style.eventtitle_title}>
        <span>{title}</span>
      </div>
      <div className={style.eventtitle_line}></div>
    </div>
  );
};

// Event Cards
export const EventCard = (props) => {
  const { eventDay, eventMonth, eventDetail, eventHeading } = props;

  return (
    <div className={style.eventcard_container}>
      <div className={style.eventcard_wrapper}>
        <div className={style.eventcard_date}>
          <div className={style.eventcard_day}>{eventDay}</div>
          <div className={style.eventcard_month}>{eventMonth}</div>
        </div>
        <div className={style.eventcard_details}>
          <div className={style.eventcard_detail}>{eventDetail}</div>
          <div>
            <h3>{eventHeading}</h3>
          </div>
        </div>
        <div className={style.eventcard_button}>
          <CirclePrimaryButton />
        </div>
      </div>
    </div>
  );
};

// footer  list
export const FooterList = (props) => {
  const { heading, subHeading1, subHeading2, subHeading3, subHeading4 } = props;
  return (
    <div className={style.footerlist_container}>
      <div className={style.footerlist_heading}>
        <span>{heading}</span>
      </div>
      <div className={style.footerlist_sub_heading}>
        <span>{subHeading1}</span>
      </div>
      <div className={style.footerlist_sub_heading}>
        <span>{subHeading2}</span>
      </div>
      <div className={style.footerlist_sub_heading}>
        <span>{subHeading3}</span>
      </div>
      <div className={style.footerlist_sub_heading}>
        <span>{subHeading4}</span>
      </div>
    </div>
  );
};

// footer subsribe
export const FooterSubcsribe = (props) => {
  const { heading } = props;
  return (
    <div className={style.footersubscribe_container}>
      <div className={style.footersubscribe_heading}>
        <span>{heading}</span>
      </div>
      <div className={style.footersubscribe_form_container}>
        <form action="" className={style.footersubscribe_form_wrapper}>
          <input
            className={style.footersubscribe_input}
            type="text"
            name="email"
            placeholder="your email"
            required
          />
          <div className={style.footersubscribe_button}>
            <SecondaryButton title="subscribe" />
          </div>
        </form>
      </div>
    </div>
  );
};
