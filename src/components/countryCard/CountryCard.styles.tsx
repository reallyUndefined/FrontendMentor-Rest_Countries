import styled from "styled-components";
import { Theme } from "../../styles/theme.styles";

export const SCountryCard = styled.article`
  background-color: ${({ theme }: { theme: Theme }) => theme.elements};
  border-radius: 0.25rem;
  overflow: hidden;
  max-width: 16.5rem;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  & img {
    width: 100%;
    height: 10rem;
    object-fit: cover;
    display: block;
  }

  & > .content {
    padding: 1.5rem;

    & > h2 {
      font-size: 1.125rem;
      font-weight: 800;
      margin-bottom: 1rem;

      a {
        color: inherit;
      }
    }

    & > p {
      margin-bottom: 0.25rem;
    }

    & > p:last-child {
      margin-bottom: 1rem;
    }
  }
`;
