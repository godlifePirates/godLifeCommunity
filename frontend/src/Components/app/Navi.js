
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

function Navi() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">홈</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav justify-content-between">
                    <Nav className="me-auto">
                        <NavDropdown title="구독채널" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                1
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                2
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                3
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                4
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="공식채널" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                1
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                2
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                3
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                4
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">채널검색</Nav.Link>

                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href="#link">채널검색</Nav.Link>
                        { 1==1 && <Nav.Link href="/member/Login">로그인</Nav.Link>
                        }
                        { true && <NavDropdown title="내정보(아이콘)" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                마이페이지
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                채널만들기
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                프로필관리
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                구독관리
                            </NavDropdown.Item>
                        </NavDropdown>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navi;