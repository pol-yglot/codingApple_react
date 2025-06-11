// src/routes/NewPage.jsx

import { Card, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function NewPage({ shoes }) {
  const navigate = useNavigate();

  // 신상품 예시: 배열 끝에서 3개 가져오기
  const newShoes = shoes.slice(-3);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">🆕 신상품</h2>
      <div className="row">
        {newShoes.map((shoe, i) => {
          // 실제 index 찾기 (전체 shoes에서)
          const index = shoes.indexOf(shoe);
          return (
            <div className="col-md-4" key={index}>
              <CardComponent
                index={index}
                title={shoe.title}
                content={shoe.content}
                price={shoe.price}
                onClick={() => navigate(`/detail/${index}`)}
              />
            </div>
          );
        })}
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

export default NewPage;
