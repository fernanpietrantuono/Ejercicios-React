import React, { useState } from 'react';
// import { Link } from 'react-router-dom'

export const Footer = () => {
    const [clicks, setClicks] = useState(0);
    const year = new Date().getFullYear();
    const company = "Fernan's Store";
    const handleClick = () => {
        setClicks(clicks + 1);
    }
    return (
        <div>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-body-secondary">© {year} {company} Clicks= {clicks} </p>
                <span className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
                    onClick={handleClick}>
                    <img
                        src="La flor de la vida.jpg"
                        className="App-logo"
                        alt="logo"
                        width="50px"
                    />
                </span>
                <ul className="nav col-md-4 justify-content-end">
                    {/* <li className="nav-item"><Link to="/" className="nav-link px-2">Home</Link></li>
                    <li className="nav-item"><Link to="/LexusLS" className="nav-link px-2">Features</Link></li> */}
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
                </ul>
            </footer>
        </div>
    )
}
