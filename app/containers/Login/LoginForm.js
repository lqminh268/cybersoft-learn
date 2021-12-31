import React, { useState, useCallback, memo } from 'react';
// import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Switch, Route, Link } from 'react-router-dom';

// material
import {
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

const InputComponent = memo(data => {
  return <>{data.componentEl(data)}</>;
});
// ----------------------------------------------------------------------

export default function LoginForm(props) {
  const dataConfig = props.dataConfig;
  const onChange = props.onChange;
  const isLoading = props.isLoading;

  /* ------------------------------ ONCHANGE DATA ----------------------------- */
  const onChangeData = useCallback(
    name => value => {
      const valueTmp = value.target ? value.target.value : value;
      if (valueTmp !== dataConfig[name].value) {
        onChange({ name, value: valueTmp });
      }
    },
    [dataConfig],
  );

  const handleSubmit = e => {
    e.preventDefault();
    props.onInit();
  };

  const onClickData = useCallback(
    name => value => {
      const valueTmp = value.target ? value.target.checked : value;
      if (valueTmp !== dataConfig[name].value) {
        onChange({ name, value: valueTmp });
      }
    },
    [dataConfig],
  );

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Stack spacing={3}>
        {/* {errors.afterSubmit && <Alert severity="error">{errors.afterSubmit}</Alert>} */}
        {dataConfig.infoFields.map(
          each =>
            each !== 'checkbox' && (
              <InputComponent
                {...dataConfig[each]}
                key={each}
                onChange={onChangeData}
                onClick={onClickData}
              />
            ),
        )}
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ my: 2 }}
      >
        {dataConfig.infoFields.map(
          each =>
            each === 'checkbox' && (
              <InputComponent
                {...dataConfig[each]}
                key={each}
                onChange={onChangeData}
                onClick={onClickData}
              />
            ),
        )}

        {/* <Link
          // component={RouterLink}
          variant="subtitle2" to="/">
          Forgot password?
        </Link> */}
      </Stack>

      <LoadingButton
        disabled={isLoading || !dataConfig.isValidate}
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={false}
      >
        Login
      </LoadingButton>
    </form>
  );
}
