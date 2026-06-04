# Assignment: Portfolio Website - 4 Pages

## 📌 Objective

Create a professional portfolio website with 4 pages that showcases your skills, projects, and experience. This is a comprehensive assignment that combines all HTML concepts from Day 1.

## ⏱️ Estimated Time

**90-120 minutes** (2-2.5 hours)

## 📝 Assignment Description

Build a **4-page professional portfolio website** that serves as:

1. A personal brand showcase
2. A project portfolio
3. A contact hub
4. A window into your skills and experience

### Requirements:

✅ 4 complete HTML pages (index, about, projects, contact)  
✅ Consistent navigation on all pages  
✅ Common header and footer  
✅ At least 3 images with proper alt text  
✅ Multiple HTML5 semantic tags  
✅ At least 1 table  
✅ At least 1 contact form with multiple input types  
✅ Professional content and layout  
✅ Links between all pages  
✅ Additional navigation links (e.g., GitHub, LinkedIn)  

## 📁 File Structure

```
portfolio-website-4-pages/
├── index.html          # Home page
├── about.html          # About page
├── projects.html       # Projects page
├── contact.html        # Contact page
├── README.md           # This file
└── assets/
    └── images/         # Folder for images (optional)
```

## 🛠️ Page Breakdown

### Page 1: Home (index.html)

**Purpose:** Introduction and first impression

**Must Include:**
```html
<!-- Header with navigation -->
<h1>Your Name</h1>
<p>Your professional title/tagline</p>

<!-- Hero image -->
<img src="placeholder" alt="Hero image">

<!-- Introduction section -->
<p>Brief introduction about yourself</p>

<!-- Featured projects link -->
<a href="projects.html">View Projects</a>
```

**Content Ideas:**
- Professional introduction
- Quick skills overview
- Call-to-action button
- Featured image

---

### Page 2: About (about.html)

**Purpose:** Detailed information about you

**Must Include:**
```html
<!-- Profile section -->
<h2>About Me</h2>
<img src="profile.jpg" alt="Your profile picture">

<!-- Education -->
<h2>Education</h2>
<ul>
    <li>BCA Student (or your education)</li>
</ul>

<!-- Skills -->
<h2>Technical Skills</h2>
<ul>
    <li>Frontend: HTML, CSS, JavaScript</li>
    <li>Backend: Node.js, Express</li>
</ul>

<!-- Experience -->
<h2>Experience</h2>
<ol>
    <li>Project 1</li>
    <li>Project 2</li>
</ol>
```

**Sections to Include:**
1. Personal bio (2-3 paragraphs)
2. Education details
3. Technical skills (categorized)
4. Professional experience
5. Personal interests
6. Profile photo

---

### Page 3: Projects (projects.html)

**Purpose:** Showcase your work

**Must Include:**

3+ Project descriptions with:
```html
<h3>Project Name</h3>
<p>Description</p>
<p>Technologies: HTML, CSS, JavaScript</p>
<p><a href="#">View Project</a></p>
```

**Table of Projects:**
```html
<table border="1">
    <thead>
        <tr>
            <th>Project Name</th>
            <th>Type</th>
            <th>Technologies</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Project 1</td>
            <td>Web App</td>
            <td>HTML, CSS, JS</td>
        </tr>
    </tbody>
</table>
```

**Content Ideas:**
- Project 1: Task Manager or To-Do App
- Project 2: Blog Platform or Portfolio
- Project 3: E-Commerce Store or Social App
- For each: Description, tech stack, features, link

---

### Page 4: Contact (contact.html)

**Purpose:** Enable visitor communication

**Must Include:**

**Contact Form:**
```html
<form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="subject">Subject:</label>
    <input type="text" id="subject" name="subject" required>

    <label for="message">Message:</label>
    <textarea id="message" name="message" required></textarea>

    <button type="submit">Send</button>
</form>
```

**Alternative Contact Methods:**
```html
<ul>
    <li>Email: your@email.com</li>
    <li>GitHub: <a href="#">link</a></li>
    <li>LinkedIn: <a href="#">link</a></li>
</ul>
```

**Contact Info Table:**
```html
<table border="1">
    <tr>
        <th>Method</th>
        <th>Response Time</th>
        <th>Best For</th>
    </tr>
</table>
```

---

## ✅ Comprehensive Checklist

### Overall Structure
- [ ] 4 HTML files created (index, about, projects, contact)
- [ ] Common header on all pages
- [ ] Common footer on all pages
- [ ] Navigation menu on all pages (links work)
- [ ] Consistent layout across pages
- [ ] Professional appearance

### HTML Standards
- [ ] DOCTYPE declaration on all pages
- [ ] HTML5 lang attribute
- [ ] Meta charset UTF-8
- [ ] Meta viewport for mobile
- [ ] Unique, descriptive title on each page
- [ ] Proper HTML hierarchy

