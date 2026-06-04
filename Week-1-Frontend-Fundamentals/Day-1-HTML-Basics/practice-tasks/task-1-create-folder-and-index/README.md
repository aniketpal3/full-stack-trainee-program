# Practice Task 1: Create Your First Folder and HTML File

## 📌 Objective

Learn how to set up your development environment and create your first HTML file in VS Code.

## ⏱️ Estimated Time

**15-20 minutes**

## 📝 Task Description

In this task, you will:

1. Install VS Code and Google Chrome (if not already installed)
2. Create a project folder for Day 1
3. Create an `index.html` file
4. Open it in a browser
5. Observe the basic structure

## 🛠️ Step-by-Step Instructions

### Step 1: Install Required Tools

#### VS Code Installation:

```
1. Go to https://code.visualstudio.com/
2. Download the installer for Windows/Mac/Linux
3. Run the installer
4. Click "Next" through all prompts
5. Ensure "Add to PATH" is checked
6. Complete installation
7. Launch VS Code
```

#### Chrome Installation:

```
1. Go to https://www.google.com/chrome/
2. Click "Download Chrome"
3. Run the installer
4. Follow on-screen prompts
5. Launch Chrome
```

### Step 2: Create Project Folder

Open **Command Prompt** or **PowerShell** and run:

```bash
# Navigate to your desired location (e.g., Desktop)
cd Desktop

# Create Day 1 folder
mkdir Day-1-HTML-Basics

# Enter the folder
cd Day-1-HTML-Basics

# Create index.html file (Windows)
type nul > index.html

# OR on Mac/Linux:
touch index.html
```

### Step 3: Open in VS Code

```bash
# While inside the folder, open VS Code
code .
```

Or manually:

```
1. Open VS Code
2. File → Open Folder
3. Navigate to Day-1-HTML-Basics
4. Click "Select Folder"
```

### Step 4: Create Basic HTML File

In VS Code:

```
1. Click on "index.html" in the left sidebar
2. VS Code will show an empty file
3. Type ! and press Tab (VS Code snippet)
4. This auto-generates HTML5 template
```

Or paste this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Webpage</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>This is my first HTML file.</p>
</body>
</html>
```

### Step 5: Save the File

```
Press Ctrl+S (Windows/Linux) or Cmd+S (Mac)
```

### Step 6: Open in Browser

**Option 1 - Using Live Server (Recommended):**

```
1. Install "Live Server" extension in VS Code
   - Click Extensions (Ctrl+Shift+X)
   - Search "Live Server"
   - Click Install
2. Right-click on index.html
3. Select "Open with Live Server"
4. Browser automatically opens at localhost:5500
```

**Option 2 - Manual:**

```
1. Right-click index.html
2. Select "Open with" → "Chrome"
3. Or drag file into browser window
```

### Step 7: Observe

You should see:

```
Hello World!

This is my first HTML file.
```

---

## ✅ Checklist

- [ ] VS Code installed and working
- [ ] Chrome installed and working
- [ ] Day-1-HTML-Basics folder created
- [ ] index.html file created
- [ ] HTML structure is correct
- [ ] File opened successfully in browser
- [ ] Content displays correctly
- [ ] Live Server running (optional but recommended)

---

## 🎯 Expected Output

Your browser should display:

```
Hello World!

This is my first HTML file.
```

---

## 💡 Key Learnings

1. **Project Organization** - Keep files organized in folders
2. **File Structure** - Always use `index.html` as home page
3. **HTML Template** - Use HTML5 boilerplate for all pages
4. **Browser Preview** - Always test in browser
5. **Live Server** - Auto-refreshes on save (time saver!)

---

## 🐛 Troubleshooting

### Issue: File appears as text in browser?

**Solution:** 
- Right-click → Open with Chrome (not Notepad)
- File should have `.html` extension, not `.html.txt`

### Issue: Live Server extension not found?

**Solution:**
- Make sure VS Code is updated
- Restart VS Code after installing extension
- Try "Open with Live Server" again

### Issue: Chrome not opening?

**Solution:**
- Check if Chrome is installed: `where chrome` in terminal
- Or manually drag file into browser window
- Or use Edge, Firefox (any browser works)

---

## 📚 Related Concepts

- **File Extensions** - `.html` tells OS this is HTML file
- **Index.html** - Default page for folder (what opens on localhost)
- **DOCTYPE** - Tells browser this is HTML5
- **Meta Tags** - Metadata about page (title, charset, viewport)

---

## ✨ Next Steps

After completing this task:

1. Move to **Practice Task 2** - First HTML Page
2. Explore HTML structure in DevTools (F12)
3. Try modifying text and refreshing browser
4. Commit your code to Git (if setup)

---

## 📝 Git Command (Optional)

Once you've completed this task, save it to Git:

```bash
git add index.html
git commit -m "Task 1: Created first HTML file"
git push origin main
```

---

**🎉 Congratulations on your first HTML file!**
