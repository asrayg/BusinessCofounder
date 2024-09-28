import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Implement your logout logic here
        // For example:
        // localStorage.removeItem('token');
        navigate('/');
    };
    // VentureVoyage
    return (
        <nav className="navBarLander navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <div className="herdMateFont navBarLogo navbar-brand" onClick={() => navigate('/')}>
                BusinessCofounder
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <div className="nav-link navBody" onClick={() => navigate('/business')}>Business Help</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link navBody" onClick={() => navigate('/legal')}>Legal Help</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link navBody" onClick={() => navigate('/email')}>Generate Emails</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link navBody" onClick={() => navigate('/invest')}>Find People</div>
                        </li>
                    </ul>
                    {/* <div className="loginButtonRED herdMateFont navWholeBody" onClick={handleLogout}>Logout</div> */}
                </div>
            </div>
        </nav>
    );
};

export default Header;