## Login & Registration UI

### Purpose

Build the Login and Registration user interface on top of the existing `AuthLayout`, ExSaIn MUI theme and React Router configuration, without implementing any real authentication.

### Prompt

You are working on the ExSaIn project, a personal finance application built with React, TypeScript, Vite, React Router, and Material UI (MUI).

Before making any changes, inspect the existing project structure and these project context files:

* `.ai/PROJECT.md`
* `.ai/ARCHITECTURE.md`
* `.ai/DEVELOPMENT.md`

Also inspect the existing:

* `AuthLayout`
* MUI/ExSaIn theme
* React Router configuration
* Existing auth-related files

Treat the existing architecture and completed decisions as the source of truth. Do not unnecessarily restructure existing code.

### Objective

Build the **Login and Registration UI** for ExSaIn using:

* React
* TypeScript
* MUI
* The existing custom ExSaIn theme
* The existing `AuthLayout`
* Existing React Router configuration

This task is ONLY about the authentication UI.

Do NOT implement real authentication, API calls, backend integration, token handling, persistence, or password storage.

### Existing Design Direction

The following visual decisions are already approved.

#### Overall style

* Modern
* Clear
* Professional fintech
* Clean and uncluttered
* Strong visual hierarchy
* Financial/productivity application feel

Avoid overly futuristic or decorative UI.

#### Typography

* Professional
* Clean
* Highly readable
* Strong hierarchy

Use the existing ExSaIn theme typography.

Do not introduce separate typography values directly into the auth components unless genuinely necessary.

#### Forms/Cards

* Premium subtle
* Clean surfaces
* Subtle elevation
* Very light borders where useful
* No heavy shadows
* No excessive glassmorphism

#### Border radius

* Moderately rounded
* Approximately 8–12px
* Follow the existing theme rather than hardcoding values.

#### Spacing

* Balanced
* Comfortable but not excessive
* Use the MUI theme spacing system.

#### Colors

The approved brand direction is:

* Primary → Deep blue
* Secondary → Teal
* Success → Green
* Warning → Amber
* Error → Red
* Background → Light neutral
* Surface → White/light neutral
* Text → Dark neutral

Use the existing ExSaIn theme rather than defining colors locally.

### AuthLayout Requirements

Use the existing `AuthLayout`.

Do not redesign or replace the AuthLayout unless an existing implementation is genuinely incompatible with the requirements.

The intended behavior is:

#### Login — Desktop

Two-panel layout:

LEFT:

* Login form/content

RIGHT:

* Login-specific visual/animation area

#### Registration — Desktop

Two-panel layout:

LEFT:

* Registration-specific visual/animation area

RIGHT:

* Registration form/content

Login and Registration should have different visual/animation configurations.

If the current AuthLayout already supports configuration for the visual side, use that mechanism.

If animation implementation has not yet been completed, preserve the visual area as an appropriate placeholder/foundation. Do NOT introduce a large animation implementation as part of this task.

#### Mobile

Do NOT preserve the desktop 50/50 split.

Use the AuthLayout's mobile behavior:

* Full-screen visual/background area
* Auth content presented clearly above it
* Form remains highly readable
* Form should be comfortable to use on touch devices
* Avoid making the form unnecessarily small

The mobile layout must not require horizontal scrolling.

### Login Page

Create:

`features/auth/pages/LoginPage.tsx`

The Login page should contain a production-quality UI structure.

Include:

#### Branding

* ExSaIn logo/wordmark placeholder if an actual logo does not yet exist
* Clear application name
* Short supporting message appropriate for a personal finance application

Do not create a complex logo as part of this task.

#### Login fields

1. Email
2. Password

Use appropriate MUI form controls.

Password input should provide:

* Password masking
* Show/hide password interaction
* Accessible label

#### Actions

Include:

* Remember me checkbox
* Forgot password link
* Login button
* Link to Registration

The Forgot Password link does not need functional implementation yet.

The Login button does not need real authentication yet.

Use appropriate placeholder behavior for the submit action without pretending that authentication has succeeded.

#### Validation readiness

Prepare the form structure so validation can be added cleanly later.

At minimum:

* Required-field awareness
* Appropriate input types
* Email input semantics
* Password input semantics

Do not introduce a validation library unless there is already one in the project.

