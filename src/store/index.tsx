import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import { Reducer as GlobalReducer} from 'store/Global';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    global: GlobalReducer
})
const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunkMiddleware)
)
  

const store = createStore(rootReducer, composedEnhancer)
export default store