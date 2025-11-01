import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../theme/ThemeProvider";
import styles from "./ThemeToggle.module.css";

type ThemeToggleProps = {
  className?: string;
};

const mergeClassNames = (...values: Array<string | undefined>) =>
  values.filter(Boolean).join(" ");

export const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={mergeClassNames(styles.button, className)}
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={`Activate ${isDark ? "light" : "dark"} mode`}
    >
      <span aria-hidden className={styles.icon}>
        {isDark ? <Moon size={16} /> : <Sun size={16} />}
      </span>
      <span>{isDark ? "Dark" : "Light"} mode</span>
    </button>
  );
};

ThemeToggle.displayName = "ThemeToggle";
