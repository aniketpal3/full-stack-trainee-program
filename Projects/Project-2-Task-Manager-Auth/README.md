# Project 2: Task Manager with Authentication

## 📌 Project Overview

A productivity application that helps users manage tasks with advanced features like priority levels, due dates, categories, and user authentication. Users can organize their work and collaborate with others.

## 🎯 Project Objectives

Build a full-stack task management system that demonstrates:
- Secure user authentication
- Task CRUD operations
- Advanced filtering and sorting
- Real-time updates (optional)
- Responsive mobile-friendly design

## 🏗️ Planned Architecture

### Frontend Stack
- HTML5 for semantic markup
- CSS3 for responsive design
- JavaScript (ES6+) for interactivity
- React.js (optional) for dynamic UI

### Backend Stack
- Node.js runtime environment
- Express.js for API endpoints
- JWT for authentication

### Database
- MongoDB (NoSQL) or PostgreSQL (SQL)
- Schema: Users, Tasks, Categories

### Deployment
- Frontend: Vercel or Netlify
- Backend: Heroku, Railway, or AWS

---

## ✨ Planned Features

### Core Features
- User registration and login
- Create new tasks
- View all tasks
- Edit task details
- Delete tasks
- Mark tasks as complete/incomplete
- Task status indicators
- Logout functionality

### Advanced Features
- Task priority levels (High, Medium, Low)
- Due date assignment
- Task categories
- Task filtering by status
- Task filtering by priority
- Task filtering by category
- Task search functionality
- Task sorting options
- Deadline notifications (optional)
- Recurring tasks (optional)

### User Features
- User profile management
- Password change
- Profile picture upload
- Task statistics dashboard
- Personal task history

### Collaboration Features (Advanced)
- Share tasks with others
- Assign tasks to team members
- Comments on tasks
- Task status updates notifications
- Team workspace (optional)

---

## 📊 Data Models

### User Model
```
- id (primary key)
- username (unique)
- email (unique)
- password (hashed)
- profile_image
- created_at
- updated_at
```

### Task Model
```
- id (primary key)
- user_id (foreign key)
- title
- description
- status (todo, in-progress, completed)
- priority (high, medium, low)
- due_date
- category_id (foreign key)
- created_at
- updated_at
- completed_at
```

### Category Model
```
- id (primary key)
- user_id (foreign key)
- name
- color (optional)
- created_at
```

---

## 🌐 API Endpoints (Planned)

### Authentication
```
POST   /api/auth/register     - User registration
POST   /api/auth/login        - User login
POST   /api/auth/logout       - User logout
POST   /api/auth/refresh      - Refresh token
```

### Tasks
```
GET    /api/tasks             - Get all user tasks
GET    /api/tasks/:id         - Get single task
POST   /api/tasks             - Create new task
PUT    /api/tasks/:id         - Update task
DELETE /api/tasks/:id         - Delete task
PATCH  /api/tasks/:id/status  - Update task status
```

### Categories
```
GET    /api/categories        - Get all categories
POST   /api/categories        - Create category
DELETE /api/categories/:id    - Delete category
```

### Search & Filter
```
GET    /api/tasks?status=completed
GET    /api/tasks?priority=high
GET    /api/tasks?category=work
GET    /api/tasks?search=keyword
```

---

## 📅 Development Timeline

- **Week 1:** Database design, user authentication setup
- **Week 2:** Task CRUD API endpoints
- **Week 3:** Frontend task display and creation
- **Week 4:** Filtering, sorting, and search
- **Week 5:** User interface refinement
- **Week 6:** Testing and bug fixes
- **Week 7:** Deployment
- **Week 8:** Performance optimization

---

## 🎓 Learning Outcomes

After completing this project, you will understand:

✅ User authentication and JWT tokens  
✅ Database relationships and modeling  
✅ RESTful API design patterns  
✅ Frontend-backend communication  
✅ State management in web apps  
✅ Advanced filtering and search  
✅ Responsive design principles  
✅ Security best practices  
✅ Deployment and DevOps basics  

---

## 🚀 Tech Skills Developed

### Frontend Skills
- HTML form creation and validation
- CSS layout and styling
- JavaScript for user interactions
- Dynamic UI updates
- Local storage/session management
- API calls with fetch or axios

### Backend Skills
- Node.js server development
- Express.js routing and middleware
- User authentication with JWT
- Password hashing and security
- Database query optimization
- Error handling and validation

### Database Skills
- Schema design
- Creating relationships
- Indexing for performance
- Query optimization
- Data validation at DB level

### Security Skills
- Password hashing
- JWT authentication
- Input validation
- SQL injection prevention
- XSS protection

---

## 📋 Project Requirements

### Must-Have Features (MVP)
- [ ] User registration with validation
- [ ] Secure user login with JWT
- [ ] Create tasks with title and description
- [ ] View all user tasks
- [ ] Edit task details
- [ ] Delete tasks
- [ ] Mark tasks complete/incomplete
- [ ] Task list view
- [ ] Logout functionality
- [ ] Protected routes

