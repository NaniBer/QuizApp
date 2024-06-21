// src/Pages/SignUp.js
import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { SignUp as ClerkSignUp } from "@clerk/clerk-react";

const SignUp = () => {
  return (
    <Container
      maxWidth="sm"
      className="flex items-center justify-center min-h-screen"
    >
      <Box className="w-full p-6 rounded-lg shadow-lg">
        <Typography variant="h4" className="text-center text-primary">
          Sign Up
        </Typography>
        <ClerkSignUp
          afterSignUp="/dashboard" // Replace with your desired redirect path
          className="mt-4"
        />
        <Typography variant="body2" className="text-center mt-2">
          Already have an account?{" "}
          <Link to="/login" className="text-primary underline">
            Login
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default SignUp;
