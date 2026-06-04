# Assignment: Personal Homepage

## 📌 Objective

Create a professional 2-page personal homepage showcasing services with modern CSS styling, hover effects, and responsive design.

## ⏱️ Estimated Time

**120-150 minutes** (2-2.5 hours)

## 📝 Project Description

A professional personal homepage featuring:
- Modern, professional design
- 2 pages (home & services)
- Service showcase with cards
- Responsive layout
- Interactive hover effects
- Pricing section
- Process workflow visualization

---

## 📁 File Structure

```
personal-homepage/
├── index.html     # Home page
├── services.html  # Services page
├── style.css      # Main stylesheet
├── README.md      # This file
└── assets/
    └── images/    # Images folder
```

---

## 📄 Pages Breakdown

### **index.html** - Home Page

**Sections:**
1. **Navigation Bar** - Sticky navbar with navigation
2. **Hero Section** - Welcome message with CTA buttons
3. **Highlights Section** - 4 feature cards showing benefits
4. **Recent Projects** - Preview of recent work
5. **Contact CTA** - Call-to-action section
6. **Footer** - Copyright and social links

**Hover Effects:**
- Navigation links underline on hover
- Highlight cards lift up on hover
- Project items lift up on hover
- Buttons scale/change on hover

---

### **services.html** - Services Page

**Sections:**
1. **Page Header** - Introduction section
2. **Services Grid** - 3 service cards with features
3. **Process Steps** - 6-step development process
4. **Pricing Section** - 3 pricing tiers with featured option
5. **CTA Section** - Final call-to-action
6. **Footer** - Same as homepage

**Components:**
- Service cards with icons and feature lists
- Process steps with numbered badges
- Pricing cards with pricing info
- Featured pricing tier highlighted

---

## 🎨 Design Features

### Color Scheme
```css
--primary: #667eea (Bright Blue)
--secondary: #764ba2 (Purple)
--dark: #1a1a2e (Dark)
--light: #f5f5f5 (Light Gray)
--white: #ffffff (White)
```

### Typography
- **Headings:** Bold, h1 (52px), h2 (36px), h3 (22px)
- **Body:** Regular, 16px-18px
- **Navbar:** 24px logo, 16px links

### Spacing
- Large sections: 80px padding
- Cards: 30px internal padding
- Gap between items: 20px-50px
- Container max-width: 1200px

---

## ✨ CSS Features Used

✅ Flexbox layouts  
✅ CSS Grid  
✅ Hover effects and transforms  
✅ Gradients and shadows  
✅ Sticky positioning  
✅ Transitions and animations  
✅ Media queries for responsiveness  
✅ CSS variables for theming  

---

## 🎯 Hover Effects

### Navigation Links
```css
- Underline extends on hover
- Color changes to primary color
```

### Cards
```css
- Lift up (translateY)
- Shadow increases
- Smooth transition (0.3s)
```

### Buttons
```css
- Color change on hover
- Optional: Scale or lift effect
- Shadow enhancement
```

### Service Cards
```css
- Translate up on hover
- Shadow increases
- Border-top highlights
```

---

## 📱 Responsive Design

| Device | Layout | Changes |
|---|---|---|
| **Mobile** | Stacked | Single column, smaller fonts |
| **Tablet** | 2 columns | Medium spacing |
| **Desktop** | 3+ columns | Full layout |

**Breakpoints:**
- Mobile: < 480px
- Tablet: 480px - 768px
- Desktop: > 768px

---

## ✅ Requirements Checklist

### Pages
- [ ] index.html complete with all sections
- [ ] services.html complete with all sections
- [ ] Navigation links between pages work
- [ ] Footer on both pages

### Styling
- [ ] Consistent color scheme applied
- [ ] Professional spacing and layout
- [ ] Hover effects on all interactive elements
- [ ] Buttons styled and functional
- [ ] Gradients on headers and CTAs
- [ ] Box shadows for depth

### Responsiveness
- [ ] Mobile layout (< 480px)
- [ ] Tablet layout (480-768px)
- [ ] Desktop layout (> 768px)
- [ ] Text responsive and readable
- [ ] No horizontal scrolling
- [ ] Images responsive

### Interactivity
- [ ] Navigation hover effects
- [ ] Card hover effects (lift, shadow)
- [ ] Button hover states
- [ ] Link hover effects
- [ ] Smooth transitions

---

## 🧪 Testing

```
1. Open index.html in browser
2. Click navigation links - should navigate properly
3. Hover over elements - effects should trigger
4. Resize browser - layout should be responsive
5. Check mobile view (F12 → Mobile)
6. Verify no console errors
7. Test on different devices/screens
```

---

## 🎓 Learning Outcomes

✅ Professional CSS styling  
✅ Hover effects and interactions  
✅ Responsive design implementation  
✅ Modern layout techniques  
✅ Color theory and gradients  
✅ Professional UI/UX patterns  
✅ Multi-page website structure  

---

## 💡 Enhancement Ideas

**Add Later:**
1. Smooth scrolling
2. Form validation
3. JavaScript interactions
4. Animations on scroll
5. Modal dialogs
6. Search functionality
7. Testimonials section
8. Blog integration
9. Dark mode toggle
10. Language selector

---

## 📝 Git Commit

```bash
git add index.html services.html style.css README.md
git commit -m "Day 2 Assignment: Created professional personal homepage"
git push origin main
```

---

## 🏆 Evaluation Criteria

| Criteria | Score |
|---|---|
| HTML Structure & Semantic Tags | ✅ |
| CSS Styling & Layout | ✅ |
| Responsive Design | ✅ |
| Hover Effects | ✅ |
| Professional Appearance | ✅ |
| Navigation & Links | ✅ |
| Performance & Accessibility | ✅ |
| Code Quality & Organization | ✅ |

---

## 🎉 Congratulations!

You've successfully completed the **Day 2: CSS Basics** assignment!

You've learned and implemented:
- Professional CSS styling
- Responsive design
- Modern layouts (Flexbox & Grid)
- Hover effects and interactions
- Multi-page website structure
- Professional UI/UX patterns

These are core skills for web development! 🚀

---

**Ready for Day 3? JavaScript awaits! 💻**

Day 3 will focus on making your website interactive with JavaScript!
