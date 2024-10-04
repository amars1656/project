import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import "../assets/CSS/AddLawyer.css";  // Ensure the path is correct

const AddLawyer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    city: "",
    language: "",
    bar_Association: "",
    experience: "",
    spec: "",
    userName: "",
    pass: "",
    state: "",
    officeAddress: "",
    practiceArea: "",
    court: "",
    description: "",
  });

  const [profilePic, setProfilePic] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setProfilePic(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }
    if (profilePic) {
      data.append("profilePic", profilePic);
    }

    axios.post(`http://localhost:8085/lms/api/lawyer`, data)
      .then(response => {
        console.log("Lawyer registered successfully:", response.data);
        setFormData({
          name: "",
          email: "",
          phoneNo: "",
          city: "",
          language: "",
          bar_Association: "",
          experience: "",
          spec: "",
          userName: "",
          pass: "",
          state: "",
          officeAddress: "",
          practiceArea: "",
          court: "",
          description: "",
        });
        setProfilePic(null);
      })
      .catch(error => {
        console.error("There was an error registering the lawyer!", error);
      });
  };

  return (
    <Container className="add-lawyer-container">
      <h2 className="form-title">Add Lawyer and Advocate</h2>
      <div className="form-section">
        <Row>
          <Col md={6}>
            <h3 className="section-header">Personal Info</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="fullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Lawyer/Advocate Full Name"
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group controlId="mobile">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                />
              </Form.Group>
              <Form.Group controlId="officeAddress">
                <Form.Label>Office Address</Form.Label>
                <Form.Control
                  type="text"
                  name="officeAddress"
                  value={formData.officeAddress}
                  onChange={handleChange}
                  placeholder="Office Address"
                />
              </Form.Group>
              <Form.Group controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter city"
                />
              </Form.Group>
              <Form.Group controlId="state">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Enter State"
                />
              </Form.Group>
              <Form.Group controlId="languages">
                <Form.Label>Languages known</Form.Label>
                <Form.Control
                  type="text"
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  placeholder="Languages should be separated by comma; Ex: English, Hindi"
                />
              </Form.Group>
              {/* <Form.Group controlId="profilePic">
                <Form.Label>Profile Pic</Form.Label>
                <Form.Control
                  type="file"
                  name="profilePic"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                <Form.Text className="text-muted file-note">
                  Only jpg / jpeg / png / gif format allowed
                </Form.Text>
              </Form.Group> */}
            </Form>
          </Col>
          <Col md={6}>
            <h3 className="section-header">Professional Info</h3>
            <Form>
              <Form.Group controlId="experience">
                <Form.Label>Experience (in years)</Form.Label>
                <Form.Control
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="Enter Experience"
                />
              </Form.Group>
              <Form.Group controlId="practiceAreas">
                <Form.Label>Practice Areas</Form.Label>
                <Form.Control
                  type="text"
                  name="practiceArea"
                  value={formData.practiceArea}
                  onChange={handleChange}
                  placeholder="Select Practice Areas"
                />
              </Form.Group>
              <Form.Group controlId="courts">
                <Form.Label>Courts</Form.Label>
                <Form.Control
                  type="text"
                  name="court"
                  value={formData.court}
                  onChange={handleChange}
                  placeholder="Courts should be separated by comma; Ex: High Court, Supreme Court"
                />
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Description (if Any)</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Description"
                />
              </Form.Group>
              <Button type="submit" className="submit-btn">Submit</Button>
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default AddLawyer;
