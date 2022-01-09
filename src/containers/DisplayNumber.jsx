import DisplayNumber from "../components/DisplayNumber";
import {connect} from 'react-redux';

// Redux에서 store 값이 변경될 때마다 호출, state(store.getState()) 값이 인자로 전달, @, @~@와 똑같은 의미
// state 값을 가공해서 return하고 싶은 DisplayNumber에 들어갈 props의 이름:값을 작성
function mapReduxStateToReactProps(state){
    return {
        number:state.number
    }
}
export default connect(mapReduxStateToReactProps)(DisplayNumber);  // 괄호2개 커넥트 실행하면 리턴값이 함수, 그 함수를 다시 실행 해서 만들어진 값을 export
// DisplayNumber 컴포넌트를 connect함수의 인자로 전달하면, connect는 ##~##처럼 생긴 컴포넌트를 뱉어냄

/*
import React, { Component } from "react";
import store from "../store";
export default ##class extends Component {
    @state = {number:store.getState().number}
    constructor(props){
        super(props);
        @store.subscribe(function(){
        @    this.setState({number:store.getState().number});  // warning 뜸
        @}.bind(this));
    }
    render(){
        return <DisplayNumber @number={this.state.number}@ unit={this.props.unit}></DisplayNumber>
    }
}##
*/