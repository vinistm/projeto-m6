const Button = ({ children, backGround, textColor, ...rest }) => {
  return (
    <button
      type="button"
      backGround={backGround}
      textColor={textColor}
      {...rest}
    >
      {children}
    </button>
  );
};
export { Button };
