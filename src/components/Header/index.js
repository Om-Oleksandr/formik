import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import Forms from "./../Forms";
import styles from "./Header.module.scss";
import { FormContext } from "../../App";
import SignInPage from "../../pages/SignInPage";
import SignUpPage from './../../pages/SignUpPage';
const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.header__menu}>
          <FormContext.Consumer>
            {([isSignIn, setFormType]) => (
              <>
                <NavLink
                  to="/"
                  onClick={setFormType}
                  className={styles.logo__link}
                >
                  <img src="images/logo.png" alt="logo" />
                </NavLink>
                <NavLink
                  to={isSignIn ? "signin" : "signup"}
                  className={styles.auth__link}
                  onClick={setFormType}
                >
                  {isSignIn ? "sign in" : "sign up"}
                </NavLink>
              </>
            )}
          </FormContext.Consumer>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<Forms />}>
          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default Header;
