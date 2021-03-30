# electron_study
react_typescript_electron 연습 &amp; 정리용 프로젝트

### 리액트에서 타입스크립트 사용방법  
* children을 작성하지 않으면 오류가 나온다. 자세한 내용은 해당 링크 확인 <https://react.vlpt.us/using-typescript/02-ts-react-basic.html>
```
type TestHeaderProps = {
    name: string,
    color?: string,
    children: React.ReactNode;
}


const TestHeader = ({name,color}:TestHeaderProps) => {
    return(
        <h1 style={{color:`${color}`}}>{name}</h1>
    )
}

TestHeader.defaultProps  = {
    name:"최영훈",
    color:"red",
};
```

### 자식요소를 나타내는법
* wrapper 요소 안에 다른 요소를 나타내는 방법이다.
```
import React from "react";
type Props = {
    children: JSX.Element,
  };
 const Wrapper = ({children}:Props) => {
    const style = {
        border: `2px solid black`,
        padding : `16px`
    }
    return(
        <div style={style}>
            {children}
        </div>
    )
}


export default Wrapper;
```

* app코드 안에 있는 wrapper 요소이다. 안에 들어있는 자식요소가 wrapper안에 잘 나온다.
```
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import TestHeader from './testHeader';
import Wrapper from './wrapper';


function App() {
  return (
    <Wrapper>
      <TestHeader name={"타입스크립트 리액트를 연습합니다!"} color={"blue"}>테스트입니다</TestHeader>
    </Wrapper>
  );
}

export default App;
```

### useRef는 변수로 사용이 가능하다
* 컴포넌트 안에서 조회 및 수정 할 수 있는 변수를 관리하는 것이다.
* 값이 바뀐다고 해서 컴포넌트가 리렌더링 되지 않습니다. 
* 리액트 컴포넌트에서 상태는 상태를 바꾸는 함수를 호출하고 나서 그 다음 렌더링 이후로 업데이트 된 상태를 조회 할 수 있는 반면, useRef로 관리하고 있는 변수는 설정 후 바로 조회 할 수 있다.
* `setTimeout` `setInterval`를 통해서 만들어진 id
* `외부 라이브러리를 사용하여 생성된 인스턴스`
* `scroll위치`

```
import React, { useRef } from 'react';
import UserList from './UserList';

function App() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];

  const nextId = useRef(4);
  const onCreate = () => {
    // 나중에 구현 할 배열에 항목 추가하는 로직
    // ...

    nextId.current += 1;
  };
  return <UserList users={users} />;
}

export default App;
```

