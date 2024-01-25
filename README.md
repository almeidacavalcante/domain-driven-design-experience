# Task and Project Management System

This project is a Task and Project Management System developed in TypeScript with Node.js, applying the principles of Domain-Driven Design (DDD). It offers functionalities for creating, assigning, tracking, and managing tasks and projects, along with an integrated notification system to keep users updated on important changes.

## Features

- **Project Creation and Management**: Create and manage projects, setting deadlines and assigning tasks.
- **Task Management**: Add, update, and remove tasks within each project.
- **Task Assignment**: Assign tasks to different users and track progress.
- **Notifications**: Receive notifications for important updates, such as task assignments, deadline reminders, and status changes.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime environment.
- **TypeScript**: Typed programming language based on JavaScript.
- **DDD**: Principles of Domain-Driven Design to structure business logic.

## Project Structure

- `src/`
  - `domain/`: Contains entity models, value objects, and domain services.
  - `application/`: Application logic that orchestrates the use of entities and domain services.
  - `infrastructure/`: Implementation of the infrastructure layer, such as database and notification mechanisms.
- `tests/`: Unit tests for the different parts of the system.

# Commands

```bash
pnpm init
pnpm i typescript @types/node -D
npx tsc --init
pnpm i vitest -D

# Tests

pnpm i jest ts-jest @types/jest -D
