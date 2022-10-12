import Link from "next/link";
import { Container } from "./styles";

export function Logo() {
  return (
    <Link href="/">
      <a>
        <Container>
          <p>
            aldo<b>JR</b>
          </p>
        </Container>
      </a>
    </Link>
  );
}
