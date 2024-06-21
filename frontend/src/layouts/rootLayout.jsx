import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { useTheme } from "@mui/material/styles";
import { lightTheme, darkTheme } from "../theme";

export default function RootLayout() {
  const theme = useTheme();
  const navigate = useNavigate();

  const quizAppStyle = {
    color:
      theme.palette.mode === "light"
        ? lightTheme.palette.primary.main
        : darkTheme.palette.primary.main,
  };

  return (
    <>
      <header className="px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">
            <Link
              to="/"
              className="hover:text-white hover:no-underline"
              style={quizAppStyle}
            >
              QuizApp
            </Link>
          </div>
          <div>
            <SignedIn>
              <UserButton
                afterSignOutUrl="/login"
                className="text-white hover:text-white ml-4"
              />
            </SignedIn>
            <SignedOut>
              <Link to="/login" className="text-white hover:text-white ml-4">
                Sign In
              </Link>
            </SignedOut>
          </div>
        </div>
      </header>
      <main className="container mx-auto mt-4">
        <Outlet />
      </main>
    </>
  );
}
