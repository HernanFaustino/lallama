# Blog Platform

A simple blog platform built with Next.js, TypeScript, Prisma, and PostgreSQL, including an admin panel to create, edit, and publish posts.

## 📋 Table of Contents

- [📋 Table of Contents](#-table-of-contents)
- [🚀 Tech Stack](#-tech-stack)
- [📦 Prerequisites](#-prerequisites)
- [🛠️ Installation](#️-installation)
- [🗄️ Database Setup](#️-database-setup)
- [🏃 Running the Application](#-running-the-application)
  - [Development Mode](#development-mode)
  - [Production Build](#production-build)
- [📄 License](#-license)
- [📚 Learn More](#-learn-more)
  - [Next.js Resources](#nextjs-resources)
  - [Prisma Resources](#prisma-resources)
  - [PostgreSQL Resources](#postgresql-resources)

## 🚀 Tech Stack

- **Framework:** Next.js
- **UI Library:** React
- **Language:** TypeScript
- **ORM:** Prisma
- **Database:** PostgreSQL
- **Styling:** CSS (With custom Skeleton CSS framework)


## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (comes with Node.js)
- **PostgreSQL** ≥ 14.x (local or remote instance)
- **Git**

## 🛠️ Installation

1. **Clone the repository:**

```bash
git clone https://github.com/HernanFaustino/lallama.git
cd lallama
```

2. **Install dependencies:**

```bash
npm install
```

3. **Create environment file:**

Create a `.env` file in the project root:

```bash
touch .env
```

4. **Configure environment variables:**

Add the following to your `.env` file (ask the team for actual values):

```env
DATABASE_URL="postgresql://<user>:<password>@localhost:5432/<db_name>?schema=public"
NODE_ENV="development"
```

## 🗄️ Database Setup

1. **Generate Prisma Client:**

```bash
npx prisma generate
```

2. **Run database migrations:**

```bash
npx prisma migrate dev
```

3. **(Optional) Seed the database:**

```bash
npx prisma db seed
```

4. **(Optional) Open Prisma Studio to view your data:**

```bash
npx prisma studio
```

## 🏃 Running the Application

### Development Mode

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📚 Learn More

### Next.js Resources

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
- [Next.js GitHub repository](https://github.com/vercel/next.js)

### Prisma Resources

- [Prisma Documentation](https://www.prisma.io/docs)
- [Prisma Schema Reference](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference)

### PostgreSQL Resources

- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [PostgreSQL Tutorial](https://www.postgresqltutorial.com/)

---
