import * as yup from 'yup';

export const inputData = [
  {
    name: 'name',
    placeholder: 'Enter the name',
    type: 'text',
  },
  {
    name: 'email',
    placeholder: 'Enter the email',
    type: 'email',
  },
  {
    name: 'password',
    placeholder: 'Enter the password',
    type: 'password',
  },
  {
    name: 'confirmPassword',
    placeholder: 'Enter the same password',
    type: 'password',
  },
];

export const schemaRegister = yup.object().shape({
  name: yup
    .string()
    .min(5, 'Name is invalid, must be more than 3 characters')
    .required(),
  email: yup
    .string()
    .email('Email is not valid')
    .min(5, 'Min value must be at least 5 characters')
    .required(),
  password: yup.string().min(5, 'Must be at least 5 characters').required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required(),
});
