import{ connect } from 'react-redux'
import { compose } from "redux"
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionLoaded } from '../../redux/shop/shopSelectors'
import WithSpinner from "../../components/with-spinner/WithSpinner"
import Collection from "./collection"

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state)
})

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection)

export default CollectionPageContainer