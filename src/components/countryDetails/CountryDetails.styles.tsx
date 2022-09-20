import styled from "styled-components";
import { Theme } from "../../styles/theme.styles";

export const SCountryDetails = styled.main`
  padding-inline: 1.75rem;
  padding-block: 2.5rem;

  button {
    background-color: ${({ theme }: { theme: Theme }) => theme.elements};
    border: none;
    padding: 0.375rem;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }

  .back-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding-inline: 1.5rem;
    font-size: 0.875rem;
    font-family: inherit;
    font-weight: 300;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }

  .country {
    margin-top: 4rem;

    & > img {
      width: 100%;
      margin-bottom: 2.75rem;

      @media (min-width: 768px) {
        margin-bottom: 0;
      }
    }

    .content {
      & > h2 {
        margin-bottom: 1.5rem;
        font-size: 1.375rem;
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
          white-space: nowrap;
          font-size: 1rem;
        }
      }
    }

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 6.5rem;

      & > h2 {
        font-size: 2rem;
        margin-bottom: 1.75rem;
      }

      .details-grid {
        grid-template-columns: 1fr 1fr;
        align-items: start;
        margin-bottom: calc(4.75rem - 1.5rem);
      }

      .borders {
        display: flex;
        gap: 1rem;
      }
    }
  }
`;
