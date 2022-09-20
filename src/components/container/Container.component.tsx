import { SContainer } from "./Container.styles";

function Container({ children }: React.PropsWithChildren) {
  return <SContainer>{children}</SContainer>;
}

export default Container;