### Registration Page

Create:

`features/auth/pages/RegisterPage.tsx`

Create a clean registration experience appropriate for ExSaIn.

Include:

#### Branding

* ExSaIn branding
* Short supporting message

#### Registration fields

Use a sensible initial registration model:

1. Full name
2. Email
3. Password
4. Confirm password

Password fields should provide:

* Password masking
* Show/hide password interaction
* Accessible labels

#### Actions

Include:

* Create Account button
* Link to Login

The registration action does not need real backend functionality yet.

#### Validation readiness

Prepare the form structure for future validation.

The UI should clearly support future validation for:

* Required fields
* Email format
* Password requirements
* Password confirmation matching

Do not add a validation library unless one already exists.

### Component Structure

Keep business/domain-specific UI inside the auth feature.

Prefer a structure such as:

```text
src/
└── features/
    └── auth/
        ├── components/
        │   ├── LoginForm.tsx
        │   └── RegisterForm.tsx
        │
        └── pages/
            ├── LoginPage.tsx
            └── RegisterPage.tsx
```

Use architectural judgment if the current project structure suggests a better small variation.

Do NOT move these forms into global `components/`.

### Reusability

Avoid premature abstraction.

Do not create a generic `AuthForm`, `UniversalForm`, `BaseForm`, or similar abstraction just because Login and Registration both contain fields.

Create reusable components only where there is clear, meaningful reuse.

Follow:

**Start local → prove reuse → promote to shared.**

### Routing

Connect the pages to the existing React Router routes.

Expected routes:

* `/login`
* `/register`

Use the existing routing architecture.

Do not introduce another routing mechanism.

Ensure the Login ↔ Register navigation works through React Router.

### Responsive Requirements

The pages must work well on:

* Mobile
* Tablet
* Desktop
* Large desktop

Pay particular attention to mobile:

* Touch-friendly inputs/buttons
* Appropriate form width
* No horizontal scrolling
* Comfortable vertical spacing
* Keyboard-friendly form flow
* Clear focus states

Do not duplicate business logic for responsive layouts.

### Accessibility

Use semantic and accessible MUI controls.

Ensure:

* Inputs have accessible labels
* Buttons have meaningful labels
* Links are distinguishable
* Checkbox has a proper label
* Password visibility control has an accessible label
* Focus states remain visible
* Error/validation areas can later be announced appropriately

Do not sacrifice accessibility for visual appearance.

### UI Quality

The final result should feel like a real modern financial application, not a default MUI demo.

Pay attention to:

* Visual hierarchy
* Form alignment
* Input consistency
* Button hierarchy
* Spacing
* Card proportions
* Responsive behavior
* Typography
* Surface/elevation
* Empty space
* Mobile usability

However, avoid unnecessary decoration.

### Do NOT Implement

Do NOT implement:

* Real login
* Real registration
* Backend/API calls
* Authentication state
* JWT
* Cookies
* Sessions
* Password storage
* Email verification
* Forgot-password functionality
* Social login
* Database integration
* Global state management
* Dashboard
* Expense module
* Income module
* Savings module

These will be separate future tasks.

### Documentation

After implementation:

1. Update `.ai/ARCHITECTURE.md` only if the Login/Register implementation introduces an architectural decision that should be documented.
2. Add this completed task to `.ai/PROMPTS.md` following the existing prompt-history format.
3. Do not rewrite unrelated documentation.

### Validation

After implementation:

1. Run TypeScript validation/build.
2. Confirm there are no TypeScript errors.
3. Confirm `/login` renders correctly.
4. Confirm `/register` renders correctly.
5. Confirm Login → Register navigation works.
6. Confirm Register → Login navigation works.
7. Confirm both pages use the existing `AuthLayout`.
8. Confirm the ExSaIn MUI theme is applied.
9. Check responsive behavior at mobile and desktop widths.
10. Confirm there is no horizontal scrolling on mobile.
11. Confirm no authentication/backend functionality was accidentally introduced.

### Final Response

When finished, report:

* Files created/modified
* Components created
* Routes added/updated
* UI/UX decisions implemented
* Responsive behavior implemented
* Validation/build results
* Any issues or decisions requiring my review

Do NOT proceed to real authentication functionality.

Stop at the **Login & Registration UI checkpoint**.
