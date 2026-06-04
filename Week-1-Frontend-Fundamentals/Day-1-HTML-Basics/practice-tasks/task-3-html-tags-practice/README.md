# Practice Task 3: HTML Tags Practice

## 📌 Objective

Practice using various HTML tags together: headings, paragraphs, images, links, lists, tables, and forms.

## ⏱️ Estimated Time

**30-35 minutes**

## 📝 Task Description

Create a complete HTML page that demonstrates all major HTML tags learned in Day 1:

- Headings (h1, h2, h3)
- Paragraphs with text formatting
- Images with alt text
- Links with target attributes
- Unordered lists
- Ordered lists
- Tables
- Forms with various input types

## 📋 File Structure

```
task-3-html-tags-practice/
├── index.html          # Your HTML file
└── README.md           # This file
```

## 🛠️ Step-by-Step Instructions

### Step 1: Create index.html

Copy the provided `index.html` file into this folder, or create your own following the structure below.

### Step 2: Understand Each Section

#### Section 1: Headings
```html
<h1>Welcome to HTML Tags Practice</h1>
```
- Main heading (H1) should appear once per page
- Used for page title/main concept

#### Section 2: Paragraphs with Text Formatting
```html
<p>Hello! My name is <strong>Aniket Pal</strong>, a passionate <em>BCA student</em>...</p>
```

**Text Formatting Tags:**

| Tag | Purpose | Example |
|---|---|---|
| `<strong>` | Important text (bold) | `<strong>Bold text</strong>` |
| `<em>` | Emphasized text (italic) | `<em>Italic text</em>` |
| `<u>` | Underlined text | `<u>Underlined</u>` |
| `<mark>` | Highlighted text | `<mark>Highlighted</mark>` |
| `<del>` | Deleted text (strikethrough) | `<del>Deleted</del>` |

#### Section 3: Images
```html
<img src="https://via.placeholder.com/200" alt="Profile picture placeholder">
```

**Image Attributes:**

| Attribute | Purpose |
|---|---|
| `src` | Image URL or file path |
| `alt` | Alternative text if image fails |
| `width` | Width in pixels |
| `height` | Height in pixels |

**Why Alt Text?**
- ✅ Helps visually impaired users
- ✅ Shows if image won't load
- ✅ Improves SEO
- ✅ Professional standard

#### Section 4: Links
```html
<a href="https://www.google.com" target="_blank">Google</a>
```

**Link Attributes:**

| Attribute | Purpose |
|---|---|
| `href` | URL to navigate to |
| `target="_blank"` | Open in new tab |
| `title` | Hover text |

#### Section 5: Unordered List
```html
<ul>
    <li>HTML5</li>
    <li>CSS3</li>
    <li>JavaScript</li>
</ul>
```

Output:
```
• HTML5
• CSS3
• JavaScript
```

#### Section 6: Ordered List
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

#### Section 7: Table
```html
<table border="1">
    <thead>
        <tr>
            <th>Name</th>
            <th>Genre</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Inception</td>
            <td>Sci-Fi</td>
        </tr>
    </tbody>
</table>
```

**Table Tags:**

| Tag | Purpose |
|---|---|
| `<table>` | Container |
| `<thead>` | Table header rows |
| `<tbody>` | Table body rows |
| `<tr>` | Table row |
| `<th>` | Header cell (bold) |
| `<td>` | Data cell |

#### Section 8: Forms
```html
<form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" placeholder="Enter your name">
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="Enter your email">
    
    <button type="submit">Submit</button>
</form>
```

**Form Input Types:**

| Type | Purpose | Example |
|---|---|---|
| `text` | Single line text | Name, username |
| `email` | Email input | Email validation |
| `password` | Hidden characters | Passwords |
| `number` | Numbers only | Age, quantity |
| `date` | Date picker | Birthdate |
| `checkbox` | Multiple select | Interests |
| `radio` | Single select | Gender |
| `submit` | Submit button | Form submission |

### Step 3: Open and Test

```
1. Save index.html
2. Open with Live Server
3. Check all sections display correctly
4. Verify all links work
5. Test form input fields
```

