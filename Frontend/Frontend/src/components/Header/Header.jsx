import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-overlay">
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} md={10} lg={8} className="text-center">
                            <h1 className="header-title">LMS</h1>
                            <p className="header-subtitle">Lawyer Management System</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </header>
    );
};

export default Header;
