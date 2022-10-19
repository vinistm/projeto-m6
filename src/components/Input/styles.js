import styled, { css } from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 1rem;
  input {
    width: 100%;
    height: 37px;
    background-color: var(--whiteFixed);
    border: 1px solid var(--grey-7);
    border-radius: 4px;
  }
  input::placeholder {
    padding-left: 5px;
    color: var(--grey-3);
  }
  ${(props) =>
    props.isErrored &&
    css`
      margin-top: 0.5rem;
      label {
        color: var(--alert-1);
      }
      input {
        border: 1px solid var(--alert-1);
      }
      span {
        color: var(--alert-1);
        font-weight: 400;
        font-size: 0.8rem;
        padding: 5px;
      }
    `}
`;
