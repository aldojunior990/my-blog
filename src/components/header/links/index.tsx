import { Container, LinkWrapper } from "./styles";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export function Links() {
  return (
    <Container>
      <Link href="https://github.com/aldojunior990">
        <a>
          <LinkWrapper>
            <FaGithub size="1rem" />
          </LinkWrapper>
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/aldo-junior-a53a391aa/">
        <a>
          <LinkWrapper>
            <FaLinkedin size="1rem" />
          </LinkWrapper>
        </a>
      </Link>
    </Container>
  );
}
