import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import './ListedLawyers.css';

const lawyers = [
    {
        name: 'Riya Kumari',
        title: 'Cheque Bounce, Civil',
        image: require('../../assets/Images/Lawyer1.jpg'),
    },
    {
        name: 'Roshni Singh',
        title: 'Cheque Bounce, Civil, Property, Recovery, Wills/Trusts',
        image: require('../../assets/Images/Lawyer2.jpg'),
    },
    {
        name: 'Amit Singh',
        title: 'Cheque Bounce, Recovery, Business Lawyer',
        image: require('../../assets/Images/Lawyer3.jpg'),
    },
    {
        name: 'Sanjeev Kumar',
        title: 'Business Lawyer, Civil, Criminal, Domestic Violence, Property, Wills/Trusts',
        image: require('../../assets/Images/Lawyer4.jpg'),
    },
];

const ListedLawyers = () => {
    return (
        <div className="lawyers-list-container">
            <h2>Listed Lawyers / Advocates</h2>
            <div className="breadcrumbs">Home &gt; Pages &gt; Listed Lawyers / Advocates</div>
            <Container>
                <Row className="justify-content-center">
                    {lawyers.map((lawyer, index) => (
                        <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4" key={index}>
                            <div className="lawyer-card">
                                <img src={lawyer.image} alt={lawyer.name} className="lawyer-image" />
                                <h3>{lawyer.name}</h3>
                                <p className="lawyer-title">{lawyer.title}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
                <div className="pagination">
                    <Button variant="success">Previous</Button>
                    <Button variant="success">1</Button>
                    <Button variant="success">Next</Button>
                </div>
            </Container>
        </div>
    );
};

export default ListedLawyers;
