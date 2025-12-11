import { RouterProvider } from 'react-router-dom';
import { appRouter } from './routing';

export const AppRouter = () => {
    return <RouterProvider router={appRouter} />;
};