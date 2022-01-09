import AddNumber from "../components/AddNumber";
import {connect} from 'react-redux';

// store.dispatch 함수를 인자로 공급
function mapReduxDispatchToReactProps(dispatch){
    return {
        onClick:function(size){
            dispatch({type:'INCREMENT', size:size});
        }
    }
}
export default connect(null, mapReduxDispatchToReactProps)(AddNumber);

/*
import React, { Component } from "react";
import store from "../store";
export default class extends Component {
    render(){
        return <AddNumber onClick={function(size){
            store.dispatch({type:'INCREMENT', size:size});
        }.bind(this)}></AddNumber>
    }
}
*/