// MainLayout styles
import { Outlet } from 'react-router';
import { Navbar } from "./Navbar.jsx";
import '../../../styles/MainLayout.css'

// Main layout component
export const MainLayout = () => {

    return (
        // Main layout container
        <section id="main-layout">
            {/* Navbar section */}
            <Navbar />

            {/* Dynamic content area for nested routes */}
            <div id="content">
                <Outlet />
            </div>

        </section>
    );
};
