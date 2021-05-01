import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Tizeti Networks Limited</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Profile</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;