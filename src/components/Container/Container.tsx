import type { ComponentPropsWithoutRef, ElementType } from "react";
import styles from "./Container.module.css";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

const mergeClassNames = (...values: Array<string | undefined>) =>
  values.filter(Boolean).join(" ");

export const Container = <T extends ElementType = "div">({
  as,
  className,
  children,
  ...rest
}: ContainerProps<T>) => {
  const Component = (as ?? "div") as ElementType;
  return (
    <Component className={mergeClassNames(styles.root, className)} {...rest}>
      {children}
    </Component>
  );
};

Container.displayName = "Container";
