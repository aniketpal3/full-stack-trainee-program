# Blogging Platform

## Project Overview

A full stack blogging system where users can sign up, log in, and create, edit, or delete blog posts.

Public users can view all posts and read single posts. Registered users can manage their own posts and comment on blog posts.

## Features

- User Signup
- User Login
- JWT Authentication
- Password Hashing
- Public Blog Listing
- Single Blog Post View
- Create Blog Post
- Edit Own Blog Post
- Delete Own Blog Post
- Comment System
- MongoDB Database

## Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript
- Axios

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs

## Folder Structure

```txt
Project-1-Blogging-Platform/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Post.js
│   │   └── Comment.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── postRoutes.js
│   │   └── commentRoutes.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│   ├── package.json
│   ├── .env.example
│   └── README.md
│
├── frontend/
│   ├── index.html
│   ├── signup.html
│   ├── login.html
│   ├── dashboard.html
│   ├── post.html
│   ├── style.css
│   ├── script.js
│   └── README.md
│
└── README.md