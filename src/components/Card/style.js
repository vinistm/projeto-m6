import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--white);
  border-radius: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 250px;
  height: 250px;
  padding: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: var(--black);
  hr {
    width: 80%;
    margin-top: 16px;
    margin-bottom: 16px;
  }
  button {
    margin-top: 80px;
    align-self: flex-end;
  }
  
`;
