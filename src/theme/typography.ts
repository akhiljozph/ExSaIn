import type {
  TypographyStyle,
  TypographyVariantsOptions,
} from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface TypographyVariants {
    numeric: TypographyStyle
    numericLarge: TypographyStyle
  }

  interface TypographyVariantsOptions {
    numeric?: TypographyStyle
    numericLarge?: TypographyStyle
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    numeric: true
    numericLarge: true
  }
}

/** No web-font dependency: the platform UI faces already cover this brief. */
const fontFamily = [
  'system-ui',
  '-apple-system',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
].join(', ')

/** Lining, fixed-width digits so columns of money line up. */
const tabularNumerals: TypographyStyle = {
  fontFamily,
  fontVariantNumeric: 'tabular-nums lining-nums',
  fontFeatureSettings: '"tnum" 1, "lnum" 1',
}

const upMd = '@media (min-width:900px)'

export const typography: TypographyVariantsOptions = {
  fontFamily,
  fontSize: 16,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,

  // Page title.
  h1: {
    fontSize: '1.75rem',
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    [upMd]: { fontSize: '2.25rem' },
  },
  // Section heading.
  h2: {
    fontSize: '1.5rem',
    fontWeight: 700,
    lineHeight: 1.25,
    letterSpacing: '-0.015em',
    [upMd]: { fontSize: '1.75rem' },
  },
  // Card heading.
  h3: {
    fontSize: '1.25rem',
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: '-0.01em',
    [upMd]: { fontSize: '1.375rem' },
  },
  h4: {
    fontSize: '1.125rem',
    fontWeight: 600,
    lineHeight: 1.35,
    letterSpacing: '-0.005em',
  },
  h5: {
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h6: {
    fontSize: '0.875rem',
    fontWeight: 600,
    lineHeight: 1.45,
    letterSpacing: '0.01em',
  },
  subtitle1: {
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1.5,
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: '0.01em',
  },
  body1: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.55,
  },
  body2: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.55,
  },
  button: {
    fontSize: '0.9375rem',
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: '0.01em',
    textTransform: 'none',
  },
  // Helper text.
  caption: {
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: 1.45,
    letterSpacing: '0.01em',
  },
  // Field and group labels.
  overline: {
    fontSize: '0.6875rem',
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },

  // Headline financial figures, e.g. a balance on a dashboard card.
  numericLarge: {
    ...tabularNumerals,
    fontSize: '1.75rem',
    fontWeight: 700,
    lineHeight: 1.15,
    letterSpacing: '-0.01em',
    [upMd]: { fontSize: '2rem' },
  },
  // Inline financial values, e.g. a table cell or list row.
  numeric: {
    ...tabularNumerals,
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: 1.4,
  },
}
