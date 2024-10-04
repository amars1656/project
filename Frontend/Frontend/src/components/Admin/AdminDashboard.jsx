import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Admin Dashboard</h1>
      <div className="row">
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card bg-success text-white">
            <div className="card-body text-center">
              <h3 className="card-title">1</h3>
              <p className="card-text">Sub Admins</p>
              <a href="#" className="btn btn-light mt-3">More info →</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card bg-primary text-white">
            <div className="card-body text-center">
              <h3 className="card-title">2</h3>
              <p className="card-text">Listed Lawyers/Advocates</p>
              <a href="ListedLawyers" className="btn btn-light mt-3">More info →</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card bg-warning text-white">
            <div className="card-body text-center">
              <h3 className="card-title">3</h3>
              <p className="card-text">Approved Listed Lawyers/Advocates</p>
              <a href="#" className="btn btn-light mt-3">More info →</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card bg-danger text-white">
            <div className="card-body text-center">
              <h3 className="card-title">0</h3>
              <p className="card-text">Blocked Listed Lawyers/Advocates</p>
              <a href="#" className="btn btn-light mt-3">More info →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
