import { MAP_INPUT_TEMPLATE } from '../../utils/form/render.form';

export const initDefaultDataConfig = () => ({
  isValidate: false,
  disabled: false,
  infoFields: [
    'taiKhoan',
    'hoTen',
    'soDT',
    'email',
    'matKhau',
    'confirmPassword',
  ],
  taiKhoan: {
    ...MAP_INPUT_TEMPLATE.singleLineText,
    name: 'taiKhoan',
    isRequired: true,
    label: 'Username',
    isDisabled: false,
    grid: 6,
  },
  hoTen: {
    ...MAP_INPUT_TEMPLATE.singleLineText,
    name: 'hoTen',
    isRequired: true,
    label: 'Name',
    isDisabled: false,
    grid: 6,
  },
  soDT: {
    ...MAP_INPUT_TEMPLATE.singleLineText,
    name: 'soDT',
    isRequired: true,
    label: 'Phone Number',
    isDisabled: false,
    grid: 12,
  },
  email: {
    ...MAP_INPUT_TEMPLATE.email,
    name: 'email',
    isRequired: true,
    label: 'Email',
    isDisabled: false,
    grid: 12,
  },
  matKhau: {
    ...MAP_INPUT_TEMPLATE.password,
    name: 'matKhau',
    isRequired: true,
    label: 'Password',
    isDisabled: false,
    grid: 12,
  },
  confirmPassword: {
    ...MAP_INPUT_TEMPLATE.password,
    name: 'confirmPassword',
    isRequired: true,
    label: 'Confirm Password',
    isDisabled: false,
    grid: 12,
  },
});

/* --------------------------- VALIDATE ALL FIELD --------------------------- */
export const validateAll = (state, draft) => {
  const {
    dataConfig: { infoFields },
  } = state;

  return [...infoFields].every(each => {
    return draft.dataConfig[each].isValidate === true;
  });
};
