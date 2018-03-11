// 自己实现的 redux 

export function createStore(reducer){
    let curState = {};  //闭包 state
    let listenerList = []; //监听函数集合

    function getState(){  //获取state
         return curState
    }
    function  dispatch(action){     //发布接口 参数为信号action      
        curState = reducer(curState, action);
        listenerList.forEach(function(v, i){  //触发监听
            v()
        })
        return action
    }
    function subscribe(fn){   //订阅监听函数
        listenerList.push(fn)
    }
    dispatch({type: '@@Harry'})  //初始化state
    return {
        getState,
        dispatch,
        subscribe
    }
}