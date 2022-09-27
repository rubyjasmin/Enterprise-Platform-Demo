import { DripsyProvider } from "dripsy";

import { theme } from "./styles";

type Props = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: Props) {
  return (
    <DripsyProvider ssr theme={theme}>
      {children}
    </DripsyProvider>
  );
}
