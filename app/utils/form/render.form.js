import { MAP_INPUT_TYPE } from './components.form';
import { initElementExplicit, MAX_LCODE } from './utils';
import { MAP_VALIDATE } from './validate.from';

export const MAP_INPUT_TEMPLATE = {
  singleLineText: {
    ...initElementExplicit({
      name: 'text',
      value: '',
      maxLength: MAX_LCODE,
      isRequired: true,
      label: 'Text',
      validate: MAP_VALIDATE.singleLineText,
    }),
    componentEl: MAP_INPUT_TYPE.singleLineText,
  },
  email: {
    ...initElementExplicit({
      name: 'email',
      value: '',
      maxLength: MAX_LCODE,
      isRequired: true,
      label: 'Email',
      validate: MAP_VALIDATE.email,
    }),
    componentEl: MAP_INPUT_TYPE.email,
  },
  password: {
    ...initElementExplicit({
      name: 'password',
      value: '',
      maxLength: MAX_LCODE,
      isRequired: true,
      label: 'Password',
      validate: MAP_VALIDATE.password,
    }),
    componentEl: MAP_INPUT_TYPE.password,
  },
  login_ui_password: {
    ...initElementExplicit({
      name: 'password',
      value: '',
      maxLength: MAX_LCODE,
      isRequired: true,
      label: 'Password',
      validate: MAP_VALIDATE.singleLineText,
    }),
    componentEl: MAP_INPUT_TYPE.password,
  },
  dateTimePicker: {
    ...initElementExplicit({
      name: 'dateTimePicker',
      value: '',
      maxLength: MAX_LCODE,
      isRequired: true,
      label: 'Date Time Picker',
      validate: MAP_VALIDATE.singleLineText,
    }),
    componentEl: MAP_INPUT_TYPE.dateTimePicker,
  },
  filedArea: {
    ...initElementExplicit({
      name: 'filedArea',
      value: '',
      maxLength: MAX_LCODE,
      isRequired: true,
      label: 'Filed Area',
      validate: MAP_VALIDATE.singleLineText,
    }),
    componentEl: MAP_INPUT_TYPE.filedArea,
  },
  select: {
    ...initElementExplicit({
      name: 'select',
      value: '',
      maxLength: MAX_LCODE,
      isRequired: true,
      label: 'Select',
      validate: MAP_VALIDATE.singleLineText,
    }),
    componentEl: MAP_INPUT_TYPE.select,
  },
  chipSelect: {
    ...initElementExplicit({
      name: 'select',
      value: [],
      maxLength: MAX_LCODE,
      isRequired: true,
      label: 'Select',
      validate: MAP_VALIDATE.singleLineText,
    }),
    componentEl: MAP_INPUT_TYPE.chipSelect,
  },
  checkbox: {
    ...initElementExplicit({
      name: 'checkbox',
      value: false,
      maxLength: MAX_LCODE,
      isRequired: true,
      label: 'checkbox',
      validate: MAP_VALIDATE.checkbox,
    }),
    componentEl: MAP_INPUT_TYPE.checkbox,
  },
};
