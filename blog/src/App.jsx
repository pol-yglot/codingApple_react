/* eslint-disable */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 메인 컴포넌트 
function App() {

  // 내부 변수 선언 
  let titles = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [글제목, b] = titles; // 배열 구조 분해 할당
  let [likes, setLikes] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0); // 현재 선택된 글 제목의 인덱스
  let [입력값, 입력값변경] = useState('');


  // 내부 함수 선언 
  function likeFunc(i) {
    let copy = [...likes];
    copy[i]++;
    setLikes(copy);
  }

  function changeTitle() {
    let newTitles = [...글제목]; // 기존 배열 복사
    newTitles[0] = '여자 코트 추천'; // 첫 번째 요소 변경
    b(newTitles); // 상태 업데이트
  }

  function arrangeTitles() {
    let newTitles = [...글제목]; // 기존 배열 복사
    newTitles.sort(); // 배열 정렬
    b(newTitles); // 상태 업데이트
  }

  // JSX 반환 → 보여지는 화면 
  return (
    <div className="App">

      <div className="black-nav">
        <h4 style={{ color: 'white' }}> ReactBlog </h4>
      </div>

      <div className='category'>
        <button onClick={arrangeTitles}>정렬</button>
      </div>

      {
        /*
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
      */
      }

      {
        /* map 함수로 반복문 사용 */
        글제목.map((a, i) => {
          return (
            <div className='list' key={i}>
              <h4 onClick={() => { setModal(true); setTitle(i); }}>
                {글제목[i]}
                <span onClick={(e) => { e.stopPropagation(); likeFunc(i); }}>💕</span> {likes[i]}
              </h4>
              <p>2월 17일 발행</p>
              <button onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                b(copy);

                let newLikes = [...likes];
                newLikes.splice(i, 1);
                setLikes(newLikes);
              }}>삭제</button>
            </div>
          )
        })
      }


      {
        /* 모달창 표출 삼항 연산자 사용 */
        modal == true ? <Modal title={title} onClick={() => console.log(1)} 글제목={글제목} /> : null
      }

      {/* 모달창 표출 조건부 렌더링 */}
      <input
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
        value={입력값}
      />
      <button onClick={() => {
        if (입력값 === '') {
          alert('글 제목을 입력해주세요.');
          return;
        }
        let newTitles = [...글제목];
        newTitles.push(입력값);
        b(newTitles);

        let newLikes = [...likes];
        newLikes.push(0);
        setLikes(newLikes);

        입력값변경('');
      }}>글 발행</button>

    </div>
  )
}

// 메인 컴포넌트에서 모달 컴포넌트 분리 
function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세 내용</p>
      <button onClick={props.onClick}>글 수정</button>
    </div>
  )
}

export default App
