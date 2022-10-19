import { InputContainer } from "./styles";

const Input = ({ label, register, name, error = false, ...rest }) => {
  return (
    <InputContainer isErrored={!!error}>
      <label htmlFor={label}>{label}</label>
      <input {...register(name)} {...rest} />
      {!!error && <span>{error}</span>}
    </InputContainer>
  );
};

export default Input;
