import { useNavigate } from 'react-router';
import '../../../styles/Navbar.css'

export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className='nav-container'>
            <nav className="navbar">
                <div className="line-under-text">
                    <p onClick={() => navigate('/auth/home')}>/expense-tracker</p>
                </div>

            </nav>

        </div>
    );
};