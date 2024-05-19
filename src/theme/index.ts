export const theme: OpenThemeConfig = {
  colors: {
    primary: {
      light: "#42defe",
      main: "#3182CE",
      dark: "#0c3c5a",
    },
    secondary: {
      light: "#e4f1f9",
      main: "#9CA3AF",
      dark: "#64748B",
    },
    error: "#EF4444",
    success: "#10B981",
  },
  fontSizes: {
    xl: 44,
    lg: 32,
    md: 24,
    base: 18,
    sm: 14,
    xs: 10,
  },
};

export type OpenThemeConfig = {
  colors: Colors;
  fontSizes: FontSizes;
};

type Colors = {
  primary: Record<ColorType, string>;
  secondary: Record<ColorType, string>;
  error: string;
  success: string;
};

type ColorType = "light" | "main" | "dark";
type FontSizes = Record<sizes, number>;
type sizes = "xl" | "lg" | "md" | "base" | "sm" | "xs";
