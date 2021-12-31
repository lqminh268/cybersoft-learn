import React from 'react';
import {
  Alert,
  Box,
  Container,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import background from '../../assets/image/main-wallpaper.jpg';
import { ContentStyle } from '../Login/styled';
import palette from '../../theme/palette';

export default function Register() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container maxWidth="sm">
        <ContentStyle>
          <Paper
            elevation={0}
            sx={{
              padding: 3,
              textAlign: 'center',
              opacity: 0.75,
            }}
          >
            <Stack direction="row" alignItems="center" sx={{ mb: 5 }}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ color: palette.light.primary.dark }}
                >
                  Get started absolutely FREE.
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  Free forever. No credit card needed.
                </Typography>
              </Box>
              <Tooltip title="jwt">
                <Box>{/* <Logo /> */}</Box>
              </Tooltip>
            </Stack>
            {/* <LoginForm
                onInit={onInit}
                dataConfig={dataConfig}
                onChange={onChange}
                isLoading={isLoading}
              /> */}
          </Paper>
        </ContentStyle>
      </Container>
    </Box>
  );
}
