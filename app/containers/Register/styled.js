import React, { forwardRef } from 'react';
import { styled } from '@mui/material/styles';

export const ContentStyle = styled('div')(({ theme }) => ({
    maxWidth: 528,
    margin: 'auto',
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(12, 0),
}));