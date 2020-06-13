import React from "react";
import { connect } from "react-redux";
import { AddItem } from "../../redux/cart/cart.action";
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from "./collection-item.style";

const Collectionitems = ({ item, AddItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer className="collectionitems">
      <BackgroundImage
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CollectionFooterContainer className="collection-footer">
        <NameContainer className="name">{name}</NameContainer>
        <PriceContainer className="price">{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton
        className="inverted custom-button"
        onClick={() => AddItem(item)}
        inverted
      >
        ADD TO CART
      </AddButton>
    </CollectionItemContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  AddItem: (item) => dispatch(AddItem(item)),
});
export default connect(null, mapDispatchToProps)(Collectionitems);
