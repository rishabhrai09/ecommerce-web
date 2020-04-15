import React from 'react';
import './button.styles.scss';

const ButtonSub=({children, GoogleSignin ,inverted,...otherprops})=>(
<button className={` ${inverted?'inverted':''} ${GoogleSignin?'google-singIn':''} custom-button`} {...otherprops}>
    {children}

</button>
)
export default ButtonSub