import React from 'react'
import './menu.styles.scss'
const MenuItem=({title ,imageUrl,size})=>(
   < div  className={`${size} menu-item`}
   >
       <div className="Background-image" style={{
       backgroundImage:`url(${imageUrl})`
   }}/ >

       
       <div className="content">
                    <h1 className="tittle">{title.toUpperCase()}</h1>
                    <span className="tittle`">shop now</span>

                </div>

   </div>

)
export default  MenuItem