// tab切换组件
import React from 'react';
import PropTypes from 'prop-types';
import './Tab.css'

class Tab extends React.Component {
    constructor(...args){
        super(...args)      
        this.state = {  
            preIndex:'',          
            activeIndex: this.calActiveIndex()
        }
    }
    componentWillReceiveProps(nextProps) {
        if('activeIndex' in nextProps){
            this.setState({
                preIndex:'',
                activeIndex: nextProps.activeIndex
            })
        }        
    }
    calActiveIndex(){
        //计算属性的activeIndex
       let activeIndex = this.props.activeIndex||this.calDefaultActiveIndex()
       return activeIndex
    }
    calDefaultActiveIndex(){
        let { children }= this.props;
        return this.props.defaultActiveIndex||(children[0]&&children[0].props.order)||0
    }
    onChange(index){
        let preIndex = this.state.activeIndex;
        //如果上一个顺序和下一个相同，则不变化
        if(preIndex===index){             
            return   
        }
        this.setState({ 
            activeIndex: index,
            preIndex: preIndex
        })
        this.props.onChange(preIndex, index);
        
    }
    getTabNavs(){
        //获取所有的导航目录       
        return <TabNav 
                    activeIndex={this.state.activeIndex} 
                    onChange={this.onChange.bind(this)} 
                    children={this.props.children}
                />
    }
    getTabContent(){
        return <TabContent
                    activeIndex={this.state.activeIndex} 
                    children={this.props.children}
                />
    }
    render(){
        return (
            <div className={this.props.classPrefix}>              
                <ul className={this.props.classPrefix+'-nav'}>{this.getTabNavs()}</ul>
                <ul className={this.props.classPrefix+'-panel'}>{this.getTabContent()}</ul>
            </div>
        )
    }
}
Tab.defaultProps = {   
    classPrefix: 'tab',
    onChange: f=>f
}
Tab.propTypes = {
    defaultActiveIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
    activeIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

// 导航组件
class TabNav extends React.Component {
    constructor(...args){
        super(...args)
    }
    onChange(order){
        this.props.onChange(order)
    }
    handleClick(child){
        if(child.props.disabled){
            return 
        }
        this.onChange(child.props.order)
    }
    calClassName(child){
        console.log('child',child)
        if(child.props.disabled){
            return 'disabled'
        }else {
            return this.props.activeIndex===child.props.order?'active':''
        }
    }
  
    getNavs(){
        let { children } = this.props;
        return React.Children.map(children,(v, i)=>{
            return(
                <li className={this.calClassName(v)} onClick={()=>this.handleClick(v)}>
                    {v.props.nav}
                </li>
            ) 
        })
    }
    render(){
        return this.getNavs() 
    }
}
//内容组件
class TabContent extends React.Component {
    constructor(...args){
        super(...args)
    }
    getTabPanels(){
        let { children } = this.props;
        return React.Children.map(children, (v,i)=>{
            return (
                <li className={this.props.activeIndex===v.props.order?'active':''}>
                    {v.props.children}
                </li>
            )
        })
    }
    render(){
        return (
            this.getTabPanels()
        )
    }
}
//内容子组件
class TabPanel extends React.Component {
    constructor(...args){
        super(...args)
    }
    render(){
        return this.props.children
    }
}

Tab.TabPanel = TabPanel;
export default Tab