import { Link } from 'react-router-dom';
import './Nav.scss';

function Nav() {
    return (
        <>
            <div className="topnav">
                <Link className="active" to="/">
                    Home
                </Link>
                <Link to="/covid">Covid</Link>
                <Link to="/todos">Todo</Link>
                <Link to="/about">About</Link>
            </div>
        </>
    );
}

export default Nav;
