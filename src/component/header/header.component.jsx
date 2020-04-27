import React from 'react'
//import './header.styles.scss'
import ShoppingCart from "./../cart-icon/cart-icon.component";
import {ReactComponent as Logo} from '../../assest/crown.svg';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {auth} from '../../firebase/firebase.utilits';
import {connect} from 'react-redux';
import {HeaderContainer,LogoContainer,OptionsContainer,LogoOption} from './header.styles'
 const headerComponent=({currentUser,hidden})=>(
     
         <HeaderContainer className="header">
             <LogoContainer className="logo-container" to="/">
             <Logo  className="logo"/>
            </LogoContainer>
         
             <OptionsContainer className="options">
              <LogoOption className="option" to="/shop">
                       Shop
                </LogoOption>
                <LogoOption  to="/shop">
                Contant
                </LogoOption>

                {
                    currentUser?
                    <LogoOption as="div" className="option" onClick={()=>auth.signOut()}>signOut</LogoOption>
                    :
                    <LogoOption className="option" to="/signin">SingIn</LogoOption>
                }
                
         <ShoppingCart/>
             </OptionsContainer>
             {    
             hidden?null:
             <CartDropdown/>


             }
         
            </HeaderContainer>   
    
 )
 const mapToStateProps= ({user:{currentUser},cart:{hidden}})=>({
     currentUser,
     hidden
 })
 export default connect(mapToStateProps) (headerComponent)