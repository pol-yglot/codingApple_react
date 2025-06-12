// src/routes/ForgotPassword.jsx

import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 실제 비밀번호 재설정 요청 로직은 백엔드와 연동 필요
    setSubmitted(true);
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '500px' }}>
      <h3 className="mb-4">🔐 비밀번호 재설정</h3>
      {submitted ? (
        <Alert variant="success">
          이메일로 비밀번호 재설정 링크가 전송되었습니다.
        </Alert>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>이메일 주소</Form.Label>
            <Form.Control
              type="email"
              placeholder="example@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            비밀번호 재설정 링크 받기
          </Button>
        </Form>
      )}
    </Container>
  );
}

export default ForgotPassword;
