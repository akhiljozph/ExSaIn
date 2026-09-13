## Auth Visual Panels

### Purpose

Fill the `AuthLayout` visual panels (Login right, Register left) with real product content instead of the placeholder left behind by task 003, and give the Login panel a rotating set of summary cards.

These requirements came from short conversational requests rather than a single written spec. They are recorded here in the prompt-history format for continuity.

### Prompt

You are working on the ExSaIn project, a personal finance application built with React, TypeScript, Vite, React Router, and Material UI (MUI).

Treat `.ai/PROJECT.md`, `.ai/ARCHITECTURE.md` and `.ai/DEVELOPMENT.md` as the source of truth, along with the existing `AuthLayout`, ExSaIn MUI theme, and auth pages from task 005.

### Objective

The visual panel on Login (right) and Register (left) is currently an empty placeholder. Put something meaningful there.

#### Login panel

Show a product preview: a headline plus a mock ExSaIn summary card built from theme colours, so the panel reads like a real fintech application.

The panel should show **several** summary cards, not just one. Alongside total balance, include other views of the same mock finances. The visible card should change on its own, with a nice animation between cards.

#### Register panel

Use genuinely different content from Login — benefits of the product rather than a data preview.

#### Motion

Add subtle CSS-only motion (gentle fade/rise on mount).

Respect `prefers-reduced-motion`.

### Constraints

* No new npm packages.
* No external images, icon packs, or animation libraries. Inline SVG only.
* All figures are illustrative mock data. Do NOT read or fetch real data.
* Use the existing ExSaIn theme. Do not define colours or typography locally.
* The panel is decorative supporting content; it must not compete with the form for attention.
* Below the `md` breakpoint the panel is only a background behind the form card, so its content must not render there.
* Keep the components inside the auth feature. Do not promote to global `components/`.

### Do NOT Implement

Do NOT implement real authentication, backend/API calls, auth state, data fetching, charting libraries, or any of the dashboard/expense/income/savings modules.

### Documentation

1. Update `.ai/ARCHITECTURE.md` only if an architectural decision is introduced.
2. Add this completed task to `.ai/PROMPTS.md`.

### Validation

1. Run the TypeScript build and ESLint; confirm both are clean.
2. Confirm `/login` and `/register` render correctly.
3. Confirm the Login panel cycles through every card, one visible at a time.
4. Confirm no card content is clipped and the panel does not change height as cards change.
5. Confirm there is no horizontal scrolling.
6. Confirm the panel content is hidden on mobile widths.
7. Confirm no data fetching or authentication was accidentally introduced.

### Final Response

Report files created/modified, components created, UI/UX decisions, motion/accessibility handling, validation results, and anything requiring review.
