import React from 'react'
import {Link} from 'react-router-dom'
import './header.styles.scss'
import {ReactComponent as Logo} from '../../assest/crown.svg';
import {auth} from '../../firebase/firebase.utilits'
 const headerComponent=({currentUser})=>(
     
         <div className="header">
             <Link className="logo-container" to="/">
             <Logo  className="logo"/>
            </Link>
         
             <div className="options">
              <Link className="option" to="/shop">
                       Shop
                </Link>
                <Link to="/shop">
                Contant
                </Link>

                {
                    currentUser?
                    <div className="option" onClick={()=>auth.signOut()}>signOut</div>
                    :
                    <Link className="option" to="/signin">singIn</Link>
                }
             </div>
            

         
            </div>   
    
 )
 export default headerComponent