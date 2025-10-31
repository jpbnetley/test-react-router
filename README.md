# Test React Router & TanStack Router

This project is designed to test and compare the usage of the following react router libraries.
-  [React Router](https://reactrouter.com/)
-  [TanStack Router](https://tanstack.com/router/latest/docs/framework/react/routing/code-based-routing)
- [Tanstack File router](https://tanstack.com/router/v1/docs/framework/react/routing/file-based-routing)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- pnpm

### Installation

```bash
pnpm i
```

### Running the Project

#### Run common library
```bash
pnpm run lib:dev
```
#### Running the router project
```bash
  pnpm run react-router:dev
  pnpm run tanstack-router:dev
  pnpm run tanstack-router-file:dev
```

### Building the project

#### Build common library
```bash
pnpm run lib:build
```
#### RuBuilding the router project
```bash
  pnpm run react-router:build
  pnpm run tanstack-router:build
  pnpm run tanstack-router-file:build
```

This will launch the development server. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Project Goal

The main goal of this project is to experiment with and evaluate both React Router and TanStack Router  
for client-side routing in React. You can switch between implementations and observe their differences in usage and behavior.

