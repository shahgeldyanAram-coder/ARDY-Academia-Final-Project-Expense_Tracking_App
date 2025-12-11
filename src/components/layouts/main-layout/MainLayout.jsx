import { Outlet } from 'react-router';
import { Navbar } from "./Navbar.jsx";
import '../../../styles/MainLayout.css';

export const MainLayout = () => {

    return (
        <section id="main-layout">

            <Navbar />


            <div id="content">
                <Outlet />
            </div>

        </section>
    );
};
