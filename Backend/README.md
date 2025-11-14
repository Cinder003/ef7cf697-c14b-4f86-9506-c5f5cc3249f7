# Prospect Management Backend

This is the backend for the Prospect Management application, built with Node.js, Express, TypeScript, and Prisma.

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Docker (optional, for containerized setup)

### Installation

1.  Navigate to the `Backend` directory:
    ```bash
    cd Backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file by copying the example:
    ```bash
    cp .env.example .env
    ```
    Update the variables in `.env` as needed. The default `DATABASE_URL` points to a local SQLite file.

### Database Setup

This project uses Prisma with a SQLite database.

1.  **Generate Prisma Client**: This command reads your `schema.prisma` and generates the TypeScript types for the Prisma Client.
    ```bash
    npx prisma generate
    ```
2.  **Create and Apply Migrations**: This command will create the SQLite database file (`data/dev.db`) and run the migrations to create the necessary tables.
    ```bash
    npx prisma migrate dev --name init
    ```

### Running the Application

-   **Development Mode**:
    ```bash
    npm run dev
    ```
    This will start the server with `ts-node-dev` for automatic restarts on file changes.

-   **Production Mode**:
    First, build the TypeScript code:
    ```bash
    npm run build
    ```
    Then, start the server:
    ```bash
    npm run start
    ```

## API Endpoints

All endpoints are prefixed with `/api`.

### Prospects

-   `GET /prospects`: Get all prospects.
    -   Query Params: `search` (string) - filters prospects by name, email, or company.
-   `POST /prospects`: Create a new prospect.
-   `GET /prospects/:id`: Get a single prospect by ID.
-   `PUT /prospects/:id`: Update a prospect by ID.
-   `DELETE /prospects/:id`: Delete a prospect by ID.

## Docker

To run the backend using Docker, use the `docker-compose.yaml` file in the root directory.

```bash
docker-compose up --build backend
```