import styled from "styled-components";

export const Container = styled.main`
  padding-left: 10rem;
  padding-right: 10rem;
  .title {
    h1 {
      margin-top: 5rem;
      color: var(--white);
      font-size: 2.5rem;
      text-align: left;
      filter: brightness(0.9);
    }
    p {
      margin-top: 1rem;
      text-align: left;
      font-weight: 600;
      color: var(--blue);
    }
  }
  .content {
    margin-top: 5rem;
    line-height: 3rem;
    color: var(--gray);
    font-weight: 400;
    text-align: left;
    filter: brightness(0.9);
    h3 {
      font-size: 2rem;
      font-weight: 700;
      margin-top: 3rem;
      margin-bottom: 3rem;
    }
    p {
      font-size: 1.2rem;
      a {
        color: var(--blue);
      }

      b {
        font-weight: 600;
      }
    }
  }

  .footer {
    width: 100%;
    padding-top: 2rem;
    padding-bottom: 2rem;
    display: flex;
    justify-content: flex-end;
    button {
      background: none;
      color: var(--white);
      font-size: 1.2rem;
      padding: 1rem;
      border: none;
      background-color: var(--black-200);
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  @media (max-width: 768px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  @media (max-width: 425px) {
    padding-left: 1rem;
    padding-right: 1rem;
  } ;
`;

export const Banner = styled.div`
  background-color: var(--blue);
  width: 100%;
  color: var(--white);
  padding-left: 10rem;
  padding-right: 10rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  @media (max-width: 425px) {
    padding-left: 1rem;
    padding-right: 1rem;
  } ;
`;
