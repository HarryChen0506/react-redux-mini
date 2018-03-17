//官方库实现的reducer

const ADDNUM = 'ADDNUM';
const REMOVENUM = 'REMOVENUM';
const LATERADDNUM = 'LATERADDNUM';

export function addNum(){
    return {
        type: ADDNUM
    }
}
export function removeNum(){
    return {
        type: REMOVENUM
    }
}
export function laterAddNum(num){
    return (dispatch)=>{
        setTimeout(()=>{
            // console.log('LATERADDNUM')
            dispatch({type: LATERADDNUM, num})
        },1000)        
    }
}
const initState = {
    count: 10
}
export function reducer(state = initState, action){
    console.log('state', state)
    switch(action.type){
        case ADDNUM:
            return {...state, count:state.count+1 }
        case REMOVENUM:
            return {...state, count:state.count-1 }
        case LATERADDNUM:            
            return {...state, count:state.count+action.num }
        default:           
            return state
    }
}