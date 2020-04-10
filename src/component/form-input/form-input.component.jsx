import React from 'react';
 import './form-input.styles.scss';

 const InputForm=({handleChange,lable,...otherInputprops})=>(
<div className="group">
<input className="form-input" onChange={handleChange} {...otherInputprops}/>
{
    lable?
   (<label className={`${otherInputprops.value.length?'shrink':''} form-input-label`}>
        {lable }
    </label>):
    null
}
</div>
 )

 export default InputForm