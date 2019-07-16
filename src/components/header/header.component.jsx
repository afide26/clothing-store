import React from "react";
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
// import "./header.styles.scss";

import {
  OptionLink,
  OptionDiv,
  OptionsContainer,
  LogoContainer,
  HeaderContainer
} from "./header.styles";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser ? (
          <OptionDiv onClick={() => auth.signOut()}>
            HI {getFirstName(currentUser)}
            <span>
              <i className="fa fa-sign-out" />
            </span>
          </OptionDiv>
        ) : (
          <OptionLink to="/sign-in">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!hidden && <CartDropdown />}
    </HeaderContainer>
  );
};

// state is the rootReducer
const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Header);
