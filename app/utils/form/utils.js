export const initElementExplicit = ({
  name,
  value,
  maxLength,
  isRequired,
  label,
  errors,
  validate,
}) => ({
  name: name || '',
  value: value || '',
  maxLength: maxLength || null,
  isRequired,
  label: label || '',
  errors: errors || [],
  isValidate: false,
  validate: validate || (() => ({ errors: [], isValidate: false })),
  initValue: value || null,
});

export const MAX_LCODE = 255;
