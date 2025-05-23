# Digital Diner Backend

The server-side component of the Digital Diner food ordering application, providing API endpoints for menu management, user authentication, and order processing.

## Overview

This backend service powers the Digital Diner application with a robust API that handles user authentication, menu item management, and order processing. It uses a dual-database architecture with MongoDB for menu items and PostgreSQL for user data and orders.

## Features

- **User Authentication**: Complete authentication system with email/password and phone number login options
- **JWT-based Sessions**: Secure token-based authentication with HTTP-only cookies
- **Menu Management**: API endpoints to create, retrieve, and search menu items
- **Order Processing**: Create and retrieve orders with validation
- **Dual Database Architecture**: MongoDB for menu items and PostgreSQL for user data and orders

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Databases**:
  - PostgreSQL (via Prisma ORM)
  - MongoDB (via Mongoose)
- **Authentication**: JWT, bcrypt
- **Other Tools**: 
  - Prisma (ORM for PostgreSQL)
  - Mongoose (ODM for MongoDB)
  - dotenv (Environment variable management)
  - cors (Cross-Origin Resource Sharing)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL database
- MongoDB database
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/Dining_Diner.git
cd Dining_Diner/backend
```
2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```.env
# Server configuration
PORT=3000
NODE_ENV=development

# Database URLs
DATABASE_URL="postgresql://username:password@localhost:5432/dining_diner"
MONGO_URL="mongodb://localhost:27017/dining_diner"

# JWT configuration
JWT_SECRET="your-secret-key"

# CORS configuration
CORS_ORIGIN="http://localhost:5173,http://localhost:3000"
```

4. Generate Prisma client
``` bash 
npx prisma generate 
```
5. Start the development server 
``` bash
npm run dev 
```

## API Endpoints 

### User Authentication
- POST /api/user - Register a new user
- POST /api/user/signinByPhone - Login with phone number
- POST /api/user/signinEmail - Login with email and password
- POST /api/user/signout - Logout user
- GET /api/user/check-auth - Verify authentication status
### Menu Items
- GET /menu - Get all menu items
- GET /menu/:id - Get a specific menu item by ID
- POST /menu - Create a new menu item
- GET /menu/search - Search menu items by name or category
### Orders
- POST /order - Create a new order
- POST /order/get - Get orders for a specific user
- GET /order/getAll - Get all orders (admin only)

## Project Structure
```text
backend/
├── config/             # Database connection configuration
│   ├── mongodb.js      # MongoDB connection setup
│   └── postgresSql.js  # PostgreSQL connection setup
├── controllers/        # Request handlers
│   ├── menuItem.js     # Menu item controllers
│   ├── orderController.js # Order controllers
│   └── userController.js  # User authentication controllers
├── middleware/         # Express middleware
│   └── verifyToken.js  # JWT authentication middleware
├── models/             # MongoDB models
│   └── menuModel.js    # Menu item schema
├── prisma/             # Prisma ORM configuration
│   ├── client.js       # Prisma client setup
│   └── schema.prisma   # Database schema definition
├── routes/             # API route definitions
│   ├── menuRoutes.js   # Menu item routes
│   ├── orderRoutes.js  # Order routes
│   └── userRoutes.js   # User authentication routes
├── seed/               # Database seeding
│   └── data.js         # Seed data for menu items
├── utils/              # Utility functions
│   └── generateTokenAndSetCookie.js # JWT token generation
├── .env                # Environment variables (not in version control)
├── .gitignore          # Git ignore configuration
├── package.json        # Project dependencies and scripts
└── server.js           # Application entry point
```

