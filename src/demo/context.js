//该演示案例为 context 的使用

//context 可以让所有层级的子孙组件获取定义context时的父组件的值

import React from 'react';
import PropTypes from 'prop-types'

class Page extends React.Component {
    constructor(...args){
        super(...args)
    }
    getChildContext(){
        return {
            name: '中国'
        }
    }
    render(){
        return(
            <div>
                 Page页面
                <Nav title="hello"></Nav>
            </div>
        )
    }
}
Page.childContextTypes = {   //父组件必须要对context做类型检查
    name: PropTypes.string
};

class Nav extends React.Component {
    constructor(...args){
        super(...args)
    }
    render(){
        return(
            <div>
                <p>导航栏</p>
                <Button title={this.props.title}/>              
            </div>
        )
    }
}

class Button extends React.Component {
    constructor(...args){
        super(...args);
        console.log('args', args)
    }
    render(){
        console.log('context', this.context)
        return(
            <button>按钮:{this.props.title}---{this.context.name}</button>
        )
    }
}
Button.contextTypes  = {  //子组件必须要对context做类型检查
  name: PropTypes.string
};

export default Page