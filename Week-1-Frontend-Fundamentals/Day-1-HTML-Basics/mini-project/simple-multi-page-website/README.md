# Mini-Project: Simple Multi-Page Website

## 📌 Objective

Build a complete multi-page static website using only HTML with semantic markup, demonstrating navigation, consistent layout, and practical HTML elements.

## ⏱️ Estimated Time

**45-60 minutes**

## 📝 Project Description

Create a **3-page website** for a fictional portfolio/profile:

1. **Home Page** (index.html) - Welcome message and introduction
2. **About Page** (about.html) - Personal information and background
3. **Contact Page** (contact.html) - Contact form and information

### Requirements:

✅ Navigation menu on all pages (consistent header)  
✅ Common footer with copyright  
✅ Semantic HTML tags (header, nav, main, section, footer)  
✅ At least 2 images with alt text  
✅ Links between pages  
✅ Table on contact page  
✅ Form with various input types  
✅ Professional content and structure  

## 📁 File Structure

```
simple-multi-page-website/
├── index.html          # Home page
├── about.html          # About me page
├── contact.html        # Contact page
├── README.md           # This file
└── assets/
    └── images/         # Folder for images (empty for now)
```

## 🛠️ Step-by-Step Instructions

### Step 1: Create Folder Structure

```bash
mkdir simple-multi-page-website
cd simple-multi-page-website
mkdir assets/images
touch index.html about.html contact.html README.md
```

### Step 2: Create Consistent Header

All pages should have:

```html
<header>
    <h1>Welcome to My Website</h1>
    <nav>
        <a href="index.html">Home</a> |
        <a href="about.html">About</a> |
        <a href="contact.html">Contact</a>
    </nav>
    <hr>
</header>
```

**Key Points:**
- Same header on all pages
- Navigation links to all pages
- H1 title (should be same on all pages or unique)
- HR (horizontal rule) separator

### Step 3: Create Home Page (index.html)

**Content:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Multi-Page Website</title>
</head>
<body>
    <!-- Header with navigation -->
    <!-- Welcome section with description -->
    <!-- Featured image -->
    <!-- Footer -->
</body>
</html>
```

**Include:**
- Header with navigation
- H2 "Home Page" section
- Introduction text
- List of site features
- Placeholder image
- Semantic `<main>` and `<section>` tags
- Footer

### Step 4: Create About Page (about.html)

**Content:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Me - Multi-Page Website</title>
</head>
<body>
    <!-- Header with navigation (same as home) -->
    <!-- About section with personal information -->
    <!-- Education section -->
    <!-- Skills section (bullet list) -->
    <!-- Goals section (numbered list) -->
    <!-- Profile image -->
    <!-- Footer (same as home) -->
</body>
</html>
```

**Include:**
- Header and navigation
- H2 "About Me"
- Personal bio (use your real name/info)
- Education section (with lists)
- Skills learned (bullet list)
- Goals (numbered list)
- Profile photo placeholder
- Footer

### Step 5: Create Contact Page (contact.html)

**Content:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Me - Multi-Page Website</title>
</head>
<body>
    <!-- Header with navigation -->
    <!-- Contact form with various input types -->
    <!-- Alternative contact methods -->
    <!-- Contact information table -->
    <!-- Footer -->
</body>
</html>
```

**Include:**
- Header and navigation
- H2 "Contact Me"
- **Contact Form with:**
  - Name input (text)
  - Email input (email type)
  - Subject input (text)
  - Message textarea
  - Submit button
  - Reset button
- Alternative contact methods (links)
- Table with contact response times
- Footer

### Step 6: Make Footer Consistent

All pages end with:

```html
<footer>
    <hr>
    <p>&copy; 2026 My Simple Website. All rights reserved.</p>
    <p>Created by [Your Name] | Aspiring Full Stack Developer</p>
</footer>
```

---

## 📋 Feature Checklist

### HTML Structure:
- [ ] DOCTYPE declaration on all pages
- [ ] HTML lang attribute set to "en"
- [ ] Meta charset UTF-8
- [ ] Meta viewport for responsiveness
- [ ] Unique title on each page

### Navigation:
- [ ] Navigation menu on all 3 pages
- [ ] Links to all pages work
- [ ] Current page indicator (optional: can add later with CSS)

### Home Page:
- [ ] Welcome heading and introduction
- [ ] List of features
- [ ] Placeholder image with alt text
- [ ] Content using semantic tags

### About Page:
- [ ] Personal information
- [ ] Education section
- [ ] Skills list (unordered)
- [ ] Goals list (ordered)
- [ ] Profile image with alt text

### Contact Page:
- [ ] Contact form with text, email, textarea inputs
- [ ] Submit and reset buttons
- [ ] Alternative contact methods with links
- [ ] Contact information table (3+ columns, 3+ rows)

### Consistency:
- [ ] Header identical on all pages
- [ ] Footer identical on all pages
- [ ] Navigation links work on all pages
- [ ] Color/styling consistent (no CSS yet, just HTML)

### Images:
- [ ] At least 2 placeholder images
- [ ] All images have meaningful alt text
- [ ] Alt text describes image content

---

## 🎯 Expected Output

When you open index.html in browser, you should see:

```
Welcome to My Website
[Home | About | Contact]
─────────────────────────

