# Practice Task 2: CSS Selectors

## 📌 Objective

Master CSS selectors: element, class, ID, universal, and group selectors.

## ⏱️ Estimated Time

**25-30 minutes**

## 📝 What You'll Learn

✅ Element selectors target all elements of a type  
✅ Class selectors target elements with specific class  
✅ ID selectors target unique elements  
✅ Universal selector applies to all elements  
✅ Specificity rules (ID > Class > Element)  
✅ Using multiple selectors together  

---

## 🛠️ Selectors Demonstrated

### 1. Element Selector

```css
h1 { color: blue; }
p { margin: 10px; }
button { padding: 10px; }
```

Targets **all** elements of that type.

### 2. Class Selector (`.`)

```css
.card { border: 1px solid #ddd; }
.highlight { background-color: yellow; }
.btn-primary { background-color: blue; }
```

Can be applied to **multiple elements**, and **one element can have multiple classes**.

### 3. ID Selector (`#`)

```css
#featured { color: red; }
#header { background-color: blue; }
```

Targets **unique element per page**. Used sparingly.

### 4. Universal Selector (`*`)

```css
* { margin: 0; padding: 0; }
```

Applies to **ALL elements**. Useful for global resets.

---

## 📋 Specificity Order

```
Who wins?

1. Element      (h1) .............. Lowest
2. Class        (.title) .......... Medium
3. ID           (#main) ........... High
4. Inline       (style="") ........ Very High
5. !important   (important;) ...... Highest
```

---

## ✅ Files Created

- ✅ `index.html` - HTML with different elements and classes
- ✅ `style.css` - Styles using all selector types
- ✅ `README.md` - This guide

---

## 🎯 Expected Output

When you open the page:

1. **Blue centered heading** (element selector: h1)
2. **White cards with borders** (class selector: .card)
3. **Yellow highlighted text** (class selector: .highlight)
4. **Blue and gray buttons** (class selectors: .btn, .btn-primary, .btn-secondary)
5. **Red featured section** (ID selector: #featured)
6. **Consistent spacing** (universal selector: *)

---

## 💡 Key Concepts

### Class vs ID

| Feature | Class | ID |
|---|---|---|
| Symbol | `.` | `#` |
| Reusable | Yes (many elements) | No (unique) |
| Specificity | Medium | High |
| Usage | Most common | Rare |

### Multiple Classes on One Element

```html
<!-- Element can have multiple classes -->
<div class="card featured-card">Content</div>
```

```css
.card { border: 1px solid #ddd; }
.featured-card { border-left: 5px solid red; }

/* Both styles apply! */
```

---

## 🐛 Troubleshooting

### Issue: Selector not working

**Check:**
1. Selector syntax correct (`.class` not `class`, `#id` not `id`)
2. Class/ID name matches in HTML and CSS
3. No typos in names
4. Correct specificity (ID overrides class, class overrides element)

### Issue: Multiple selectors conflicting

**Solution:** Use more specific selector

```css
/* Specific - will override */
.card.featured { border: 5px red; }

/* Less specific - gets overridden */
.card { border: 1px gray; }
```

---

## ✨ Variations to Try

1. **Add new class:**
   ```html
   <p class="intro">Welcome message</p>
   ```
   
   ```css
   .intro { font-size: 20px; font-weight: bold; }
   ```

2. **Style group of elements:**
   ```css
   h1, h2, h3 { color: blue; }
   ```

3. **Descendant selector:**
   ```css
   .card p { font-size: 14px; }
   ```

---

## 📝 Git Commit

```bash
git add index.html style.css README.md
git commit -m "Day 2 Task 2: Mastered CSS selectors (element, class, ID)"
git push origin main
```

---

**Great job mastering CSS selectors! 🎉**

You now understand the foundation of CSS styling. Selectors are how we target HTML elements to apply styles.

---

**Ready for Task 3? Let's build beautiful cards! 🎨**
