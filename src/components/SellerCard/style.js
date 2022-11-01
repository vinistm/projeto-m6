import styled from "styled-components";

export const Container = styled.div`
  margin-top: 155px;
  background-color: var(--grey-5);
  border-radius: 4px;
  display: flex;
  width: 1240px;
  max-width: 100vw;
  height: 406px;
  max-height: 100vh;
  color: var(--black);
  align-items: center;
  justify-content: center;

  .seller-info p {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  .description {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    background-color: aliceblue;
  }
`;
export const MainContainer = styled.div`
  background-color: transparent;
  border-radius: 2px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  flex-direction: row;
  width: 1471px;
  max-width: 100%;
  height: 406px;
`;
  

