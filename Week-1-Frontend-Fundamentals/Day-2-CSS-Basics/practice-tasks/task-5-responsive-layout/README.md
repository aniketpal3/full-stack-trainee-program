# Practice Task 5: Responsive Layout

## 📌 Objective

Create a responsive Flexbox layout that adapts to different screen sizes using Media Queries.

## ⏱️ Estimated Time

**30-35 minutes**

## 📝 What You'll Learn

✅ Flexbox basics (`display: flex`, `flex-wrap`)  
✅ Media Queries for responsive design  
✅ Mobile-first approach  
✅ Breakpoints (mobile, tablet, desktop)  
✅ Flexible sizing with `flex: 1 1 calc()`  

---

## 🎯 Responsive Behavior

**Mobile (< 481px):**
```
1 column
┌─────────┐
│ Item 1  │
├─────────┤
│ Item 2  │
├─────────┤
│ Item 3  │
└─────────┘
```

**Tablet (481px - 768px):**
```
2 columns
┌────────┬────────┐
│ Item 1 │ Item 2 │
├────────┼────────┤
│ Item 3 │ Item 4 │
└────────┴────────┘
```

**Desktop (769px+):**
```
3 columns
┌────────┬────────┬────────┐
│ Item 1 │ Item 2 │ Item 3 │
├────────┼────────┼────────┤
│ Item 4 │ Item 5 │ Item 6 │
└────────┴────────┴────────┘
```

---

## 💻 Key CSS Concepts

### Flexbox Container

```css
.grid {
    display: flex;       /* Enable flexbox */
    flex-wrap: wrap;     /* Items wrap to next line */
    gap: 20px;          /* Space between items */
}
```

### Flexible Items

```css
.grid-item {
    flex: 1 1 100%;  /* Grow, shrink, base size */
}

/* Mobile first: 100% width (1 column) */
```

### Media Queries

```css
/* Tablet: 2 columns */
@media (min-width: 481px) and (max-width: 768px) {
    .grid-item {
        flex: 1 1 calc(50% - 10px);
    }
}

/* Desktop: 3 columns */
@media (min-width: 769px) {
    .grid-item {
        flex: 1 1 calc(33.333% - 14px);
    }
}
```

---

## 📱 Testing Responsive Design

### Method 1: Browser DevTools
```
1. Press F12 (open DevTools)
2. Click mobile icon (📱)
3. Select different devices
4. Watch layout change
```

### Method 2: Manual Resizing
```
1. Drag browser window edge
2. Watch layout adapt
3. Notice breakpoints change
```

### Method 3: Check Specific Sizes
```
- Mobile: 375px (iPhone)
- Tablet: 768px (iPad)
- Desktop: 1024px+
```

---

## ✅ Checklist

- [ ] 6 items display in grid
- [ ] Mobile: 1 column
- [ ] Tablet: 2 columns
- [ ] Desktop: 3 columns
- [ ] Gap between items: 20px
- [ ] Items align properly
- [ ] Responsive typography
- [ ] No horizontal scrolling on mobile
- [ ] Breakpoint info shows correctly

---

## 💡 Mobile-First Approach

**Why start mobile?**

1. Simpler base styles
2. Better performance
3. Easier to add complexity
4. Mobile users are majority

**Pattern:**

```css
/* Base styles (mobile) */
.item { width: 100%; }

/* Add features for larger screens */
@media (min-width: 768px) {
    .item { width: 50%; }
}

@media (min-width: 1200px) {
    .item { width: 33.333%; }
}
```

---

## 🧮 Flex Sizing Explained

```css
flex: 1 1 calc(33.333% - 14px);
      ↑ ↑ ↑
      │ │ └─ Base size
      │ └─── Shrink factor
      └───── Grow factor
```

**Why the calculation?**

```
3 columns = 33.333% each
Gaps: 2 × 20px = 40px total
Per item gap: 40px ÷ 3 = ~13.33px

So actual width = 33.333% - 13.33px
```

---

## 📝 Git Commit

```bash
git add index.html style.css README.md
git commit -m "Day 2 Task 5: Created responsive Flexbox layout with media queries"
git push origin main
```

---

## ✨ Variations to Try

1. **Change breakpoints:**
   ```css
   @media (min-width: 600px) { /* Tablet */ }
   @media (min-width: 1000px) { /* Desktop */ }
   ```

2. **Add 4-column desktop:**
   ```css
   @media (min-width: 1200px) {
       flex: 1 1 calc(25% - 15px);
   }
   ```

3. **Change gap size:**
   ```css
   gap: 30px;  /* Larger gap */
   ```

---

**Congratulations on mastering responsive design! 🎉**

You now understand:
- Flexbox layouts
- Media queries
- Mobile-first development
- Responsive design principles

These are essential skills for modern web development!

---

**Ready for the Mini-Project? Let's style your portfolio! 🎨**
