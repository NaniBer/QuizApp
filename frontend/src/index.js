import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, CssBaseline, Switch } from "@mui/material";
import { lightTheme, darkTheme } from "./theme"; // Ensure correct path to your theme file
import { GoogleOAuthProvider } from "@react-oauth/google";
import { dark } from "@clerk/themes";
import "./index.css";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import LandingPage from "./Pages/LandingPage";
import RootLayout from "./layouts/rootLayout";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DashboardLayout from "./layouts/dashboardLayout";

const PUBLISHABLE_KEY = process.env.REACT_APP_PUBLISHABLE_KEY;
console.log(PUBLISHABLE_KEY);
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    // {
    //   path: "/login",
    //   element: <Login />,
    // },
    // {
    //   path: "/signup",
    //   element: <SignUp />,
    // },
    // {
    //   path: "/",
    //   element: <LandingPage />,
    // },
    element: <RootLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/login/*", element: <Login /> },
      { path: "/signup/*", element: <SignUp /> },
      {
        // element: <DashboardLayout />,
        // path: "dashboard",
        // children: [
        //   { path: "/dashboard", element: <DashboardPage /> },
        //   { path: "/dashboard/invoices", element: <InvoicesPage /> },
        // ],
      },
    ],
  },
]);

const Root = ({ darkMode, handleThemeChange }) => {
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div className="flex items-center justify-end p-4">
        {darkMode && <LightModeIcon />}
        {!darkMode && <DarkModeIcon />}
        <Switch checked={darkMode} onChange={handleThemeChange} />
      </div>

      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      appearance={{ baseTheme: darkMode ? dark : undefined }}
    >
      <Root darkMode={darkMode} handleThemeChange={handleThemeChange} />
    </ClerkProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
