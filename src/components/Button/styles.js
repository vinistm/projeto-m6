import styled, { css } from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 146px;
  height:48px;
  button {
    background-color: var(--brand-1);
    border: 1px solid var(--brand-1);
    border-radius: 4px;
    color: var(--whiteFixed);
  }
  button::hover {
    background-color: var(--brand-2);
    border: 1px solid var(--brand-2);
  }

`;
