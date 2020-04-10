import React from 'react';

import './App.css';
import './pages/homepage/hompages.component'
import Homepage from './pages/homepage/hompages.component';
import { Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shopPage/shop.component' ;
import HeaderComponent from './component/header/header.component' ;
import SignInSingnOut from './pages/sigin-sigout-pages/sign-in-signout.component';
import {auth ,createUserProfileDocument} from './firebase/firebase.utilits'



export class App extends React.Component {
  constructor(){
    super()
    this.state={
      currentUser:null

    }
  
  }
  unSuscribeAuth=null
  componentDidMount(){
    this.unSuscribeAuth= auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef= await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot=>{
          this.setState({
            currentUser:{
              id:snapshot.id,
             ...snapshot.data()

            }
          })
         
        })
      }
      else{
        this.setState({currentUser:userAuth})
      }
    })
      
  }

  componentWillUnmount(){
    this.unSuscribeAuth()
  }

  render(){
    return(
        <div className="App">
      <HeaderComponent currentUser= {this.state.currentUser}/>
      <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route path="/shop" component={ShopPage}/>
      <Route path="/signin" component={SignInSingnOut}/>

      </Switch>
      


    </div>
    )

  }
 
  }

export default App;
