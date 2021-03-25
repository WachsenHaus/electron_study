import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import TestHeader from './testHeader';
import Wrapper from './wrapper';
import styled, {ThemeProvider , css, TitleType } from "styled-components";
import {MyGlobalStyle, theme} from "./css/my-theme";
import { Header } from './header/header';


//타입을 설정하는것, type과 동이랗ㄴ 기능을 한다.
interface TitleProps{
  readonly isActive: boolean;
}


//타입을 선언하는것.
type HeaderType = {
  customColor : string,
}


//타입스크립트에서 스타일 컴포넌트를 사용할때는 이렇게 props가 들어가는 타입을 꼭 선언해줘야한다.
const Title = styled.h1<TitleType>`
color: ${props => props.isActive ? props.theme.colors.main : props.theme.colors.secondary}`;




// 기존의 헤더 속성에 추가로된 속성을 넣을 수 있다. 
const NewHeader = styled(Header)<HeaderType>`
color: ${props => props.customColor};
`

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background : ${props => props.color || 'black'};
  border-radius : 50%;
  ${css`width: 10rem; height: 10rem`}
`;



// styled.d.ts에 선언한 기본 테미이다. 기본적인 테마별로 컬러를 정의할 수 있다.
const MyComponent = styled.div`
color:${props => props.theme.colors.main};
`;





function App() {
  return (
    <>
    <MyGlobalStyle></MyGlobalStyle>
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header>헤더</Header>
        <NewHeader customColor={"blue"}>뉴헤더</NewHeader>
        <Title isActive={true}>최영훈입니다</Title>
        <TestHeader name={"타입스크립트 리액트를 연습합니다!"} color={"blue"}>테스트입니다</TestHeader>
        <Circle color={"red"}></Circle>
        <MyComponent>asdasd</MyComponent>
      </Wrapper>
    </ThemeProvider>
    </>
    

  );
}

export default App;
