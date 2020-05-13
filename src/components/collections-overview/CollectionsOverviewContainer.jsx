import { connect } from "react-redux"
import { compose } from "redux"
import { createStructuredSelector } from "reselect"
import { selectIsCollectionFetching } from "../../redux/shop/shopSelectors"
import WithSpinner from "../with-spinner/WithSpinner"
import CollectionOverview from "./CollectionsOverview"

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
})

// short hand 
//const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview))
const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview)

export default CollectionOverviewContainer
