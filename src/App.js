import './App.css';
import {createStore} from "redux";

// const reducer = (state = 1, action) => {
//   switch (action.type) {
//     case 'INC':
//       return state + 1;
//     case 'DEC':
//       return  state - 10;
//     default:
//       return state;
//   }
// }
//
// const store = createStore(reducer);
//
// const update = () => {
//   // document.getElementById('counter').textContent = store.getState()
// }
//
// store.subscribe(update)
//
//
// document.getElementById('inc').addEventListener('click', () => {
//     store.dispatch({type: 'INC'});
// })
//
// document.getElementById('dec').addEventListener('click', () => {
//     store.dispatch({type: 'DEC'});
// })
//
// console.log(document.getElementById('inc'));

// const initialState = 0;

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        default:
            return state;
    }
}

const store = createStore(reducer);

const update = () => {
    console.log(store.getState())
    document.getElementById('counter').textContent = store.getState()
}

store.subscribe(update);

document.getElementById('inc').addEventListener('click', () => {
    store.dispatch({type: 'INC'});
});

document.getElementById('dec').addEventListener('click', () => {
    store.dispatch({type: 'DEC'});
});







function App() {
    return (
        <div className="App">
            Redux!
            {/*<h1 id='counter'>Counter: 0</h1>*/}
            {/*<button id='dec'>DEC</button>*/}
            {/*<button id='inc'>INC</button>*/}
        </div>
    );
}

export default App;