### Core Enhancement Features
- [ ] Task priority levels
- [ ] Due dates
- [ ] Task categories
- [ ] Filter by status
- [ ] Filter by priority
- [ ] Sort tasks
- [ ] Search tasks
- [ ] Task statistics

### Advanced Features (Optional)
- [ ] Notifications
- [ ] Recurring tasks
- [ ] Task reminders
- [ ] Task comments
- [ ] Real-time updates (WebSockets)
- [ ] Dark mode
- [ ] Mobile app (React Native)

---

## 🎯 Success Metrics

- ✅ All core features working smoothly
- ✅ Secure authentication system
- ✅ Fast database queries
- ✅ Responsive design on all devices
- ✅ Clean, maintainable code
- ✅ Comprehensive error handling
- ✅ User-friendly interface
- ✅ Production-ready deployment

---

## 🔧 Technologies to Master

### Must Learn
1. **Express.js** - Backend framework
2. **JWT (JSON Web Tokens)** - Authentication
3. **bcryptjs** - Password hashing
4. **Mongoose (MongoDB)** or **Sequelize (SQL)** - ORM
5. **CORS** - Cross-origin requests
6. **Environment variables** - Configuration

### Should Learn
1. **Postman** - API testing
2. **Git/GitHub** - Version control
3. **Docker** (optional) - Containerization
4. **Deployment platforms** - Heroku, Vercel

---

## 💾 Database Schema Example (MongoDB)

```javascript
// User Collection
{
  _id: ObjectId,
  username: "aniket",
  email: "aniket@example.com",
  password: "hashed_password",
  createdAt: Date,
  updatedAt: Date
}

// Task Collection
{
  _id: ObjectId,
  userId: ObjectId,
  title: "Complete project",
  description: "Finish the task manager",
  status: "in-progress",
  priority: "high",
  dueDate: "2026-06-10",
  category: "work",
  createdAt: Date,
  updatedAt: Date
}

// Category Collection
{
  _id: ObjectId,
  userId: ObjectId,
  name: "work",
  color: "#FF5733",
  createdAt: Date
}
```

---

## 🎨 UI/UX Considerations

### Home Page
- Login/Register form initially
- Task dashboard after login
- Quick task creation area

### Task Dashboard
- Task list with status badges
- Priority indicators (color-coded)
- Due date display
- Category tags
- Quick actions (edit, delete, complete)

### Mobile Optimization
- Touch-friendly buttons
- Responsive layout
- Mobile navigation menu
- Simplified filters

---

## 🧪 Testing Strategy

### Backend Testing
- API endpoint testing with Postman
- User authentication testing
- Data validation testing
- Error handling testing

### Frontend Testing
- Form validation
- Task creation/edit/delete
- Filter functionality
- Search functionality
- Responsive design

### Security Testing
- SQL injection attempts
- XSS prevention
- JWT token validation
- Password strength enforcement

---

## 📚 Resources

- Express.js: https://expressjs.com/
- JWT Guide: https://jwt.io/
- MongoDB: https://www.mongodb.com/
- Mongoose: https://mongoosejs.com/
- Postman: https://www.postman.com/

---

## 📈 Project Progression

```
Phase 1: Setup              → Database, server, authentication
Phase 2: Core Features      → CRUD operations, basic UI
Phase 3: Enhancement        → Filters, sorting, categories
Phase 4: Polish & Optimize  → UI improvements, performance
Phase 5: Testing & Deploy   → Testing, bug fixes, deployment
Phase 6: Maintenance        → User feedback, improvements
```

---

## 🎯 Difficulty Levels

- **Beginner Version:** Basic task CRUD with simple auth
- **Intermediate Version:** Add categories, priorities, filtering
- **Advanced Version:** Add notifications, real-time updates, analytics

---

## 📝 Project Status

**Current Status: 🔴 Upcoming**

- [ ] Project setup
- [ ] Development
- [ ] Testing
- [ ] Deployment
- [ ] Maintenance

---

## 💡 Variations & Extensions

### Task Manager Pro
- Team collaboration
- Recurring tasks
- Task templates
- Time tracking
- Sprint planning

### Mobile Task App
- React Native version
- Offline functionality
- Push notifications
- Voice commands

### Enterprise Version
- Multi-team support
- Project management
- Resource allocation
- Budget tracking
- Reporting

---

## 🚀 Deployment Checklist

- [ ] Environment variables configured
- [ ] Database hosted (MongoDB Atlas, AWS RDS)
- [ ] Backend deployed (Heroku, Railway, AWS)
- [ ] Frontend deployed (Vercel, Netlify)
- [ ] SSL certificate configured
- [ ] Error monitoring setup (Sentry)
- [ ] Performance monitoring setup
- [ ] Backup strategy implemented

---

**Last Updated:** June 2026  
**Status:** Planning & Development Path  
**Difficulty Level:** Intermediate

Ready to build an amazing task manager? Let's start! 🚀
