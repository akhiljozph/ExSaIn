## Theme Foundation

### Purpose

Establish the foundational ExSaIn MUI theme/design system, covering palette, typography, radius, spacing, elevation and core component defaults, without implementing any application screens.

### Prompt

You are working on the ExSaIn project, a personal finance application built with React, TypeScript, Vite, React Router, and Material UI (MUI).

Before making any changes, inspect the existing project structure and the existing `.ai/PROJECT.md`, `.ai/ARCHITECTURE.md`, and `.ai/DEVELOPMENT.md` files. Treat those files as project context and preserve the architecture and decisions already established.

### Current UI/UX Design Decisions

The ExSaIn visual direction has been explicitly decided as follows.

#### 1. Overall Visual Style

ExSaIn should feel:

* Modern
* Clear
* Professional
* Fintech-oriented
* Clean and uncluttered
* Easy to scan, especially for financial information

Avoid:

* Excessive decoration
* Overly futuristic styling
* Excessive gradients
* Heavy glassmorphism
* Visually noisy interfaces

The application should feel polished and premium without sacrificing clarity.

#### 2. Typography

The typography direction is:

* Professional
* Clean
* Highly readable
* Suitable for financial data
* Strong visual hierarchy
* Financial values/numbers should be easy to scan

Use a modern professional sans-serif font strategy.

Choose sensible exact font sizes, weights, line heights, and letter spacing based on these requirements.

Do not introduce a web-font dependency unless there is a clear benefit. Prefer a high-quality system font stack if it provides an appropriate result.

Do NOT make typography overly large, playful, decorative, or experimental.

#### 3. Color Direction

The color direction has been explicitly decided:

##### Primary brand direction

**Deep blue**

Use deep blue as the primary brand/action color because it communicates:

* Trust
* Professionalism
* Stability
* Financial credibility

##### Secondary/accent direction

**Teal**

Use teal as a secondary/accent color where appropriate, particularly for positive financial concepts and visual differentiation.

##### Supporting semantic colors

Include appropriate semantic colors for:

* Success → green
* Warning → amber
* Error → red
* Information → appropriate informational blue
* Neutral states → neutral gray

##### Neutral colors

Use:

* Very light neutral application background
* White/light surfaces for cards
* Dark neutral primary text
* Softer neutral secondary text
* Subtle neutral borders/dividers

The palette should be restrained.

Do NOT make the application highly colorful.

Do NOT choose a completely different primary brand color.

Do NOT treat teal as the primary brand color. Deep blue is primary; teal is secondary/accent.

Ensure sufficient contrast and accessibility.

#### 4. Form/Card Appearance

The design direction is:

**Premium subtle**

Use:

* Clean surfaces
* Subtle elevation
* Very light borders where useful
* Soft visual hierarchy
* Controlled shadows

Avoid:

* Heavy shadows
* Excessive outlines
* Strong glassmorphism
* Excessive gradients
* Decorative card effects

Cards should feel premium without drawing attention away from their content.

#### 5. Border Radius

Use a moderately rounded design.

The general radius direction is approximately:

**8–12px**

Use a consistent radius system rather than arbitrary radius values.

Apply this consistently to:

* Cards
* Inputs
* Buttons
* Dialogs
* Menus
* Interactive surfaces

#### 6. Spacing Philosophy

Use a **balanced spacing philosophy**.

The UI should have:

* Comfortable spacing between sections
* Appropriate spacing between related controls
* Tighter spacing between closely related elements
* More separation between unrelated content groups
* Responsive spacing across mobile, tablet, and desktop

Avoid both:

* Cramped layouts
* Excessive whitespace

Use MUI's spacing system rather than arbitrary pixel values wherever practical.

### Objective

Create the foundational **ExSaIn MUI theme/design system**.

This task is ONLY about establishing the UI foundation.

Do NOT implement:

* Login UI
* Register UI
* Dashboard UI
* Authentication logic
* Expense UI
* Income UI
* Savings UI
* Business logic
* Application-specific screens

Stop after completing the theme foundation.

### Requirements

#### 1. MUI Setup

If MUI is not already installed, install the appropriate MUI dependencies required by the current project.

Use current stable MUI APIs compatible with the project's existing React and TypeScript versions.

Do not introduce another UI component library.

#### 2. ExSaIn Theme

Create a centralized MUI theme using `createTheme`.

The theme should establish the application's visual foundation, including:

* Palette
* Typography
* Border radius
* Spacing
* Shadows/elevation
* Relevant component defaults
* Relevant component variants

Do not scatter design-system values throughout individual components.

#### 3. Palette

Create the ExSaIn palette using the already-decided direction:

* Primary → Deep blue
* Secondary → Teal
* Success → Green
* Warning → Amber
* Error → Red
* Info → Blue/informational
* Background → Light neutral
* Surface → White/light neutral
* Text → Dark neutral
* Borders/dividers → Soft neutral

