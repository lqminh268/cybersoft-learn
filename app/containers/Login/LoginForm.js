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
  console.log(data)
  return <>{data.componentEl(data)}</>;
});

// ----------------------------------------------------------------------

export default function LoginForm(props) {
  const [showPassword, setShowPassword] = useState(false);
  const dataConfig = props.dataConfig;
  const onChange = props.onChange;
  const isLoading = props.isLoading;
  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

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

  const handleSubmit = (e) => {
    e.preventDefault()
    props.onInit()
  };

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Stack spacing={3}>
        {/* {errors.afterSubmit && <Alert severity="error">{errors.afterSubmit}</Alert>} */}
        {dataConfig.infoFields.map(each => (
          <InputComponent
            {...dataConfig[each]}
            key={each}
            onChange={onChangeData}
          />
        ))}
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <FormControlLabel
          control={<Checkbox checked />}
          label="Remember me"
        />

        <Link
          // component={RouterLink}
          variant="subtitle2" to="/">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton disabled={isLoading || !dataConfig.isValidate} fullWidth size="large" type="submit" variant="contained" loading={false}>
        Login
      </LoadingButton>
    </form>
  );
}
