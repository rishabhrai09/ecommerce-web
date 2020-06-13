import React from "react";
import { withRouter } from "react-router-dom";
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from "./menu-item.style";
const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
  <MenuItemContainer
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer
      className="Background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />

    <ContentContainer className="content">
      <ContentTitle className="tittle">{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle className="tittle`">shop now</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);
export default withRouter(MenuItem);
