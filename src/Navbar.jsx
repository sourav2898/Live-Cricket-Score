import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
        <>
            <div className="navbar">
                <NavLink className="navlink" exact activeClassName="active_link" to="/" > Odi </NavLink>
                <NavLink className="navlink" exact activeClassName="active_link" to="/t20"> T20 </NavLink>
                <NavLink className="navlink" exact activeClassName="active_link" to="/test"> Test </NavLink>
            </div>
        </>
    );
}

export default Navbar;