import { Links } from "./links";
import { Logo } from "./logo";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <Logo />
      <Links />
    </Container>
  );
}
