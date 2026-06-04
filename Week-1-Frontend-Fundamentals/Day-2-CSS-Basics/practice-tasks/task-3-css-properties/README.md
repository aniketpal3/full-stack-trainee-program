# Practice Task 3: CSS Properties

## 📌 Objective

Learn and apply essential CSS properties: backgrounds, colors, borders, padding, margin, shadows, and transitions.

## ⏱️ Estimated Time

**25-30 minutes**

## 📝 Properties Covered

- **Background & Colors:** `background-color`, `color`, `linear-gradient`
- **Spacing:** `padding`, `margin`
- **Borders:** `border`, `border-radius`
- **Effects:** `box-shadow`, `text-shadow`, `transition`, `transform`

---

## 🎨 Card Component Structure

### HTML Structure

```html
<div class="card">
    <h2 class="card-title">Title</h2>
    <p class="card-description">Description text</p>
    <button class="card-button">Button</button>
</div>
```

### CSS Styling

```css
.card {
    background-color: white;
    padding: 30px;
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

---

## 🛠️ Key CSS Properties Used

### Background Color
```css
background-color: #ffffff;
```

### Padding (Inside Space)
```css
padding: 30px;  /* 30px on all sides */
```

### Border
```css
border: 2px solid #e0e0e0;
```

### Border Radius (Rounded Corners)
```css
border-radius: 10px;
```

### Box Shadow
```css
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
```

### Transitions (Smooth Animation)
```css
transition: all 0.3s ease;
```

### Hover Effects
```css
.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}
```

---

## ✅ Expected Features

✅ 3 styled cards displayed  
✅ Gradient background (purple)  
✅ White cards with shadows  
✅ Hover effect (cards lift up)  
✅ Featured card with different styling  
✅ Responsive buttons with hover effects  
✅ Properties reference section  

---

## 💡 What You'll Learn

- Creating reusable card components
- Hover effects and transitions
- Box model spacing (padding vs margin)
- Shadows and depth effects
- Color gradients
- Professional UI patterns

---

## 📝 Git Commit

```bash
git add index.html style.css README.md
git commit -m "Day 2 Task 3: Created styled card components with CSS properties"
git push origin main
```

---

**Excellent work on CSS properties! You're building professional-looking components! 🎉**
