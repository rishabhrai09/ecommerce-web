import {createSelector} from 'reselect';
const shopSlector=state=>state.shop;

export const ShopSelectorsItems =createSelector(
    [shopSlector],
    shop=>shop.collections
)