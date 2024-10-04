import { useState } from "react";
import { Modal, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../assets/CSS/AddLawyer.css"; // Ensure the CSS file path is correct

const AuthModal = ({ isOpen, onClose }) => {
  const [view, setView] = useState('login'); // 'login', 'registration', 'forgotPassword'

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    fullName: "",
    phone: "",
    address: "",
    description: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (view === 'login') {
      if (!credentials.email || !credentials.password) {
        alert('Please fill in all fields');
        return;
      }

      try {
        const response = await fetch(`http://localhost:8085/lms/api/loginuser/{email=" "}/{pass=" "}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        });

        if (!response.ok) {
          throw new Error('Login failed');
        }

        const result = await response.json();
        console.log(result);
        // handle success (e.g., redirect or update state)
      } catch (error) {
        console.error(error);
        // handle error (e.g., show an error message to the user)
      }
    } else if (view === 'forgotPassword') {
      try {
        const response = await fetch(`http://localhost:8085/lms/api/user/{email=" "}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: credentials.email }),
        });

        if (response.ok) {
          alert('Password reset email sent successfully!');
        } else {
          alert('Something went wrong. Please try again.');
        }
      } catch (error) {
        console.error(error);
        // handle error (e.g., show an error message to the user)
      }
    } else if (view === 'registration') {
      try {
        const response = await fetch(`http://localhost:5000/api/lawyers`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        });

        if (!response.ok) {
          throw new Error('Registration failed');
        }

        const result = await response.json();
        console.log(result);
        // Handle success (e.g., show success message or redirect)
      } catch (error) {
        console.error(error);
        // Handle error (e.g., show an error message to the user)
      }
    }
  };

  const renderForm = () => {
    if (view === 'login') {
      return (
        <>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleInput}
              placeholder="Enter your email"
              required
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleInput}
              placeholder="Enter your password"
              required
            />
          </Form.Group>
          <div className="form-options">
            <Link to="#" onClick={() => setView('forgotPassword')}>Forgot Password?</Link>
            <Link to="#" onClick={() => setView('registration')}>Don't have an account? Sign Up</Link>
          </div>
        </>
      );
    } else if (view === 'forgotPassword') {
      return (
        <>
          <Form.Group controlId="email">
            <Form.Label>Enter your email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleInput}
              placeholder="Enter your registered email"
              required
            />
          </Form.Group>
          <div className="form-options">
            <Link to="#" onClick={() => setView('login')}>Back to Login</Link>
          </div>
        </>
      );
    } else if (view === 'registration') {
      return (
        <>
          <Form.Group controlId="fullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="fullName"
              value={credentials.fullName}
              onChange={handleInput}
              placeholder="Enter your full name"
              required
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleInput}
              placeholder="Enter your email"
              required
            />
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              value={credentials.phone}
              onChange={handleInput}
              placeholder="Enter your phone number"
              required
            />
          </Form.Group>
          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={credentials.address}
              onChange={handleInput}
              placeholder="Enter your address"
              required
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={credentials.description}
              onChange={handleInput}
              placeholder="Description"
              rows={3}
            />
          </Form.Group>
          <div className="form-options">
            <Link to="#" onClick={() => setView('login')}>Already have an account? Login</Link>
          </div>
        </>
      );
    }
  };

  return (
    <Modal show={isOpen} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {view === 'login' && 'Login'}
          {view === 'forgotPassword' && 'Forgot Password'}
          {view === 'registration' && 'Registration'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {renderForm()}
          <Button type="submit" className="btn-submit">
            {view === 'login' && 'Login'}
            {view === 'forgotPassword' && 'Reset Password'}
            {view === 'registration' && 'Sign Up'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AuthModal;
