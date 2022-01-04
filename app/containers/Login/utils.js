import { MAP_INPUT_TEMPLATE } from '../../utils/form/render.form';

export const initDefaultDataConfig = () => ({
  isValidate: false,
  disabled: false,
  infoFields: ['taiKhoan', 'matKhau', 'checkbox'],
  taiKhoan: {
    ...MAP_INPUT_TEMPLATE.singleLineText,
    name: 'taiKhoan',
    isRequired: true,
    label: 'Username',
    isDisabled: false,
    grid: 6,
  },
  matKhau: {
    ...MAP_INPUT_TEMPLATE.login_ui_password,
    name: 'matKhau',
    isRequired: true,
    label: 'Password',
    isDisabled: false,
    grid: 6,
  },
  checkbox: {
    ...MAP_INPUT_TEMPLATE.checkbox,
    name: 'checkbox',
    isRequired: false,
    label: 'Remember Me',
    isDisabled: false,
    isValidate: true,
    value: true,
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
