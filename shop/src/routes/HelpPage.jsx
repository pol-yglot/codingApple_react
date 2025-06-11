// src/routes/HelpPage.jsx

import { Container, Accordion, Button } from 'react-bootstrap';

function HelpPage() {
  return (
    <Container className="mt-5">
      <h2 className="mb-4">고객센터</h2>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>배송은 얼마나 걸리나요?</Accordion.Header>
          <Accordion.Body>
            결제 완료 후 2~3일 이내에 발송됩니다. 지역에 따라 배송일이 달라질 수 있습니다.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>교환/반품은 어떻게 하나요?</Accordion.Header>
          <Accordion.Body>
            상품 수령일로부터 7일 이내에 고객센터로 문의해주시면 안내 도와드립니다.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>사이즈 교환은 가능한가요?</Accordion.Header>
          <Accordion.Body>
            가능하지만, 왕복 배송비가 발생할 수 있으며 재고 상황에 따라 달라집니다.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div className="mt-5">
        <h5>운영시간</h5>
        <p>평일 09:00 ~ 18:00 (점심시간 12:00 ~ 13:00)</p>

        <h5>문의 방법</h5>
        <p>📞 전화: 1544-0000</p>
        <p>📧 이메일: help@seonyoungshoes.com</p>

        <Button variant="primary" className="mt-3">1:1 문의하기</Button>
      </div>
    </Container>
  );
}

export default HelpPage;
