import './App.css';
import {createStore} from "redux";

import reducer from "./reducer";
import {inc, dec, rnd} from "./actions";




const store = createStore(reducer);
const {dispatch, subscribe, getState} = store;

const update = () => {
    console.log(getState())
    document.getElementById('counter').textContent = store.getState().value;
}

subscribe(update);

const bindActionCreator = (creator, dispatch) => (...args) => {
    dispatch(creator(...args));
}

const incDispatch = bindActionCreator(inc, dispatch);
const decDispatch = bindActionCreator(dec, dispatch);
const rndDispatch = bindActionCreator(rnd, dispatch);

document.getElementById('inc').addEventListener('click', incDispatch);

document.getElementById('dec').addEventListener('click', decDispatch);

document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * (5 - 1)) + 1;
    rndDispatch(value);
});


function App() {
    return (
        <div className="App">
            Redux!

        </div>
    );
}

export default App;

