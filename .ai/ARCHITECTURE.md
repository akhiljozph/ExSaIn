# Project Structure

ExSaIn follows a feature-oriented React application structure.

The structure is designed to:

* Keep business features isolated.
* Keep reusable code separate from feature-specific code.
* Make the application easy to understand and maintain.
* Support incremental development.
* Avoid unnecessary architectural complexity.
* Keep the application responsive across mobile, tablet, and desktop devices.

## Directory Structure

```text
src/
├── app/
│   ├── App.tsx
│   ├── routes.tsx
│   └── providers/
│
├── features/
│   ├── auth/
│   └── dashboard/
│
├── components/
│   ├── ui/
│   └── common/
│
├── layouts/
│   ├── AuthLayout/
│   └── AppLayout/
│
├── services/
├── hooks/
├── types/
├── utils/
├── assets/
├── theme/
│
├── main.tsx
└── index.css
```

## Directory Responsibilities

### `app/`

Contains application-level configuration and composition.

Examples:

* Root application component.
* Route configuration.
* Global providers.
* Application-wide configuration.

Business-specific components should not be placed here.

---

### `features/`

Contains the application's business features.

Each major business domain should have its own feature boundary.

Current features:

```text
features/
├── auth/
└── dashboard/
```

Planned features:

```text
features/
├── auth/
├── dashboard/
├── income/
├── expenses/
└── savings/
```

Feature-specific components, hooks, services, types, and logic should remain inside their respective feature whenever possible.

For example:

```text
features/
└── expenses/
    ├── components/
    ├── hooks/
    ├── services/
    ├── types/
    └── ...
```

Do not move feature-specific code into global folders merely for organizational purposes.

---

### `components/`

Contains components that are genuinely reusable across multiple features.

```text
components/
├── ui/
└── common/
```

`ui/` contains generic UI building blocks.

Examples:

* Button
* Input
* Modal
* Select
* Card

`common/` contains reusable application-level components that are not tied to a specific business feature.

Examples:

* Loading state
* Error state
* Empty state
* Confirmation dialog

A component should not be placed here simply because it is a component.

For example, `ExpenseForm` belongs inside `features/expenses/`, not inside `components/`.

---

### `layouts/`

Contains application-wide page layouts.

```text
layouts/
├── AuthLayout/
└── AppLayout/
```

`AuthLayout` is used for authentication-related pages such as:

* Login
* Registration

`AppLayout` is used for authenticated application pages such as:

* Dashboard
* Income
* Expenses
* Savings

Layouts are responsible for page structure and responsive navigation, not business logic.

---

### `services/`

Contains application-level infrastructure and external communication.

Potential responsibilities include:

* API communication
* Authentication infrastructure
* Browser storage
* External integrations

Feature-specific services should remain inside their feature when appropriate.

For example:

```text
features/
└── expenses/
    └── services/
```

should be preferred over putting every service into the global `services/` directory.

---

### `hooks/`

Contains reusable application-level React hooks.

Feature-specific hooks should remain inside the corresponding feature.

For example:

```text
features/
└── expenses/
    └── hooks/
```

A hook should be moved to the global `hooks/` directory only when it is genuinely reusable across multiple areas of the application.

---

### `types/`

Contains genuinely shared TypeScript types.

Feature-specific types should remain inside their feature.

For example:

```text
features/
└── expenses/
    └── types/
```

should contain expense-specific types.

Shared types that are used by multiple unrelated features may be placed in:

```text
src/types/
```

---

### `utils/`

Contains generic, stateless utility functions.

Examples:

* Date formatting
* Currency formatting
* Number formatting
* Generic data transformations

Avoid turning this directory into a miscellaneous collection of unrelated functions.

---

### `assets/`

Contains application assets such as:

* Images
* Icons
* Fonts
* Static visual resources

---

### `theme/`

Contains the ExSaIn design system as a single MUI theme.

```text
theme/
├── index.ts        // createTheme composition
├── palette.ts      // colours
├── typography.ts   // type scale
├── shadows.ts      // elevation ramp
├── components.ts   // MUI component defaults
└── tokens.ts       // radius scale shared by index.ts and components.ts
```

Material UI is the application's component library, and the theme is the single
source of truth for colour, typography, spacing, radius and elevation.

Rules:

* Components should read design values from the theme rather than hardcoding
  colours, radii or font sizes.
* The theme contains presentation only. No business logic belongs here.
* The theme is applied once, at application level, via
  `app/providers/AppThemeProvider.tsx`.
* Screen-specific styling belongs with its component or feature, not in the
  theme.

The visual direction is deep blue primary with teal as a secondary accent, on a
light neutral background.

---

### `main.tsx`

The application's entry point.

It is responsible for bootstrapping the React application.

---

### `index.css`

Contains global CSS and application-wide styling foundations.

Feature-specific styling should remain close to the feature/component when appropriate.

## Architectural Principle: Start Local, Promote When Needed

Code should initially live as close as possible to the feature that owns it.

When code becomes genuinely reusable across multiple features, it can be promoted to a shared location.

For example:

```text
features/expenses/components/ExpenseTable.tsx
```

should remain there unless another feature genuinely needs the same component.

Do not create global abstractions before there is a real need for them.

## Responsive Architecture

Mobile responsiveness is a first-class requirement of ExSaIn.

The application must support:

* Mobile
* Tablet
* Desktop

Responsive behavior should be considered when designing:

* Layouts
* Navigation
* Forms
* Tables
* Financial data displays
* Charts
* Modals
* Reusable components

Components should not assume a fixed screen size or desktop-only layout.

Responsive behavior should be implemented without duplicating business logic.

## Current Structure vs Planned Structure

Only create directories when they are needed.

The initial project should contain the structure required for the currently implemented features.

Future feature directories such as:

```text
features/income/
features/expenses/
features/savings/
```

will be introduced when development of those features begins.

This keeps the project structure meaningful and avoids creating large numbers of empty directories.
