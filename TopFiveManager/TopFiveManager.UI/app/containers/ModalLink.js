import { connect } from 'react-redux'
import { getTopFives } from '../actions/index'
import Modal from '../components/Modal'


const mapStateToProps = (state, ownProps) =>{
    return {
        selected: state.selected,
        list: state.all
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getTopFiveList: () => {
            dispatch(getTopFiveByList());
        },
        complete : (id) => {
            dispatch(completeTask(id))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal)
