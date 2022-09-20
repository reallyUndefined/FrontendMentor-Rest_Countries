import styled from "styled-components";
import { Theme } from "../../styles/theme.styles";

export const SCountryDetails = styled.main`
  padding-inline: 1.75rem;
  padding-block: 2.5rem;
  color: ${({ theme }: { theme: Theme }) => theme.text};

  button {
    background-color: ${({ theme }: { theme: Theme }) => theme.elements};
    color: ${({ theme }: { theme: Theme }) => theme.text};
    border: none;
    padding: 0.375rem;
    border-radius: 2px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  .back-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding-inline: 1.5rem;
    font-size: 0.875rem;
    font-family: inherit;
    font-weight: 300;
  }

  .country {
    & > img {
      width: 100%;
      margin-top: 4rem;
      margin-bottom: 2.75rem;
    }

    .content {
      & > h2 {
        margin-bottom: 1.5rem;
      }

      .details-grid {
        display: grid;

        .details {
          margin-bottom: 1.5rem;
          display: grid;
          gap: 0.75rem;
        }
      }

      .borders {
        & > h3 {
          margin-bottom: 1rem;
        }

        .border-countries {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.625rem;
        }
      }
    }
  }
`;
