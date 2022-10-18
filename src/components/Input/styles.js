import styled, { css } from "styled-components";

export const InputContainer = styled.div`
  background: var(--grey-7);
  border-radius: 4px;
  border: 1px solid var(--grey-7);
  color: var(--grey-6);
  padding: 1rem;
  width: 90%;
  display: flex;
  transition: 0.4s;
  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--alert-1);
    `}
  input {
    background: transparent;
    align-items: flex-start;
    flex: 1;
    border: 0;
    color: var(--grey-7);
    &::placeholder {
      color: var(--grey-3);
    }
  }
`;
