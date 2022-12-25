import {connect} from "react-redux";
import * as actions from '../action/actions'

const Counter = ({counter, inc, dec, rnd, name}) => {
    return (
        <div className="jumbotron">
            {name}
            <h1>{counter}</h1>
            <button onClick={dec} className="btn btn-primary" >DEC</button>
            <button onClick={inc} className="btn btn-primary" >INC</button>
            <button onClick={rnd} className="btn btn-primary" >RND</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
            counter: state.value,
            name: state.name
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(actions, dispatch)
//
// }

export default connect(mapStateToProps, actions)(Counter);