// CSS file
import style from './homepage.module.css';

// React & React Hooks
import React, { useState, useEffect } from 'react';

// React Router
import { Route, Routes } from 'react-router-dom';

// Import Animation On Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  SignupPageComponent,
  SigninPageComponent,
  ForgotPageComponenet,
} from '../signin/signin';

// Importing the dasboard
import AswsIndex from '../index';

// Importing the Components
import WithLoader from '../../HOC/withLoader/WithLoader';

// importing Buttons
import {
  SigninButton,
  PrimaryButton,
  DonationButton,
  PlayButton,
} from '../../components/homepage/buttons/buttons';

import { TertiaryButton } from '../../components/homepage/buttons/buttons1';

// import svg as react component
import { ReactComponent as PlayIcon } from '../../assets/svg/homepage/play_icon.svg';

// import image
import AswsLogo from '../../assets/images/asws_logo.png';

// import section componenets
import {
  NavigationBar,
  NavBarMenu,
  Title,
  Content,
  List,
  ListItems,
  ProjectCard,
  // Statistics,
  // Chart,
  DonationCard,
  EventTitle,
  EventCard,
  FooterList,
  FooterSubcsribe,
} from '../../components/homepage/section/section';

const HomePage = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate an artificial delay of 2 seconds (2000 milliseconds)
  //   const delay = 1000;

  //   setTimeout(() => {
  //     // Check if the user is logged in (e.g., retrieve data from sessionStorage)
  //     const isLoggedInSessionStorage = sessionStorage.getItem('isLoggedIn');
  //     if (isLoggedInSessionStorage !== null) {
  //       setIsLoggedIn(isLoggedInSessionStorage === 'true');
  //       setIsLoading(false); // Mark loading as completed
  //     } else {
  //       // Check if the user is logged in (e.g., retrieve data from localStorage)
  //       const isLoggedInLocalStorage = localStorage.getItem('isLoggedIn');
  //       setIsLoggedIn(isLoggedInLocalStorage === 'true');
  //       setIsLoading(false); // Mark loading as completed

  //       // If not found in sessionStorage, store the value in sessionStorage for future reference in this session
  //       sessionStorage.setItem('isLoggedIn', isLoggedInLocalStorage);
  //     }
  //   }, delay);
  // }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an artificial delay of 2 seconds (2000 milliseconds)
    const delay = 1000;

    setTimeout(() => {
      // Check if the user is logged in using the stored token
      const isLoggedIn =
        sessionStorage.getItem('isLoggedIn') ||
        localStorage.getItem('isLoggedIn');

      if (isLoggedIn) {
        setIsLoggedIn(true);
        setIsLoading(false); // Mark loading as completed
      } else {
        setIsLoggedIn(false);
        setIsLoading(false); // Mark loading as completed
      }
    }, delay);
  }, []);

  if (isLoading) {
    // Show a loading page or spinner while the status is being checked
    return <WithLoader />;
  }

  return (
    <>
      {isLoggedIn ? (
        <AswsIndex />
      ) : (
        <section>
          <Routes>
            <Route exact path="/" element={<HomePageComponent />} />
            <Route exact path="/signin" element={<SigninPageComponent />} />
            <Route exact path="/signup" element={<SignupPageComponent />} />
            <Route exact path="/forgot" element={<ForgotPageComponenet />} />
          </Routes>
        </section>
      )}
    </>
  );
};

export default HomePage;

