import React from 'react'
import {Link} from 'react-router-dom'
import './header.styles.scss'
import ShoppingCart from "./../cart-icon/cart-icon.component";
import {ReactComponent as Logo} from '../../assest/crown.svg';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {auth} from '../../firebase/firebase.utilits';
import {connect} from 'react-redux'
 const headerComponent=({currentUser,hidden})=>(
     
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
                    <Link className="option" to="/signin">SingIn</Link>
                }
                
         <ShoppingCart/>
             </div>
             {    
             hidden?null:
             <CartDropdown/>


             }
         
            </div>   
    
 )
 const mapToStateProps= ({user:{currentUser},cart:{hidden}})=>({
     currentUser,
     hidden
 })
 export default connect(mapToStateProps) (headerComponent)