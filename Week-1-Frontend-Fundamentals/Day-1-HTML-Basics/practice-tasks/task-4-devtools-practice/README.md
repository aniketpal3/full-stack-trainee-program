# Practice Task 4: Chrome DevTools Practice

## 📌 Objective

Learn how to use Chrome DevTools to inspect HTML, modify elements, and debug web pages.

## ⏱️ Estimated Time

**25-30 minutes**

## 📝 Task Description

In this task, you will:

1. Open HTML file in Chrome browser
2. Open DevTools using F12
3. Inspect HTML elements
4. Modify HTML in DevTools
5. View console and network tabs
6. Document your observations

## 🛠️ Step-by-Step Instructions

### Step 1: Open Previous HTML File

```
1. Open Chrome browser
2. Open any HTML file from previous tasks
   (e.g., task-2-first-html-page or task-3-html-tags-practice)
3. View the page normally
```

### Step 2: Open DevTools

**Method 1 (Keyboard Shortcut):**
```
Windows/Linux: Press F12
Mac:          Press Cmd+Option+I
```

**Method 2 (Right-click):**
```
1. Right-click anywhere on page
2. Select "Inspect" or "Inspect Element"
```

**Method 3 (Menu):**
```
1. Click menu (⋮) in top right
2. More tools → Developer tools
```

**Result:** DevTools opens at bottom or right side of screen

---

### Step 3: Explore Elements Tab

The Elements tab shows HTML structure of the page.

```
1. Click "Elements" tab (should be default)
2. You see HTML hierarchy on left
3. Styles panel on right shows CSS
4. Mouse over HTML → Element highlights on page
```

#### Understanding the Layout:

```
Left Panel (HTML)          | Right Panel (Styles)
─────────────────────────────────────────────────
<html>                     | color: red;
  <head>                   | font-size: 16px;
    <title>...             | padding: 10px;
  <body>                   |
    <h1>Welcome</h1>       |
    <p>Text</p>            |
```

---

### Step 4: Inspect the Heading

```
1. In Elements panel, find <h1> tag
2. Click on the <h1> tag
3. Page highlights the heading
4. Notice in Styles panel what CSS applies (if any)
5. Right side shows computed styles
```

---

### Step 5: Modify HTML (Live Edit)

```
1. Find <h1>Welcome to My Website</h1> in Elements
2. Double-click on the text "Welcome to My Website"
3. Text becomes editable
4. Type new text: "Hello from DevTools!"
5. Press Enter
6. Heading on page updates immediately
7. Refresh page (F5) - changes disappear (not saved to file)
```

This is powerful for testing without editing files!

---

### Step 6: Edit HTML Structure

```
1. Right-click <h1> in Elements
2. Select "Edit as HTML"
3. You can edit entire tag:
   <h1>My New Heading</h1>
4. Change to:
   <h1>Changed with DevTools</h1>
5. Press Ctrl+Enter or click outside
6. Page updates
7. Refresh to see original (changes not permanent)
```

---

### Step 7: View Console Tab

```
1. Click "Console" tab
2. This is where JavaScript errors appear
3. You can run JavaScript commands here
4. Try typing: console.log("Hello")
5. Press Enter
6. Message appears in console
```

**What appears in Console:**
- JavaScript errors (red)
- Warnings (yellow)
- Log messages (black)
- Your console.log() outputs

---

### Step 8: View Network Tab

```
1. Click "Network" tab
2. Refresh page (F5)
3. Network shows all file requests:
   - HTML file
   - CSS files
   - JavaScript files
   - Images
   - API calls
```

**Columns:**
- **Name** - File name
- **Status** - 200 (success), 404 (not found)
- **Type** - document, stylesheet, image
- **Size** - File size
- **Time** - Load time

---

### Step 9: View Mobile View

```
1. Press Ctrl+Shift+M (Windows) or Cmd+Shift+M (Mac)
2. DevTools shows mobile view
3. Responsive design simulator appears
4. Change device type (dropdown menu)
5. See how page looks on phone
6. Resize viewport manually
```

---

### Step 10: Search HTML

```
1. With Elements tab active
2. Press Ctrl+F (inside DevTools)
3. Search box appears at bottom
4. Type tag name: "h1"
5. DevTools highlights matching elements
6. Navigate through matches
```

---

## 📝 Observations to Document

After exploring DevTools, document these observations:

### Question 1: HTML Structure
**Look at the Elements panel and answer:**
- How many heading tags are present?
- What is the hierarchy of tags?
- Which tag is the parent of all content?

Example:
```
<html>
  <head>
    <title>...
  </head>
  <body>
    <h1>...    ← This is child of <body>
    <p>...     ← This is also child of <body>
  </body>
</html>
```

### Question 2: Element Inspection
**Right-click on a paragraph element and inspect:**
- What styles apply to it?
- Does it have default margins?
- What is the computed font size?

