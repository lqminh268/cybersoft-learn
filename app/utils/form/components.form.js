/* eslint-disable react/prop-types */
import React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker';
import { Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select } from '@mui/material';
import UIPassword from '../../components/UIPassword';

export const MAP_INPUT_TYPE = {
  singleLineText: props => (
    <TextField
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
    />
  ),
  email: props => (
    <TextField
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
    />
  ),
  password: props => <UIPassword {...props} />,
  filedArea: props => (
    <TextField
      value={props.value}
      required={props.isRequired}
      id={props.label}
      label={props.label}
      defaultValue={props.defaultValue}
      onChange={props.onChange(props.name)}
      fullWidth
      multiline
      rows={4}
      error={props.errors.length > 0}
      helperText={props.errors[0]}
    />
  ),
  dateTimePicker: props => (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDateTimePicker
        renderInput={props => <TextField fullWidth {...props} />}
        label={props.label}
        value={props.value}
        onChange={props.onChange(props.name)}
        fullWidth
        disabled={props.isDisabled}
      />
    </LocalizationProvider>
  ),
  select: props => (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={props.value}
        label="Age"
        onChange={props.onChange(props.name)}
        error={props.errors.length > 0}
        helperText={props.errors[0]}
      >
        {props.option.map(each => (
          <MenuItem value={each.value}>{each.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  ),
  checkbox: props => (
    <FormControlLabel
      control={
        <Checkbox checked={props.value} value={props.value} onClick={props.onClick(props.name)} />
      }
      label={props.label}
    />
  ),
};
