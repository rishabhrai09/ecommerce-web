import React from 'react';
import './button.styles.scss';

const ButtonSub=({children,...otherprops})=>(
<button className="custom-button" {...otherprops}>
    {children}

</button>
)
export default ButtonSub