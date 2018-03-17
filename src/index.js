import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// import { Provider } from 'react-redux'  //官方的Provider
import { Provider } from './redux_mini/react-redux-mini.js'  //自己的Provider

// import Demo from './demo/react_demo.js';
// import Page from './demo/context.js';
import Component from './container/Component.js';


 //测试js
// import './demo/redux-demo.js'

import store from './redux/redux-store.js';

function render(){
     ReactDOM.render(
        <Provider store = {store}>
            <Component />
        </Provider>, 
        document.getElementById('root'));
}
render()




