import {connect} from  'react-redux';
import {compose} from 'redux'
import {selectIscollectionfetching} from '../../redux/shop/shop.selectors'
import WithSpinner from '../../component/with-spinner/with-spinner.component'
import CollectionOverview from './collection-overview.component';
import {createStructuredSelector} from 'reselect'


const mapStateToProps=createStructuredSelector({
    isLoding:selectIscollectionfetching
})


const CollectionContainerOverview=compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview)

export default CollectionContainerOverview