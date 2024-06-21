// src/Pages/Login.js
import React from "react";
import { Container, Box, Typography, Link } from "@mui/material";
import { SignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <Container
      maxWidth="sm"
      className="flex items-center justify-center min-h-screen dark:bg-dark-background"
    >
      <Box className="w-full p-6 dark:bg-dark-surface rounded-lg shadow-lg">
        <Typography variant="h4" className="text-center text-primary">
          Login
        </Typography>
        <SignIn
          signInOptions={{
            sessionDuration: "7 days",
            forgotPasswordEnabled: true,
            signInMethods: ["email", "google"],
          }}
          onSignedIn={() => {
            console.log("User signed in successfully");
          }}
          onSignIn={() => {
            console.log("Sign-in process started");
          }}
          onSignInFailed={(error) => {
            console.error("Sign-in failed:", error);
          }}
        />
        <Typography variant="body2" className="text-center mt-2">
          Don't have an account?{" "}
          <Link to="/signup" className="text-primary underline">
            Sign Up
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
