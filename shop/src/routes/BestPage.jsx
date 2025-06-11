// src/routes/BestPage.jsx

import { Card, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function BestPage({ shoes }) {
  const navigate = useNavigate();

  // 상위 3개만 자르기 (혹은 인기순 정렬 기준으로 필터해도 가능)
  const bestShoes = shoes.slice(0, 3);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">🔥 베스트 상품 모음</h2>
      <div className="row">
        {bestShoes.map((shoe, index) => (
          <div className="col-md-4" key={index}>
            <CardComponent
              index={index}
              title={shoe.title}
              content={shoe.content}
              price={shoe.price}
              onClick={() => navigate(`/detail/${index}`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function CardComponent({ title, content, price, index, onClick }) {
  return (
    <Card style={{ width: '18rem', cursor: 'pointer' }} onClick={onClick}>
      <Card.Img
        variant="top"
        src={`https://codingapple1.github.io/shop/shoes${index + 1}.jpg`}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{price.toLocaleString()} 원</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">좋아요</Card.Link>
        <Card.Link href="#">장바구니</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default BestPage;
