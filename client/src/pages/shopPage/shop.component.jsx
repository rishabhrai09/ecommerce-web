 import React,{useEffect} from  'react';
 import  CollectionPage from '../colection/collection.component';
 import {Route} from 'react-router-dom';
 import {createStructuredSelector} from 'reselect'
 import {fetchCollectionStart} from '../../redux/shop/shop.action'
 import {selectIsCollectionLoded} from '../../redux/shop/shop.selectors'
 import {connect} from 'react-redux' ;
 import WithSpinner from '../../component/with-spinner/with-spinner.component'

import CollectionContainerOverview from '../../component/collectionOverview/collection.container';


const CollectionPageWithSpinner= WithSpinner(CollectionPage)
   const ShopPage =({fetchCollectionStart,match,isCollectionloaded})=> {
      useEffect(() => {
         fetchCollectionStart()
      }, [fetchCollectionStart])
      
  return  (
         <div>
            <Route  exact path={`${match.path}`} 
      component={CollectionContainerOverview} 
               />
            <Route  path={ `${match.path}/:collectionId`}  render={props=>
               (<CollectionPageWithSpinner isLoding={!isCollectionloaded} {...props} />)}
               />
         </div>
     )}
  

  const mapStateToProps = createStructuredSelector({
     isCollectionloaded:selectIsCollectionLoded
  })
  
 
  const mapDispatchToprops=dispatch=>({
   fetchCollectionStart:()=>dispatch(fetchCollectionStart())
  })
  
 export default connect(mapStateToProps,mapDispatchToprops)(ShopPage)