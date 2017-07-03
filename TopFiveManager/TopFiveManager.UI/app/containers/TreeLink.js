import { connect } from 'react-redux'
import { getAllHierarchy, updateTierStore } from '../actions/index'
import Tree from '../components/Tree'

const mapStateToProps = (state, ownProps) =>{
    return {
        list: state.hierarchy
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAllHierarchy: ()=>{
            dispatch(getAllHierarchy());
        },
        updateTierStore: (data)=>{

            dispatch(updateTierStore(data))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tree)
