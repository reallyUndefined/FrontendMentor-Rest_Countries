import styled from "styled-components";
import { Theme } from "../../styles/theme.styles";

export const SCountryCard = styled.article`
  background-color: ${({ theme }: { theme: Theme }) => theme.elements};
  color: ${({ theme }: { theme: Theme }) => theme.text};
  border-radius: 0.25rem;
  overflow: hidden;
  max-width: 16.5rem;
  width: 100%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  & img {
    width: 100%;
    height: 10rem;
    object-fit: cover;
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
      font-size: 0.875rem;
    }

    & > p .name {
      font-weight: 600;
    }

    & > p .value {
      font-weight: 300;
    }

    & > p:last-child {
      margin-bottom: 1rem;
    }
  }
`;
