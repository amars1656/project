import { useState } from "react";
import { Container, Form, Button } from 'react-bootstrap';
import "../assets/CSS/ForgetPassword.css"; // Ensure the CSS file path is correct

export const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleInput = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);

    const response = await fetch(`http://localhost:5000/api/auth/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    // Handle response here
    if (response.ok) {
      // Success - show a success message
      alert('Password reset email sent successfully!');
    } else {
      // Error - show an error message
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="auth-section">
      <Container>
        <Form onSubmit={handleSubmit} className="p-4 rounded shadow-sm bg-light">
          <div className="form-header">
            <h1>Forgot Password</h1>
          </div>
          <div className="form-body">
            <Form.Group controlId="email">
              <Form.Label>Enter your email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleInput}
                placeholder="Enter your registered email"
                required
              />
            </Form.Group>
          </div>
          <div className="form-footer">
            <Button type="submit" className="btn-submit">
              Reset Password
            </Button>
          </div>
        </Form>
        <div className="form-options">
          <a href="/login">Back to Login</a>
          <a href="/registration">Don't have an account? Sign Up</a>
        </div>
      </Container>
    </section>
  );
};

export default ForgetPassword;