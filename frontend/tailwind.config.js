// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light theme colors
        background: "#FFFFFF",
        surface: "#FFFFFF",
        "surface-bright": "#FFFFFF",
        "surface-light": "#F5F3FF",
        "surface-variant": "#6A6D9E",
        "on-surface-variant": "#FFFFFF",
        primary: "#9C27B0",
        "primary-darken-1": "#7B1FA2",
        secondary: "#673AB7",
        "secondary-darken-1": "#512DA8",
        error: "#B00020",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FB8C00",
        // Dark theme colors
        "dark-background": "#121212",
        "dark-surface": "#1E1E1E",
        "dark-surface-bright": "#2B2B2B",
        "dark-surface-light": "#383838",
        "dark-surface-variant": "#757575",
        "dark-on-surface-variant": "#FFFFFF",
        "dark-primary": "#BB86FC",
        "dark-primary-darken-1": "#9E63FF",
        "dark-secondary": "#03DAC6",
        "dark-secondary-darken-1": "#018786",
        "dark-error": "#CF6679",
        "dark-info": "#03A9F4",
        "dark-success": "#4CAF50",
        "dark-warning": "#FFC107",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
