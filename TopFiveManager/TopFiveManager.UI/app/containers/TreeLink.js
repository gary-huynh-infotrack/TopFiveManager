import { connect } from 'react-redux'
import { add, getTopFives, completeTask } from '../actions/index'
import Tree from '../components/Tree'

const mapStateToProps = (state, ownProps) =>{
    return {
        list: state.personal
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tree)
