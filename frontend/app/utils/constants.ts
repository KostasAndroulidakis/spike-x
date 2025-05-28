// Application constants following SRP
export const APP_NAME = "SPIKE-X";
export const APP_DESCRIPTION = "The comprehensive R&D ecosystem for building, training, and deploying neural networks";

// Route constants
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  FEATURES: "/features",
  LOGIN: "/login",
  SIGNUP: "/signup",
  CONSOLE: {
    ROOT: "/console",
    DASHBOARD: "/console/dashboard",
    MODELS: "/console/models",
    LIBRARY: "/console/library",
    SETTINGS: "/console/settings",
    ACCOUNT: "/console/account",
  },
  LAB: {
    ROOT: "/lab",
    ARCHITECTURE: "/lab/architecture",
    TRAINING: "/lab/training",
    VISUALIZATION: "/lab/visualization",
    EVALUATION: "/lab/evaluation",
    FILE: "/lab/file",
  },
} as const;

// Theme constants
export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
} as const;

// UI constants
export const BUTTON_VARIANTS = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  OUTLINE: "outline",
} as const;