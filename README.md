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
