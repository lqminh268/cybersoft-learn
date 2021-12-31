// ----------------------------------------------------------------------

import { withStyles } from '@mui/styles';
import { createTheme } from '@mui/material';
// import useSettings from '../hooks/useSettings';
import palette from './palette';
import shape from './shape';
import typography from './typography';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';
import breakpoints from './breakpoints';
// const { themeMode, themeDirection } = useSettings();
const isLight = 'light';

const themeOptions = {
  palette: isLight
    ? { ...palette.light, mode: 'light' }
    : { ...palette.dark, mode: 'dark' },
  shape,
  typography,
  breakpoints,
  // direction: themeDirection,
  shadows: isLight ? shadows.light : shadows.dark,
  customShadows: isLight ? customShadows.light : customShadows.dark,
};

const theme = createTheme(themeOptions);
theme.components = componentsOverride(theme);

const GlobalStyles = withStyles(() => ({
  '@global': {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },
    html: {
      width: '100%',
      height: '100%',
      '-ms-text-size-adjust': '100%',
      '-webkit-overflow-scrolling': 'touch',
    },
    body: {
      width: '100%',
      height: '100%',
    },
    '#app': {
      width: '100%',
      height: '100%',
    },
    '#root': {
      width: '100%',
      height: '100%',
    },
    input: {
      '&[type=number]': {
        MozAppearance: 'textfield',
        '&::-webkit-outer-spin-button': { margin: 0, WebkitAppearance: 'none' },
        '&::-webkit-inner-spin-button': { margin: 0, WebkitAppearance: 'none' },
      },
    },
    textarea: {
      '&::-webkit-input-placeholder': { color: theme.palette.text.disabled },
      '&::-moz-placeholder': { opacity: 1, color: theme.palette.text.disabled },
      '&:-ms-input-placeholder': { color: theme.palette.text.disabled },
      '&::placeholder': { color: theme.palette.text.disabled },
    },
    a: { color: theme.palette.primary.main },
    img: { display: 'block', maxWidth: '100%' },

    // Lazy Load Img
    '.blur-up': {
      WebkitFilter: 'blur(5px)',
      filter: 'blur(5px)',
      transition: 'filter 400ms, -webkit-filter 400ms',
    },
    '.blur-up.lazyloaded ': {
      WebkitFilter: 'blur(0)',
      filter: 'blur(0)',
    },
  },
}))(() => null);

export default GlobalStyles;
