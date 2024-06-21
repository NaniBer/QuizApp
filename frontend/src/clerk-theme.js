// src/clerk-theme.js
import { createTheme } from "@clerk/clerk-react";

const clerkTheme = createTheme({
  colors: {
    primary: "#9C27B0", // Adjust primary color as needed
    background: "#FFFFFF", // Adjust background color as needed
    inputBorder: "#9C27B0", // Adjust input border color as needed
    text: "#000000", // Adjust text color as needed
    buttonHover: "#7B1FA2", // Adjust button hover color as needed
    buttonBorderHover: "#7B1FA2", // Adjust button border hover color as needed
    link: "#9C27B0", // Adjust link color as needed
  },
});

export default clerkTheme;
