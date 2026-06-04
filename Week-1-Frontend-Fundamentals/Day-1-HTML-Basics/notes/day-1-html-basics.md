# Day 1 – Introduction to Web Development & HTML Basics

## 📚 Learning Objectives

By the end of Day 1, you will:

1. ✅ Understand how the web works (client-server model)
2. ✅ Know the difference between frontend, backend, and full stack
3. ✅ Set up your development environment (VS Code, Chrome, Git)
4. ✅ Write your first HTML page with correct structure
5. ✅ Learn and use common HTML tags
6. ✅ Build a simple multi-page static website
7. ✅ Use Chrome DevTools for debugging

---

## 🌐 Introduction to Web Development

### What is Web Development?

Web development is the process of **building applications and websites** that run on the internet. Every website you visit (YouTube, Facebook, Twitter, Gmail) is a web application built by developers.

### Three Components:

1. **Frontend** - What users see and interact with (UI)
2. **Backend** - Server-side logic and data management
3. **Database** - Where data is stored

### Example: Facebook

- **Frontend:** Your newsfeed, profile page, buttons
- **Backend:** Code that processes your posts, manages friends
- **Database:** All your posts, photos, and profile data

---

## 🔄 How the Web Works: Client-Server Model

### The Journey of a Request:

```
1. You open your browser
                ↓
2. Type "google.com" and press Enter
                ↓
3. Browser sends HTTP REQUEST to Google's servers
                ↓
4. Google's servers PROCESS your request
                ↓
5. Server sends HTML/CSS/JavaScript back (HTTP RESPONSE)
                ↓
6. Browser displays the webpage
                ↓
7. You interact with the website
```

### Client vs Server:

| **Client** | **Server** |
|---|---|
| Your browser | Powerful computer in a data center |
| Runs frontend code | Runs backend code |
| Shows website to user | Processes requests & sends data |
| Can't access database directly | Manages all data |
| Works offline (cached) | Always connected to internet |

### Example Flow:

```
CLIENT (Your Computer)          →    REQUEST    →   SERVER (Google's Computer)
Google Chrome Browser                 "GET google.com"     Apache/Nginx Server
                                                               ↓
                                                         Process Request
                                                         Access Database
                                                              ↓
CLIENT (Your Computer)          ←    RESPONSE   ←   SERVER (Google's Computer)
Google Chrome displays HTML      HTML + CSS + JS     Sends back data
```

---

## 📡 HTTP & HTTPS

### What is HTTP?

**HTTP** = **H**yper**T**ext **T**ransfer **P**rotocol

It's the language web browsers and servers use to communicate.

### HTTP Methods (Common):

```
GET     → Request data from server (no data sent in body)
POST    → Send data to server (user registers, submits form)
PUT     → Update existing data
DELETE  → Delete data
```

### Status Codes:

```
200 OK              → Request successful
404 Not Found       → Page doesn't exist
500 Server Error    → Server problem
301 Redirect        → Page moved to new location
```

### HTTPS vs HTTP:

```
HTTP  → Insecure, data is visible
HTTPS → Secure, data is encrypted with SSL/TLS certificate
```

**Always use HTTPS for sensitive data (passwords, credit cards, etc.)**

---

## 💻 Frontend vs Backend vs Full Stack

### **Frontend Development**

**What:** Building the user interface (UI) and user experience (UX)

**Technologies:**
- HTML - Structure
- CSS - Styling
- JavaScript - Interactivity

**Responsibilities:**
- Design layout
- Make buttons interactive
- Validate form inputs
- Display data nicely
- Make it responsive (mobile-friendly)

**Example:** When you click a "Like" button, the heart animates red (Frontend)

---

### **Backend Development**

**What:** Server-side logic, database, APIs

**Technologies:**
- Node.js, Python, Java, PHP
- Express.js, Django, Spring Boot
- REST APIs, GraphQL

**Responsibilities:**
- Process user requests
- Authenticate users
- Manage database
- Send emails
- Process payments
- Handle business logic

**Example:** When you click "Like", backend saves it to database and updates like count (Backend)

---

### **Full Stack Development**

**What:** Building both frontend AND backend

**Skills Needed:**
- Frontend: HTML, CSS, JavaScript, React/Vue
- Backend: Node.js, Express, Databases
- DevOps: Git, Docker, Deployment
- Databases: SQL, MongoDB

**Advantages:**
- More job opportunities
- Better understanding of how apps work
- Can build complete projects alone
- Higher salary potential

**This program teaches Full Stack development!**

---

## 🛠 Development Environment Setup

### Required Tools:

#### 1. **Visual Studio Code (VS Code)**

The industry-standard code editor.

**Download:** https://code.visualstudio.com/

**Why VS Code?**
- Free and lightweight
- Great extension ecosystem
- Integrated terminal
- Live Server for testing
- Built-in Git support

**Recommended Extensions:**
- Live Server (Launch a development local Server)
- Prettier (Code formatter)
- HTML Snippets
- Thunder Client (API testing)

**Installation Steps:**

