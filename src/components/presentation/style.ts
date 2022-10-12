import styled from "styled-components";

export const Container = styled.nav`
  padding-top: 4rem;
  padding-left: 4rem;
  padding-right: 4rem;
  p {
    text-align: left;
    font-size: 2rem;
    color: var(--white);
    font-weight: 700;
    b {
      color: var(--blue);
    }
  }

  p:last-child {
    margin-top: 1rem;
    font-weight: 500;
    font-size: 1.125rem;
    color: var(--gray);
    text-align: left;
  }

  @media (max-width: 768px) {
    p {
      font-size: 1.5rem;
    }
    p:last-child {
      font-size: 1rem;
    }
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
