import React from 'react';
import './button.styles.scss';
import {CustomButton} from './button.styles'
const ButtonSubs=({children,...props})=>(
<CustomButton {...props}>
    {children}

</CustomButton>
)
export default ButtonSubs