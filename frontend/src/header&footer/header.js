import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';
import LOGO from "../images/logoWhite.png";

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Implement your logout logic here
        // For example:
        // localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <nav className="navBarLander navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <div className="herdMateFont navBarLogo navbar-brand" onClick={() => navigate('/')}>
                <img src={LOGO} style={{ width: '4vh', marginRight: '8px', marginTop: '-.76vh' }}/>BusinessCofounder
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown fixZLayer">
                            <a className="nav-link navBody dropdown-toggle" href="#" id="businessDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Business Help
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="businessDropdown">
                                <li><a className="dropdown-item" onClick={() => navigate('/business')}>Business Evaluation</a></li>
                                <li><a className="dropdown-item" onClick={() => navigate('/pitch')}>Pitch Decks</a></li>
                                <li><a className="dropdown-item" onClick={() => navigate('/pitchgen')}>Pitch Scripts</a></li>
                                <li><a className="dropdown-item" onClick={() => navigate('/prospectus')}>Prospectus</a></li>
                                {/* <li><a className="dropdown-item" onClick={() => navigate('/target')}>Target Audience</a></li> */}
                                <li><a className="dropdown-item" onClick={() => navigate('/bmc')}>Business Model Canvas</a></li>
                                <li><a className="dropdown-item" onClick={() => navigate('/competition')}>Competition</a></li>

                            </ul>
                        </li>
                        <li className="nav-item dropdown fixZLayer">
                            <a className="nav-link navBody dropdown-toggle" href="#" id="legalDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Legal Help
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="legalDropdown">
                                <li><a className="dropdown-item" onClick={() => navigate('/legal')}>Legal Framework</a></li>
                                <li><a className="dropdown-item" onClick={() => navigate('/find')}>Find Lawyers</a></li>
                                <li><a className="dropdown-item" onClick={() => navigate('/nda')}>Generate NDA</a></li>
                                <li><a className="dropdown-item" onClick={() => navigate('/tnc')}>Generate T&C</a></li>
                                <li><a className="dropdown-item" onClick={() => navigate('/links')}>Legal Links</a></li>
                            </ul>
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