```
1. Download from https://code.visualstudio.com/
2. Run the installer
3. Follow prompts (next, next, finish)
4. Open VS Code
5. Go to Extensions (Ctrl+Shift+X)
6. Search and install "Live Server"
```

---

#### 2. **Google Chrome**

The browser with best developer tools.

**Download:** https://www.google.com/chrome/

**Why Chrome?**
- Best DevTools for debugging
- Lighthouse for performance testing
- Consistent rendering
- Large market share

---

#### 3. **Git & GitHub**

Version control for tracking code changes.

**Download Git:** https://git-scm.com/

**Create GitHub Account:** https://github.com/

**What is Git?**
- Tracks changes to your code
- Allows you to go back to previous versions
- Collaborate with others
- Industry standard

**What is GitHub?**
- Cloud storage for Git repositories
- Social platform for developers
- Portfolio showcase
- Collaboration tool

---

## 📄 HTML Definition

### What is HTML?

**HTML** = **H**yper**T**ext **M**arkup **L**anguage

- **HyperText** → Text with links
- **Markup** → Uses tags to mark up content
- **Language** → Way to write instructions

### HTML is NOT:

❌ Not a programming language (no logic, loops, variables)  
❌ Not for styling (that's CSS)  
❌ Not for interactivity (that's JavaScript)

### HTML is FOR:

✅ Structure and semantic markup  
✅ Accessibility  
✅ SEO (Search Engine Optimization)  

### HTML Elements:

```html
<tagname>Content</tagname>

Opening Tag → <p>
Content    → Hello World
Closing Tag → </p>
```

---

## 🏗️ Basic HTML5 Structure

### Minimal HTML5 Template:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Webpage</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is my first webpage!</p>
</body>
</html>
```

### Breaking Down the Structure:

| Tag | Purpose |
|---|---|
| `<!DOCTYPE html>` | Tells browser this is HTML5 |
| `<html>` | Root element of the document |
| `<head>` | Metadata (title, charset, viewport, etc.) |
| `<title>` | Page title (shown in browser tab) |
| `<body>` | Visible content |

### Meta Tags Explained:

```html
<!-- UTF-8 encoding supports all languages and symbols -->
<meta charset="UTF-8">

<!-- Makes website responsive (mobile-friendly) -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Description for search engines -->
<meta name="description" content="This is my portfolio">
```

---

## 🏷️ Common HTML Tags

### Headings

```html
<h1>Heading 1 - Main Title</h1>
<h2>Heading 2 - Subheading</h2>
<h3>Heading 3 - Sub-subheading</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6 - Smallest</h6>
```

**Best Practice:** Use only ONE `<h1>` per page

**Why?** Search engines use `<h1>` to understand page topic

---

### Paragraphs & Text

```html
<p>This is a paragraph of text.</p>

<b>Bold text</b>            <!-- Semantic: use for keywords -->
<strong>Strong text</strong> <!-- Same appearance, better for screen readers -->

<i>Italic text</i>          <!-- Semantic: use for technical terms -->
<em>Emphasized text</em>    <!-- Same appearance, better for screen readers -->

<u>Underlined text</u>      <!-- Avoid, confusing with links -->

<mark>Highlighted text</mark>

<small>Small text</small>

<del>Deleted text</del>
<ins>Inserted text</ins>
```

**Tip:** Prefer `<strong>` over `<b>` and `<em>` over `<i>` for better semantics

---

### Links

```html
<!-- Basic link -->
<a href="https://google.com">Click here to visit Google</a>

<!-- Link to another page -->
<a href="about.html">About Me</a>

<!-- Link to section on same page -->
<a href="#section1">Jump to Section 1</a>

<!-- Open link in new tab -->
<a href="https://google.com" target="_blank">Open in new tab</a>

<!-- Link with title (hover text) -->
<a href="https://google.com" title="Search engine">Google</a>
```

---

### Images

```html
<!-- Basic image -->
<img src="image.jpg" alt="Description of image">

<!-- Image with width and height -->
<img src="image.jpg" alt="Profile picture" width="200" height="200">

<!-- Image from URL -->
<img src="https://example.com/image.jpg" alt="Example image">
```

**Always include `alt` text:**
- Helps visually impaired users
- Shows if image fails to load
- Improves SEO
- Best practice

---

### Lists

#### Unordered List (Bullets):

```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

Output:
```
• Item 1
• Item 2
• Item 3
```

#### Ordered List (Numbers):

```html
<ol>
    <li>First step</li>
    <li>Second step</li>
    <li>Third step</li>
</ol>
```

Output:
```
1. First step
2. Second step
3. Third step
```

#### Nested Lists:

```html
<ul>
    <li>Frontend
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    </li>
    <li>Backend</li>
</ul>
```

---

### Tables

```html
<table border="1">
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Aniket</td>
            <td>20</td>
            <td>India</td>
        </tr>
        <tr>
            <td>John</td>
            <td>22</td>
            <td>USA</td>
        </tr>
    </tbody>
</table>
```

| Tag | Purpose |
|---|---|
| `<table>` | Container for table |
| `<thead>` | Table header rows |
| `<tbody>` | Table body rows |
| `<tr>` | Table row |
| `<th>` | Table header cell |
| `<td>` | Table data cell |

---

### Forms

```html
<form>
    <!-- Text input -->
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">

    <!-- Email input -->
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">

    <!-- Password input -->
    <label for="password">Password:</label>
    <input type="password" id="password" name="password">

    <!-- Textarea -->
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4" cols="50"></textarea>

    <!-- Checkbox -->
    <input type="checkbox" id="agree" name="agree">
    <label for="agree">I agree to terms</label>

    <!-- Radio buttons -->
    <input type="radio" id="yes" name="option" value="yes">
    <label for="yes">Yes</label>

    <input type="radio" id="no" name="option" value="no">
    <label for="no">No</label>

    <!-- Dropdown -->
    <label for="country">Country:</label>
    <select id="country" name="country">
        <option value="india">India</option>
        <option value="usa">USA</option>
        <option value="uk">UK</option>
    </select>

    <!-- Submit button -->
    <button type="submit">Submit</button>
</form>
```

**Form Attributes:**

| Attribute | Purpose |
|---|---|
| `<label>` | Labels form fields for accessibility |
| `for` | Connects label to input by ID |
| `name` | Name for form data submission |
| `id` | Unique identifier |
| `type` | Input type (text, email, password, etc.) |
| `placeholder` | Hint text in input |
| `required` | Makes field mandatory |

---

## 🏷️ Semantic HTML Tags

Semantic tags describe their meaning (not just `<div>` everywhere):

```html
<!-- Old way (not semantic) -->
<div class="header">...</div>
<div class="nav">...</div>
<div class="main">...</div>
<div class="footer">...</div>

<!-- New way (semantic HTML5) -->
<header>...</header>    <!-- Page header -->
<nav>...</nav>          <!-- Navigation menu -->
<main>...</main>        <!-- Main content -->
<section>...</section>  <!-- Content section -->
<article>...</article>  <!-- Article or blog post -->
<aside>...</aside>      <!-- Sidebar, related content -->
<footer>...</footer>    <!-- Page footer -->
```

**Benefits of Semantic HTML:**

✅ Better for Search Engines (SEO)  
✅ Helps screen readers understand structure  
✅ Makes code more readable  
✅ Better accessibility  
✅ Easier maintenance  

---

## 🔍 Browser DevTools

### Opening DevTools:

```
Windows/Linux:  Press F12 or Ctrl+Shift+I
Mac:           Press Cmd+Option+I
Or:            Right-click → Inspect
```

### DevTools Tabs:

#### 1. **Elements Tab**
- View and edit HTML structure
- See CSS applied to elements
- Modify HTML live (changes disappear on refresh)
- Helpful for debugging layout issues

#### 2. **Console Tab**
- JavaScript output appears here
- Run JavaScript commands
- See errors and warnings
- Used for debugging JavaScript

#### 3. **Sources Tab**
- View source code
- Set breakpoints for debugging
- Step through code execution

#### 4. **Network Tab**
- See all requests and responses
- Check file sizes
- See load times
- Monitor API calls

#### 5. **Styles Tab**
- View CSS rules applied to element
- Edit CSS live
- See CSS hierarchy and inheritance

### Common DevTools Tasks:

```
1. Inspect element        → Right-click element → Inspect
2. Edit HTML              → Double-click in Elements tab
3. View computed styles   → Click Computed tab in Styles
4. Mobile view            → Ctrl+Shift+M or mobile icon
5. Check console errors   → Click Console tab
```

---

## 📋 Day 1 Recap

### Key Concepts:

✅ **Web works via Client-Server:** Browser requests, server responds  
✅ **HTTP/HTTPS:** Protocol for web communication  
✅ **Frontend vs Backend:** UI vs Logic & Data  
✅ **HTML Structure:** DOCTYPE, html, head, body tags  
✅ **Common Tags:** Headings, paragraphs, links, images, lists, tables, forms  
✅ **Semantic HTML:** Better than generic divs  
✅ **DevTools:** Essential debugging tool  

### Quick Reference:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Page</title>
</head>
<body>
    <header>
        <h1>My Website</h1>
        <nav>
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
        </nav>
    </header>

    <main>
        <section>
            <p>Welcome to my website!</p>
            <img src="image.jpg" alt="Description">
        </section>
    </main>

    <footer>
        <p>&copy; 2026 Aniket Pal. All rights reserved.</p>
    </footer>
</body>
</html>
```

---

## 🎯 What's Next?

Now you're ready to complete:

1. **Practice Task 1** → Create your first folder and HTML file
2. **Practice Task 2** → Write a proper HTML5 page
3. **Practice Task 3** → Practice HTML tags
4. **Practice Task 4** → Use Chrome DevTools
5. **Mini Project** → Build a multi-page website
6. **Assignment** → Create a portfolio website

---

## 📚 Additional Resources

- **MDN Web Docs:** https://developer.mozilla.org/
- **W3Schools HTML:** https://www.w3schools.com/html/
- **HTML Validator:** https://validator.w3.org/
- **Color Picker:** https://coolors.co/

---

**Happy Coding! 🚀**
