# Contacts Management App

A modern contact management application built with Next.js, TypeScript, Drizzle ORM, and PostgreSQL. Users can securely register, log in, and manage their personal contacts through a clean and responsive interface.

## Features

* User Registration and Authentication
* Secure Session-Based Login
* Create Contacts
* View Contacts
* Update Contacts
* Delete Contacts
* Protected Routes
* Form Validation
* PostgreSQL Database Integration
* Server Actions with Next.js
* Responsive UI

## Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* React Hook Form

### Backend

* Next.js Route Handlers
* Server Actions

### Database

* PostgreSQL
* Drizzle ORM

### Authentication

* Cookie-based Session Authentication

---

## Project Structure

```text
src/app/
├── _components/
├── _data/
├── _lib/
├── _types/
      ├── contact.ts
      ├── user.ts
├── (app)/
      ├── (auth)/
      ├── contact/
      ├── layout.tsx
      ├── page.tsx  
├── (public)/
      ├── about/
      ├── features/
      ├── statistics/
      ├── layout.tsx 
├── actions/
       ├── auth.ts
       ├── contact.ts
├── db/
      ├──auth.ts
      ├──contact.ts
├── layout.tsx 

src/db/
├── schema.ts

src
├──index.ts
```

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
DATABASE_URL=your_database_connection_string
```

Refer to `.env.example` for the complete list of required variables.

---

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd contacts-management-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env file using ``.env.example` as a reference.

### 4. Run Database Migrations

```bash
npm run db:generate
npm run db:migrate
```

### 5. Start Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

---

## Available Scripts

```bash
npm run dev
```

Starts the development server.

```bash
npm run build
```

Builds the application for production.

```bash
npm run start
```

Runs the production build.

```bash
npm run lint
```

Runs ESLint.

---

## Authentication Flow

1. User registers an account.
2. User logs in with email and password.
3. Session data is stored in cookies.
4. Protected pages validate the active session.
5. Users can manage only their own contacts.

---

## Contact Management

Authenticated users can:

* Add new contacts
* Edit existing contacts
* Delete contacts
* View their contact list

Each contact is associated with the authenticated user.

---

## Future Improvements

* Password Hashing (bcrypt)
* Email Verification
* Forgot Password Functionality
* Search and Filter Contacts
* Pagination
* Profile Management
* Contact Categories
* Dark Mode
* API Documentation

---

## License

This project is licensed under the MIT License.

## Author

Vaibhav Khati
