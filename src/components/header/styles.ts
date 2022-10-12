import styled from "styled-components";

export const Container = styled.header`
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 4rem;
  padding-right: 4rem;
  background-color: var(--black);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
