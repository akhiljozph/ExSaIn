xpeninc/ (The Monorepo Root)
├── apps/
│   ├── xpeninc-ui/          # Angular Host Application
│   ├── xpeninc-server/      # Nest.js Gateway/API
│   └── mfes/
│       └── xpeninc-list/    # React.js Remote MFE
├── libs/
│   ├── shared/
│   │   ├── api-interfaces/  # Shared TS types for JSON payloads
│   │   └── ui-theme/        # Shared CSS/Tailwind configs
│   ├── domain-logic/        # Business logic independent of framework
│   └── database/
│       └── prisma-client/   # Prisma Schema and Generated Client
├── nx.json
└── package.json