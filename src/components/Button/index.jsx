import { ButtonContainer } from "./styles";
const Button = ({ children, backGround, textColor, ...rest }) => {
  return (
    <ButtonContainer
      type="ButtonContainer"
      backGround={backGround}
      textColor={textColor}
      {...rest}
    >
      {children}
    </ButtonContainer>
  );
};
export { Button };

