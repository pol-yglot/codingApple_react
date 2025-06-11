// src/routes/AboutPage.jsx

import { Card, Container, Row, Col } from 'react-bootstrap';

function AboutPage() {
  return (
    <Container className="my-5">
      <h2 className="mb-4">🏢 선영's 신발가게 소개</h2>
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>회사 개요</Card.Title>
              <Card.Text>
                선영's 신발가게는 최신 유행과 편안함을 겸비한 신발을 제공하는 브랜드입니다.  
                고객 만족을 최우선으로 하며, 합리적인 가격과 빠른 배송을 자랑합니다.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>비전</Card.Title>
              <Card.Text>
                전 세계 어디에서나 사랑받는 신발 브랜드가 되는 것이 우리의 목표입니다.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>연락처</Card.Title>
              <Card.Text>
                📞 고객센터: 1544-1234  
                <br />
                ✉️ 이메일: contact@syeong-shoes.com  
                <br />
                🕒 운영시간: 평일 10:00 ~ 18:00
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutPage;
