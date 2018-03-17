import React, { Component } from 'react'; 
import { connect } from 'react-redux';  //官方的connect  connet的作用 子组件从context里获取store对象， 并将属性（state, dispatch）传递到子组件内
// import { connect } from '../redux_mini/react-redux-mini.js';  //自己的connect

import { addNum, removeNum, laterAddNum } from '../redux/redux-reducer.js';

class Demo extends Component {
    constructor(...args){
        super(...args);
        // this.state = {
        //     count: 10
        // }  
    }
    addNum(){
        // this.setState({
        //     count: this.state.count+1
        // })
         this.props.addNum()
    }
    removeNum(){
        // this.setState({
        //     count: this.state.count-1
        // })
         this.props.removeNum()
    }
    componentWillMount(){
        // console.log( 'props' ,this.props)
    }
    render() {
        return (
            <div>
                <div>这是一个demo案例</div>   
                <div>计数器： {this.props.count} </div>
                <div>
                    <button onClick={()=>this.addNum()}>增加</button>  
                    <button onClick={()=>this.removeNum()}>减少</button>  
                    <button onClick={()=>this.props.laterAddNum(3)}>两秒后增加</button>  
                </div> 
            </div>
        );
    }
}
let mapStateProps = (state)=>{
    return {
        count: state.count
    }        
}
let mapDispatchProps = {
    addNum, removeNum, laterAddNum
}
Demo = connect(mapStateProps, mapDispatchProps)(Demo)
export default Demo;
