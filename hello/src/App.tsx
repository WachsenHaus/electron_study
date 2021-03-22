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
