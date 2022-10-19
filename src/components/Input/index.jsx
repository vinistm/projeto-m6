import { InputContainer } from "./styles";

function Input({ label, register, name, error, ...rest }) {
  return (
    <>
      <div>
        {label}
        {!!error && <span> - {error}</span>}
      </div>
      <InputContainer isErrored={!!error}>
        <input {...register(name)} {...rest} />
      </InputContainer>
    </>
  );
}

export default Input;
