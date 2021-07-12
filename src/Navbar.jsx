import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Jay Blog</h1>
            <div className="links">
                <Link to="/jd-blog/">Home</Link>
                <Link to="/jd-blog/create">New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;