### Content Requirements

**Home Page:**
- [ ] Welcome message
- [ ] Professional tagline
- [ ] At least 1 image
- [ ] Quick intro (2-3 paragraphs)
- [ ] Link to other pages

**About Page:**
- [ ] Personal bio
- [ ] Profile photo with alt text
- [ ] Education section (details)
- [ ] Skills section (categorized)
- [ ] Experience/achievements
- [ ] Personal interests

**Projects Page:**
- [ ] 3+ project descriptions
- [ ] Technologies used for each
- [ ] At least 1 image
- [ ] Project comparison table
- [ ] Skills demonstrated

**Contact Page:**
- [ ] Contact form with:
  - [ ] Name input (text)
  - [ ] Email input (email type)
  - [ ] Subject input (text)
  - [ ] Message textarea
  - [ ] Submit button
  - [ ] Reset button
- [ ] Alternative contact methods
- [ ] Contact information table
- [ ] Response time expectations

### Semantic HTML
- [ ] `<header>` tag
- [ ] `<nav>` tag
- [ ] `<main>` tag
- [ ] `<section>` tags
- [ ] `<footer>` tag
- [ ] Proper heading hierarchy (H1, H2, H3)
- [ ] `<table>` for tabular data
- [ ] `<form>` for forms

### Images & Media
- [ ] At least 3 images total (with alt text)
- [ ] Each image has meaningful alt text
- [ ] Images are from placeholder services (optional)
- [ ] Images display correctly

### Forms
- [ ] Form fields are properly labeled
- [ ] Form fields have proper input types
- [ ] Form has submit and reset buttons
- [ ] Form structure is correct

### Accessibility
- [ ] All images have alt text
- [ ] Links have descriptive text
- [ ] Color not sole conveyor of information
- [ ] Form labels connected to inputs

### Testing
- [ ] All pages open without errors
- [ ] All links work correctly
- [ ] Form inputs are usable
- [ ] No console errors (F12)
- [ ] Page looks good in mobile view (Ctrl+Shift+M)
- [ ] Text is readable

---

## 🎯 Expected Outcome

When complete, you should have:

```
Portfolio Website Structure:
├── Professional home page
├── Detailed about me page
├── Project showcase page
└── Contact page with form

Features:
✓ Consistent navigation
✓ Multiple content types (text, images, forms, tables)
✓ Professional layout
✓ Semantic HTML
✓ Responsive metadata
```

---

## 💡 Content Guidelines

### Use Real or Realistic Information

```html
<!-- Good: Specific and authentic -->
<p>I'm Aniket Pal, a BCA student passionate about web development...</p>

<!-- Poor: Too generic -->
<p>I am a developer.</p>
```

### Meaningful Project Descriptions

```html
<!-- Good: Descriptive and detailed -->
<h3>Task Manager Application</h3>
<p>A full-stack application with user authentication, task CRUD operations,
and real-time updates using Node.js, Express, and MongoDB.</p>

<!-- Poor: Too brief -->
<h3>Task App</h3>
<p>An app for tasks.</p>
```

### Professional Contact Information

```html
<!-- Good: Multiple contact options -->
<p>Email: aniket@example.com</p>
<p>GitHub: github.com/aniketpal</p>
<p>LinkedIn: linkedin.com/in/aniketpal</p>

<!-- Poor: Single option -->
<p>Email me</p>
```

---

## 🐛 Common Issues & Solutions

### Issue 1: Links between pages not working

**Solution:**
```html
<!-- Correct (if files in same folder) -->
<a href="about.html">About</a>
<a href="projects.html">Projects</a>

<!-- Wrong (extra slashes) -->
<a href="/about.html">About</a>  <!-- This won't work -->
```

### Issue 2: Table looks messy

**Solution:**
```html
<!-- Add border for visibility -->
<table border="1">
    <!-- Content -->
</table>

<!-- You'll style this better with CSS in Day 2 -->
```

### Issue 3: Form input not submitting

**Solution:**
```html
<!-- Correct -->
<form>
    <input type="text" name="username">
    <button type="submit">Submit</button>
</form>

<!-- Note: Without backend, form won't actually submit -->
<!-- That's OK for now - just test that it's clickable -->
```

### Issue 4: Image not showing

**Solution:**
```html
<!-- Use full URLs for online images -->
<img src="https://via.placeholder.com/300x300" alt="Description">

<!-- Or use relative paths for local files -->
<img src="assets/images/photo.jpg" alt="Description">
```

---

## 📝 Semantic HTML5 Elements Reference