Home Page
This is an introduction...

[Featured Image]

Featured Image

─────────────────────────
© 2026 My Simple Website...
Created by Aniket Pal
```

**Clicking links should take you to:**
- Home → index.html
- About → about.html (shows about me info)
- Contact → contact.html (shows form)

---

## 🏗️ HTML Structure Reference

### Page Template:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unique Page Title</title>
</head>
<body>
    <header>
        <h1>Site Title</h1>
        <nav>
            <a href="index.html">Home</a> |
            <a href="about.html">About</a> |
            <a href="contact.html">Contact</a>
        </nav>
        <hr>
    </header>

    <main>
        <section>
            <h2>Section Heading</h2>
            <p>Content here...</p>
        </section>
    </main>

    <footer>
        <hr>
        <p>&copy; 2026 My Website. All rights reserved.</p>
    </footer>
</body>
</html>
```

---

## 💡 Key Learning Points

1. **Navigation** - Linking pages together
2. **Semantic HTML** - Using proper tags for structure
3. **Consistency** - Same header/footer on all pages
4. **Forms** - Input types and form structure
5. **Tables** - Organizing tabular data
6. **Images** - Using alt text for accessibility

---

## 🐛 Common Issues & Solutions

### Issue 1: Links not working

**Solution:**
```html
<!-- Correct -->
<a href="about.html">About</a>

<!-- Wrong (if in subfolder) -->
<a href="/about.html">About</a>

<!-- Wrong (extra characters) -->
<a href="about.html ">About</a>  <!-- Extra space -->
```

### Issue 2: Images not displaying

**Solution:**
```html
<!-- Use placeholder if no image -->
<img src="https://via.placeholder.com/300x300" alt="Description">

<!-- For local image (if file exists) -->
<img src="assets/images/photo.jpg" alt="Photo description">
```

### Issue 3: Form won't submit

**Solution:**
- Forms without backend don't actually submit (normal)
- To see what form would send, DevTools → Network tab
- Button must be `type="submit"`
- Will work once you add backend

### Issue 4: Styling not working (don't add yet!)

**Remember:** Day 1 is HTML only, no CSS!
- Focus on structure
- Styling comes in Day 2

---

## 📝 Content Tips

### For About Page:

Use real or fictional information:
```
Education: BCA (Bachelor of Computer Applications)
Skills: HTML, CSS, JavaScript, Git, Node.js
Location: India
Interests: Web Development, Problem Solving, Learning
```

### For Contact Page:

```
Email: your.email@example.com
GitHub: github.com/yourname
LinkedIn: linkedin.com/in/yourname
Response Time: 24-48 hours
```

---

## 🧪 Testing Checklist

- [ ] All 3 pages open without errors
- [ ] Navigation links work on each page
- [ ] Form fields are clickable/usable
- [ ] Images display with alt text
- [ ] No 404 errors in console (F12)
- [ ] Mobile view looks readable (Ctrl+Shift+M)
- [ ] All content visible without scrolling too much
- [ ] No typos in content
- [ ] Footer appears on all pages

---

## 🎨 Enhancement Ideas

After completing the project, try:

1. **Add more pages:**
   - Portfolio/Projects page
   - Blog page
   - Services page

2. **Add more form fields:**
   - Phone number
   - Subject dropdown
   - Message priority (radio buttons)
   - Subscribe checkbox

3. **Improve content:**
   - Add more detailed about info
   - Add project descriptions
   - Add testimonials section

4. **Enhance structure:**
   - Add breadcrumb navigation
   - Add sitemap page
   - Add FAQ section

5. **Prepare for CSS (coming Day 2):**
   - Add class names to sections
   - Add IDs for styling hooks
   - Plan color scheme

---

## 📝 Git Commit

```bash
# After completing all 3 pages
git add index.html about.html contact.html README.md
git commit -m "Mini-Project: Created multi-page static website with HTML"
git push origin main
```

---

## ✨ Next Steps

1. Create 3 complete HTML pages ✓
2. Test all links in browser
3. Use DevTools (F12) to inspect
4. Commit to Git
5. Move to **Assignment** - Portfolio Website (4 pages, more content)

---

## 📚 Semantic HTML Tags Used

```html
<header>    <!-- Page header -->
<nav>       <!-- Navigation menu -->
<main>      <!-- Main content -->
<section>   <!-- Content section -->
<article>   <!-- Article/blog post -->
<footer>    <!-- Page footer -->
<h1>-<h6>  <!-- Headings -->
<p>         <!-- Paragraph -->
<ul>, <ol>  <!-- Lists -->
<li>        <!-- List item -->
<form>      <!-- Form container -->
<input>     <!-- Form input -->
<button>    <!-- Button -->
<table>     <!-- Table -->
```

---

**🎉 Congratulations! You've built a complete multi-page website!**

This is a significant milestone in your web development journey. You've learned:
- HTML structure and semantics
- Navigation between pages
- Form basics
- Table creation
- Image usage with alt text

---

**Ready for the Assignment? 📚**

The assignment asks you to create a more complex **4-page portfolio website** with:
- Professional layout
- More detailed content
- Additional pages (projects)
- Enhanced forms
- Better organization

Let's move on! 🚀
