//官方库实现的reducer

const ADDNUM = 'ADDNUM';
const REMOVENUM = 'REMOVENUM';

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
const initState = {
    count: 10
}
export function reducer(state = initState, action){
    switch(action.type){
        case ADDNUM:
            return {...state, count:state.count+1 }
        case REMOVENUM:
            return {...state, count:state.count-1 }
        default:           
            return initState
    }
}