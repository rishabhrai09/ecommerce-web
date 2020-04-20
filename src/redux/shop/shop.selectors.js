import {createSelector} from 'reselect';

const COLLECTION_ID_MAP={
 hats:1,
 sneaker:2,
 jackets:3,
 wommen:4,
 men:5

}
const shopSlector=state=>state.shop;

export const ShopSelectorsItems =createSelector(
    [shopSlector],
    shop=>shop.collections
);

export const selectCollection=collectionUrlPrams=>createSelector(
  [ShopSelectorsItems],
  collection=>collection.find(collection=>collection.id ===COLLECTION_ID_MAP[collectionUrlPrams])  
) 