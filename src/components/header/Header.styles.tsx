import styled from "styled-components";
import { Theme } from "../../styles/theme.styles";

export const SHeader = styled.header`
  background-color: ${({ theme }: { theme: Theme }) => theme.elements};
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 16px;
  padding-inline: 1rem;
  padding-block: 1.875rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > h1 {
    font-size: 0.875rem;
    font-weight: 800;
  }

  & > .theme-toggler {
    border: none;
    background-color: transparent;
    color: inherit;
    font-family: inherit;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    & > span {
      font-size: 0.75rem;
      font-weight: 600;
    }
  }
`;
