import styled from "styled-components";

export const SBorderCountries = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.625rem;

  & > button {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
