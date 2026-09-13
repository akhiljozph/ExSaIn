import type { Components, Theme } from '@mui/material/styles'
import { radii } from './tokens'

/**
 * Foundational component defaults only. Anything specific to a single screen
 * belongs with that screen, not here.
 */
export const components: Components<Theme> = {
  MuiCssBaseline: {
    styleOverrides: (theme) => ({
      ':root': {
        colorScheme: 'light',
      },
      body: {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        textRendering: 'optimizeLegibility',
      },
      // A visible focus ring is a baseline requirement, not a style choice.
      '*:focus-visible': {
        outline: `2px solid ${theme.palette.primary.main}`,
        outlineOffset: 2,
      },
    }),
  },

  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: radii.md,
        minHeight: 40,
        paddingInline: theme.spacing(2),
        '&.Mui-focusVisible': {
          outline: `2px solid ${theme.palette.primary.main}`,
          outlineOffset: 2,
        },
      }),
    },
    variants: [
      { props: { size: 'small' }, style: { minHeight: 32, paddingInline: 12 } },
      { props: { size: 'large' }, style: { minHeight: 48, paddingInline: 24 } },
    ],
  },

  MuiTextField: {
    defaultProps: {
      variant: 'outlined',
    },
  },

  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: radii.md,
        backgroundColor: theme.palette.background.paper,
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.divider,
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.grey[400],
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderWidth: 2,
          borderColor: theme.palette.primary.main,
        },
        '&.Mui-disabled': {
          backgroundColor: theme.palette.action.disabledBackground,
        },
      }),
    },
  },

  MuiInputLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontWeight: 500,
        '&.Mui-focused': {
          color: theme.palette.primary.main,
        },
      }),
    },
  },

  MuiFormHelperText: {
    styleOverrides: {
      root: ({ theme }) => ({
        marginInline: 0,
        marginTop: theme.spacing(0.75),
      }),
    },
  },

  MuiPaper: {
    defaultProps: {
      elevation: 0,
    },
    styleOverrides: {
      root: {
        backgroundImage: 'none',
        borderRadius: radii.lg,
      },
      outlined: ({ theme }) => ({
        borderColor: theme.palette.divider,
      }),
    },
  },

  MuiCard: {
    defaultProps: {
      variant: 'outlined',
    },
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: radii.lg,
        borderColor: theme.palette.divider,
        backgroundColor: theme.palette.background.paper,
      }),
    },
  },

  MuiCardContent: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(3),
        '&:last-child': {
          paddingBottom: theme.spacing(3),
        },
      }),
    },
  },

  MuiDialog: {
    styleOverrides: {
      paper: ({ theme }) => ({
        borderRadius: radii.lg,
        boxShadow: theme.shadows[7],
      }),
    },
  },

  MuiAppBar: {
    defaultProps: {
      elevation: 0,
      color: 'inherit',
    },
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 0,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        borderBottom: `1px solid ${theme.palette.divider}`,
      }),
    },
  },

  MuiDrawer: {
    styleOverrides: {
      paper: ({ theme }) => ({
        borderRadius: 0,
        backgroundColor: theme.palette.background.paper,
        borderColor: theme.palette.divider,
      }),
    },
  },

  MuiMenu: {
    styleOverrides: {
      paper: ({ theme }) => ({
        borderRadius: radii.md,
        border: `1px solid ${theme.palette.divider}`,
        boxShadow: theme.shadows[4],
      }),
      list: ({ theme }) => ({
        padding: theme.spacing(0.5),
      }),
    },
  },

  MuiMenuItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: radii.sm,
        paddingBlock: theme.spacing(1),
      }),
    },
  },

  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: radii.sm,
        fontWeight: 500,
      },
    },
  },

  MuiAlert: {
    defaultProps: {
      variant: 'standard',
    },
    styleOverrides: {
      root: {
        borderRadius: radii.md,
      },
    },
  },
}
