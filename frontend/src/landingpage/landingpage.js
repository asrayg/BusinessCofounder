import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import Header from '../header&footer/header'; // Assuming you have a Header component to toggle
import './landingpage.css';
import imgSrc from '../images/1556035217736.jpg';

function LandingPage() {
    const navigate = useNavigate();
    const location = useLocation(); // Get current location

    const handleButtonClick = () => {
        navigate('../business');
        window.scrollTo(0, 0);
    };

    return (
        <div>
            <Header />
            <div>
                <div>
                    <div className="landing-page">
                        <main>
                            <section id="home">
                                <div className="startupBG">
                                    <div className="landingCard-container">
                                        <h1 className="herdMateFont landingCard">
                                            Your First <span className="highlight">And Last</span> AI Co-Founder.
                                        </h1>
                                        <button className="buttonFront" onClick={handleButtonClick}>Learn More ▸</button>
                                    </div>
                                </div>
                            </section>
                        </main>

                        <body>
                            <h2 className="herdMateFont bodyCard">Spend Time Working On The Parts You <span className="highlight2">Love</span></h2>
                            <h3 className="desc">
                                With AI-powered tools, it can automatically recommend and autofill essential documents like LLC paperwork, contracts, and forms. No more wasting time on the nitty-gritty—AI streamlines the process, ensuring you're compliant and ready to go faster than ever before.
                            </h3>

                            <div className="image-container">
                                <img className="imgNEW" src={imgSrc} alt="Description of the image" />
                            </div>
                            <h3 className="desc2">
                                Imagine slashing hours off your workload as AI swiftly handles the creation and autofilling of LLC documents, contracts, and various forms. This streamlined process allows you to focus on what truly matters—growing your business. By automating tedious tasks, you can reclaim valuable hours each week, ensuring you're not just compliant but also efficient and ready to seize new opportunities faster than ever before. Say goodbye to paperwork bottlenecks and hello to increased productivity.
                            </h3>
                        </body>

                        <footer>
                            <p className="feetStuff">&copy; 2024 BusinessCofounder. All rights reserved.</p>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
