import { StyledInput, StyledLabel } from 'Pages/SignUpForm/SignUpStyled';

export const Input = ({ register, type = 'text', placeholder, name }) => {
  const formattedLabel = name
    .split(/(?=[A-Z])/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  return (
    <StyledLabel>
      {formattedLabel}
      <StyledInput type={type} placeholder={placeholder} {...register(name)} />
    </StyledLabel>
  );
};
