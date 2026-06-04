# Practice Task 1: Linking CSS

## 📌 Objective

Learn how to link an external CSS file to an HTML page and understand the three ways to apply CSS styling.

## ⏱️ Estimated Time

**20-25 minutes**

## 📝 Task Description

Create an HTML page and link it to an external CSS stylesheet to apply professional styling.

### What You'll Learn:

✅ External CSS linking syntax  
✅ CSS file structure  
✅ Basic CSS properties  
✅ Styling different HTML elements  
✅ CSS comments  
✅ Best practice: separation of concerns  

---

## 🛠️ Step-by-Step Instructions

### Step 1: Create HTML File

Create `index.html` with proper structure including:

- DOCTYPE and meta tags
- Link to external CSS file
- Semantic HTML elements
- Various heading levels
- Paragraphs and lists
- Button element

**Key HTML:**

```html
<link rel="stylesheet" href="style.css">
```

This line connects the HTML to the CSS file.

---

### Step 2: Create CSS File

Create `style.css` in the same folder with styling for:

- Body (background, font)
- Headings (h1, h2)
- Paragraphs
- Lists
- Container div
- Button
- Footer

---

### Step 3: Link the Files

Make sure the CSS link is correct:

```html
<!-- If style.css is in same folder -->
<link rel="stylesheet" href="style.css">

<!-- If style.css is in subfolder -->
<link rel="stylesheet" href="css/style.css">
```

---

### Step 4: Open in Browser

```
1. Right-click index.html
2. Open with Live Server
3. You should see styled page with:
   - Blue background
   - Formatted text
   - Styled button
   - Professional layout
```

---

## 📋 CSS Properties Used

### Global Reset

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

Removes default spacing and makes sizing consistent.

### Background Color

```css
body {
    background-color: #f5f5f5;
}
```

Sets page background color.

### Font Styling

```css
body {
    font-family: Arial, sans-serif;
    color: #333;
    font-size: 16px;
}
```

Sets global typography.

### Heading Colors

```css
h1 {
    color: #007bff;
    font-size: 32px;
}

h2 {
    color: #0056b3;
    font-size: 24px;
}
```

Different colors for hierarchy.

### Button Styling

```css
button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
}

button:hover {
    background-color: #0056b3;
}
```

Interactive button with hover effect.

---

## ✅ Checklist

- [ ] HTML file created (index.html)
- [ ] CSS file created (style.css)
- [ ] CSS linked in HTML: `<link rel="stylesheet" href="style.css">`
- [ ] Files in same folder
- [ ] Background color applied
- [ ] Headings styled and colored
- [ ] Paragraphs styled
- [ ] Button styled
- [ ] Page opens without errors
- [ ] Styles apply correctly

---

## 🎯 Expected Output

When opened in browser, you should see:

```
                    [Blue Header]
         Welcome to CSS! (centered, blue)
    This page demonstrates... (gray, italic)
─────────────────────────────────────────

[Benefits of External CSS] (dark blue)
External CSS allows us to:
• Separate content from styling
• Reuse styles across pages
• Make websites easier to maintain
• Improve page load performance

[Styled Elements] (dark blue)
This paragraph has custom styling...
[Click Me] (blue button with hover effect)

─────────────────────────────────────────
© 2026 Task 1 - Linking CSS
```

---

## 💡 Key Concepts

### External CSS Advantages:

1. **Reusable** - Use same CSS on multiple pages
2. **Maintainable** - Update all pages by editing one file
3. **Separation** - Content (HTML) separate from style (CSS)
4. **Performance** - Browser caches CSS file
5. **Professional** - Industry standard practice

### CSS File Structure:

```css
/* Comments */
selector {
    property: value;
    property: value;
}
```

### Linking Syntax:

```html
<link rel="stylesheet" href="path/to/style.css">
```

- **rel** - Relationship (always "stylesheet" for CSS)
- **href** - Path to CSS file

---

## 🐛 Common Issues

### Issue 1: Styles not applying

**Solutions:**

1. Check CSS link is correct:
   ```html
   <link rel="stylesheet" href="style.css">
   ```

2. Verify CSS file is in same folder as HTML

3. Check file extension is `.css` not `.txt`

4. Reload page (Ctrl+Shift+R for hard refresh)

5. Check browser console (F12) for errors

### Issue 2: CSS file appears in browser

**Cause:** Wrong file opened

**Solution:** Open HTML file, not CSS file

### Issue 3: Path error

**Error:** `Failed to load resource: the server responded with a status of 404`

**Solution:** Check file paths are correct

---

## 📝 CSS Selector Review

| Selector | Syntax | Example |
|---|---|---|
| Element | `element` | `h1 { }` |
| Class | `.class-name` | `.title { }` |
| ID | `#id-name` | `#header { }` |
| Multiple | `selector1, selector2` | `h1, h2 { }` |

---

## 🎨 Color Reference

**Used in this task:**

- `#f5f5f5` - Light gray (background)
- `#007bff` - Bright blue (headers, buttons)
- `#0056b3` - Dark blue (darker states)
- `#333` - Dark gray (text)
- `#999` - Medium gray (footer)

---

## ✨ Variations to Try

After completing the task:

1. **Change Colors:**
   ```css
   h1 { color: #FF6B6B; }  /* Red */
   body { background-color: #E7F3FF; }  /* Light blue */
   ```

2. **Change Fonts:**
   ```css
   body { font-family: 'Georgia', serif; }
   ```

3. **Add Borders:**
   ```css
   section { border: 2px solid #007bff; }
   ```

4. **Add Shadows:**
   ```css
   .container { box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
   ```

5. **Adjust Spacing:**
   ```css
   h1 { margin-bottom: 20px; }
   p { padding: 10px; }
   ```

---

## 📝 Git Commit

After completing:

```bash
git add index.html style.css README.md
git commit -m "Day 2 Task 1: Learned CSS linking and basic styling"
git push origin main
```

---

## ✨ Next Steps

1. Open `index.html` with Live Server
2. Inspect with DevTools (F12)
3. See how CSS selectors target elements
4. Try modifying CSS and see changes
5. Move to **Task 2** - CSS Selectors

---

## 📚 Related Concepts

- **CSS Specificity** - Which rules apply (element < class < ID)
- **CSS Cascade** - Later rules override earlier ones
- **Inheritance** - Some properties inherit from parents
- **Comments** - `/* comment */` ignored by browser

---

**Congratulations on linking your first external CSS! 🎉**

You've learned the foundational skill of separating HTML and CSS. This is industry standard practice and makes websites maintainable and scalable.

---

**Ready for Task 2? Let's explore CSS selectors! 🎨**
