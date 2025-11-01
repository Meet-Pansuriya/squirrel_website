import type { ReactNode } from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "squirrel-theme";

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: Theme;
};

const getPreferredTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};

export const ThemeProvider = ({
  children,
  defaultTheme,
}: ThemeProviderProps) => {
  const [theme, setThemeState] = useState<Theme>(defaultTheme ?? "light");

  useEffect(() => {
    setThemeState(getPreferredTheme());
  }, []);

  const applyTheme = useCallback((value: Theme) => {
    if (typeof document === "undefined") return;

    const root = document.documentElement;
    root.dataset.theme = value;
    root.style.setProperty("color-scheme", value);
    window.localStorage.setItem(STORAGE_KEY, value);
  }, []);

  useEffect(() => {
    applyTheme(theme);
  }, [applyTheme, theme]);

  const setTheme = useCallback(
    (value: Theme) => {
      setThemeState(value);
      applyTheme(value);
    },
    [applyTheme],
  );

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === "light" ? "dark" : "light";
      applyTheme(next);
      return next;
    });
  }, [applyTheme]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      toggleTheme,
      setTheme,
    }),
    [theme, toggleTheme, setTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside a ThemeProvider");
  }

  return context;
};
