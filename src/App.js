import React from 'react';

import './App.css';
import './pages/homepage/hompages.component'
import Homepage from './pages/homepage/hompages.component';
import { Switch, Route, Redirect} from 'react-router-dom';
import ShopPage from './pages/shopPage/shop.component' ;
import HeaderComponent from './component/header/header.component' ;
import SignInSingnOut from './pages/sigin-sigout-pages/sign-in-signout.component';
import {auth ,createUserProfileDocument} from './firebase/firebase.utilits';
import {connect} from 'react-redux';
import CheckOut from './pages/checkoutPage/checkoutpage.component'
import {createStructuredSelector} from 'reselect'
import {setCurrentUser} from './redux/user/user.actions'
import { selectCartHidden} from '././redux/cart/cart.selectors';
import {selecetCurrentUser} from '././redux/user/user.selectors';

export class App extends React.Component {
 
  
  unSuscribeAuth=null
  componentDidMount(){

    const {setCurrentUser}=this.props
    this.unSuscribeAuth= auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef= await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot=>{
          setCurrentUser({
              id:snapshot.id,
             ...snapshot.data()

          })
          
         
        })
      }
      else{
        setCurrentUser(userAuth)
      }
    })
      
  }

  componentWillUnmount(){
    this.unSuscribeAuth()
  }

  render(){
    return(
        <div className="App">
      <HeaderComponent/>
      <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route path="/shop" component={ShopPage}/>
      <Route exact path="/checkout" component={CheckOut}/>


      <Route exact path="/signin" render={()=>this.props.currentUser?(<Redirect to="/" />):(<SignInSingnOut />)}/>

      </Switch>
      


    </div>
    )

  }
 
  }
 const mapToStateprops=()=>createStructuredSelector({
   currentUser:selecetCurrentUser,
   hidden:selectCartHidden,
   
 })

  const mapDispatchToProps=dispatch=>({
    setCurrentUser:user=>dispatch(setCurrentUser(user))
  })

export default connect(mapToStateprops,mapDispatchToProps)(App);
