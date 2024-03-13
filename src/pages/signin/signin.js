// CSS file
import '../../assets/css/signin.css';
import '../../assets/css/signup.css';
import '../../assets/css/index.css';
import '../../assets/css/flex.css';

import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../services/auth/authSlice';
import { useLoginMutation } from '../../services/auth/authApiSlice';

// import { useDispatch, useSelector } from 'react-redux';

// import { loginRequest } from '../../redux/actions/signin/SigninAction';

import { Link } from 'react-router-dom';

// Import using React Icons
import { PiEyeClosedBold, PiEyeBold } from 'react-icons/pi';

// Import Image
import SignInImg from '../../assets/images/signin.png';
import SignUpImg from '../../assets/images/signup.png';

// Imported the userLogin.json data somehow
// import userLoginData from '../../json/userLogin.json';

export const ForgotPageComponenet = () => {
  return <>Forgot</>;
};

export const SignupPageComponent = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <main className="signup-main-container ">
      <section>
        <div className="signup-img-container">
          <img className="signup-img" src={SignUpImg} alt="SignInPage" />
        </div>

        <div className="signup-container flex-col gap2rem">
          <div className="signup-heading">
            <span>sign-up</span>
          </div>
          <div className="signup-card-container">
            <div className="signup-logo">
              <span>asws</span>
            </div>

            <div className="signup-form-container">
              <form action="">
                <div className="signup-form-infromation">
                  <div className="form-feild-container">
                    <label
                      className="signup-form-label"
                      htmlFor="signup-first-name-input"
                    >
                      first name
                    </label>
                    <input
                      type="text"
                      className="signup-form-input poppin"
                      id="signup-first-name-input"
                      placeholder="Mohammed"
                      required
                    />
                  </div>

                  <div className="form-feild-container">
                    <label
                      className="signup-form-label"
                      htmlFor="signup-last-name-input"
                    >
                      last name
                    </label>
                    <input
                      type="text"
                      className="signup-form-input poppin"
                      id="signup-last-name-input"
                      placeholder="Sohail"
                      required
                    />
                  </div>

                  <div className="form-feild-container">
                    <label
                      className="signup-form-label"
                      htmlFor="signup-phone-number-input"
                    >
                      phone number
                    </label>
                    <input
                      type="number"
                      className="signup-form-input poppin"
                      id="signup-phone-number-input"
                      placeholder="+91 986325147"
                      required
                    />
                  </div>

                  <div className="form-feild-container">
                    <label
                      className="signup-form-label"
                      htmlFor="signup-email-input"
                    >
                      email
                    </label>
                    <input
                      type="text"
                      className="signup-form-input poppin"
                      id="signup-email-input"
                      placeholder="hannah.green@test.com"
                      required
                    />
                  </div>

                  <div className="form-feild-container">
                    <label
                      className="signup-form-label"
                      htmlFor="signup-password-input"
                    >
                      password
                    </label>
                    <div className="password-input-wrapper">
                      <input
                        type={passwordVisible ? 'text' : 'password'}
                        className="signup-form-input poppin"
                        id="signup-password-input"
                        placeholder="password123@"
                        required
                        value={password}
                        onChange={handlePasswordChange}
                      />
                      {password && (
                        <span
                          className="signup-eye-icon"
                          onClick={handleTogglePasswordVisibility}
                        >
                          {passwordVisible ? (
                            <PiEyeBold />
                          ) : (
                            <PiEyeClosedBold />
                          )}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-feild-container">
                    <label
                      className="signup-form-label"
                      htmlFor="signup-confirm-password-input"
                    >
                      confirm password
                    </label>
                    <div className="password-input-wrapper">
                      <input
                        type={confirmPasswordVisible ? 'text' : 'password'}
                        className="signup-form-input poppin"
                        id="signup-confirm-password-input"
                        placeholder="password123@"
                        required
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                      />
                      {confirmPassword && (
                        <span
                          className="signup-eye-icon"
                          onClick={handleToggleConfirmPasswordVisibility}
                        >
                          {confirmPasswordVisible ? (
                            <PiEyeBold />
                          ) : (
                            <PiEyeClosedBold />
                          )}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="form-checkbox-container">
                  <span>
                    <label className="signup-checkbox-lable flex-c">
                      <input type="checkbox" />
                      <span className="signup-checkbox-label">
                        i agree all terms and condition
                      </span>
                    </label>
                  </span>
                </div>
                <div className="create-account-wrapper">
                  {' '}
                  <button
                    className="create-account-button-container"
                    type="submit"
                  >
                    create account
                  </button>
                </div>
              </form>
            </div>

            <div className="forgot-create-new-wrapper gap2rem">
              <div className="forgot-password-container">
                <Link to="/forgot">
                  <span>forgot password?</span>
                </Link>
              </div>
              <div className="login-container">
                <span> already have an account ?</span>{' '}
                <Link to="/signin">
                  <span className="login">log in</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export const SigninPageComponent = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  // const [password, setPassword] = useState('');
  // const [email, setEmail] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
    localStorage.setItem('isLoggedIn', true);
  };

  // const handleLogin = () => {
  //   dispatch(loginRequest({ email, password }));
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // Dispatch

  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [userName, userPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await login({ userName, userPassword }).unwrap();
      dispatch(setCredentials({ ...userData, userName }));
      setUserName('');
      setUserPassword('');
      navigate('/');

      sessionStorage.setItem('isLoggedIn', true);

      // window.location.href = '/';
    } catch (err) {
      if (!err?.originalStatus) {
        // isLoading: true until timeout occurs
        setErrMsg('No Server Response');
      } else if (err.originalStatus === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.originalStatus === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
  };

  const handleUserInput = (e) => setUserName(e.target.value);

  const handlePwdInput = (e) => setUserPassword(e.target.value);

  return (
    <main className="signin-main-container ">
      <section>
        <div className="signin-img-container">
          <img className="signin-img" src={SignInImg} alt="SignInPage" />
        </div>

        <div className="signin-container flex-col gap2rem">
          <div className="signin-heading">
            <span>sign-in</span>
          </div>
          <div className="signin-card-container">
            <div className="signin-logo">
              <span>asws</span>
            </div>
            <div className="signin-greeting">
              <span>
                welcome to <span>asws</span>
              </span>
            </div>
            <div className="signin-form-container">
              <form onSubmit={handleSubmit}>
                <div className="form-feild-container">
                  <label
                    className="signin-form-label"
                    htmlFor="signin-email-input"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    className="signin-form-input poppin"
                    id="signin-email-input"
                    placeholder="hannah.green@test.com"
                    // value={email}
                    // onChange={handleEmailChange}
                    // onChange={(e) => setEmail(e.target.value)}
                    ref={userRef}
                    value={userName}
                    onChange={handleUserInput}
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="form-feild-container">
                  <label
                    className="signin-form-label"
                    htmlFor="signin-password-input"
                  >
                    Password
                  </label>
                  <div className="password-input-wrapper">
                    <input
                      type={passwordVisible ? 'text' : 'password'}
                      className="signin-form-input poppin"
                      id="signin-password-input"
                      placeholder="password123@"
                      required
                      // value={password}
                      onChange={handlePwdInput}
                      value={userPassword}
                      // onChange={handlePasswordChange}
                      // onChange={(e) => setPassword(e.target.value)}
                    />
                    {userPassword && (
                      <span
                        className="eye-icon"
                        onClick={handleTogglePasswordVisibility}
                      >
                        {passwordVisible ? <PiEyeBold /> : <PiEyeClosedBold />}
                      </span>
                    )}
                  </div>
                  {error && (
                    <p>
                      {error} {errMsg}
                    </p>
                  )}
                  {/* {loginError && (
                    <div className="error-message">{loginError}</div>
                  )} */}
                </div>

                <div className="form-checkbox-container">
                  <span>
                    <label className="signin-checkbox-lable flex-c">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={handleRememberMeChange}
                      />
                      <span className="signin-checkbox-label">
                        remember me on this computer
                      </span>
                    </label>
                  </span>
                </div>
                <div className="form-feild-container">
                  {' '}
                  <button className="login-button-container" type="submit">
                    log in
                  </button>
                </div>
              </form>
            </div>
            <div className="forgot-create-new-wrapper gap2rem">
              <div className="forgot-password-container">
                <Link to="/forgot">
                  <span>forgot password?</span>
                </Link>
              </div>
              <div className="create-new-container">
                <span> don't have an account yet ?</span>{' '}
                <Link to="/signup">
                  <span className="create-new">create new</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
