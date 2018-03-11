//官方库实现的store
// import { createStore } from 'redux';  // 官方实现的redux
import { createStore } from '../redux_mini/redux-mini.js';  //自己实现的redux

import { reducer } from './redux-reducer.js'

const store = createStore(reducer);  //自己实现的redux
console.log('store', store) 

export default store