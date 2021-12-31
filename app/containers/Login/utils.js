import { MAP_INPUT_TEMPLATE } from '../../utils/form/render.form';

export const initDefaultDataConfig = () => ({
  isValidate: false,
  disabled: false,
  infoFields: ['taiKhoan', 'matKhau'],
  taiKhoan: {
    ...MAP_INPUT_TEMPLATE.email,
    name: 'taiKhoan',
    isRequired: true,
    label: 'Tài Khoản',
    isDisabled: false,
    grid: 6,
  },
  matKhau: {
    ...MAP_INPUT_TEMPLATE.password,
    name: 'matKhau',
    isRequired: true,
    label: 'Mật Khẩu',
    isDisabled: false,
    grid: 6,
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
