import React from 'react';
import { Col, Container, Row, Navbar, Nav } from 'react-bootstrap';
import styles from './topbannercomponent.module.css';

const TopBanner = () => {

    return (
        <Container fluid>
            <Row className={styles.rowOrange}>
                <Col xs={12} md={6} className={styles.titleCol}>
                    <b><a className={styles.a} href="/">HEILAS CONCERTS*</a></b>
                </Col>
                <Col xs={0} md={6} className={styles.titleCol} />
            </Row>
            <Row className={styles.rowGrey}>
                <Col xs={0} md={6} />
                <Col xs={12} md={6} className={styles.menuCol}>
                    <Navbar variant="light" expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className="content-right" id="basic-navbar-nav">
                            <Nav variant="light">
                                <Nav.Link href="/">Concerts</Nav.Link>
                                <Nav.Link href="/FAQ">FAQ</Nav.Link>
                                <Nav.Link href="/about">About Heilas</Nav.Link>
                                <Nav.Link href="/login">Login</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    )
}

export default TopBanner;