```html
<!-- Use these throughout your portfolio -->

<header>            <!-- Page header with title and nav -->
<nav>               <!-- Navigation menu -->
<main>              <!-- Main content of page -->
<section>           <!-- Content section -->
<article>           <!-- Article or blog post -->
<aside>             <!-- Sidebar or related content -->
<footer>            <!-- Page footer -->

<h1>-<h6>          <!-- Headings (hierarchy) -->
<p>                 <!-- Paragraph -->
<strong>            <!-- Important text -->
<em>                <!-- Emphasized text -->
<a>                 <!-- Link -->
<img>               <!-- Image -->
<ul>, <ol>          <!-- Lists -->
<li>                <!-- List item -->
<table>             <!-- Table -->
<form>              <!-- Form -->
<input>             <!-- Form input -->
<button>            <!-- Button -->
```

---

## 🧪 Testing Your Portfolio

### Test Checklist:

```
1. Open each page in Chrome
2. Click all navigation links
3. Verify all images load
4. Test form inputs (click, type)
5. Right-click → Inspect each page
6. Check mobile view (Ctrl+Shift+M)
7. Open Console (F12) - should be clean
8. Refresh page - content should persist
9. Check spelling and grammar
10. Verify footer on all pages
```

---

## 🎨 Enhancement Ideas

After completing the basic requirements, try:

1. **Add more sections:**
   - Testimonials/Recommendations
   - Blog section
   - FAQ
   - Services offered

2. **Enhance forms:**
   - Add more input types (checkbox, radio, select)
   - Add form validation hints
   - Add different form sections

3. **Improve organization:**
   - Add breadcrumb navigation
   - Add table of contents
   - Add "back to top" links

4. **Expand content:**
   - Add more projects
   - Add certifications
   - Add awards/achievements

5. **Prepare for CSS:**
   - Add class names to elements
   - Add ID attributes
   - Plan color scheme
   - Think about layout

---

## 📝 Professional Tips

1. **Content is King**
   - Write meaningful text
   - Use professional language
   - Check for typos

2. **User Experience**
   - Make navigation clear
   - Keep pages organized
   - Don't overcrowd content

3. **Consistency**
   - Same font style (no styling yet)
   - Same structure on all pages
   - Consistent naming conventions

4. **Accessibility**
   - Always add alt text to images
   - Use semantic HTML
   - Make links descriptive

5. **Future-Proofing**
   - Use logical class names
   - Add IDs for sections
   - Think about CSS structure

---

## 📊 Learning Outcomes

After completing this assignment, you will have:

✅ Built a complete multi-page website  
✅ Practiced HTML5 semantic markup  
✅ Created forms with various input types  
✅ Used tables for data presentation  
✅ Linked multiple pages together  
✅ Added meaningful images with alt text  
✅ Created professional content  
✅ Understood website structure  
✅ Built something you can show employers  

---

## 📝 Git Commit

```bash
# After completing all 4 pages and README

git add index.html about.html projects.html contact.html README.md
git commit -m "Assignment: Created 4-page portfolio website with HTML"
git push origin main
```

---

## 🎯 Next Steps

1. ✅ Complete all 4 pages
2. ✅ Test all links and forms
3. ✅ Verify all images display
4. ✅ Check HTML validity
5. ✅ Commit to Git
6. ✅ Share portfolio (GitHub link)

After Day 1:
→ **Day 2:** CSS Basics - You'll style this portfolio beautifully!

---

## 📚 Resources

- **HTML Validation:** https://validator.w3.org/
- **Placeholder Images:** https://via.placeholder.com/
- **Color Schemes:** https://coolors.co/
- **MDN Web Docs:** https://developer.mozilla.org/
- **W3Schools:** https://www.w3schools.com/

---

## ⭐ Rubric (Self-Assessment)

| Criteria | Excellent | Good | Fair | Needs Work |
|---|---|---|---|---|
| HTML Structure | Perfect HTML5 structure, semantic tags | Correct structure, mostly semantic | Some structure issues | Major issues |
| Content Quality | Professional, detailed, engaging | Good content, mostly complete | Adequate content | Minimal/poor content |
| Page Linking | All links work perfectly | Most links work | Some links work | Many broken links |
| Forms & Input | Complete, well-organized form | Form present, mostly correct | Basic form | Form missing/broken |
| Images & Alt Text | Appropriate images, perfect alt text | Images present, alt text present | Some issues | Missing images/alt text |
| Consistency | Perfect consistency across pages | Mostly consistent | Some inconsistency | Very inconsistent |

---

**🎉 Congratulations on completing your portfolio website!**

This is a significant achievement in your web development journey. You now have:
- A project to show employers
- A deeper understanding of HTML
- A foundation for CSS styling
- Real-world web development experience

**Ready for Day 2? Let's add beautiful CSS styling! 🎨**

---

**Day 1 Complete! ✨**
