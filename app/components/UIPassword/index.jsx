import React, { useState } from 'react';
import { Icon, IconButton, InputAdornment, TextField } from '@mui/material';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
export default function UIPassword(props) {

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TextField
      type={showPassword ? "text" : "password"}
      value={props.value}
      required={props.isRequired}
      id={props.label}
      label={props.label}
      defaultValue={props.defaultValue}
      onChange={props.onChange(props.name)}
      fullWidth
      disabled={props.isDisabled}
      error={props.errors.length > 0}
      helperText={props.errors[0]}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleShowPassword} edge="end">
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
