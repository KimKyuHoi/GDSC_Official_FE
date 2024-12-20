import styled from '@emotion/styled';
import { UseFormRegisterReturn } from 'react-hook-form';

interface IInput {
  id: string;
  title: string;
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
}

const SignFormTitle = styled.label`
  font-size: var(--font-size-lg);

  color: var(--color-white);
`;

const InputContainer = styled.div`
  width: 100%;

  margin-top: 5px;
  margin-bottom: 15px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const InputElement = styled.input`
  width: 100%;
  height: 100%;

  padding: 12px;
  margin-top: 6px;

  box-sizing: border-box;

  border: none;
  border-radius: 12px;

  font-size: var(--font-size-md);

  background-color: #392f4f;
  opacity: 100%;
  color: var(--color-white);
  /* border: 1px solid black; */

  &::placeholder {
    color: #979ca4;
    font-size: var(--font-size-sm);
  }
`;

const SignupInput: React.FC<IInput> = ({
  id,
  title,
  type,
  placeholder,
  register,
}) => {
  return (
    <>
      <InputContainer>
        <SignFormTitle htmlFor={id}>{title}</SignFormTitle>
        <InputElement
          id={id}
          type={type}
          placeholder={placeholder}
          {...register}
        />
      </InputContainer>
    </>
  );
};

export default SignupInput;
