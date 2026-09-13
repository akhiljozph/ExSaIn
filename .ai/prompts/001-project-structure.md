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
