import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/contact">
        Contact
      </Link>
      {/* <Link className="option" to="/signin">
        Signin
      </Link> */}
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Signout
        </div>
      ) : (
        <Link className="option" to="/signin">
          Signin
        </Link>
      )}
    </div>
  </div>
);

export default Header;
