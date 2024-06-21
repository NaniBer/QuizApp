// src/Pages/SignUp.js
import React from "react";
import { Container, Box } from "@mui/material";
import { SignUp as ClerkSignUp } from "@clerk/clerk-react";
import axios from "axios";

const signInUrl = process.env.REACT_APP_CLERK_SIGN_IN_URL;
const backendUrl = process.env.REACT_APP_BACKEND_URL;

const SignUp = () => {
  const handleSignUp = async (user) => {
    try {
      console.log(user);
      // await axios.post(`${backendUrl}/api/register`, {
      //   userId: user.id,
      //   email: user.emailAddresses[0].emailAddress,
      // });
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <Container maxWidth="sm" className="flex items-center justify-center">
      <Box className="w-full p-6 rounded-lg shadow-lg">
        <ClerkSignUp
          afterSignUp={(user) => handleSignUp(user)}
          className="mt-4"
          signInUrl={signInUrl}
        />
      </Box>
    </Container>
  );
};

export default SignUp;
