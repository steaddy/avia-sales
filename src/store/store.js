import { createStore, applyMiddleware} from "redux";
import reducer from "./reducer";
import initialState from "./initialState";
import thunk from 'redux-thunk';

const store = createStore(reducer, initialState, applyMiddleware(thunk));


export default store;