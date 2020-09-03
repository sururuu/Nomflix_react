import React from 'react';
import Router from "Components/Router";
import Header from "Components/Header";
// 위줄의 형태는 기본적으로 해당 폴더로 가서 index 파일을 보게 해줌.
// Header 안에 index.js 를 굳이 만드는 이유는 Components/Header/Header 로 쓰지 않기 위해. 
function App() {
  return (
    <>
      <Header />
      <Router />
    </>
  );
}

export default App;
