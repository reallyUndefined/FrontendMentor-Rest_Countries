import styled from "styled-components";
import { Theme } from "../../styles/theme.styles";

interface SFiltersProps {
  showDropdown: boolean;
}
export const SFilters = styled.div<SFiltersProps>`
  padding-block: 1.5rem;
  padding-inline: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.5rem;

  .search {
    max-width: 30rem;
    width: 100%;
    background-color: ${({ theme }: { theme: Theme }) => theme.elements};
    border-radius: 4px;
    padding-inline: 2rem;
    padding-block: 1rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    input {
      background-color: inherit;
      color: inherit;
      font-family: inherit;
      font-size: 0.75rem;
      border: none;
      outline: none;
      width: 100%;

      @media (min-width: 768px) {
        font-size: 0.875rem;
      }
    }

    &:has(input:focus) {
      outline: 1px solid gray;
    }
  }

  .dropdown {
    position: relative;
    background-color: ${({ theme }: { theme: Theme }) => theme.elements};
    border-radius: 4px;
    padding-block: 1rem;
    padding-inline: 1.5rem;
    font-size: 0.75rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 12.5rem;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    cursor: pointer;

    @media (min-width: 768px) {
      font-size: 0.875rem;
    }

    .dropdown-menu {
      display: ${(props) => (props.showDropdown ? "grid" : "none")};
      position: absolute;
      top: calc(100% + 0.25rem);
      left: 0;
      right: 0;
      width: 100%;
      gap: 0.5rem;
      background-color: ${({ theme }: { theme: Theme }) => theme.elements};
      border-radius: 4px;
      padding-block: 1rem;
      padding-inline: 1.5rem;
      cursor: default;

      .dropdown-item {
        cursor: pointer;
      }
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
