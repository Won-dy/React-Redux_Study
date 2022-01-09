import DisplayNumber from "../components/DisplayNumber";
import {connect} from 'react-redux';
export default connect()(DisplayNumber);  // 괄호2개 커넥트 실행하면 리턴값이 함수, 그 함수를 다시 실행 해서 만들어진 값을 export
// DisplayNumber 컴포넌트를 connect함수의 인자로 전달하면, connect는 ##~##처럼 생긴 컴포넌트를 뱉어냄

/*
import React, { Component } from "react";
import store from "../store";
export default ##class extends Component {
    state = {number:store.getState().number}
    constructor(props){
        super(props);
        store.subscribe(function(){
            this.setState({number:store.getState().number});  // warning 뜸
        }.bind(this));
    }
    render(){
        return <DisplayNumber number={this.state.number} unit={this.props.unit}></DisplayNumber>
    }
}##
*/