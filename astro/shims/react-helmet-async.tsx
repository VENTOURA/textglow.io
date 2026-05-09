import type { ReactNode } from "react";

interface HelmetProviderProps {
  children: ReactNode;
}

export const Helmet = () => null;

export const HelmetProvider = ({ children }: HelmetProviderProps) => <>{children}</>;

export default {
  Helmet,
  HelmetProvider,
};
