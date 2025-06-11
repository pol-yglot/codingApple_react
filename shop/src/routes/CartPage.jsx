// src/routes/CartPage.jsx

import { useState } from 'react';
import { Container, Table, Button, Form } from 'react-bootstrap';

function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 0,
      title: 'White and Black',
      price: 120000,
      quantity: 1,
    },
    {
      id: 1,
      title: 'Red Knit',
      price: 110000,
      quantity: 2,
    },
  ]);

  const handleQuantityChange = (id, amount) => {
    const updatedItems = cartItems.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + amount) }
        : item
    );
    setCartItems(updatedItems);
  };

  const handleRemove = id => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Container className="mt-5">
      <h2>🛒 장바구니</h2>
      {cartItems.length === 0 ? (
        <p className="mt-4">장바구니가 비어 있습니다.</p>
      ) : (
        <>
          <Table striped bordered hover className="mt-4">
            <thead>
              <tr>
                <th>상품명</th>
                <th>가격</th>
                <th>수량</th>
                <th>합계</th>
                <th>작업</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.price.toLocaleString()} 원</td>
                  <td>
                    <Button
                      variant="light"
                      size="sm"
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      -
                    </Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button
                      variant="light"
                      size="sm"
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      +
                    </Button>
                  </td>
                  <td>
                    {(item.price * item.quantity).toLocaleString()} 원
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleRemove(item.id)}
                    >
                      삭제
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="text-end">
            <h4>총 결제 금액: {totalPrice.toLocaleString()} 원</h4>
            <Button variant="primary" className="mt-3">
              주문하기
            </Button>
          </div>
        </>
      )}
    </Container>
  );
}

export default CartPage;
