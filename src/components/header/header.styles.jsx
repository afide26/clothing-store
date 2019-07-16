import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";

const OptionsContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;
export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
`;

export const OptionsContainer = styled.div`
  color: #58585a;
  font-size: 1.8rem;
  text-transform: uppercase;
  cursor: pointer;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  ${OptionsContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionsContainerStyles}
  & .fa {
    color: #58585a;
  }
`;
