// src/routes/LoginPage.jsx

import { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

function LoginPage() {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();

        // 예시용 유효성 검사
        if (formData.username === 'admin' && formData.password === '1234') {
            alert('로그인 성공!');
            // 로그인 후 페이지 이동 등 처리 가능
        } else {
            setError('아이디 또는 비밀번호가 올바르지 않습니다.');
        }
    };

    return (
        <Container style={{ maxWidth: '400px', marginTop: '80px' }}>
            <h3 className="mb-4">로그인</h3>

            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername" className="mb-3">
                    <Form.Label>아이디</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="아이디를 입력하세요"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-4">
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="비밀번호를 입력하세요"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                    로그인
                </Button>
            </Form>

            <div className="mt-3 text-center">
                <p>아직 회원이 아니신가요? <a href="/signup">회원가입</a></p>
                <p><a href="/forgot-password">비밀번호 찾기</a></p>
                <p><a href="/help">고객센터</a></p>
            </div>
            <div className="text-center mt-4">
                <p>로그인 후 더 많은 혜택을 누리세요!</p>
            </div>
        </Container>
    );
}

export default LoginPage;
