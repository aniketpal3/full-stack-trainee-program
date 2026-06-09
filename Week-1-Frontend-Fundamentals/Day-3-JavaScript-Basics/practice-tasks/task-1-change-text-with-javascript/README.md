# Practice Task 1: Change Text with JavaScript

## 📌 Objective

Learn how to access HTML elements using JavaScript and change their text content.

## ⏱️ Estimated Time

**15-20 minutes**

## 📝 Concepts Learned

✅ DOM manipulation  
✅ `document.getElementById()`  
✅ `.textContent` property  
✅ Internal JavaScript  
✅ How JavaScript runs when page loads  

## 🎯 What This Task Does

1. HTML file has a paragraph with ID "myText" containing "Old Text"
2. JavaScript automatically changes it to "New Text"
3. No click button needed - happens automatically on page load

## 🛠️ Key Code

```javascript
// Get element by ID
let textElement = document.getElementById("myText");

// Change the text
textElement.textContent = "New Text";
```

## 📋 Breakdown

| Step | Code | Purpose |
|---|---|---|
| 1 | `document.getElementById("myText")` | Find HTML element with id="myText" |
| 2 | `textContent = "New Text"` | Change the text inside element |

## ✅ Checklist

- [ ] Page opens without errors
- [ ] Paragraph displays "New Text" (not "Old Text")
- [ ] Console shows "Text changed successfully!"
- [ ] Understand how JavaScript accesses HTML

## 🔍 Debugging

**If text doesn't change:**
1. Check ID matches: `id="myText"` and `getElementById("myText")`
2. Open console (F12) and look for errors
3. Make sure script is inside `<body>` tag

## 💡 What's Happening

When you open the page:
1. HTML loads first
2. Browser sees `<script>` tag
3. JavaScript code runs
4. `getElementById` finds the paragraph
5. Text changes from "Old Text" to "New Text"

---

**Great job! You've manipulated the DOM! 🎉**
