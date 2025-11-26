# 🚀 Harvee Assessment — User Management System (MERN)

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![React](https://img.shields.io/badge/React-18-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-6+-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

A full-stack **User Management System** built as part of the **Harvee Designs Full-Stack Developer Assessment**.  
This application provides **authentication**, **admin dashboard**, **role-based access control**, and complete **user CRUD operations** with image upload functionality.

---

## ✨ Features

### 🔐 Authentication

- ✅ User **Signup**, **Signin**, and **Logout**
- ✅ JWT-based authentication (Access Token: 1h + Refresh Token: 7d)
- ✅ Automatic token refresh mechanism
- ✅ Secure role-based access (Admin / User)
- ✅ Password hashing with bcrypt

### 👤 User Management

- ✅ View all users (Admin only) with pagination
- ✅ View single user details
- ✅ Edit user details with image upload
- ✅ Delete user (Admin only)
- ✅ Advanced search & filter (name, email, state, city)

### 🖥️ Frontend (React + Vite)

- ✅ React 18 + Vite setup
- ✅ Redux Toolkit for state management
- ✅ Ant Design UI components
- ✅ API service layer with Axios interceptors
- ✅ Persistent login state
- ✅ Protected routes with automatic redirects
- ✅ Responsive design

### 🛠 Backend (Node.js + Express + MongoDB)

- ✅ TypeScript support
- ✅ JWT authentication (access & refresh tokens)
- ✅ Secure password hashing
- ✅ Multer image upload (2MB max, jpg/png)
- ✅ Complete REST API with validation
- ✅ Admin-only route protection
- ✅ CORS + Helmet security middleware
- ✅ MongoDB with Mongoose ODM

---

## 📁 Project Structure

```
Harvee_Assessment/
├── frontend/                   # React + Vite application
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── views/             # Pages (Auth, Profile, Dashboard)
│   │   ├── redux/             # Redux slices & store
│   │   ├── services/          # Axios + API methods
│   │   ├── layouts/           # App layout components
│   │   └── main.jsx           # Entry point
│   ├── .env                   # Frontend environment variables
│   ├── package.json
│   └── vite.config.js
│
├── backend/                    # Node.js + Express + TypeScript
│   ├── src/
│   │   ├── controllers/       # Route controllers
│   │   ├── models/            # Mongoose models
│   │   ├── routes/            # API routes
│   │   ├── middlewares/       # Auth & validation middleware
│   │   ├── validators/        # Request validators
│   │   ├── utils/             # Helper functions
│   │   └── app.mts            # Express app
│   ├── uploads/               # User profile images
│   ├── .env.develop           # Backend environment variables
│   ├── package.json
│   └── tsconfig.json
│
└── README.md                   # This file
```

---

## 🧪 API Endpoints

### **Authentication Routes**

| Method | Endpoint                     | Description             | Auth Required |
| ------ | ---------------------------- | ----------------------- | ------------- |
| `POST` | `/api/v1/auth/register`      | Register a new user     | ❌            |
| `POST` | `/api/v1/auth/login`         | Login + generate tokens | ❌            |
| `POST` | `/api/v1/auth/refresh-token` | Refresh access token    | ❌            |
| `POST` | `/api/v1/auth/logout`        | Logout user             | ✅            |

### **User Routes**

| Method   | Endpoint                | Description               | Auth Required | Admin Only |
| -------- | ----------------------- | ------------------------- | ------------- | ---------- |
| `GET`    | `/api/v1/users/profile` | Get current user profile  | ✅            | ❌         |
| `GET`    | `/api/v1/users`         | Get all users (paginated) | ✅            | ✅         |
| `GET`    | `/api/v1/users/:id`     | Get user by ID            | ✅            | ❌\*       |
| `PUT`    | `/api/v1/users/:id`     | Update user details       | ✅            | ❌\*       |
| `DELETE` | `/api/v1/users/:id`     | Delete a user             | ✅            | ✅         |

**\*Users can only access/update their own profile**

---

## 📦 Prerequisites

Before you begin, ensure you have installed:

| Software    | Version | Download Link                                                 |
| ----------- | ------- | ------------------------------------------------------------- |
| **Node.js** | v18+    | [nodejs.org](https://nodejs.org/)                             |
| **MongoDB** | v6+     | [mongodb.com](https://www.mongodb.com/try/download/community) |
| **npm**     | v9+     | Included with Node.js                                         |

### ✅ Verify Installation:

```bash
node --version    # Should show v18.x.x or higher
npm --version     # Should show 9.x.x or higher
mongod --version  # Should show v6.x.x or higher
```

---

## 🚀 Installation & Setup

### **1️⃣ Clone the Repository**

```bash
git clone <your-repository-url>
cd Harvee_Assessment
```

---

## 🛠 Backend Setup

### **Step 1: Navigate to Backend Directory**

```bash
cd backend
```

### **Step 2: Install Dependencies**

```bash
npm install
```

**What gets installed:**

- express, mongoose, jsonwebtoken, bcrypt
- express-validator, multer, cors, helmet
- TypeScript, tsx, nodemon, and more

### **Step 3: Configure Environment Variables**

Create `.env.develop` file in the backend directory:

```env
# Server Configuration
APP_PORT=5000
NODE_ENV=development

# Database Configuration
MONGO_URI=mongodb://localhost:27017/user_management

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
ACCESS_TOKEN_EXPIRY=1h
REFRESH_TOKEN_EXPIRY=7d

# API Security
API_ACCESS_KEY=your_api_access_key_here
```

### **Step 4: Start MongoDB**

**Windows:**

```bash
net start MongoDB
```

**macOS:**

```bash
brew services start mongodb-community
```

**Linux:**

```bash
sudo systemctl start mongod
```

**Verify:**

```bash
mongosh
# OR
mongo --eval "db.version()"
```

### **Step 5: Create Admin User**

```bash
npm run create-admin
```

**Expected Output:**

```
✅ Admin user created successfully
📧 Email: admin@gmail.com
🔑 Password: Admin@123
```

### **Step 6: Start Backend Server**

```bash
npm run dev
```

**Expected Output:**

```
Loading environment: development
MongoDB connected successfully
Server is running on http://localhost:5000
```

**Backend is now running at:** `http://localhost:5000`

---

## 🎨 Frontend Setup

### **Step 1: Navigate to Frontend Directory**

```bash
cd ../frontend
```

### **Step 2: Install Dependencies**

```bash
npm install
```

**What gets installed:**

- React, Redux Toolkit, React Router
- Ant Design, Axios, jwt-decode
- Vite and development dependencies

### **Step 3: Configure Environment Variables**

Create `.env` file in the frontend directory:

```env
VITE_BASE_URL=http://localhost:5000/api/v1
VITE_IMAGE_URL=http://localhost:5000
VITE_LOGO=/logo.png
```

**Important:** Vite requires all environment variables to be prefixed with `VITE_`

### **Step 4: Start Frontend Server**

```bash
npm run dev
```

**Expected Output:**

```
  VITE v5.x.x  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

**Frontend is now running at:** `http://localhost:5173`

---

## 🎯 Quick Test

### **1. Open Browser**

Navigate to: `http://localhost:5173`

### **2. Login as Admin**

- **Email:** `admin@gmail.com`
- **Password:** `Admin@123`

### **3. Test API with cURL**

**Login:**

```bash
curl -X POST http://localhost:5000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@gmail.com","password":"Admin@123"}'
```

**Register New User:**

```bash
curl -X POST http://localhost:5000/api/v1/auth/register \
  -F "name=John Doe" \
  -F "email=john@example.com" \
  -F "phone=1234567890" \
  -F "password=Pass@123" \
  -F "state=California" \
  -F "city=Los Angeles" \
  -F "country=USA" \
  -F "pincode=90001"
```

---

## 📝 Usage Guide

### **User Roles**

#### **Admin Role**

- ✅ Access dashboard with full user list
- ✅ View all user details
- ✅ Edit any user profile
- ✅ Delete users
- ✅ Search and filter users

#### **Regular User Role**

- ✅ View own profile
- ✅ Edit own profile
- ✅ Upload profile image
- ❌ Cannot access admin dashboard
- ❌ Cannot view/edit other users

### **Frontend Routes**

| Route                      | Description                    | Access        |
| -------------------------- | ------------------------------ | ------------- |
| `/`                        | Redirects to profile or signin | All           |
| `/auth/signin`             | Login page                     | Public        |
| `/profile`                 | User profile page              | Authenticated |
| `/dashboard`               | Admin dashboard                | Admin only    |
| `/dashboard/edit-user/:id` | Edit user page                 | Admin only    |

---

## 🔒 Security Features

- ✅ **Password Hashing:** bcrypt with 10 salt rounds
- ✅ **JWT Authentication:** Dual token system (Access + Refresh)
- ✅ **Token Rotation:** New refresh token on every refresh
- ✅ **CORS Protection:** Configured CORS middleware
- ✅ **Input Validation:** express-validator on all routes
- ✅ **Role-Based Access Control (RBAC):** Admin/User separation
- ✅ **File Upload Security:** Type & size validation (2MB max, jpg/png only)
- ✅ **Helmet Security:** HTTP header hardening
- ✅ **XSS Protection:** Input sanitization

---

## 🛠️ Available Scripts

### **Backend Scripts**

```bash
npm run dev              # Start development server with auto-reload
npm run build            # Compile TypeScript to JavaScript
npm start                # Run compiled production code
npm run create-admin     # Create admin user
npm run update-role      # Update user role script
```

### **Frontend Scripts**

```bash
npm run dev              # Start Vite development server
npm run build            # Build for production
npm run preview          # Preview production build locally
npm run lint             # Run ESLint
```

---

## 🐛 Troubleshooting

### **MongoDB Connection Error**

**Problem:** Backend can't connect to MongoDB

**Solution:**

```bash
# Check if MongoDB is running
mongosh

# Start MongoDB service
# Windows
net start MongoDB

# macOS
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

### **Port Already in Use**

**Problem:** Port 5000 or 5173 already in use

**Solution:**

```bash
# Find and kill process using port
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :5000
kill -9 <PID>

# Or change port in .env files
```

### **Module Not Found Error**

**Problem:** Dependencies not installed properly

**Solution:**

```bash
# Remove and reinstall
rm -rf node_modules package-lock.json
npm install
```

### **CORS Error**

**Problem:** Frontend can't connect to backend

**Solution:**

- Check `VITE_BASE_URL` in frontend `.env`
- Ensure backend is running on correct port
- Verify CORS configuration in backend

### **Token Expired Error**

**Problem:** Access token expired

**Solution:**

- Frontend automatically refreshes tokens
- If refresh fails, logout and login again
- Check token expiry settings in backend `.env`

---

## 📚 API Examples

### **Register User**

```http
POST /api/v1/auth/register
Content-Type: multipart/form-data

name: John Doe
email: john@example.com
phone: 1234567890
password: Pass@123
address: 123 Main Street
state: California
city: Los Angeles
country: USA
pincode: 90001
profile_image: [file]
```

**Response:**

```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "...",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "user"
    },
    "accessToken": "eyJhbGciOiJIUzI1NiIs...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIs...",
    "tokenExpiry": {
      "accessToken": "1h",
      "refreshToken": "7d"
    }
  }
}
```

### **Get All Users (Admin Only)**

```http
GET /api/v1/users?page=1&limit=10&search=john&state=California
Authorization: Bearer <access_token>
```

**Query Parameters:**

- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10, max: 100)
- `sort` - Sort field (prefix `-` for descending)
- `search` - Search in name/email
- `state` - Filter by state
- `city` - Filter by city

**Response:**

```json
{
  "success": true,
  "data": {
    "users": [...],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalUsers": 50,
      "hasNextPage": true,
      "hasPrevPage": false
    }
  }
}
```

---

## 📦 Tech Stack

### **Frontend**

- ⚛️ React 18 + Vite
- 🔄 Redux Toolkit (State Management)
- 🎨 Ant Design (UI Components)
- 🛣️ React Router v6 (Routing)
- 📡 Axios (HTTP Client)
- 🔐 jwt-decode (Token Decoding)

### **Backend**

- 🟢 Node.js 18+
- ⚡ Express.js 5
- 📘 TypeScript 5.9
- 🍃 MongoDB + Mongoose
- 🔑 JWT (jsonwebtoken)
- 🔒 bcrypt (Password Hashing)
- 📁 Multer (File Upload)
- ✅ express-validator

---

## ✅ Success Checklist

- [ ] Node.js v18+ installed and verified
- [ ] MongoDB v6+ installed and running
- [ ] Backend dependencies installed
- [ ] Backend `.env.develop` configured
- [ ] Admin user created successfully
- [ ] Backend server running on port 5000
- [ ] Frontend dependencies installed
- [ ] Frontend `.env` configured
- [ ] Frontend server running on port 5173
- [ ] Successfully logged in as admin
- [ ] Dashboard displays user list

---

## 📸 Screenshots

### Login Page

![Login](docs/screenshots/login.png)

### Admin Dashboard

![Dashboard](docs/screenshots/dashboard.png)

### User Profile

![Profile](docs/screenshots/profile.png)

_(Add actual screenshots to `/docs/screenshots/` directory)_

---

## 📜 License

This project is created for **Harvee Designs Full-Stack Developer Assessment** purposes only.

---

## 🙋‍♂️ Author

**Tejas**  
📧 Email: your.email@example.com  
🐙 GitHub: [Your GitHub Profile](https://github.com/your-username)

---

## 🎉 You're All Set!

Your **Harvee Assessment User Management System** is now **fully installed and running**!

### **Access Points:**

- 🌐 **Frontend:** http://localhost:5173
- 🔌 **Backend API:** http://localhost:5000
- 📖 **API Docs:** http://localhost:5000/api-docs

### **Default Admin Credentials:**

- 📧 **Email:** admin@gmail.com
- 🔑 **Password:** Admin@123

### **Next Steps:**

1. ✅ Login as admin
2. ✅ Create test users
3. ✅ Test CRUD operations
4. ✅ Import Postman collection (if available)
5. ✅ Explore admin dashboard features

---

**Happy Coding! 🚀**

_Built with ❤️ for Harvee Designs Assessment_
