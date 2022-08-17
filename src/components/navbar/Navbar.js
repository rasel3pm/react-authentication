import React from 'react';
import { Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <nav className='cyan accent-3'>
                <div className="nav-wrapper container">
                    <a href="#" className="brand-logo">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/login">login</Link></li>
                        <li><Link to="/register">register</Link></li>
                        <li><Link to="/logout">logout</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;