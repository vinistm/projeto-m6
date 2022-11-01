import styled from "styled-components";

export const Container = styled.div`
  background-color: transparent;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  width: 250px;
  max-width: 100%;
  height: 300px;
  color: var(--black);

  .card-container p {
    padding: 5px;
    font-size: 16px;
  }
  .card-image img {
    background-color: var(--grey-7);
    width: 312px;
    max-width: 100%;
    height: 153px;
    max-height: 100%;
  }
  .details {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  .details p {
    background-color: var(--brand-3);
  }
`;
export const MainContainer = styled.div`
  background-color: transparent;
  border-radius: 2px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 1471px;
  max-width: 100%;
  height: 391px;
  
`;
