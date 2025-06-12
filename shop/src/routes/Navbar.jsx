// src/components/Nav.jsx

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container>
        {/* 상호명 클릭 시 홈으로 */}
        <Navbar.Brand onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          SAPPUN
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            { /* <Nav.Link onClick={() => navigate('/')}>홈</Nav.Link> */}
            <Nav.Link onClick={() => navigate('/best')}>BEST</Nav.Link>
            <Nav.Link onClick={() => navigate('/new')}>NEW</Nav.Link>

            <NavDropdown title="CATEGORY" id="nav-dropdown">
              <NavDropdown.Item onClick={() => navigate('/category/sneakers')}>운동화</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/category/boots')}>부츠</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/category/slippers')}>슬리퍼</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link onClick={() => navigate('/about')}>COMPANY</Nav.Link>
            <Nav.Link onClick={() => navigate('/help')}>HELP</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link onClick={() => navigate('/cart')}>🛒 CART</Nav.Link>
            <Nav.Link onClick={() => navigate('/login')}>👤 LOGIN</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
