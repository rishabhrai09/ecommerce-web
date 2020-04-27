 import React from  'react';
 import  CollectionPage from '../colection/collection.component';
 import {Route} from 'react-router-dom';
 import upadteCollection from '../../redux/shop/shop.action'
 import {connect} from 'react-redux' ;
 import WithSpinner from '../../component/with-spinner/with-spinner.component'

 import {firestore ,convertCollectionToMap} from '../../firebase/firebase.utilits';
import CollectionOverview from '../../component/collectionOverview/collection-overview.component';


const CollectionOverviewWithSpinner= WithSpinner(CollectionOverview);
const CollectionPageWithSpinner= WithSpinner(CollectionPage)
   class ShopPage extends React.Component {
      state={
      loding:true
      }
      unsuscribeFromFirstore=null
      componentDidMount(){
          const {upadteCollection}=this.props
const collectionRef= firestore.collection('collections');
collectionRef.get().then(snapshot=>{
const collectionMap= convertCollectionToMap(snapshot)
upadteCollection(collectionMap)
this.setState({loding:false})
})
      }
   render(){
 const {match}= this.props
 const {loding} = this.state
  return  (
         <div>
            <Route  exact path={`${match.path}`} render={props=>(
            <CollectionOverviewWithSpinner isLoding={loding} {...props} />
             ) } 
               />
            <Route  path={ `${match.path}/:collectionId`}  render={props=>
               (<CollectionPageWithSpinner isLoding={loding} {...props} />)}
               />
         </div>
     )}
  }

  const mapDispatchToprops=dispatch=>({
      upadteCollection:collectionMap=>dispatch(upadteCollection(collectionMap))
  })
  
 export default connect(null,mapDispatchToprops)(ShopPage)