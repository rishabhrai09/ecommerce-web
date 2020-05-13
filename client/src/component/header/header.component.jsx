import React from 'react'
//import './header.styles.scss'
import ShoppingCart from "./../cart-icon/cart-icon.component";
import {ReactComponent as Logo} from '../../assest/crown.svg';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
//import {auth} from '../../firebase/firebase.utilits';
import {connect} from 'react-redux';
import {SignOutStart} from '../../redux/user/user.actions'
import {HeaderContainer,LogoContainer,OptionsContainer,LogoOption} from './header.styles'
 const headerComponent=({currentUser,hidden,SignOutStart})=>(
     
         <HeaderContainer >
             <LogoContainer to="/">
             <Logo/>
            </LogoContainer>
         
             <OptionsContainer >
              <LogoOption  to="/shop">
                       Shop
                </LogoOption>
                <LogoOption  to="/shop">
                Contant
                </LogoOption>

                {
                    currentUser?
                    (
                    <LogoOption as="div" onClick={SignOutStart}>signOut</LogoOption>
                     ) :(
                     <LogoOption to="/signin">SingIn</LogoOption>)
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
 const mapDispatchtoProps=dispatch=>({
    SignOutStart:()=>dispatch(SignOutStart())
 })
 export default connect(mapToStateProps,mapDispatchtoProps) (headerComponent)