### Step 4: View Source Code

```
1. Right-click page → "View Page Source"
2. Or press Ctrl+U
3. See raw HTML
4. Compare with DevTools Elements tab
```

---

## ✅ Checklist

- [ ] Heading (h1, h2) tags present
- [ ] Paragraphs with text formatting (`<strong>`, `<em>`)
- [ ] Image with alt text
- [ ] Link with href and target="_blank"
- [ ] Unordered list with at least 3 items
- [ ] Ordered list with at least 3 items
- [ ] Table with at least 3 rows and 3 columns
- [ ] Form with text input, email input, and submit button
- [ ] Page opens and displays correctly
- [ ] All links work
- [ ] Form fields are clickable

---

## 🎯 Expected Output

Page displays all sections properly:

```
Welcome to HTML Tags Practice

[Your introduction paragraph]

[Placeholder image]

Learn More
Visit Google to search for web development resources.

My Skills
• HTML5
• CSS3
• JavaScript
• Responsive Design
• Problem Solving

Learning Goals
1. Master Frontend Development
2. Learn Node.js and Express.js
3. Understand Databases
4. Build Full Stack Applications
5. Deploy projects

My Favorite Movies
[Table with movie information]

Contact Me
[Form with fields]
```

---

## 💡 Key Learning Points

1. **Semantic HTML** - Use appropriate tags for meaning
2. **Alt Text** - Always describe images
3. **Link Targets** - `target="_blank"` for external links
4. **Form Labels** - Connect labels to inputs with `for` attribute
5. **List Types** - UL for unordered, OL for ordered
6. **Table Structure** - THEAD for headers, TBODY for data

---

## 🐛 Common Issues

### Issue 1: Image not displaying

**Solution:**
```html
<!-- Use full image URL -->
<img src="https://example.com/image.jpg" alt="Description">

<!-- Or local file path -->
<img src="../assets/images/photo.jpg" alt="Description">
```

### Issue 2: Form not submitting

**Solution:**
- Add `name` attribute to inputs
- Use `<button type="submit">` for submit
- Backend needed for actual submission

### Issue 3: Table looks messy

**Solution:**
```html
<!-- Add border to see structure -->
<table border="1">

<!-- Or use CSS later for better styling -->
```

---

## 📝 Common HTML Tags Reference

```html
<!-- Headings -->
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>

<!-- Text Formatting -->
<strong>Important</strong>
<em>Emphasis</em>
<u>Underline</u>
<mark>Highlight</mark>
<del>Delete</del>

<!-- Links & Images -->
<a href="url">Link text</a>
<img src="image.jpg" alt="Description">

<!-- Lists -->
<ul><li>Item</li></ul>    <!-- Unordered -->
<ol><li>Item</li></ol>    <!-- Ordered -->

<!-- Table -->
<table>
  <thead><tr><th>Header</th></tr></thead>
  <tbody><tr><td>Data</td></tr></tbody>
</table>

<!-- Forms -->
<form>
  <label for="id">Label:</label>
  <input type="text" id="id" name="name">
  <button type="submit">Submit</button>
</form>
```

---

## ✨ Enhancements to Try

After completing the basic task:

1. **Add more images** - Use different image sources
2. **Create nested lists** - Lists within lists
3. **Add more form fields** - Checkbox, radio, select, textarea
4. **Add more table columns** - Make it more complex
5. **Add links** - Create navigation between pages
6. **Add comments** - Document your HTML with comments

Example comment:
```html
<!-- This is my profile section -->
<section>
    <img src="profile.jpg" alt="My profile picture">
</section>
```

---

## 📝 Git Commit

After completing:

```bash
git add index.html README.md
git commit -m "Task 3: Practiced HTML tags - headings, lists, tables, forms"
git push origin main
```

---

## ✨ Next Steps

1. Move to **Practice Task 4** - DevTools Practice
2. Use DevTools to inspect all these elements
3. Learn how browser interprets HTML
4. Then move to **Mini-Project** - Build multi-page website

---

**🎉 Excellent! You've practiced all major HTML tags!**