### 컨텍스트 API를 사용한 상태관리
![image](https://user-images.githubusercontent.com/59411545/113023738-e9f79f80-91c0-11eb-9408-f2a3b959196a.png)  
![image](https://user-images.githubusercontent.com/59411545/113028982-dfd89f80-91c6-11eb-99d2-b6b81cf88dc3.png)  
데이터를 나타내는 컨텍스트가 있고  
상태값을 변경해주는 컨텍스트가 있다.  
![image](https://user-images.githubusercontent.com/59411545/113029166-11516b00-91c7-11eb-886c-b656d9fdf5e5.png)  
여러개체를 관리할때는 usestate보다는 usereducer가 좋다  
![image](https://user-images.githubusercontent.com/59411545/113029322-3f36af80-91c7-11eb-863f-fd8308dba465.png)  
provider에 객체를 state로 변경하면 불필요한 랜더링을 막을수있다.   
value에 객체를 넣게되면 컴포넌트가 랜더링될때마다 새로운 객체를 생성하기 때문이다  

### 랜더링과 관련없는 값을 저장할 때 useRef를 사용하자
![image](https://user-images.githubusercontent.com/59411545/113030009-182cad80-91c8-11eb-8a52-26c58d7d6643.png)  
이전값을 보유하고있는 useref변수이다.  


### useMemo는 계산값이 많은 값을 반환을 재사용하는 목적으로 사용한다
![image](https://user-images.githubusercontent.com/59411545/113030275-62ae2a00-91c8-11eb-8e91-ceef56d37699.png)  
의존생 배열의 값이 변경되는 함수를 실행한다.  

### useCallback은 함수 메모이제이션에 특화된 훅이다.
![image](https://user-images.githubusercontent.com/59411545/113030510-a43ed500-91c8-11eb-85e2-d1a98cec4d4f.png)  

callback을 사용하지않으면 함수가 새로 생성되기 때문에 memo를 사용한 함수조차 새롭게 랜더링이 된다.  
![image](https://user-images.githubusercontent.com/59411545/113030677-d2241980-91c8-11eb-8f66-a00b5a7179cc.png)  
name과 age가 변경되면 새로운 콜백함수를 생성하게 한다.  

### useReducer훅에 알아보자 여러개의 상태값 관리에 좋다.
![image](https://user-images.githubusercontent.com/59411545/113031074-3810a100-91c9-11eb-86c5-fdfa763609ee.png)  
dispatch가 setstate와 비슷한 기능을한다. type으로 상태의 이름을 구분하고 키:변경할 값을 정한다  

### useReducer와 contextApi를 사용하면 트리 깊은곳까지 이벤트와 상태관리 함수를 전달하기 쉽다.
![image](https://user-images.githubusercontent.com/59411545/113031393-9dfd2880-91c9-11eb-9e63-41c1b147b835.png)  


### 자식요소에 생성한 함수를 부모요소가 호출할때 useImperativeHandle을 사용하자
![image](https://user-images.githubusercontent.com/59411545/113032590-f97be600-91ca-11eb-9011-b964bfd9cdf9.png)  

### uselayouteffect는 부수효과 함수를 동기로 호출한다. (useeffect는 비동기로) 특별한이유 없다면 useeffect사용하자
## 사용이유 : 렌더링 직후 돔 값을 바로 사용하고 싶을때, 조건에 따라서 컴포넌트를 다시 랜더링하고싶은경우
![image](https://user-images.githubusercontent.com/59411545/113032868-54154200-91cb-11eb-8cdc-011a5203df51.png) 
500보다 큰값으로 랜더링했다가 500으로 다시 랜더링해서 깜빡이는 증상 발생함  
이럴 때 `uselayouteffect`를 사용하자
![image](https://user-images.githubusercontent.com/59411545/113032951-6db68980-91cb-11eb-9766-d6ad2beebbf6.png) 
정확한 동작 방법은 랜더링을하고 실제돔에 반영했지만 브라우저가 그림을 그리기전에 동기로 값이 실행이 된다.  
그리고 그 브라우저가 그리기 시작한다.
이때 레이아웃훅안에는 연산이 복잡하면 사용자는 버벅이는 느낌을 받을 수 있다. 

### useDebugValue 상태값을 상수로 표시하여 디버깅을 쉽게 도와준다
![image](https://user-images.githubusercontent.com/59411545/113033787-5cba4800-91cc-11eb-8452-155b8a19eab2.png)  

### 커스텀훅을 사용하면 재사용성이 좋다.
![image](https://user-images.githubusercontent.com/59411545/113034192-c5a1c000-91cc-11eb-85fd-b3309643ba6f.png)  
커스텀훅의 상태값이 변경되면 그 커스텀훅을 사용하는 상위 컴포넌트도 새로운 상태값을 기반으로 함께 렌더링이된다.
![image](https://user-images.githubusercontent.com/59411545/113034557-2fba6500-91cd-11eb-8c98-8af5084474bf.png)  

![image](https://user-images.githubusercontent.com/59411545/113035031-bbcc8c80-91cd-11eb-8176-f17c6c82ef1f.png)  
![image](https://user-images.githubusercontent.com/59411545/113035451-372e3e00-91ce-11eb-97e9-ea59304dd4ab.png)

![image](https://user-images.githubusercontent.com/59411545/113035494-3f867900-91ce-11eb-93e4-ffe6da8caf74.png)  



![image](https://user-images.githubusercontent.com/59411545/113036162-e834d880-91ce-11eb-86e6-63af145b8257.png)  






### 자식요소에서 값을 읽고, 변경하면서 상태를 바꾸는것 


```javascript
import React, { useReducer, useContext } from "react";

const ProfileDispatch = React.createContext(null);

//내가 하고싶은것
// 자식요소에서 값을 읽고,변경하고 상태를 바꾸는것.

function SomeComponent() {
  let [state, dispatch] = useContext(ProfileDispatch);
  return (
    <div>
      <h1>{state.name}</h1>
      <h3>{state.age}</h3>
      <input
        type="text"
        onChange={(e) => {
          dispatch({ type: "setName", name: e.target.value });
        }}
      ></input>
    </div>
  );
}
const INIT_STATE = { name: "영훈", age: 29 };
function App() {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  return (
    <div className="App">
      <ProfileDispatch.Provider value={[state, dispatch]}>
        <SomeComponent></SomeComponent>
      </ProfileDispatch.Provider>
    </div>
  );
}
function reducer(state, action) {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.name };
    case "setAge":
      return { ...state, age: action.age };
    default: {
      return { ...state };
    }
  }
}
export default App;

```
