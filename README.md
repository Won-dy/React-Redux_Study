Redux 도입한 AddNumber, DisplayNumber 컴포넌트는 해당 애플리케이션에서만 사용하고 있는 상태에 의존하고 있어서 다른 애플리케이션에서 재사용 불가

Redux, store에 종속된 기능들을 제거해야 한다.

Wrapping하여 해결 > AddNumber, DisplayNumber 컴포넌트를 감싸는 새로운 컴포넌트를 만든다.

- Container Component > Redux에 종속된 기능

  새 컴포넌트는 Redux의 store와 관련된 작업들을 실질적으로 처리 및 핸들링하는 컴포넌트

- Presentational Component > 시각적인 표현 담당 기능

  AddNumber는 Redux라는 것이 세상에 존재하는지 모르는 컴포넌트로 만들어 부품으로써 사용할 수 있게 만들었다.

Container과 Presentational은 1:1 또는 1:M 관계

하지만 DisplayNumberRoot의 unit 값을 화면에 띄우려면  DisplayNumberRoot -> Container Component -> Presentational Component

this.props 2번이나 해야 해서 복잡하다. -> 이러면 Wrapping 해도 복잡한 건 마찬가지다. 이를 해결해주는 도구가 바로 React Redux.

# React Redux

Provider 컴포넌트의 store props를 통해서 redux store를 공급해줌

App을 포함한 Provider 하위에 있는 모든 컴포넌트들은 store에 접근할 수 있다. (import 따로 하지 않아도)

## connect.js

connect()() -> export default connect()(DisplayNumber);

2번째 인자인 DisplayNumber 컴포넌트를 Wrapping하는 껍데기 컴포넌트를 만들어서 return

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(AddNumber);

1. mapReduxStateToReactProps(store.getState(), this.props) 

redux store state를 react의 props로 mapping 시켜주는 정보를 담은 함수

2. mapReduxDispatchToReactProps(store.dispatch, this.props) 

redux의 dispatch를 react의 컴포넌트의 props로 연결해주는 정보를 담고 있는 함수

return 값이 객체. 객체의 property 이름, 값은 컴포넌트에 생성하고자 하는 property의 이름, 값

this.props > DisplayNumberRoot가 전달한 props들  ex) unit

componentDidMount > 컴포넌트가 적용됐을 때 호출 / 컴포넌트가 사용될 때 store에 subscribe(handleChange)를 시킴

componentWillUnMount > 컴포넌트가 제거될 때 호출 / 컴포넌트 더 이상 사용 안 되면 subscribe 취소 > performance 높임

handleChange() > 컴포넌트 강제 업데이트시켜 render메소드 호출되도록 함

-> store에 state가 바뀌면(componentDidMount) subscribe되고있는 컴포넌트들 강제 렌더링(handleChange) 후 </WrappedComponent 1, 2 ~/> 값이 새롭게 주입

### connect API 장점

등록한 props에 대해서만 구독 -> 불필요한 render함수 호출 감소

shouldComponentUpdate()일 redux가 대신해줌 -> 적은 코드로 높은 performance에 도전할 수 있음

Time Travel 기능, 도구 제공 / Hot reload 기능 제공
