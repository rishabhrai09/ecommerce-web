import React from 'react'
import {withRouter} from 'react-router-dom'
import './menu.styles.scss'
const MenuItem=({title ,imageUrl,size,history,match,linkUrl})=>(
   < div  className={`${size} menu-item`}
   onClick={()=>history.push(`${match.url}${linkUrl}`)}
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
export default  withRouter( MenuItem)