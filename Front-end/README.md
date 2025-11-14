# Prospect Management Frontend

This is the frontend for the Prospect Management application, built with React, Vite, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Docker (optional, for containerized setup)

### Installation

1.  Navigate to the `Front-end` directory:
    ```bash
    cd Front-end
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file by copying the example:
    ```bash
    cp .env.example .env
    ```
    The `VITE_API_BASE_URL` should point to your running backend instance (e.g., `http://localhost:3000/api`).

### Available Scripts

-   **`npm run dev`**: Starts the development server with Hot Module Replacement (HMR).
-   **`npm run build`**: Bundles the app for production.
-   **`npm run lint`**: Lints the codebase using ESLint.
-   **`npm run preview`**: Serves the production build locally to preview it.

## Features

-   **Vibrant UI**: A modern, colorful, and responsive user interface built with Tailwind CSS.
-   **CRUD Operations**: Full capabilities to create, read, update, and delete prospects.
-   **Search Functionality**: Easily search and filter the prospect list.
-   **Form Validation**: Client-side form validation using `react-hook-form` and `zod`.
-   **Modals**: Smooth, animated modals for adding and editing prospects.

## Docker

To run the frontend using Docker, use the `docker-compose.yaml` file in the root directory.

```bash
docker-compose up --build frontend
```
The application will be available at `http://localhost`.