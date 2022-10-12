import styled, { css } from "styled-components";

interface ButtonProps {
  isActive: boolean;
}

export const Container = styled.div`
  margin-top: 4rem;
  padding-left: 4rem;
  padding-right: 4rem;
  display: flex;
  width: 100%;
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.5rem;
    background-color: var(--black-200);
    padding: 1rem;
    li {
      & + li {
        margin-left: 3rem;
      }
    }
  }

  @media (max-width: 425px) {
    ul {
      width: 100%;
      li {
        & + li {
          margin-left: 1rem;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const Button = styled.button<ButtonProps>`
  transition: 0.5s;

  ${(props) => css`
    ${props.isActive
      ? css`
          background-color: transparent;
          border: 0px;
          color: var(--white);
          font-size: 1rem;
          font-weight: 500;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          &::after {
            margin-top: 3.2rem;
            height: 0.2rem;
            background-color: var(--blue);
            position: absolute;
            content: " ";
            border-radius: 0.5px 0.5rem 0px 0px;
            width: 2rem;
            color: var(--blue);
            transition: 0.5s;
          }
        `
      : css`
          background-color: transparent;
          border: 0px;
          color: var(--gray);
          filter: brightness(0.5);
          font-size: 1rem;
          font-weight: 500;
          &:hover {
            filter: brightness(1.5);
          }
        `}
  `}
`;
