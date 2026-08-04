# 🚀 DevHash - A Developer Blogging Platform

> A modern developer-first blogging platform inspired by Hashnode, built with the **MERN Stack**.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)

---

## 📖 Overview

DevHash is a full-stack blogging platform where developers can create, edit, publish, and share technical articles written in **Markdown**.

Users can browse articles, search posts, explore technology tags, manage their own dashboard, and maintain a public developer profile.

This project is built as a **portfolio-quality MERN application** to demonstrate full-stack web development skills.

---

## ✨ Features

### 🔐 Authentication

- User Registration
- User Login
- JWT Authentication
- Password Hashing (bcrypt)
- Protected Routes
- Persistent Login

---

### 📝 Blog Management

- Create Post
- Edit Post
- Delete Post
- Draft & Publish
- Markdown Support
- Code Syntax Highlighting
- Cover Images
- Automatic Slug Generation

---

### 🏷 Tags

- Create Tags
- Multiple Tags per Post
- Browse Posts by Tag

---

### 🌎 Public Feed

- Latest Articles
- Search Articles
- Tag Filtering
- Individual Article Pages

---

### 👤 User Profile

- Public Developer Profile
- Avatar
- Bio
- Published Posts
- Personal Dashboard

---

### 🎨 UI

- Modern Responsive Design
- Tailwind CSS
- shadcn/ui Components
- Dark Mode _(Coming Soon)_

---

## 🛠 Tech Stack

### Frontend

- React
- Vite
- React Router
- Tailwind CSS
- shadcn/ui
- Axios
- React Hook Form
- React Markdown
- React Syntax Highlighter
- Lucide React

---

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- dotenv
- CORS

---

### Deployment

- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas

---

## 📂 Folder Structure

```text
devhash/

├── client/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── App.jsx
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 📷 Screenshots

> Coming Soon

- Home Feed
- Login
- Dashboard
- Markdown Editor
- Profile
- Article Page

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Vanshdev21/Hashnode-clone.git
```

```bash
cd devhash
```

---

### Backend

```bash
cd server

npm install

npm run dev
```

---

### Frontend

```bash
cd client

npm install

npm run dev
```

---

## 🔑 Environment Variables

### Server

Create a `.env` file inside the **server** folder.

```env
PORT=5000

MONGODB_URI=

JWT_SECRET=
```

---

### Client

```env
VITE_API_URL=http://localhost:5000/api
```

---

## 📚 API Endpoints

### Authentication

```text
POST    /api/auth/register
POST    /api/auth/login
GET     /api/auth/me
```

### Posts

```text
GET     /api/posts
GET     /api/posts/:slug
POST    /api/posts
PUT     /api/posts/:id
DELETE  /api/posts/:id
GET     /api/posts/mine
```

### Tags

```text
GET     /api/tags
GET     /api/tags/:slug/posts
```

### Users

```text
GET     /api/users/:id
PUT     /api/users/me
```

---

## 🚀 Future Improvements

- ❤️ Likes
- 💬 Comments
- 🔖 Bookmarks
- 🌙 Dark Mode
- 🔔 Notifications
- 📊 Analytics Dashboard
- 🤖 AI Writing Assistant
- ☁️ Cloudinary Image Upload
- 👥 Follow Developers
- 📖 Reading Time Estimation

---

## 🎯 Learning Goals

This project helped me practice:

- REST APIs
- JWT Authentication
- Authorization
- MERN Architecture
- MongoDB Relationships
- React Context API
- Markdown Rendering
- CRUD Operations
- Responsive UI Design
- Full Stack Deployment

---

## 🤝 Contributing

Contributions, suggestions, and feedback are welcome.

Feel free to fork the repository and submit a pull request.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Vansh Khubchandani**

GitHub: https://github.com/Vanshdev21

---

⭐ If you found this project helpful, consider giving it a star!
