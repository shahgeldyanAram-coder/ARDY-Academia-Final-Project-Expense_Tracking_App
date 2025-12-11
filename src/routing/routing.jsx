import { createBrowserRouter } from 'react-router';

import { MainLayout } from '../components/layouts/main-layout/MainLayout';
import { PublicLayout } from '../components/public/PublicLayout';
import { Home } from '../pages/home/Home';


export const appRouter = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
        ],
    },


    {
        path: '/auth',
        Component: PublicLayout,
        children: [
            {
                path: 'home',
                Component: Home,
            }
        ],
    },
]);