export const HomePageComponent = () => {
  // useEffect to Fade the Element in Section
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={style.homepage}>
      {/* header */}
      <section className={style.header_container}>
        <div>
          {/* <h1> */}
          <span className={style.righteous}>
            <img src={AswsLogo} alt="asws_logo" className={style.asws_logo} />
          </span>
          {/* </h1> */}
        </div>

        <NavigationBar />

        <div className={style.sigin_container}>
          <SigninButton
            btnName="sign in"
            dropDownBtnName1="sign in"
            dropDownBtnName2="sign up"
            address1="/signin"
            address2="/signup"
          />
        </div>
        <div className={style.navbar_hamburguer}>
          <NavBarMenu />
        </div>
      </section>

      {/* main */}
      <main className={style.main_container}>
        {/* Home Section */}
        <section id="home" className={style.home_container}>
          <div className={style.home_wrapper}>
            <div>
              <div className={style.home_heading_wrapper}>
                <span>
                  100 days <br /> Islamic Foundational Program (IFP)
                </span>
              </div>
              <div className={style.home_buttons_wrapper}>
                <TertiaryButton title="what we do" address="whatwedo" />
                <PlayButton title="play video" />
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="aboutus" className={style.aboutus_container}>
          <div className={style.aboutis_wrapper} data-aos="fade-up">
            <div className={style.aboutus_top_container}>
              <div className={style.aboutus_left_wrapper}>
                <Title title="about us" />
                <Content>
                  <div>
                    <h2>
                      From Quran to Society: <br />
                      Empowering for Harmony
                    </h2>
                  </div>
                  <div className={style.aboutus_left_content_paragraph_wrapper}>
                    <p>
                      <span>
                        We Ahle Sunnath Welfare society believe that these
                        issues can be treated well with the right education in
                        place and hence the idea of 100 days of islamic
                        foundation program (IFP) evolved. <br />
                        <br />
                        To educate and empower the young generations with the
                        core values of the holy Quran and Sunnah which will
                        nurture them in all spheres of life. To decorate the
                        society with the beauty of islam
                      </span>
                    </p>
                  </div>
                  <div className={style.aboutus_button_wrapper}>
                    <PrimaryButton title="learn more" />
                  </div>
                </Content>
              </div>

              <div className={style.aboutus_right_wrapper}>
                <div className={style.aboutus_right_video_container}>
                  <PlayIcon className={style.aboutus_play_icon} />
                </div>
              </div>
            </div>

            <div className={style.aboutus_bottom_container}></div>
          </div>
        </section>

        {/* What We Do Section */}
        <section id="whatwedo" className={style.whatwedo_container}>
          <div className={style.whatwedo_wrapper} data-aos="fade-up">
            <div className={style.whatwedo_left_wrapper}>
              <Title title="what we do" />
              <Content>
                <div>
                  <h2>What we do at 100 days IFP?</h2>
                </div>
                <div className={style.whatwedo_left_content_paragraph_wrapper}>
                  <p>
                    <span>
                      With this program, we are teaching the basic of Islam and
                      inculcating a culture of discipling by encouraging them
                      with Memorizing and Practicing
                    </span>
                  </p>
                </div>
                <List>
                  <ListItems
                    Item1="Masnoon  Dua"
                    paragraph1="Masnoon Duain are most important part of every Muslim's life. .."
                    Item2="Azkar -e Namaz"
                    paragraph2="Namaz Prayers serve to develop a direct connection with ALLAH."
                    Item3="Quran With Tajwid"
                    paragraph3="Tajweed Rule allows the reciter to emphasise the accent, phonetics, rhythm and temper of The Quranic recitation."
                    Item4="20 Surah"
                    paragraph4="the Quran encompasses one or more revelations received by Muhammad from Allah (God)."
                  />
                </List>
              </Content>
            </div>
            <div className={style.whatwedo_right_wrapper}>
              <div className={style.whatwedo_right_image_container}></div>
            </div>
          </div>
        </section>

        {/* Projects We Have Done Section */}
        <section
          id="projectwehavedone"
          className={style.projectswehavedone_container}
        >
          <div className={style.projectswehavedone_wrapper} data-aos="fade-up">
            <div className={style.projectswehavedone_top_wrapper}>
              <Title title="project we have done" />
              <Content>
                <div>
                  <h2>
                    Alhumdulilah, 3 programs (100 days IFP) completed
                    successfully in Hyderabad in a year!"
                  </h2>
                </div>
              </Content>
            </div>
            <div className={style.projectswehavedone_bottom_wrapper}>
              <div className={style.projectwehavedone_card_1}>
                <ProjectCard
                  cardHeading="100 days IFP in Hyderabad"
                  cardParagraph="With this program ,we are teaching the basics of islam and inculcating a culture of discipline by encouraging them with memorizing and practicing"
                  btnTitle="learn more"
                />
              </div>
              <div className={style.projectwehavedone_card_2}>
                <ProjectCard
                  cardHeading="100 day IFP Impact"
                  cardParagraph="This program has not only impacted the kids but also the people involved in one or the other way like kids, parents ,people"
                  btnTitle="learn more"
                />
              </div>
              <div className={style.projectwehavedone_card_3}>
                <ProjectCard
                  cardHeading="Impact on Community"
                  cardParagraph="Alhamdulillah , over a year we have successfully completed 3 (100 days) IFP at different location of Hyderabad"
                  btnTitle="learn more"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Data Section */}
        {/* <section className={style.data_container}>
          <div className={style.data_wrapper}>
            <div className={style.data_left_container} data-aos="fade-up">
              <div className={style.data_heading}>
                <h2>
                  How we spend your <br />
                  donations and where it goes
                </h2>
              </div>
              <div className={style.data_paragraph}>
                <p>
                  We understand that when you make a donation, you want to know
                  exactly where your money is going and we pledge to be
                  transparent.
                </p>
              </div>
              <div className={style.data_statistic_container}>
                <Statistics
                  percentage1="40"
                  percentage2="35"
                  percentage3="10"
                  percentage4="10"
                  percentage5="5"
                  dataLabel1="IFP Program"
                  dataLabel2="new ISP centre"
                  dataLabel3="helping people"
                  dataLabel4="excursions"
                  dataLabel5="feeding the poor"
                />
              </div>
            </div>
            <div className={style.data_right_container}>
              <Chart />
            </div>
          </div>
        </section> */}
      </main>

      {/* Donation Section */}
      <section className={style.donation_container}>
        <div className={style.donation_wrapper} data-aos="fade-up">
          <DonationCard>
            <DonationButton
              title="donate now"
              className={style.donation_button_component}
            />
          </DonationCard>
        </div>
      </section>

      {/* Our Event Section */}
      <section className={style.event_container}>
        <div className={style.event_wrapper}>
          <div data-aos="fade-right">
            <EventTitle title="our events" />
          </div>
          <div className={style.event_cards_container} data-aos="fade-up">
            <EventCard
              eventDay="12"
              eventMonth="aug"
              eventDetail="today event (classic Garden)"
              eventHeading="Prize distribution ceremony at new classic garden at 8:30 PM"
            />
            <EventCard
              eventDay="25"
              eventMonth="sep"
              eventDetail="next event"
              eventHeading='"100-Day IFB Achiever: Celebrate with a Special Gift!
              '
            />
          </div>
        </div>
      </section>

      {/* Footer section */}
      <section id="footer" className={style.footer_container}>
        <div className={style.footer_wrapper}>
          <div className={style.footer_left_container}>
            <div className={style.footer_organisation_logo}>
              <span>
                <img
                  src={AswsLogo}
                  alt="asws_logo"
                  className={style.asws_logo}
                />
              </span>
            </div>
            <FooterList
              heading="home"
              subHeading1="about us"
              subHeading2="team"
              subHeading3="what we do"
              subHeading4="contact"
            />
            <FooterList
              heading="more"
              subHeading1="projects"
              subHeading2="events"
              subHeading3="donate"
              subHeading4="blog"
            />
            <FooterList
              heading="connect"
              subHeading1="facebook"
              subHeading2="instagram"
              subHeading3="twitter"
              subHeading4="linkedin"
            />
          </div>
          <div className={style.footer_right_container}>
            <FooterSubcsribe heading="Subscribe to get latest updates" />
          </div>
        </div>
      </section>
    </div>
  );
};
