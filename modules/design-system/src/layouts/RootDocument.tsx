import { SafeArea } from "./safe-area";

type Props = {
  children: React.ReactNode;
};

export const RootDocument: React.FC<Props> = ({ children }) => <SafeArea>{children}</SafeArea>;
