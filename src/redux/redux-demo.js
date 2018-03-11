import store from './redux-store.js';
import { addNum, removeNum } from './redux-reducer.js'

// console.log('store', store);

function getState(){
    const state = store.getState();
    console.log('state', state)
}

store.subscribe(function(){   //订阅事件
     getState()
})

store.dispatch( addNum() );  //发送事件
// store.dispatch( addNum() );  //发送事件
store.dispatch( removeNum() );