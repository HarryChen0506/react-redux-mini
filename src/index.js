import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import { Provider } from 'react-redux'  //官方的Provider

import Demo from './react_demo.js';

 //测试js
// import './redux/redux-demo.js'

import store from './redux/redux-store.js';

function render(){
     ReactDOM.render(
        <Provider store = {store}>
            <Demo />
        </Provider>, 
        document.getElementById('root'));
}
render()




