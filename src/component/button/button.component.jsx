import React from 'react';
import './button.styles.scss';

const ButtonSub=({children, GoogleSignin,...otherprops})=>(
<button className={`${GoogleSignin?'google-singIn':''} custom-button`} {...otherprops}>
    {children}

</button>
)
export default ButtonSub