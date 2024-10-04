import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing default exports
import Home from './components/Home/Home.jsx';
import AddLawyer from './pages/AddLawyer.jsx';
import AdminDashboard from './components/Admin/AdminDashboard.jsx';
import ForgetPassword from './pages/ForgetPassword.jsx';
import Registration from './pages/registrationsPage.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import LoginModal from './pages/LoginModel.jsx'; 
import ListedLawyers from './components/lawyers/ListedLawyers.jsx';

function App() {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
    closeLoginModal();
  };

  return (
    <div className="App">
      <Router>
        <Navbar openLoginModal={openLoginModal} />
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ListedLawyers" element={<ListedLawyers />} />
          <Route path="/AddLawyer" element={<AddLawyer />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/Registration" element={<Registration />} />
          {/* The LoginModal route is not necessary; it's managed by state */}
        </Routes>

        {isLoginModalOpen && (
          <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} onLogin={handleLogin} />
        )}
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
