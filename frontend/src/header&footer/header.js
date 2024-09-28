import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';


const Header = ({ isSignedIn, setIsSignedIn }) => {
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem('isSignedIn');
    setIsSignedIn(false);
    navigate('/');
  };


  const handleLogin = () => {
    navigate('/login');
  };


  return (
    <nav className="navBarLander navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div className="herdMateFont navBarLogo navbar-brand" onClick={() => navigate('/')}>
          HerdMate
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {isSignedIn ? (
              <>
                <li className="nav-item">
                  <div className="nav-link navBody" onClick={() => navigate('/shop')}>Marketplace</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link navBody" onClick={() => navigate('/saved')}>Saved</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link navBody" onClick={() => navigate('/messaging/1')}>Message</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link navBody" onClick={() => navigate('/profile')}>My Profile</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link navBody" onClick={() => navigate('/add')}>Add</div>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <div className="nav-link navBody" onClick={handleLogin}>Marketplace</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link navBody" onClick={handleLogin}>Saved</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link navBody" onClick={handleLogin}>Message</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link navBody" onClick={handleLogin}>My Profile</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link navBody" onClick={handleLogin}>Add</div>
                </li>
              </>
            )}
          </ul>
          {isSignedIn ? (
            <div className="loginButtonRED herdMateFont navWholeBody" onClick={handleLogout}>Logout</div>
          ) : (
            <div className="loginButton herdMateFont navWholeBody" onClick={handleLogin}>Login</div>
          )}
        </div>
      </div>
    </nav>
  );
};


export default Header;
