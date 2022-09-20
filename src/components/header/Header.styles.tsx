import styled from "styled-components";
import { Theme } from "../../styles/theme.styles";

export const SHeaderBg = styled.div`
  background-color: ${({ theme }: { theme: Theme }) => theme.elements};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const SHeader = styled.header`
  padding-inline: 1rem;
  padding-block: 1.875rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding-block: 1.5rem;
  }

  & > h1 {
    font-size: 0.875rem;
    font-weight: 800;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  & > .theme-toggler {
    border: none;
    background-color: transparent;
    color: inherit;
    font-family: inherit;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.75rem;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }
`;
