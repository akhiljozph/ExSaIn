import type { PaletteOptions } from '@mui/material/styles'

/**
 * Deep blue is the brand/action colour, teal is the secondary accent used for
 * positive financial concepts. Every `main` value below clears 4.5:1 against
 * its white `contrastText`.
 */
export const palette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#1B4F9C',
    light: '#4A7CC4',
    dark: '#123A78',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#0E7C7B',
    light: '#3FA6A3',
    dark: '#0A5D5C',
    contrastText: '#FFFFFF',
  },
  success: {
    main: '#1B7F4B',
    light: '#4CA877',
    dark: '#125C35',
    contrastText: '#FFFFFF',
  },
  warning: {
    main: '#A15C00',
    light: '#D9932F',
    dark: '#7A4500',
    contrastText: '#FFFFFF',
  },
  error: {
    main: '#C62828',
    light: '#E05B5B',
    dark: '#93211F',
    contrastText: '#FFFFFF',
  },
  info: {
    main: '#0B6BB5',
    light: '#4093D1',
    dark: '#084F87',
    contrastText: '#FFFFFF',
  },
  grey: {
    50: '#F6F8FB',
    100: '#EDF1F6',
    200: '#E3E8EF',
    300: '#CFD6E0',
    400: '#AAB4C2',
    500: '#8A94A3',
    600: '#6B7688',
    700: '#5A6675',
    800: '#333D4D',
    900: '#121B2A',
  },
  background: {
    default: '#F6F8FB',
    paper: '#FFFFFF',
  },
  text: {
    primary: '#121B2A',
    secondary: '#5A6675',
    disabled: '#8A94A3',
  },
  divider: '#E3E8EF',
  action: {
    hover: 'rgba(18, 27, 42, 0.04)',
    selected: 'rgba(27, 79, 156, 0.08)',
    focus: 'rgba(27, 79, 156, 0.12)',
    disabled: '#8A94A3',
    disabledBackground: '#EDF1F6',
  },
}
