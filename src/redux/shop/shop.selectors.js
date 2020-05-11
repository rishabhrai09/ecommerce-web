import {createSelector} from 'reselect';


const shopSlector=state=>state.shop;

export const ShopSelectorsItems =createSelector(
    [shopSlector],
    shop=>shop.collections
);

export const selectCollectionPreviwe =createSelector(
  [ShopSelectorsItems],
  collections=>collections? Object.keys(collections).map(key=>collections[key]):[]
)

export const SelectCollection=collectionUrlPrams=>createSelector(
  [ShopSelectorsItems],
  collections=>(collections? collections[collectionUrlPrams]:null)
//find(
//       collection=>collection.id ===COLLECTION_ID_MAP[collectionUrlPrams])  
) 


export const selectIscollectionfetching=createSelector(
  [shopSlector],
  shop=>shop.isFatching
)

export const selectIsCollectionLoded=createSelector(
  [shopSlector],
  shop=> !!shop.collections
)