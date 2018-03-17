



//官方库实现的store
// import {createStore, applyMiddleware, compose } from 'redux';  // 官方实现的redux
import thunk from 'redux-thunk';
import { createStore } from '../redux_mini/redux-mini.js';  //自己实现的redux

import { reducer } from './redux-reducer.js'

// const store = createStore(reducer, applyMiddleware(thunk));  //官方实现的redux
const store = createStore(reducer);  //自己实现的redux
console.log('store', store) 

export default store


