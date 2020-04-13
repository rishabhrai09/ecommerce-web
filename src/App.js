import React from 'react';

import './App.css';
import './pages/homepage/hompages.component'
import Homepage from './pages/homepage/hompages.component';
import { Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shopPage/shop.component' ;
import HeaderComponent from './component/header/header.component' ;
import SignInSingnOut from './pages/sigin-sigout-pages/sign-in-signout.component';
import {auth ,createUserProfileDocument} from './firebase/firebase.utilits';
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions'


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
      <Route path="/signin" component={SignInSingnOut}/>

      </Switch>
      


    </div>
    )

  }
 
  }
  const mapDispatchToProps=dispatch=>({
    setCurrentUser:user=>dispatch(setCurrentUser(user))
  })

export default connect(null,mapDispatchToProps)(App);
