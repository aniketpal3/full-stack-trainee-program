# Practice Task 4: Box Model

## 📌 Objective

Understand the CSS Box Model and how content, padding, border, and margin work together.

## ⏱️ Estimated Time

**20-25 minutes**

## 📝 The Four Layers

```
Margin (Outside)
├─ Border (Edge)
│  ├─ Padding (Inside)
│  │  └─ Content (Text/Images)
```

---

## 🎯 Visual Demonstration

This task shows 4 boxes with increasing complexity:

1. **Box 1:** Content only (smallest)
2. **Box 2:** Content + Padding (20px inside space)
3. **Box 3:** Border only (3px edge)
4. **Box 4:** Full model (content + padding + border + margin)

---

## 💡 Key Concepts

### Padding (Inside)
```css
padding: 20px;  /* Space inside, around content */
```

### Border (Edge)
```css
border: 3px solid #e74c3c;
```

### Margin (Outside)
```css
margin: 20px;  /* Space outside, between elements */
```

---

## 🧮 Box Sizing

### Default (content-box)
```css
width: 200px;  /* Only counts content */
/* Actual size = 200px + padding + border */
```

### Better (border-box)
```css
box-sizing: border-box;
width: 200px;  /* Counts content + padding + border */
```

---

## ✅ Learning Outcomes

✅ Understand four layers of box model  
✅ Know difference between padding and margin  
✅ Create properly spaced elements  
✅ Use box-sizing for predictable layouts  
✅ Debug spacing issues  

---

## 📝 Git Commit

```bash
git add index.html style.css README.md
git commit -m "Day 2 Task 4: Mastered CSS Box Model"
git push origin main
```

---

**You now understand the foundation of CSS spacing! 🎉**
