import React from "react";
import "./AboutUs.css";
import aboutImage from "../../assets/Images/Aboutus.jpeg"; // Ensure the image path is correct
import { Container, Row, Col, Button } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container fluid className="about-us-container">
      <Row className="align-items-center">
        <Col md={6} className="d-flex justify-content-center">
          <img src={aboutImage} alt="About Us" className="img-fluid" />
        </Col>
        <Col md={6}>
          <div className="about-us-content">
            <h2>About Us</h2>
            <p>
            Welcome to LSM, your go-to platform for streamlining the management of legal professionals and clients. Our system is designed to make administrative tasks easier, allowing law firms, legal departments, and independent lawyers to focus on delivering top-notch legal services.
            At LSM, we offer a user-friendly and secure platform that efficiently manages client and lawyer information, case assignments, and communication. Whether you're managing a large firm or working independently, our solution is crafted to meet your needs, helping you stay organized and save time.
            </p>
            <Button variant="dark" className="more-info-btn">MORE INFO...</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
