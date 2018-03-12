//自己实现一个react-redux 

//Provider 利用react的context,将父组件设置的属性，所有的子孙组件直接能够获取该属性

import React from 'react';
import PropTypes from 'prop-types';

export class Provider extends React.Component {
    constructor(...args){
        super(...args)
    }
    getChildContext(){
        return {
            store: this.props.store
        }
    }
    render(){
        // console.log('my-provider')
        return React.Children.only(this.props.children)  //返回唯一的子元素
        // return React.Children.map(this.props.children, v=>v)  //返回多个子元素
    }
}
Provider.childContextTypes = {   //父组件必须要对context做类型检查
    store: PropTypes.object
};

function bindActionCreators(props, dispatch){
    //绑定action和creators 其实就是用store.dispatch进行一次包装
    let obj = {}
    Object.keys(props).forEach((v,i)=>{
        obj[v] = (...args)=>{ dispatch(props[v](...args))}
    })
    return obj
}
export function connect(mapStatePropsFn, mapDispatchProps){
    return function(WrapComponent){
        class ConnectComponent extends React.Component{
            constructor(props, context){
                super(props, context)
                // console.log('context', context)
                // console.log('this', this)
                 this.store = context.store;
                 this.state = {
                     props: {}
                 }
            }
            update(){
                let mapStateProps = mapStatePropsFn(this.store.getState());                
                let newMapDispatchProps = bindActionCreators(mapDispatchProps, this.store.dispatch);  //用dispatch对action进行一次包装

                this.setState({
                   props: {...this.state.props, ...mapStateProps, ...newMapDispatchProps} 
                })
            }
            componentDidMount(){
                this.update();
                this.store.subscribe(()=>{this.update()}) //每次dispatch后执行更新
            }
            render(){
                return <WrapComponent {...this.state.props}/>
            }
        }
        ConnectComponent.contextTypes  = {  //子组件必须要对context做类型检查
            store: PropTypes.object
        };
        return ConnectComponent
    }
}
