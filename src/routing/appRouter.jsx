import { RouterProvider } from 'react-router-dom';
import { appRouter } from './routing';

// App router component
export const AppRouter = () => {
    // Provide routing configuration to the app
    return <RouterProvider router={appRouter} />;
};
