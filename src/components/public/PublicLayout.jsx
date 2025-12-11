import { Outlet } from 'react-router';
import { Navbar } from '../layouts/main-layout/Navbar';
export const PublicLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};