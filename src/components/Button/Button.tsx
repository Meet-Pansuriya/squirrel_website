import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "ghost";

type ButtonProps<T extends ElementType = "button"> = {
  as?: T;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

const mergeClassNames = (...values: Array<string | undefined>) =>
  values.filter(Boolean).join(" ");

const getVariantClass = (variant: ButtonVariant = "primary") => {
  switch (variant) {
    case "ghost":
      return styles.ghost;
    case "primary":
    default:
      return styles.primary;
  }
};

export const Button = <T extends ElementType = "button">({
  as,
  variant = "primary",
  className,
  children,
  ...rest
}: ButtonProps<T>) => {
  const Component = (as ?? "button") as ElementType;
  const combinedClassName = mergeClassNames(styles.root, getVariantClass(variant), className);

  return (
    <Component className={combinedClassName} {...(rest as ComponentPropsWithoutRef<T>)}>
      {children}
    </Component>
  );
};

Button.displayName = "Button";
