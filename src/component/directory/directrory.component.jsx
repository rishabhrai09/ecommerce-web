import React from 'react'
import '../menu-item/menu-item.component'
import MenuItem from '../menu-item/menu-item.component';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectDirectorySelector} from '../../redux/directory/directory.selector'
import './directory.styles.scss'

export const Directory =({items})=>(
         <div className="dicrectory-menu">
                {items.map(({id,...Othersections})=>(
               <MenuItem key={id} {...Othersections} />
                ))
                }
            </div>   

        )

      const mapStateToProps =createStructuredSelector({
        items:selectDirectorySelector
      })
    

export default connect(mapStateToProps) (Directory)