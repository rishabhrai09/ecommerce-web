import React from 'react'
 import {SpinnerOverlay,SpinnerContainer} from './with-spinner.styles'

 const WithSpinner=WrappedComponent=>{
     const spinner=({isLoding,...otherProps})=>{
     return isLoding?(
     <SpinnerOverlay>
         <SpinnerContainer/>
     </SpinnerOverlay>
     ):(
     <WrappedComponent {...otherProps} />)
 }
 return spinner;
}
export default WithSpinner