import { Link, NavLink } from 'react-router-dom';

// different Link and NavLink: NavLinks add active class
import './Nav.scss';

function Nav() {
    return (
        <>
            <div className="topnav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/timer-app">Timer Apps</NavLink>
                <NavLink to="/todos">Todo</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        </>
    );
}

export default Nav;
