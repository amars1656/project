import React from 'react';
import './Footer.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import { FaFacebookF, FaYoutube, FaLinkedinIn, FaGooglePlusG, FaTwitter, FaRss } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          <Col md={4} className="footer-section about">
            <h3>LMS</h3>
            <p>
            Welcome to LSM, your go-to platform for streamlining the management of legal professionals and clients. Our system is designed to make administrative tasks easier, allowing law firms, legal departments, and independent lawyers to focus on delivering top-notch legal services.
            At LSM, we offer a user-friendly and secure platform that efficiently manages client and lawyer information, case assignments, and communication. Whether you're managing a large firm or working independently, our solution is crafted to meet your needs, helping you stay organized and save tim
            </p>
            <Button className="btn">MORE INFO...</Button>
          </Col>
          <Col md={4} className="footer-section links">
            <h3>About Us</h3>
            <ul>
              <li><a href="../AboutUs/AboutUs.jsx">About Us</a></li>
              <li><a href="#">Listed Lawyers / Advocates</a></li>
              <li><a href="#">Add Lawyers / Advocates</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Admin Login</a></li>
            </ul>
          </Col>
        </Row>
        <div className="footer-bottom">
          <p>&copy; 2024 LMS. All Rights Reserved</p>
          {/* <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaGooglePlusG /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaRss /></a>
          </div> */}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
