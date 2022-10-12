import styled from "styled-components";

export const Container = styled.main`
  margin-top: 4rem;
  padding-left: 4rem;
  padding-right: 4rem;
  padding-bottom: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
    grid-template-columns: 1fr;
  }
`;

export const PostWrapper = styled.div`
  background-color: var(--black-200);
  padding: 1.5rem;
  border-radius: 0.5rem;
  transition: 0.5s;
  display: flex;
  height: 100%;
  flex-direction: column;
  p {
    color: var(--gray);
    font-size: 1rem;
    font-weight: 500;
  }

  h2 {
    color: var(--white);
    text-align: left;
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 1rem;
  }
  P:last-child {
    margin-top: 1rem;
    text-align: left;
    filter: brightness(0.8);
  }

  &:hover {
    filter: brightness(1.5);
  }
`;
