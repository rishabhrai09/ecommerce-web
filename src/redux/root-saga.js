import {call,all} from 'redux-saga/effects';
import {fetchCollectionStart} from './shop/shop.sagas';
import {userSaga} from './user/user.sagas';
import {cartSagas} from './cart/cart.sagas'


export default function* rootSaga(){
    yield all(
        [call(fetchCollectionStart),call(userSaga),call(cartSagas)])
}
