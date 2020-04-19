import SHOP_DATA from './shop.data';

const INTIAL_SATE={
collections:SHOP_DATA    
}

export const shopItemReducer=(state=INTIAL_SATE,action)=>{
    switch(action.type){
        default:
            return state;
    }
}
export default shopItemReducer;