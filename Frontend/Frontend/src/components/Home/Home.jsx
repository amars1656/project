import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import lawyer1 from "../../assets/Images/Lawyer1.jpg";
import lawyer2 from "../../assets/Images/Lawyer2.jpg";
import lawyer3 from "../../assets/Images/Lawyer3.jpg";
import lawyer4 from "../../assets/Images/Lawyer4.jpg";
import "./Home.css";

const lawyers = [
  {
    name: "Riya Kumari",
    specialization: "Cheque Bounce, Civil",
    image: lawyer1,
  },
  {
    name: "Roshni Singh",
    specialization: "Cheque Bounce, Civil, Property, Recovery, Wills / Trusts",
    image: lawyer2,
  },
  {
    name: "Amit Singh",
    specialization: "Cheque Bounce, Recovery, Business lawyer",
    image: lawyer3,
  },
  {
    name: "Sanjeev Kumar",
    specialization:
      "Business lawyer, Civil, Criminal, Domestic Violence, Property, Wills / Trusts",
    image: lawyer4,
  },
];

const Home = () => {
  return (
    <div className="lawyers-list-container">
      <Container>
        <h2 className="section-title">Meet Lawyers/Advocates</h2>
        <Row className="lawyers-grid">
          {lawyers.map((lawyer, index) => (
            <Col xs={12} sm={6} md={4} lg={3} key={index} className="d-flex justify-content-center">
              <div className="lawyer-card">
                <img src={lawyer.image} alt={lawyer.name} className="lawyer-image" />
                <h3 className="lawyer-name">{lawyer.name}</h3>
                <p className="lawyer-specialization">{lawyer.specialization}</p>
              </div>
            </Col>
          ))}
        </Row>
        <div className="d-flex justify-content-center">
          <Button className="view-all-btn">VIEW ALL</Button>
        </div>
      </Container>
    </div>
  );
};

export default Home;
