import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media and scree (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0px;
  }
`;
export const OptionsContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media and screen (max-width: 800px) {
    width: 80%;
  }
`;
export const LogoOption = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
