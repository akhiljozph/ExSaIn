# AI Prompts

This file contains reusable prompts and important AI instructions used during ExSaIn development.

---
**Prompt Number: 1**

## Project Structure

### Initial Project Structure

**Purpose:**
Reorganize the Vite-generated React + TypeScript project into the agreed ExSaIn architecture without implementing any business functionality.

**Prompt:**

Review the existing Vite + React + TypeScript project.

Use `.ai/PROJECT.md` and `.ai/ARCHITECTURE.md` as the source of truth for the project and architecture.

For this task, ONLY reorganize the existing project into the agreed initial structure:

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
│
├── main.tsx
└── index.css
```

### Requirements

1. Inspect the current Vite-generated files before making changes.
2. Move or reorganize existing files only where appropriate.
3. Preserve the existing application behavior.
4. Do NOT implement authentication, dashboard functionality, expenses, income, savings, APIs, state management, or other business logic.
5. Do NOT install any new npm packages.
6. Do NOT create `features/income`, `features/expenses`, or `features/savings` yet.
7. Do NOT create unnecessary files just to populate directories.
8. Do NOT introduce architectural patterns that are not documented in `.ai/ARCHITECTURE.md`.
9. Keep the code compiling after the changes.

### Validation

After making the changes:

* Run the existing type-check/build or equivalent validation.
* Fix only issues caused by this restructuring.
* Report the files/folders that were moved or created.
* Do not make any additional improvements outside the scope of this task.

---

**Prompt Number: 2**

## Routing Foundation

### Purpose

Establish the initial application routing foundation for ExSaIn without implementing authentication, business logic, or feature functionality.

### Prompt

Review the existing ExSaIn project.

Use `.ai/PROJECT.md` and `.ai/ARCHITECTURE.md` as the source of truth.

For this task, ONLY establish the application's routing foundation.

Expected initial routes:

```text
/login
/register
/dashboard
```

Requirements:

1. Inspect the existing project before making changes.
2. Use the existing `src/app/routes.tsx` as the central location for application route definitions.
3. Update `src/app/App.tsx` to integrate the routing configuration appropriately.
4. Use the existing project structure and conventions documented in `.ai/ARCHITECTURE.md`.
5. Create only the minimum placeholder components/pages required to verify that the routes work.
6. Keep authentication pages and dashboard pages as simple placeholders for now.
7. Do NOT implement authentication or authorization.
8. Do NOT implement login, registration, logout, or dashboard functionality.
9. Do NOT add API calls.
10. Do NOT add state management.
11. Do NOT install any new npm packages.
12. Do NOT introduce a routing architecture beyond what is necessary for this task.
13. Keep the existing Vite + React + TypeScript setup intact.
14. Preserve the existing application behavior where possible.
15. Do not make unrelated improvements or refactoring.

Expected behavior:

* `/login` displays a Login placeholder.
* `/register` displays a Register placeholder.
* `/dashboard` displays a Dashboard placeholder.
* The application should load without TypeScript or build errors.

After making the changes:

* Run the existing type-check/build or equivalent validation.
* Fix only issues caused by this routing change.
* Report the files created or modified.
* Explain briefly how the routing is currently organized.
* Do not make any additional changes outside the scope of this task.

---
**Prompt Number: 3**

## Auth Layout Foundation

### Purpose

Establish the reusable and responsive authentication layout for ExSaIn.

The layout must support different visual themes for Login and Registration while keeping the authentication pages independent from layout and responsive behavior.

### Prompt

Review the existing ExSaIn project.

Use `.ai/PROJECT.md` and `.ai/ARCHITECTURE.md` as the source of truth.

For this task, ONLY establish the `AuthLayout` foundation and integrate it with the existing Login and Register routes.

### Design Requirements

#### Desktop / Large Screens

Use a two-panel authentication layout.

For Login:

```text
┌──────────────────────────────────────────────┐
│                                              │
│   LOGIN CONTENT    │    LOGIN VISUAL         │
│                    │                         │
│                    │    Visual Placeholder   │
│                    │                         │
└──────────────────────────────────────────────┘
```

For Registration:

```text
┌──────────────────────────────────────────────┐
│                                              │
│   REGISTER VISUAL  │    REGISTER CONTENT      │
│                    │                         │
│    Visual          │                         │
│    Placeholder     │                         │
│                                              │
└──────────────────────────────────────────────┘
```

The visual panel should therefore appear on the right for Login and on the left for Registration.

#### Mobile / Small Screens

Do NOT preserve the desktop 50/50 split.

Instead, use a full-screen visual/background area with the authentication content centered on top of it.

Conceptually:

```text
┌─────────────────┐
│                 │
│   Visual        │
│   Background    │
│                 │
│  ┌───────────┐  │
│  │   Auth    │  │
│  │  Content  │  │
│  └───────────┘  │
│                 │
│   Visual        │
│   Background    │
│                 │
└─────────────────┘
```

The exact breakpoint can be chosen using standard responsive design principles. Do not introduce unnecessary responsive libraries.

### Architecture Requirements

1. Implement `AuthLayout` as a reusable layout component.
2. Keep layout responsibilities separate from authentication/business logic.
3. Login and Register pages must provide their own content.
4. Login and Register must be able to use different visual themes/content.
5. Do not hardcode Login-specific or Register-specific business logic inside `AuthLayout`.
6. The layout should support changing the visual position based on the current authentication page.
7. Keep the implementation compatible with the existing React Router setup.
8. Follow the existing project structure.
9. Keep the implementation mobile-first and responsive.
10. Do not duplicate Login and Register layout implementations.

### Placeholder Requirement

For now, use simple placeholders for:

* Authentication content
* Login visual
* Registration visual

Do NOT create the actual animations yet.

Do NOT use external images or stock images.

The purpose of this task is to establish the layout and responsive behavior only.

### Scope Restrictions

Do NOT:

* Implement login functionality.
* Implement registration functionality.
* Implement authentication state.
* Add API calls.
* Add form libraries.
* Add state management.
* Add animation libraries.
* Add external images.
* Install new npm packages.
* Redesign the existing application.
* Modify unrelated features.
* Create the actual Login or Registration animations.

### Validation

After implementation:

1. Run the existing type-check/build or equivalent validation.
2. Verify `/login` renders the AuthLayout with Login content and the visual placeholder on the right on desktop.
3. Verify `/register` renders the AuthLayout with Register content and the visual placeholder on the left on desktop.
4. Verify both routes switch to the mobile presentation at an appropriate viewport width.
5. Verify the authentication content remains usable on small screens.
6. Fix only issues caused by this implementation.
7. Report the files created or modified.
8. Briefly explain how `Auth