Choose exact accessible color values based on this direction.

The exact hex values are now part of the implementation decision, but they MUST remain consistent with the agreed blue + teal fintech direction.

Keep the palette restrained and professional.

#### 4. Typography

Create a professional typography hierarchy covering, where appropriate:

* Page titles
* Section headings
* Card headings
* Body text
* Labels
* Helper text
* Buttons
* Financial values/numbers

Choose sensible exact:

* Font family
* Font sizes
* Font weights
* Line heights
* Letter spacing

Keep the typography professional and highly readable.

Financial numbers should have strong readability and hierarchy.

#### 5. Border Radius

Create a consistent radius system centered around the agreed **8–12px moderately rounded** direction.

Avoid arbitrary radius values throughout the application.

#### 6. Spacing

Use MUI's spacing system.

Keep the spacing system simple and balanced.

Do not create a large custom design-token framework unless it is genuinely required.

#### 7. Shadows / Elevation

Create a subtle elevation strategy.

The visual hierarchy should primarily come from:

1. Surface/background contrast
2. Borders where useful
3. Subtle elevation

Avoid heavy shadows.

#### 8. MUI Component Customization

Customize only the foundational components where doing so establishes meaningful ExSaIn consistency.

Prioritize:

* Button
* TextField
* Card
* Paper
* Dialog
* AppBar
* Drawer
* Menu
* Chip
* Alert

Do not unnecessarily customize every MUI component.

Component customization should use theme values rather than hardcoded values wherever practical.

#### 9. Responsive Foundation

The theme and styling approach must support:

* Mobile
* Tablet
* Desktop
* Large desktop

Mobile responsiveness is a first-class requirement for ExSaIn.

Do not introduce desktop-only assumptions.

Do not duplicate business logic for responsive behavior.

#### 10. Theme Organization

Use an organization that is easy to maintain.

A structure such as the following is acceptable:

```text
src/
└── theme/
    ├── index.ts
    ├── palette.ts
    ├── typography.ts
    ├── components.ts
    └── ...
```

However, use architectural judgment.

Do not create files merely for the sake of separation. If a smaller structure is cleaner, use it.

#### 11. Application Integration

Integrate the ExSaIn theme at the appropriate application level using MUI's `ThemeProvider`.

The theme should be globally available to the application.

Follow the existing `app/` architecture.

Do not introduce business logic into the theme.

#### 12. Global CSS

Inspect the existing `src/index.css`.

Remove or adjust Vite starter styles that conflict with the ExSaIn design system.

Do not move all component styling into global CSS.

Global CSS should remain limited to genuine global foundations.

#### 13. Accessibility

Ensure the theme provides appropriate accessibility.

Pay particular attention to:

* Color contrast
* Focus states
* Disabled states
* Interactive controls
* Form controls
* Readability

Do not remove visible focus indicators merely for aesthetics.

### Architecture Rules

Follow the existing project architecture and principles:

* `app/` → application-level composition/configuration
* `features/` → business-domain functionality
* `components/` → genuinely reusable cross-feature UI
* `layouts/` → application layout structure
* Feature-specific code should remain within its feature
* Avoid premature abstractions
* Start local → prove reuse → promote to shared
* Do not create empty feature folders unnecessarily
* Keep responsive behavior as a cross-cutting concern

### Important Constraints

Do NOT:

* Build Login/Register screens
* Build authentication logic
* Build Dashboard UI
* Build Expense/Income/Savings modules
* Add Redux or another state-management library
* Add Tailwind CSS
* Add another UI component library
* Create a custom abstraction over every MUI component
* Create an unnecessarily complex design-token architecture
* Hardcode colors throughout components
* Replace the agreed project architecture
* Change the agreed blue + teal visual direction

### Documentation

After implementation:

1. Update `.ai/ARCHITECTURE.md` only if the theme structure introduces an architectural decision worth documenting.
2. Add this completed task to `.ai/PROMPTS.md` following the project's existing prompt-history format.
3. Do not rewrite unrelated documentation.

### Validation

After implementation:

1. Run TypeScript/build validation.
2. Confirm there are no TypeScript errors.
3. Confirm the application starts successfully.
4. Confirm the MUI theme is applied at the application level.
5. Confirm Vite starter styling that conflicts with ExSaIn has been removed.
6. Confirm the theme uses the agreed deep-blue primary + teal secondary direction.

### Final Response

When finished, report:

* Files created/modified
* Dependencies added
* Final palette choices and exact color values
* Typography choices and exact values
* Border-radius values
* Spacing approach
* Shadow/elevation approach
* MUI components customized
* Validation/build results
* Any design decisions that require my approval

Do NOT proceed to Login/Register UI implementation.

Stop at the **ExSaIn Theme Foundation checkpoint**.
