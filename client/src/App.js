import React,{useEffect} from 'react';

import './App.css';
import './pages/homepage/hompages.component'
import Homepage from './pages/homepage/hompages.component';
import { Switch, Route, Redirect} from 'react-router-dom';
import ShopPage from './pages/shopPage/shop.component' ;
import HeaderComponent from './component/header/header.component' ;
import SignInSingnOut from './pages/sigin-sigout-pages/sign-in-signout.component';
import {connect} from 'react-redux';
import CheckOut from './pages/checkoutPage/checkoutpage.component'
import {createStructuredSelector} from 'reselect'
import { selectCartHidden} from '././redux/cart/cart.selectors';
import {selecetCurrentUser} from '././redux/user/user.selectors';
import {checkUserSession} from './redux/user/user.actions'

export const App =({checkUserSession,currentUser})=> {
 
  useEffect(()=>{
    checkUserSession()
  },[checkUserSession])
  

  

  
    return(
        <div className="App">
      <HeaderComponent/>
      <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route path="/shop" component={ShopPage}/>
      <Route exact path="/checkout" component={CheckOut}/>


      <Route exact path="/signin" render={()=>currentUser?(<Redirect to="/" />):(<SignInSingnOut />)}/>

      </Switch>
      


    </div>
    )

  

  }
 const mapStateToprops=()=>createStructuredSelector({
   currentUser:selecetCurrentUser,
   hidden:selectCartHidden,
   
 })


 const mapDispatchToprops =dispatch=>({
   checkUserSession:()=>dispatch(checkUserSession())
 })
export default connect(mapStateToprops,mapDispatchToprops)(App);
