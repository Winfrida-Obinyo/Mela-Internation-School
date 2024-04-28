import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AdmissionForm from "./components/admission";
import EnrollmentForm from "./components/enrollnow";
import FeeStructure from "./components/feestructure";
import Kindergarten from "./components/kindergarten";
import PreparatorySchool from "./components/preparatory";
import JuniorHighSchool from "./components/juniorhighschool";
import SeniorHighSchool from "./components/seniorhighschool";
import SignUpAdmin from "./components/signup";
import SigninPage from "./components/signin";
import DisplayApplicants from "./components/display";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/admission",
    element: <AdmissionForm />,
  },

  {
    path: "/enrollment",
    element: <EnrollmentForm />,
  },

  {
    path: "/feestructure",
    element: <FeeStructure />,
  },

  {
    path: "/kindergarten",
    element: <Kindergarten />,
  },

  {
    path: "/preparatory",
    element: <PreparatorySchool />,
  },

  {
    path: "/junior",
    element: <JuniorHighSchool />,
  },

  {
    path: "/senior",
    element: <SeniorHighSchool />,
  },

  {
    path: "/signup",
    element: <SignUpAdmin />,
  },

  {
    path: "/signin",
    element: <SigninPage />,
  },

  {
    path: "/adminpage",
    element: <DisplayApplicants />,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
