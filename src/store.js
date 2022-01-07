import {createStore} from 'redux';

// reducer
export default createStore(function(state, action){
    if(state === undefined){
        return {number:0}
    }
    if(action.type === 'INCREMENT'){
        // imuttable: ...state를 복제하고, number 프로퍼티 값만을 변형시키는 코드
        return {...state, number:state.number + action.size}
    }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())