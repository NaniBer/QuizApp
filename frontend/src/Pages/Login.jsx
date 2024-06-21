// src/Pages/Login.js
import React, { useEffect } from "react";
import { Container, Box } from "@mui/material";
import { SignIn, useUser } from "@clerk/clerk-react";

const signUpUrl = process.env.REACT_APP_CLERK_SIGN_UP_URL;

const Login = () => {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      const firstName = user.firstName || "Unknown";
      const lastName = user.lastName || "Unknown";
      sessionStorage.setItem("firstName", firstName);
      sessionStorage.setItem("lastName", lastName);
      console.log("User information saved in session storage");
    }
  }, [user]);

  return (
    <Container
      maxWidth="sm"
      className="flex items-center justify-center min-h-screen dark:bg-dark-background"
    >
      <Box className="w-full p-6 dark:bg-dark-surface rounded-lg shadow-lg">
        <SignIn
          signInOptions={{
            sessionDuration: "7 days",
            forgotPasswordEnabled: true,
            signInMethods: ["email", "google"],
          }}
          onSignIn={() => {
            console.log("Sign-in process started");
          }}
          onSignInFailed={(error) => {
            console.error("Sign-in failed:", error);
          }}
          signUpUrl={signUpUrl}
        />
      </Box>
    </Container>
  );
};

export default Login;
