import { Outlet } from 'react-router';
import { Navbar } from '../layouts/main-layout/Navbar';

// Public layout for unauthenticated routes
export const PublicLayout = () => {
    return (
        // Layout container
        <div>
            {/* Navbar section */}
            <Navbar />

            {/* Render nested routes */}
            <Outlet />
        </div>
    );
};
