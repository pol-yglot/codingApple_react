/* eslint-disable */ 
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 메인 컴포넌트 
function App() {
  
  // 내부 변수 선언 
  let [title,a] = useState('남자 코트 추천');
  let titles = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [글제목, b] = titles; // 배열 구조 분해 할당
  let [like, setLike] = useState(0);
  let [modal, setModal] = useState(false);

  // 내부 함수 선언 
  function likeFunc() {
    setLike(like + 1);
  }

  function changeTitle() {
    let newTitles = [...글제목]; // 기존 배열 복사
    newTitles[0] = '여자 코트 추천'; // 첫 번째 요소 변경
    b(newTitles); // 상태 업데이트
  }

  function arrangeTitles(){
    let newTitles = [...글제목]; // 기존 배열 복사
    newTitles.sort(); // 배열 정렬
    b(newTitles); // 상태 업데이트
  }

  // JSX 반환 → 보여지는 화면 
  return (
    <div className="App">

      <div className="black-nav">
        <h4 style={{color: 'white'}}> ReactBlog </h4>
      </div>

      <button onClick={ arrangeTitles }>정렬</button>

      <div className='list'>
        <h4 onClick={() => { modal == true ? setModal(false) : setModal(true) }}>{ 글제목[0] } <span onClick={ likeFunc }>💕</span> {like} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={() => { setModal(true) }}>{ 글제목[1] } <span onClick={ likeFunc }>💕</span> {like} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={() => { setModal(true) }}>{ 글제목[2] } <span onClick={ likeFunc }>💕</span> {like} </h4>
        <p>2월 17일 발행</p>
      </div>
      

      { modal == true ? <Modal /> : null }

    </div>
  )
}

// 컴포넌트 분리 
function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  )
}

export default App
 