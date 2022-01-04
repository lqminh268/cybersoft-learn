export const MAP_VALIDATE = {
  singleLineText: ({ value, isRequired, maxLength }) => {
    let [isValidate, errors] = [true, []];

    if (
      typeof value === 'undefined' ||
      value === null ||
      typeof value === 'undefined'
    ) {
      isValidate = false;
    } else if (value === '' && isRequired) {
      isValidate = false;
      errors = ['This field is required'];
    } else if (value.length > 0 && value === '' && isRequired) {
      isValidate = false;
      errors = ['This field is required'];
    } else if (maxLength !== null && value.length > maxLength) {
      isValidate = false;
      errors = ['This field is required'];
    }
    return { errors, isValidate };
  },
  password: ({ value, isRequired, maxLength }) => {
    let [isValidate, errors] = [true, []];
    const validRegex = /^.*(?=.{8,})(?=.*\d)(?=.*[a-zA-Z]).*$/g;
    if (
      typeof value === 'undefined' ||
      value === null ||
      typeof value === 'undefined'
    ) {
      isValidate = false;
    } else if (value === '' && isRequired) {
      isValidate = false;
      errors = ['This field is required'];
    } else if (value.length > 0 && value.trim() === '' && isRequired) {
      isValidate = false;
      errors = ['This field is required'];
    } else if (maxLength !== null && value.length > maxLength) {
      isValidate = false;
      errors = ['This field is required'];
    } else if (value.match(validRegex)) {
      isValidate = true;
    } else {
      isValidate = false;
      errors = [
        'This field must be at least 8 characters and contain at least 1 letter and 1 number',
      ];
    }
    return { errors, isValidate };
  },
  email: ({ value, isRequired, maxLength }) => {
    let [isValidate, errors] = [true, []];
    const validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (
      typeof value === 'undefined' ||
      value === null ||
      typeof value === 'undefined'
    ) {
      isValidate = false;
    } else if (value === '' && isRequired) {
      isValidate = false;
      errors = ['This field is required'];
    } else if (value.length > 0 && value.trim() === '' && isRequired) {
      isValidate = false;
      errors = ['This field is required'];
    } else if (maxLength !== null && value.length > maxLength) {
      isValidate = false;
      errors = ['This field is required'];
    } else if (value.match(validRegex)) {
      isValidate = true;
    } else {
      isValidate = false;
      errors = ['This field must be a valid email address'];
    }

    return { errors, isValidate };
  },
  checkbox: ({ value, isRequired, maxLength }) => {
    let [isValidate, errors] = [true, []];
    return { errors, isValidate };
  },
};
