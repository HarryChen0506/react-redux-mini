// 组件案例

import React from 'react';
import Tab from '../component/Tab'

class Component extends React.Component {
    constructor(...args){
        super(...args)
        this.state = {
            index: 1
        }
    }
    handleChange(preIndex, curIndex){
        console.log('上一个顺序', preIndex)
        console.log('当前一个顺序', curIndex)
    }
    render(){
        return(
            <div>
                <h1>组件案例</h1>
                <button onClick={()=>{this.setState({index:3})}}>更换默认值</button>  
                <Tab activeIndex={this.state.index} classPrefix="tab" onChange={this.handleChange.bind(this)} >
                    <Tab.TabPanel nav="第一条的导航" order={1}><span>第一行</span>123</Tab.TabPanel>
                    <Tab.TabPanel nav="第二条的导航" order={2} disabled={true}><span>第二行</span>www</Tab.TabPanel>
                    <Tab.TabPanel nav="第三条的导航" order={3}><span>第三行</span>gfgf</Tab.TabPanel>
                </Tab> 
            </div>
        ) 
    }
}

export default Component