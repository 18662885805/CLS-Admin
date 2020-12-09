import {combineReducers, createStore} from 'redux';
import {apmReducer as apm} from './apmReducer'
import {stockReducer as stock} from './stockReducer'


const reducers = combineReducers({
  apm,
  stock
});

const store = createStore(
  reducers,
  // Chrome Redux 插件
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;