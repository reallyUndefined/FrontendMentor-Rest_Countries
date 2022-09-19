import styled from "styled-components";
import { Theme } from "../../styles/theme.styles";

export const SCountryDetails = styled.main`
  padding-inline: 1.75rem;
  padding-block: 2.5rem;
  color: ${({ theme }: { theme: Theme }) => theme.text};

  & > img {
    width: 100%;
  }

  & > h2 {
  }
`;
