import { createBrowserRouter } from 'react-router';

import { MainLayout } from '../components/layouts/main-layout/MainLayout';
import { PublicLayout } from '../components/public/PublicLayout';
import { Home } from '../pages/home/Home';

// Application router configuration
export const appRouter = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout, // Main authenticated layout
        children: [
            {
                index: true,       // Default route
                Component: Home,
            },
        ],
    }
    ,

    {
        path: '/auth',
        Component: PublicLayout, // Public layout for unauthenticated users
        children: [
            {
                path: 'home',      // Public home route
                Component: Home,
            }
        ],
    },
]);
