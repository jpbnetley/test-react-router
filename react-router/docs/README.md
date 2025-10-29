# React Router 6 Test Project

This project is a simple test and demonstration of using React Router 6 in a React application.

## Features
- Uses React Router 6 (`react-router-dom` v6)
- Hash-based routing with `createHashRouter`
- Example routes: Home (`/`) and About (`/about`)
- Navigation links and route rendering with `<Outlet />`

## Getting Started

1. Install dependencies:
   ```sh
   pnpm install
   ```

2. Start the development server:
   ```sh
   pnpm dev
   ```

3. Open your browser to the local server (usually http://localhost:5173 or similar).

## Project Structure
- `src/routes/index.tsx`: Defines the router and routes.
- `src/app/App.tsx`: Main layout with navigation and `<Outlet />` for route content.
- `src/app/main.tsx`: Entry point, renders the app with `RouterProvider`.

## Purpose
This project is for testing and learning how to set up and use React Router 6 in a modern React app.

