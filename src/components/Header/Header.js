import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiking } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light  py-4">
            <div class="container-fluid logo">
                <Link className="navbar-brand " to="/">
                        <FontAwesomeIcon icon={faBiking} />
                        Bahon - Urban Riders
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav fw-bolder">
                        <li className="nav-item me-5">
                        <Link className="nav-link mr-3" to="/">
                            Home 
                        </Link>
                        </li>
                        <li className="nav-item me-5">
                        <Link className="nav-link mr-3" to="/">
                            Destination
                        </Link>
                        </li>
                        <li className="nav-item me-5">
                        <Link className="nav-link mr-3" to="/blogs">
                            Blogs
                        </Link>
                        </li>
                        <li className="nav-item me-5">
                        <Link className="nav-link mr-3" to="/contact">
                            Contact
                        </Link>
                        </li>
                        <li className="nav-item login-btn ">
                        <Link to="/login"  className="nav-link">{loggedInUser.displayName ? `${loggedInUser.displayName} (Log out)` : 'Login'}  </Link> 
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;