### Question 3: Modifying HTML
**Edit the h1 text using DevTools:**
- What changed on the page?
- What happened when you refreshed?
- Could this be used for testing?

### Question 4: Console Tab
**Open Console and answer:**
- Are there any errors?
- What color are errors (red), warnings (yellow)?
- Can you run commands?

### Question 5: Mobile View
**Toggle mobile view (Ctrl+Shift+M):**
- How does page look on mobile?
- Are all elements visible?
- Is text readable?

---

## 📋 Observation Document

Create a simple text file or document with your observations:

```
DevTools Exploration - Observations
===================================

1. HTML Structure:
   - Total heading tags: [number]
   - Main structure: html > head/body > child elements
   - Observation: [your notes]

2. Element Inspection:
   - h1 has color: [color if any]
   - Default margin: [yes/no]
   - Font size: [size in pixels]
   - Observation: [your notes]

3. Modifying HTML:
   - Changed h1 text successfully: [yes/no]
   - Changes persisted after refresh: [yes/no]
   - Useful for: debugging, testing without saving
   - Observation: [your notes]

4. Console Tab:
   - Errors present: [yes/no, number]
   - Any warnings: [yes/no]
   - Successfully ran console.log(): [yes/no]
   - Observation: [your notes]

5. Mobile View:
   - Page looks good on mobile: [yes/no]
   - Any layout issues: [describe]
   - Viewport size can be changed: [yes/no]
   - Observation: [your notes]

6. Overall Learning:
   - Most useful feature: [which tab/feature]
   - Will use for: debugging, testing
   - Need to learn more about: [topics]
```

---

## ✅ Checklist

- [ ] Opened Chrome browser
- [ ] Opened DevTools (F12)
- [ ] Located Elements tab
- [ ] Found and inspected h1 element
- [ ] Modified h1 text successfully
- [ ] Refreshed page (changes went away)
- [ ] Viewed Console tab
- [ ] Checked for errors/warnings
- [ ] Ran console.log() command
- [ ] Opened Network tab
- [ ] Toggled mobile view
- [ ] Documented observations

---

## 🎯 DevTools Keyboard Shortcuts Reference

| Action | Windows | Mac |
|---|---|---|
| Open DevTools | F12 | Cmd+Option+I |
| Element picker | Ctrl+Shift+C | Cmd+Shift+C |
| Toggle mobile | Ctrl+Shift+M | Cmd+Shift+M |
| Search HTML | Ctrl+F | Cmd+F |
| Refresh page | F5 | Cmd+R |
| Hard refresh | Ctrl+F5 | Cmd+Shift+R |

---

## 💡 Key Learning Points

1. **DevTools Inspection** - Understand HTML structure visually
2. **Live Editing** - Test changes without saving files
3. **Debugging** - Find and fix issues quickly
4. **Mobile Testing** - Ensure responsive design
5. **Performance** - Network tab shows load times
6. **Console** - Run JavaScript and see output

---

## 🐛 Troubleshooting

### Issue: DevTools won't open

**Solution:**
- Check browser is Chrome (not Safari, Firefox, Edge)
- Try keyboard shortcut: F12
- Or right-click page → Inspect
- Or use menu (⋮) → More tools → Developer tools

### Issue: Elements panel shows blank

**Solution:**
- Click on different elements with mouse
- Try searching for specific tags
- Refresh page if needed

### Issue: Can't modify HTML

**Solution:**
- Make sure you're double-clicking the text
- You should see text input appear
- Changes only temporary (refresh to revert)

---

## 📚 More to Explore

After mastering these basics, try:

1. **Sources Tab** - Set breakpoints for JavaScript debugging
2. **Application Tab** - View cookies and local storage
3. **Performance Tab** - Check page load performance
4. **Lighthouse Tab** - Audit page for SEO and accessibility

---

## 🚀 Advanced DevTools Tips

### Tip 1: Copy Element
```
Right-click element → Copy → Copy element (gets HTML)
```

### Tip 2: View All Styles
```
In Styles panel, see all CSS rules in cascade order
```

### Tip 3: Computed Styles
```
Click Computed tab to see final calculated styles
```

### Tip 4: Change Pseudo-class
```
Right-click element → :hov → Toggle :hover, :active, etc.
```

### Tip 5: Breakpoint Debugging
```
Sources tab → Click line number → Code pauses there
```

---

## 📝 Git Commit

```bash
git add README.md
git commit -m "Task 4: Completed Chrome DevTools practice"
git push origin main
```

---

## ✨ Next Steps

1. Complete **Mini-Project** - Build multi-page website
2. Use DevTools for all debugging
3. Test all pages and links
4. Then move to **Assignment** - Portfolio website

---

**🎉 You're now a DevTools pro! Use these skills for all debugging!**
