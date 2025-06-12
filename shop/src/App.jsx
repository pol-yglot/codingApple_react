import { useState } from 'react';
import { Navbar, Container, Nav, Card, ListGroup } from 'react-bootstrap';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import './App.css';
import data from './data.js';
import styled from 'styled-components';


import DetailPage from './routes/DetailPage.jsx';
import BestPage from './routes/BestPage.jsx';
import NewPage from './routes/NewPage.jsx';
import AboutPage from './routes/AboutPage.jsx';
import NotFound from './routes/NotFound.jsx';
import Footer from './routes/Footer.jsx';
import NavBar from './routes/Navbar.jsx';
import HelpPage from './routes/HelpPage.jsx';
import CartPage from './routes/CartPage.jsx';
import LoginPage from './routes/LoginPage.jsx';
import SignupPage from './routes/SignupPage.jsx';
import ForgotPassword from './routes/ForgotPassword.jsx';


function App() {
  const [shoes] = useState(data);
  {/* 페이지 이동을 도와주는 useNavigate 훅 */ }
  let navigate = useNavigate();

  return (
    <div className="App">
      { /* 네비게이션 바 */ }
      <NavBar />

      { /* 라우팅 경로 */}
      <Routes>
        {/* 홈 */}
        <Route path="/" element={<HomePage shoes={shoes} />} />
        {/* 상세페이지 (상품 ID 활용) */}
        <Route path="/detail/:id" element={<DetailPage shoes={shoes} />} />
        {/* 베스트 상품 */}
        <Route path="/best" element={<BestPage shoes={shoes} />} />
        {/* 신상품 */}
        <Route path="/new" element={<NewPage shoes={shoes} />} />
        {/* 회사소개 */}
        <Route path="/about" element={<AboutPage />} />
        {/* 고객센터 */}
        <Route path="/help" element={<HelpPage />} />
        {/* 404 Not Found */}
        <Route path="*" element={<NotFound />} />
        {/* 장바구니 */}
        <Route path="/cart" element={<CartPage />} />
        {/* 로그인 페이지 */}
        <Route path="/login" element={<LoginPage />} />
        {/* 회원가입 페이지 */}
        <Route path="/signup" element={<SignupPage />} />
        {/* 비밀번호 재설정 페이지 */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버 정보</div>} />
          <Route path="location" element={<div>위치 정보</div>} />
        </Route> */}
      </Routes>

      {/* 푸터 */}
      <Footer />

    </div>
  );
}

function HomePage({ shoes }) {
  return (
    <>
      <div className="main-bg"></div>

      <div className="container">
        <h2 className="my-4">🔥 베스트 신발 모음</h2>
        <div className="row">
          {shoes.map((shoe, index) => (
            <div className="col-md-4" key={index}>
              <CardComponent
                index={index}
                id={shoe.id}
                title={shoe.title}
                content={shoe.content}
                price={shoe.price.toLocaleString()}
              />

            </div>
          ))}
        </div>
      </div>

    </>
  );
}

function CardComponent({ title, content, price, id, index }) {
  const navigate = useNavigate();

  return (
    <Card className="position-relative" style={{ width: '18rem', cursor: 'pointer' }}>
       <span className='badge bg-danger position-absolute top-0 end-0 m-2'
       style={{ zIndex: 1 }}> 🏆 { index +1 } 위 </span>
      <Card.Img
        variant="top"
        src={`https://codingapple1.github.io/shop/shoes${id + 1}.jpg`}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{price} 원</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">좋아요</Card.Link>
        <Card.Link href="#">장바구니</Card.Link>
        <Card.Link onClick={() => navigate(`/detail/${id}`)}>상세보기</Card.Link>
      </Card.Body>
    </Card>
  );
}


export default App;
