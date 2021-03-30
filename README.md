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
