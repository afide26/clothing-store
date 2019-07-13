import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { getFirstName } from "../../helpers/helpers";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { connect } from "react-redux";
import "font-awesome/css/font-awesome.min.css";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => {
  if (currentUser)
    console.log("Current user", Object.values(currentUser)[0].displayName);
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            HI {getFirstName(currentUser)}
            <span>
              <i className="fa fa-sign-out" />
            </span>
          </div>
        ) : (
          <Link className="option" to="/sign-in">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropdown />}
    </div>
  );
};

// state is the rootReducer
const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Header);
