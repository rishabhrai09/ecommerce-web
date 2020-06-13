import React from "react";
import { withRouter } from "react-router-dom";
import Collectionitems from "./../collectionItems/collectionitems.component";
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./collection-preview.style";
const CollectionPreviwe = ({ title, items, history, match, linkUrl }) => (
  <CollectionPreviewContainer className="collection-preview">
    <TitleContainer onClick={() => history.push(`${match.url}/${linkUrl}`)}>
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer className="preview">
      {items
        .filter((it, idx) => idx < 4)
        .map((item) => (
          <Collectionitems key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);
export default withRouter(CollectionPreviwe);
