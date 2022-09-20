import styled from "styled-components";

export const SLoading = styled.div`
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  overflow: hidden;
  place-self: center;
  margin-inline: auto;
  margin-top: 2rem;

  & > img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
