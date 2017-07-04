import { connect } from 'react-redux'
import { add, getTopFives, completeTask, addNewTopFive } from '../actions/index'
import UpdateTopFive from '../components/UpdateTopFive'


const mapStateToProps = (state, ownProps) =>{
    return {
        list: state.all,
        selected: state.selected,
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
)(UpdateTopFive)
