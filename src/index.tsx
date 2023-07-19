import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { App } from './pages/App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/config/:mode",
        element: <div>Hello world!</div>,
      },
      {
        path: "/play",
        element: <div>Hello world!</div>,
      }, {
        path: "/end",
        element: <div>Hello world!</div>,
      },
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App children={<RouterProvider router={router} />} />
  </React.StrictMode>
);
