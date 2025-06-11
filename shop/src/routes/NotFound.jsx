// routes/NotFound.jsx

import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="container text-center py-5">
      <h1 className="display-4">😢 404</h1>
      <p className="lead">페이지를 찾을 수 없습니다.</p>
      <Button variant="dark" onClick={() => navigate(-1)}>
        이전 페이지로
      </Button>
    </div>
  );
}

export default NotFound;
