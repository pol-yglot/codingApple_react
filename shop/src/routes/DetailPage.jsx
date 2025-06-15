import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Tab, Col, Row, Nav, Button } from 'react-bootstrap';
import React from 'react';

function DetailPage({ shoes }) {
  const [count, setCount] = useState(1);
  const [showAlert, setShowAlert] = useState(true);
  const { id } = useParams();
  const idNum = parseInt(id);
  const shoe = shoes[idNum];

  const imageList = [
    `https://codingapple1.github.io/shop/shoes${idNum + 1}.jpg`,
    `https://codingapple1.github.io/shop/shoes${idNum + 1}.jpg`
  ];
  const [activeTab, setActiveTab] = useState('img1');

  useEffect(() => {
    const timer = setTimeout(() => setShowAlert(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!shoe) {
    return <div className="container"><h4>존재하지 않는 상품입니다.</h4></div>;
  }

  

  return (
    <div className="container my-5">
      {showAlert && (
        <div className="alert alert-warning text-center">
          ⏳ 2초 이내 구매 시 할인 혜택!
        </div>
      )}

      <Row>
        {/* 이미지 영역 */}
        <Col md={6} className="text-center mb-4">
          <img
            src={activeTab === 'img1' ? imageList[0] : imageList[1]}
            alt={shoe.title}
            className="img-fluid rounded shadow-sm mb-3"
            style={{ maxHeight: '400px', objectFit: 'contain', backgroundColor: '#f8f9fa' }}
          />
          <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
            <Nav variant="pills" className="justify-content-center">
              {imageList.map((img, idx) => (
                <Nav.Item key={idx}>
                  <Nav.Link eventKey={`img${idx + 1}`}>
                    <img
                      src={img}
                      alt={`img${idx + 1}`}
                      style={{
                        width: 72,
                        height: 72,
                        objectFit: 'cover',
                        borderRadius: '8px',
                        border: activeTab === `img${idx + 1}` ? '2px solid #0d6efd' : '1px solid #dee2e6',
                        backgroundColor: '#f8f9fa',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease-in-out'
                      }}
                    />
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Tab.Container>
        </Col>

        {/* 상품 정보 영역 */}
        <Col md={6}>
          <h2 className="fw-bold mb-3">{shoe.title}</h2>
          <hr />
          <p><strong>원산지:</strong> {shoe.content}</p>
          <p><strong>가격:</strong> <span className="text-primary">KRW {shoe.price?.toLocaleString()} 원</span></p>

          {/* 수량 입력 */}
          <div className="input-group w-75 my-4">
            <span className="input-group-text fw-semibold">수량</span>
            <input
              type="number"
              min="1"
              max="99"
              className="form-control text-center"
              value={count}
              onChange={(e) => setCount(e.target.value)}
              placeholder="1개 이상 입력"
            />
          </div>

          {/* 버튼 */}
          <div className="d-flex flex-column flex-md-row gap-3">
            <Button
              variant="outline-primary"
              className="px-4 py-2 fw-semibold"
              onClick={() => alert(`${count}개 장바구니에 담김`)}
            >
              🛒 장바구니 담기
            </Button>
            <Button
              variant="primary"
              className="px-4 py-2 fw-semibold"
              onClick={() => alert(`${count}개 바로 구매 진행`)}
            >
              🛍️ 구매하기
            </Button>
          </div>
        </Col>
      </Row>

      {/* 하단 탭 정보 */}
      <Tab.Container defaultActiveKey="detail">
        <Nav variant="tabs" className="mt-5 mb-3">
          <Nav.Item>
            <Nav.Link eventKey="detail">상세설명</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="review">리뷰</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="delivery">배송안내</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="detail">
            <img src="/images/detail/shoes_detail_01.jpg" className="img-fluid" alt="상세설명" />
            <p className="mt-3">이 신발은 통기성과 경량성을 동시에 만족시켜주는...</p>
          </Tab.Pane>
          <Tab.Pane eventKey="review">
            <p>⭐⭐⭐⭐⭐ 리뷰 200개 이상 등록!</p>
          </Tab.Pane>
          <Tab.Pane eventKey="delivery">
            <p>📦 배송은 1~3일 소요되며, 교환/환불은 7일 이내 가능합니다.</p>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
}

export default DetailPage;
