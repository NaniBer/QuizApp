// src/theme.js
import { createTheme } from "@mui/material/styles";

// Define your MUI themes
export const lightTheme = createTheme({
  palette: {
    mode: "light", // Ensure to define mode explicitly if needed
    background: {
      default: "#FFFFFF",
    },
    primary: {
      main: "#9C27B0",
    },
    secondary: {
      main: "#673AB7",
    },
    error: {
      main: "#B00020",
    },
    info: {
      main: "#2196F3",
    },
    success: {
      main: "#4CAF50",
    },
    warning: {
      main: "#FB8C00",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
    },
    primary: {
      main: "#BB86FC",
    },
    secondary: {
      main: "#03DAC6",
    },
    error: {
      main: "#CF6679",
    },
    info: {
      main: "#03A9F4",
    },
    success: {
      main: "#4CAF50",
    },
    warning: {
      main: "#FFC107",
    },
  },
});
