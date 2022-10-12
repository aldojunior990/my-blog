import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  a {
    margin-left: 1rem;
  }
`;

export const LinkWrapper = styled.div`
  background-color: var(--black-200);
  border-radius: 0.5rem;
  text-decoration: none;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  transition: 0.5s;
  width: 100%;
  &:hover {
    color: var(--blue);
  }
`;
