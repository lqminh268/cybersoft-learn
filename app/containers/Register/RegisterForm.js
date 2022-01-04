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
    Grid,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

const InputComponent = memo(data => {
    return <>{data.componentEl(data)}</>;
});

// ----------------------------------------------------------------------

export default function RegisterForm(props) {
    const [showPassword, setShowPassword] = useState(false);
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

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onInit()
    };

    return (
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Stack spacing={3}>
                <Grid container spacing={2}>
                    {dataConfig.infoFields.map(each => (
                        <Grid item xs={dataConfig[each].grid || 12} key={each}>
                            <InputComponent
                                {...dataConfig[each]}
                                onChange={onChangeData}
                                key={each}
                            />
                        </Grid>
                    ))}
                </Grid>
                <LoadingButton disabled={isLoading || !dataConfig.isValidate} fullWidth size="large" type="submit" variant="contained" loading={isLoading}>
                    Register
                </LoadingButton>
            </Stack>
        </form>
    );
}
