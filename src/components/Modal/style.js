import styled from "styled-components";

export const ConfirmModal = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 92px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalMaterial = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding-bottom: 10px;
  border: none;
  border-radius: 8px;
  width: 90%;
  max-width: 520px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;

  @keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }
`;

export const ModalLock = styled.span`
  color: var(--grey-4);
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: var(--grey-1);
    text-decoration: none;
    cursor: pointer;
  }
`;

export const ModalTitle = styled.div`
  margin-bottom: 10px;
  padding: 18px 24px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--darkblue);
  color: var(--grey-0);
`;

export const H7 = styled.h7`
  font-family: "Lexend", sans-serif;
  font-weight: 500;
  font-size: 16px;
`;

export const ModalBody = styled.div`
  padding: 40px 24px;
`;

export const YesButton = styled.div`
  color: var(--white);
  background-color: var(--darkblue);
  border-radius: 5px;
  padding: 5px 10px;
  border: none;
  &:hover {
    cursor: pointer;
    color: var(--darkblue);
    background-color: var(--white);
    border: 1px solid var(--darkblue);
  }
`;

export const NoButton = styled.div`
  color: var(--white);
  background-color: var(--orange);
  border-radius: 5px;
  padding: 5px 10px;
  border: none;
  &:hover {
    cursor: pointer;
    color: var(--orange);
    background-color: var(--white);
    border: 1px solid var(--orange);
  }
`;
