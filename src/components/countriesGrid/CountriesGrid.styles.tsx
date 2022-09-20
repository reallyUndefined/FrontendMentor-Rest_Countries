import styled from "styled-components";

export const SCountriesGrid = styled.main`
  padding-block: 0.5rem;
  padding-inline: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16.5rem, min-content));
  place-content: center;
  gap: 2.5rem;

  @media (min-width: 768px) {
    gap: 4rem;
  }
`;
