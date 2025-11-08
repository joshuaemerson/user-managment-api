# 🧩 acquisitions-api

The **acquisitions-api** project serves as a demonstration of newly *acquired* backend development skills — hence the name.  

It brings together practical experience with **Docker**, **Express.js**, **Zod validations**, **security middleware**, and **CI/CD pipelines** through **GitHub Actions**.  

This API showcases modern Node.js development practices, emphasizing reliability, scalability, and maintainability.

---

## 🚀 Getting Started

### 1️⃣ Install Dependencies

Clone the repository and install all dependencies:

```bash
git clone https://github.com/joshuaemerson/acquisition-api.git
cd acquisition-api
npm install
```

## .env.development example

PORT=8000
DATABASE_URL=postgres://<username>:<password>@<host>/<database>
JWT_SECRET=supersecretkey
ARCJET_KEY=<your_arcjet_key>
NODE_ENV=development

# Running the Application

## Development Mode
```bash
./scripts/dev.sh
```

- Runs the app using Docker Compose and the development target defined in the Dockerfile.
- Supports live code reloading and mounts your local source code.
- Useful for local development and debugging.

## Production Mode
```bash
./scripts/prod.sh
```

- Builds and runs the production image using Docker Compose.
- Optimized for deployment with minimal build context and no live reload.
- Simulates the environment the app would run in production.

# Project Structure

```bash
acquisitions-api/
├── drizzle/                 # Drizzle ORM migrations
├── logs/                    # Winston and Morgan log output
├── scripts/                 # Helper bash scripts (dev.sh, prod.sh)
├── src/
│   ├── config/              # Database and app configuration
│   ├── middleware/          # Security and authentication middleware
│   ├── models/              # Drizzle schema definitions
│   ├── routes/              # Express routes
│   ├── services/            # Business logic and helpers
│   ├── validations/         # Zod schema validations
│   └── app.js               # Express app entry point
├── .env.development         # Example environment variables
├── .eslintrc.json           # Linting configuration
├── .prettierrc              # Prettier formatting configuration
├── Dockerfile               # Multi-stage Docker build
├── docker-compose.yml       # Compose file for API + Neon proxy
├── package.json             # Dependencies and scripts
└── README.md
```

# Routes
| Method | Endpoint           | Description                      |
| ------ | ------------------ | -------------------------------- |
| `POST` | `/api/auth/signup` | Create a new user account        |
| `POST` | `/api/auth/login`  | Log in with email and password   |
| `POST` | `/api/auth/logout` | Log out and clear cookies        |
| `GET`  | `/api/users`       | Retrieve all users (admin only)  |
| `GET`  | `/health`          | Health check endpoint for Docker |

## Example Requests
### Signup
```
curl -X POST http://localhost:8000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"Jake","email":"jake@example.com","password":"secret123"}'
```

### Login
```
curl -X POST http://localhost:8000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"jake@example.com","password":"secret123"}'
```

### Fetch users
```
curl -X GET http://localhost:8000/api/users \
  -H "Authorization: Bearer <your_jwt_token>"
```

# Features and Technologies

🧪 Testing

Uses Jest for automated testing to ensure reliable API behavior and detect regressions early.

✅ Validations

Zod is used for input validation, ensuring that incoming data matches expected formats before reaching core logic.

🔐 Security

Arcjet middleware protects the app from suspicious or automated requests.
JWT tokens and cookies manage secure user sessions.
Passwords are hashed automatically before being stored in the database.

🗄 Database

Uses Neon, a serverless PostgreSQL database, for cloud scalability and fast connections.
Drizzle ORM provides type-safe schema definitions and SQL migrations.

📜 Logging

Morgan logs HTTP request data for real-time insight into API calls.
Winston provides structured logging with log files stored in ./logs.

🧹 Code Quality

ESLint and Prettier ensure consistent code style.
Both run automatically via a GitHub Action on every push to maintain code quality.

