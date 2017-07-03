import { connect } from 'react-redux'
import { add, getTopFives, completeTask } from '../actions/index'
import Home from '../components/Home'

const mapStateToProps = (state, ownProps) =>{
    return {
        list: state.personal
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addRow: (topFive) => {    
            dispatch(add(topFive));
        },
        getTopFives: (id) => {
            dispatch(getTopFives(id));
        },
        complete : (id) => {
            dispatch(completeTask(id))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
