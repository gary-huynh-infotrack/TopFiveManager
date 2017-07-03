import { connect } from 'react-redux'
import ProgressRing from '../components/graph/ProgressRing'

const mapStateToProps = (state, ownProps) =>{
    return {
        duration: 750,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProgressRing)