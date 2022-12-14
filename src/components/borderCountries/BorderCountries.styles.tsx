import styled from "styled-components";

export const SBorderCountries = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.625rem;

  & > button {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.75rem;
    font-family: inherit;

    @media (min-width: 768px) {
      font-size: 0.875rem;
    }
  }
`;
