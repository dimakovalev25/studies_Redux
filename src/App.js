import './App.css';
import {createStore, bindActionCreators} from "redux";

import * as actions from "./action/actions";
import reducer from "./reducer/reducer";
import Counter from "./components/Counter";

import {Provider} from "react-redux";


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const {dispatch, subscribe, getState} = store;
const update = () => {
}
subscribe(update)
const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                Redux!
                <Counter
                    counter={getState().value}
                    inc={inc}
                    dec={dec}
                    rnd={() => {
                        const value=Math.floor(Math.random() * 10);
                        rnd(value);
                    }}
                />


            </div>
        </Provider>

    );
}

export default App;

