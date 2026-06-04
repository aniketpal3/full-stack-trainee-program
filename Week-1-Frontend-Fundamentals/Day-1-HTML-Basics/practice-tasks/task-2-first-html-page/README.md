# Practice Task 2: Your First HTML Page

## 📌 Objective

Create a proper HTML5 page with correct structure and semantic tags.

## ⏱️ Estimated Time

**20-25 minutes**

## 📝 Task Description

In this task, you will:

1. Create an HTML page with correct HTML5 structure
2. Add a meaningful title
3. Use heading and paragraph tags
4. Understand the purpose of each tag
5. View and modify using DevTools

## 📋 File Structure

```
task-2-first-html-page/
├── index.html          # Your HTML file
└── README.md           # This file
```

## 🛠️ Step-by-Step Instructions

### Step 1: Create the File

Create `index.html` in this folder with the following content:

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
    <p>This is my first HTML page.</p>
</body>
</html>
```

### Step 2: Save and Open in Browser

```
1. Save file: Ctrl+S
2. Right-click index.html
3. Select "Open with Live Server"
4. Browser should display:
   - Title in browser tab: "My First Webpage"
   - Large heading: "Welcome to My Website"
   - Paragraph text: "This is my first HTML page."
```

### Step 3: Understand Each Tag

| Tag | Purpose | Display |
|---|---|---|
| `<!DOCTYPE html>` | Tells browser this is HTML5 | (Not visible) |
| `<html>` | Root container for all content | (Container) |
| `<head>` | Metadata (not visible on page) | (Not visible) |
| `<title>` | Page title (shown in tab) | Browser tab |
| `<meta charset>` | Character encoding (UTF-8) | (Not visible) |
| `<body>` | All visible content | Main area |
| `<h1>` | Main heading (largest) | Large text |
| `<p>` | Paragraph text | Normal text |

### Step 4: Explore with DevTools

```
1. Open page in Chrome
2. Press F12 to open DevTools
3. Click Elements tab
4. Hover over HTML elements
5. See where each element is highlighted
6. Notice the indentation (hierarchy)
```

### Step 5: Modify Using DevTools

```
1. Right-click heading → Inspect
2. In Elements panel, double-click "Welcome to My Website"
3. Type: "Hello World!"
4. Press Enter
5. Heading changes on page (changes disappear on refresh)
6. This is how DevTools helps debug!
```

---

## 📝 Understanding HTML Structure

### Head vs Body:

```html
<head>
    <!-- Metadata (hidden from user) -->
    <title>Appears in browser tab</title>
    <meta ...>
</head>

<body>
    <!-- Visible content -->
    <h1>This user sees this</h1>
    <p>And this</p>
</body>
```

### Why is Structure Important?

✅ **Semantics** - Describes meaning of content  
✅ **Accessibility** - Screen readers understand structure  
✅ **SEO** - Search engines read title and headings  
✅ **Maintainability** - Other developers understand code  

---

## ✅ Checklist

- [ ] File named `index.html`
- [ ] Correct HTML5 structure
- [ ] DOCTYPE declaration present
- [ ] Title tag contains "My First Webpage"
- [ ] h1 tag contains welcome message
- [ ] p tag contains description
- [ ] File opens in browser
- [ ] Content displays correctly
- [ ] DevTools inspection works
- [ ] Can modify text in DevTools

---

## 🎯 Expected Output

Browser displays:

```
Welcome to My Website

This is my first HTML page.
```

Browser tab shows: "My First Webpage"

---

## 💡 Key Learnings

1. **HTML5 Structure** - Always use correct boilerplate
2. **Head Content** - Metadata not visible to users
3. **Body Content** - What users actually see
4. **Hierarchy** - Proper indentation shows structure
5. **DevTools** - Inspector shows what HTML produces

---

## 🐛 Common Mistakes

### Mistake 1: Closing tags

❌ Wrong:
```html
<p>This is wrong
```

✅ Correct:
```html
<p>This is correct</p>
```

### Mistake 2: Nesting tags wrongly

❌ Wrong:
```html
<h1>Title <p>paragraph</h1></p>
```

✅ Correct:
```html
<h1>Title</h1>
<p>paragraph</p>
```

### Mistake 3: Forgetting DOCTYPE

❌ Wrong:
```html
<html>
<head>...</head>
</html>
```

✅ Correct:
```html
<!DOCTYPE html>
<html>
<head>...</head>
</html>
```

---

## 🔍 DevTools Tips

```
F12              → Open DevTools
Ctrl+Shift+C     → Element picker (click to inspect)
Ctrl+F (in DevTools) → Search HTML
Double-click tag → Edit content
Right-click      → More options
```

---

## 📚 Related Concepts

- **Meta Tags** - Charset (encoding), Viewport (mobile)
- **Lang Attribute** - `lang="en"` helps accessibility
- **Heading Hierarchy** - H1, H2, H3 (not for styling)
- **Semantic HTML** - Meaningful tags over generic divs

---

## ✨ Variations to Try

After completing the basic task, try these:

1. **Change heading text** to your own welcome message
2. **Add more paragraphs** with different information
3. **Change page title** and see it in browser tab
4. **Add special characters** like © or →
5. **Use h2 and h3** alongside h1

Example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Awesome Website</title>
</head>
<body>
    <h1>Welcome to My Awesome Website</h1>
    <h2>This is a subheading</h2>
    <p>First paragraph of content.</p>
    <p>Second paragraph of content.</p>
</body>
</html>
```

---

## 📝 Git Commit

After completing this task:

```bash
git add index.html README.md
git commit -m "Task 2: Created first HTML page with proper structure"
git push origin main
```

---

## ✨ Next Steps

1. Move to **Practice Task 3** - HTML Tags Practice
2. Create more complex HTML with multiple tag types
3. Learn about links, images, and lists

---

**🎉 Great job! You've created your first proper HTML page!**
