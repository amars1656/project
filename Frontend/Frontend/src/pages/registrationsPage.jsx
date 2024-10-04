import { useState } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "../assets/CSS/registrationpage.css";

const RegistrationPage = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    phoneNo: "",
    address: "",
    disrp: "",
  });

  const [message, setMessage] = useState(""); // State to store success or error messages

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value, // Update the corresponding field
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`http://localhost:8085/lms/api/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
  
      if (response.ok) {
        const data = await response.json();
        setMessage("User registered successfully!");
        console.log("Response from backend:", data);
      } else {
        let errorData;
        try {
          errorData = await response.json();
        } catch (err) {
          errorData = { message: "Unknown error occurred" };
        }
        setMessage(`Registration failed: ${errorData.message || "Unknown error"}`);
        console.error("Error from backend:", errorData);
      }
    } catch (error) {
      setMessage("Registration failed: Unable to reach the server.");
      console.error("Fetch error:", error);
    }
  };

  return (
    <section className="add-user-section">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-header">
            <h1>Add User Information</h1>
          </div>
          <div className="form-body">
            <div className="form-group">
              <div className="form-section">
                <h2>Personal Info</h2>
                <div>
                  <label htmlFor="fullName">First Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={user.fullName}
                    onChange={handleInput}
                    placeholder="Enter First Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleInput}
                    placeholder="Enter Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleInput}
                    placeholder="Enter Username"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                    placeholder="Enter Password"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phoneNo">Mobile Number</label>
                  <input
                    type="tel"
                    name="phoneNo"
                    value={user.phoneNo}
                    onChange={handleInput}
                    placeholder="Enter Mobile Number"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="address">Office Address</label>
                  <input
                    type="text"
                    name="address"
                    value={user.address}
                    onChange={handleInput}
                    placeholder="Enter Address"
                    required
                  />
                </div>
              </div>

              <div className="form-section">
                <h2>Professional Info</h2>
                <div>
                  <label htmlFor="disrp">Description (if any)</label>
                  <textarea
                    name="disrp"
                    value={user.disrp}
                    onChange={handleInput}
                    placeholder="Description"
                    rows="4"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="form-footer">
            <button type="submit" className="btn btn-submit">
              Submit
            </button>
          </div>
        </form>
        {message && <p className="form-message">{message}</p>}
      </div>
    </section>
  );
};

export default RegistrationPage;