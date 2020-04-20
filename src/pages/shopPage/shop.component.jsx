 import React from  'react';
 import  CollectionPage from '../colection/collection.component';
 import {Route} from 'react-router-dom'
 
import CollectionOverview from '../../component/collectionOverview/collection-overview.component'
 export const ShopPage =({match})=>
   
 (
         <div>
            <Route  exact path={`${match.path}`} component={CollectionOverview} />
            <Route  path={ `${match.path}/:collectionId`} component={CollectionPage}/>
         </div>
     )
 
    
 export default ShopPage