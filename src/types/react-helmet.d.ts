declare module "react-helmet" {
  import type { ReactNode } from "react";

  export class Helmet extends React.Component<{ children?: ReactNode }> {}
  export interface HelmetProps {
    children?: ReactNode;
  }
}
