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