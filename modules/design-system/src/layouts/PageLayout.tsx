import { Container } from "dripsy";

import { RootDocument } from "./RootDocument";

type Props = {
  children: React.ReactNode;
};

export const PageLayout: React.FC<Props> = ({ children }) => (
  <RootDocument>
    <Container>{children}</Container>
  </RootDocument>
);
