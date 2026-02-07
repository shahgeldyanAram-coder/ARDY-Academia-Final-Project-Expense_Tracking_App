// Navbar styles
import '../../../styles/Navbar.css'
import { useNavigate } from 'react-router';
import { Link } from 'react-router';

// Navbar component
export const Navbar = () => {
    const navigate = useNavigate(); // Hook for programmatic navigation

    return (
        // Navbar container
        <div className='nav-container'>
            <nav className="navbar">
                {/* App title / link */}
                <div className="line-under-text">
                    <Link className='link' to="/auth/home">/expense-tracker</Link>
                </div>

            </nav>

        </div>
    );
};
