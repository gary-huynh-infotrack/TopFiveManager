import { connect } from 'react-redux'
import { add, getTopFives, completeTask, addNewTopFive } from '../actions/index'
import AddTopFive from '../components/AddTopFive'


const mapStateToProps = (state, ownProps) =>{
    return {
        list: state.personal
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getTopFives: (id) => {
            dispatch(getTopFives(id));
        },
        complete : (id) => {
            dispatch(completeTask(id))
        },
        addNewTopFive: (data) =>{
            dispatch(addNewTopFive(data))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTopFive)
