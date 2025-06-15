import { useState } from 'react';
import { Navbar, Container, Nav, Card, ListGroup, Button, Spinner } from 'react-bootstrap';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import './App.css';
import data from './data.js';
import styled from 'styled-components';
import axios from 'axios';

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
  const [shoes, setShoes] = useState(data);
  const navigate = useNavigate();

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage shoes={shoes} setShoes={setShoes} />} />
        <Route path="/detail/:id" element={<DetailPage shoes={shoes} />} />
        <Route path="/best" element={<BestPage shoes={shoes} />} />
        <Route path="/new" element={<NewPage shoes={shoes} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>

      <Footer />
    </div>
  );
}

function HomePage({ shoes, setShoes }) {
  const [clickCount, setClickCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    const nextPage = clickCount + 2; // data2.json부터 시작
    const url = `https://codingapple1.github.io/shop/data${nextPage}.json`;

    if (nextPage > 4) {
      alert('더 이상 상품이 없습니다.');
      setIsVisible(false);
      return;
    }

    setIsLoading(true);

    axios.get(url)
      .then((res) => {
        // ✅ id가 없을 경우 자동 부여
        const fixedData = res.data.map((item, i) => ({
          ...item,
          id: shoes.length + i,
        }));
        setShoes((prevShoes) => [...prevShoes, ...fixedData]);
        setClickCount(clickCount + 1);
      })
      .catch(() => {
        alert('더 이상 상품이 없습니다.');
        setIsVisible(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <div className="main-bg"></div>

      <div className="container">
        <h2 className="my-4">🔥 베스트 신발 모음</h2>
        <div className="row mb-4">
          {shoes.map((shoe, index) => (
            <div className="col-md-4 mb-4" key={index}>
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

        {/* 로딩 중이면 스피너 표시 */}
        {isLoading && (
          <div className="text-center my-3">
            <Spinner animation="border" variant="secondary" />
            <div className="mt-2">로딩 중입니다...</div>
          </div>
        )}

        {/* 버튼 조건부 표시 */}
        {!isLoading && isVisible && (
          <Button
            variant="light"
            size="lg"
            className="d-block mx-auto my-5 px-5 py-3 border rounded-pill shadow-sm fw-semibold"
            style={{
              fontSize: '1.2rem',
              backgroundColor: '#f8f9fa',
              borderColor: '#ced4da',
              transition: 'all 0.3s',
            }}
            onClick={handleClick}
          >
            👟 더 많은 신발 보기
          </Button>
        )}
      </div>
    </>
  );
}

function CardComponent({ title, content, price, id, index }) {
  const navigate = useNavigate();

  return (
    <Card className="position-relative" style={{ width: '18rem', cursor: 'pointer' }}>
      <span className='badge bg-danger position-absolute top-0 end-0 m-2' style={{ zIndex: 1 }}>
        🏆 {index + 1} 위
      </span>
      <Card.Img
        variant="top"
        src={`https://codingapple1.github.io/shop/shoes${id + 1}.jpg`}
        style={{
          height: 200,
          objectFit: 'cover',
          backgroundColor: '#f8f9fa'
        }}
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
