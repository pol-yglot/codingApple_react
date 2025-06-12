// routes/DetailPage.jsx

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, ListGroup } from 'react-bootstrap';
import React from 'react';
import axios from 'axios';

// 컴포넌트에 갈고리 달기 
class Detail extends React.Component {
  componentDidMount() {
    // 컴포넌트가 마운트된 후에 실행되는 코드
    console.log('Detail 컴포넌트가 마운트되었습니다.');
  }
  componentDidUpdate(prevProps) {
    // 컴포넌트가 업데이트된 후에 실행되는 코드
    console.log('Detail 컴포넌트가 업데이트되었습니다.');
  }
  componentWillUnmount() {
    // 컴포넌트가 언마운트되기 전에 실행되는 코드
    console.log('Detail 컴포넌트가 언마운트됩니다.');
  }
}

function DetailPage({ shoes }) {

  { /* 변수 선언 */ }
  let [count, setCount] = useState(0);
  const [showAlert, setShowAlert] = useState(true);
  const { id } = useParams();
  const shoe = shoes[id];

  { /* html 로드 시 실행될 코드 */ }
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 2000);
    return () => clearTimeout(timer);
  })

  { /* 상품 정보 없을 때 */ }
  if (!shoe) {
    return <div className="container"><h4>존재하지 않는 상품입니다.</h4></div>;
  }

  { /* 상품 정보 있을 때 */ }
  return (

    <div className="container my-5 d-flex justify-content-center">
      {/* 상세 페이지 레이아웃 */}

      <div className="w-100" style={{ maxWidth: '720px' }}>

        {showAlert && (
          <div className="alert alert-warning text-center">
            ⏳ 2초 이내 구매시 할인
          </div>
        )}

        {count > 0 && (
          <div className="alert alert-success text-center">
            {count}개 상품이 장바구니에 담겼습니다!
          </div>
        )}

        {isNaN(count) && (
          <div className="alert alert-danger text-center">
            <strong>수량은 숫자만 입력해주세요!</strong>
          </div>
        )}

        { /* 상품 이미지 */}
        <img
          src={`https://codingapple1.github.io/shop/shoes${parseInt(id) + 1}.jpg`}
          alt={shoe.title}
          className="img-fluid mb-4 d-block mx-auto"
        />

        { /* 상품 상세 정보 섹션 */}
        <section className="text-center">
          <h2 className="text-center mb-4">{shoe.title}</h2>
          <hr />

          <p><strong>원산지:</strong> {shoe.content}</p>
          <p><strong>가격:</strong> KRW {shoe.price?.toLocaleString()} 원</p>
          { /* <p><strong>재고:</strong> {shoe.stock > 0 ? shoe.stock : '품절'}</p>
          <p><strong>판매자:</strong> {shoe.seller}</p>
          <p><strong>평점:</strong> {shoe.rating} ⭐ ({shoe.reviews?.length || 0}개 리뷰)</p> */ }
        </section>

        {/* 버튼 */}
        <div className="text-center mt-4">
          <label className="form-label">수량 선택:</label>
          <input type='text' id='count' className="form-control w-25 mx-auto mb-3"
            value={count} onChange={(e) => setCount(e.target.value)} />
          <button className="btn btn-primary">장바구니에 담기</button>
          <button className="btn btn-secondary ms-2">구매하기</button>
        </div>


      </div>
    </div>
  );
}

export default DetailPage;
