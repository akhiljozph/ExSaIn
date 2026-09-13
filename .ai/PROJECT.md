# ExSaIn — Project Context

## 1. Project Overview

**Project Name:** ExSaIn

**Meaning:** Expenses, Savings & Income

ExSaIn is a personal finance application designed to help a user track and understand their:

* Income
* Expenses
* Savings
* Investments
* Financial accounts and balances

The initial version is being developed for personal use. If the application becomes successful, it may later be extended to support multiple users as a public application.

---

## 2. Current Technology

The frontend is being developed using:

* React
* TypeScript
* Vite

The application is initially planned as a client-side React application (SPA).

Additional libraries and technologies should be introduced only when there is a clear requirement for them.

---

## 3. Current Product Scope

The initial application should contain the following major areas:

```text
ExSaIn
│
├── Authentication
│   ├── Registration
│   ├── Login
│   └── Logout
│
├── Dashboard
│
├── Income
│
├── Expenses
│   ├── Transactions
│   ├── Bank Accounts
│   ├── Credit Cards
│   └── Liquid Money
│
└── Savings
    ├── SIP
    ├── Stocks
    └── Future investment types
```

This structure represents the current high-level product direction. Individual features and submodules will be refined as development progresses.

---

## 4. Authentication

Users should be able to:

* Register an account.
* Log in to the application.
* Access protected application areas after authentication.
* Log out of the application.

The initial version is intended for a single user, but the application should avoid architectural decisions that would make future multi-user support unnecessarily difficult.

---

## 5. Dashboard

The Dashboard will provide a high-level overview of the user's financial situation.

Potential information includes:

* Total available balance
* Income
* Expenses
* Savings
* Account balances
* Spending summaries
* Investment summaries
* Financial trends

The exact dashboard contents will be defined as the financial modules are developed.

The Dashboard should primarily consume and present information from the underlying modules rather than becoming the owner of financial data.

---

## 6. Income

Income represents money received by the user.

Potential income sources may include:

* Salary
* Other income sources
* Future income categories

The Income module should maintain income records independently from expense records.

---

## 7. Expenses

The Expenses module is responsible for tracking money spent by the user.

The module should support:

### Transactions

A transaction may contain information such as:

* Amount
* Date
* Merchant/payee
* Category
* Payment source
* Notes
* Transaction source

### Bank Accounts

Users should be able to maintain information about their bank accounts and transactions associated with them.

### Credit Cards

Users should be able to maintain their credit cards and track transactions made using them.

### Liquid Money

Users should be able to track physical/cash money or other immediately available liquid funds.

---

## 8. Expense Capture

ExSaIn may eventually support two ways of recording expenses.

### Manual Entry

The user manually creates an expense or transaction.

```text
User
 ↓
Expense Form
 ↓
Transaction
 ↓
Expense
```

### Automatic Detection

The application may eventually detect transactions from sources such as:

* SMS
* Email

A possible future flow is:

```text
SMS / Email
     ↓
Transaction Detection
     ↓
Transaction Parser
     ↓
Detected Transaction
     ↓
User Review / Confirmation
     ↓
Expense Record
```

Automatic detection is a future capability and should not unnecessarily complicate the initial frontend architecture.

Automatic and manual transactions should ultimately use the same underlying transaction model.

---

## 9. Savings

The Savings module is responsible for tracking money allocated toward savings and investments.

The initial planned areas include:

### SIP

Track Systematic Investment Plans and their relevant information.

### Stocks

Track stock-market investments and related portfolio information.

Additional investment/savings types may be added in the future.

---

## 10. Multi-User Future

The initial application is being developed primarily for personal use.

However, the application may eventually be published for other users.

Therefore:

* The current UX can remain focused on a single user.
* The architecture should avoid hard-coding the application around one specific user's data.
* Financial data should conceptually belong to a user.
* Future multi-user support should be possible without redesigning the entire frontend architecture.

Do not introduce complex multi-tenant or enterprise architecture unless future requirements actually justify it.

---

## 11. Development Philosophy

ExSaIn should be developed incrementally.

Do not attempt to implement the entire application at once.

For each feature:

1. Understand the requirement.
2. Determine the appropriate architectural boundary.
3. Design the data and UI responsibilities.
4. Implement the smallest useful version.
5. Validate the implementation.
6. Refactor when a genuine architectural need appears.
7. Move to the next feature.

Prefer simple solutions over premature abstraction.

Do not introduce a dependency, abstraction, design pattern, or architectural layer without a clear reason.

---

## 12. Current Status

The project has been initialized as a React + TypeScript + Vite application.

Current focus:

**Establish the frontend architecture before implementing the major financial modules.**

The next architectural work should define:

* Project/folder structure
* Feature boundaries
* Application routing
* Shared components
* Layout structure
* State management strategy
* API/service architecture
* Authentication architecture
* Development conventions
