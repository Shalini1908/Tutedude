import React from "react";
import styles from "../styles/navbar.module.css";
import logo from "../images/logo.png";
import usericon from "../images/usericon.png";
import dropdown from "../images/dropdown.png";
const Navbar = () => {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.logocontainer}>
          <img src={logo} alt="" />
        </div>

        <div className={styles.navtext}>
          <div className={styles.myassign}>
            <p>My assignment</p>
          </div>

          <div className={styles.chatwithmentor}>
            <p>Chat with Mentor</p>
          </div>

          <div className={styles.profilecontainer}>
            <div className={styles.usericon}>
              <img src={usericon} alt="usericon" />
            </div>

            <div className={styles.profilename}>
              <p>ProfileName</p>
            </div>

            <div className={styles.dropdown}>
              <img src={dropdown} alt="dropdown" />
            </div>
          </div>
        </div>

        <div className={styles.profilemobile}>
          <span>
            <p>Profile Name</p>
            <img src={dropdown} alt="dropdown_2" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
