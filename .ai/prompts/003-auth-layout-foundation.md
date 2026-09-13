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
