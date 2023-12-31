import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <div className="col-md-3 mb-2 mb-md-0">
                    <img src="La flor de la vida.jpg" alt="Flower" className='App-logo' />
                </div>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    {/* <li><Link to="/" className="nav-link px-2">Home</Link></li>
                    <li><Link to="/LexusLS" className="nav-link px-2">Features</Link></li> */}
                    <li><a href="#" className="nav-link px-2">Home</a></li>
                    <li><a href="#" className="nav-link px-2">Features</a></li>
                    <li><a href="#" className="nav-link px-2">Pricing</a></li>
                    <li><a href="#" className="nav-link px-2">FAQs</a></li>
                    <li><a href="#" className="nav-link px-2">About</a></li>
                </ul>

                <div className="col-md-3 text-end">
                    <button type="button" className="btn btn-outline-primary me-2">Login</button>
                    <Link to={"/user-form"} type="button" className="btn btn-primary">Sign Up</Link>
                </div>
            </header>
        </div>
    )
}
