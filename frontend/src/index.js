import React, { useState } from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, CssBaseline, Switch } from "@mui/material";
import { lightTheme, darkTheme } from "./theme"; // Ensure correct path to your theme file
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ClerkProvider } from "@clerk/clerk-react";
import "./index.css";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

const PUBLISHABLE_KEY = process.env.REACT_APP_PUBLISHABLE_KEY;
console.log(PUBLISHABLE_KEY);
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

const Root = () => {
  const [darkMode, setDarkMode] = useState(true);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div className="flex items-center justify-end p-4">
        <Switch checked={darkMode} onChange={handleThemeChange} />
      </div>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Root />
    </ClerkProvider>
  </React.StrictMode>
);
