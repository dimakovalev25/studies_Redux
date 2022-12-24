import './App.css';
import {createStore} from "redux";

const initialState = {value: 0};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC':
            return {
                ...state,
                value: state.value + 1
            };
        case 'DEC':
            return {
                ...state,
                value: state.value -1
            };
        case 'RND':
            return  {
                ...state,
                value: state.value * action.payload
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

const update = () => {
    // console.log(store.getState())
    document.getElementById('counter').textContent = store.getState().value;
}

store.subscribe(update);

const inc = () => ({type: 'INC'})
const dec = () => ({type: 'DEC'})
const rnd = (value) => ({type: 'RND', payload: value})

document.getElementById('inc').addEventListener('click', () => {
    store.dispatch(inc());
});

document.getElementById('dec').addEventListener('click', () => {
    store.dispatch(dec());
});

document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * (5 - 1)) + 1;
    store.dispatch(rnd(value));
});


function App() {
    return (
        <div className="App">
            Redux!

        </div>
    );
}

export default App;

