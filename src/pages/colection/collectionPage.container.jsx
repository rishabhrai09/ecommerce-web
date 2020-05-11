import {connect} from  'react-redux';
import {compose} from 'redux'
import {createStructuredSelector} from 'reselect'

import {selectIsCollectionLoded} from '../../redux/shop/shop.selectors'
import WithSpinner from '../../component/with-spinner/with-spinner.component'
import CollectionPage from './collection.component';


const mapStateToProps=createStructuredSelector({
    isLoding:state => !selectIsCollectionLoded(state)
})


const CollectionContainerPage=compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)

export default CollectionContainerPage