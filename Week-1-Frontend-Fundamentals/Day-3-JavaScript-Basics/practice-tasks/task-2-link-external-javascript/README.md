# Practice Task 2: Link External JavaScript

## 📌 Objective

Learn how to link an external JavaScript file to HTML.

## ⏱️ Estimated Time

**15-20 minutes**

## 🎯 Key Concepts

✅ External script linking  
✅ `<script src="file.js">` tag  
✅ Functions  
✅ Alert dialog  
✅ Browser console  

## 📁 Files

- `index.html` - HTML file that links to script.js
- `script.js` - External JavaScript file
- `README.md` - This file

## 🛠️ How It Works

1. **In HTML:** `<script src="script.js"></script>` loads the external file
2. **In script.js:** Code is written and executed
3. **In console:** Message appears: "JavaScript connected!"
4. **On button click:** Alert shows "Hello JavaScript!"

## ✅ Testing

1. Open `index.html` in browser
2. Press **F12** to open DevTools
3. Click **Console** tab
4. Should see: "JavaScript connected!"
5. Click button on page
6. Should see alert: "Hello JavaScript!"

## 💡 Key Points

```javascript
// In external JavaScript file
console.log("Message");  // Prints to console

function showAlert() {
    alert("Text");       // Shows dialog box
}
```

## 🔗 External vs Internal

**External (Best Practice):**
```html
<script src="script.js"></script>
```

**Internal:**
```html
<script>
    // Code here
</script>
```

---

**External JavaScript is the professional approach! ✅**
