import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import FeeStructure from "./components/feestructure";
import Kindergarten from "./components/kindergarten";
import PreparatorySchool from "./components/preparatory";
// import JuniorHighSchool from "./components/juniorhighschool";
import Notfound from "./components/Notfound";
import HTwelcome from "./components/HTwelcome";
import Layout from './components/Layout/Layout';

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/feestructure", element: <FeeStructure /> },
  { path: "/kindergarten", element: <Kindergarten /> },
  { path: "/preparatory", element: <PreparatorySchool /> },
  // { path: "/junior", element: <JuniorHighSchool /> },
  { path: "/*", element: <Notfound /> },
  { path: "/HTwelcome", element: <HTwelcome /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);

reportWebVitals();
