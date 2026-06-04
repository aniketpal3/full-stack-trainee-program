# Day 2 – CSS Basics & Responsive Design

## 📚 Learning Objectives

By the end of Day 2, you will:

1. ✅ Understand CSS fundamentals and how it works
2. ✅ Learn three ways to apply CSS (inline, internal, external)
3. ✅ Master CSS selectors (element, class, ID, universal)
4. ✅ Style text, colors, and backgrounds
5. ✅ Control spacing with margins and padding
6. ✅ Understand the CSS Box Model
7. ✅ Learn CSS positioning techniques
8. ✅ Build flexible layouts with Flexbox
9. ✅ Create responsive designs with Media Queries
10. ✅ Convert HTML website into a styled, responsive website

---

## 🎨 Introduction to CSS

### What is CSS?

**CSS** = **C**ascading **S**tyle **S**heets

- Language for styling HTML elements
- Controls colors, layout, fonts, spacing
- Makes websites look beautiful
- Separates content (HTML) from presentation (CSS)
- Used by every website on the internet

### Why CSS?

**Without CSS:**
```
Just plain text, no colors, no layout, no design
```

**With CSS:**
```
Beautiful, modern, professional-looking website
```

### HTML vs CSS vs JavaScript

| Layer | Purpose | Example |
|---|---|---|
| **HTML** | Structure | `<h1>Welcome</h1>` |
| **CSS** | Styling | `h1 { color: blue; }` |
| **JavaScript** | Interactivity | `h1.addEventListener('click', ...)` |

### CSS Philosophy

> **Separation of Concerns:** Keep HTML (content) separate from CSS (styling)

---

## 🔗 Three Ways to Apply CSS

### Method 1: Inline CSS

CSS applied directly to HTML element using `style` attribute.

```html
<h1 style="color: blue; font-size: 24px;">Welcome</h1>
<p style="color: red;">This is a paragraph.</p>
```

**Pros:**
- Quick for testing
- Highest specificity

**Cons:**
- Hard to maintain
- Not reusable
- Mixes HTML and CSS
- **❌ Not recommended for production**

---

### Method 2: Internal CSS

CSS written inside `<style>` tag in the `<head>` section.

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        h1 {
            color: blue;
            font-size: 24px;
        }
        
        p {
            color: red;
        }
    </style>
</head>
<body>
    <h1>Welcome</h1>
    <p>This is a paragraph.</p>
</body>
</html>
```

**Pros:**
- All CSS in one place
- Reusable within the page
- No external files needed

**Cons:**
- Not reusable across multiple pages
- Can be cluttered for large projects
- HTML file becomes large
- **⚠️ Okay for small projects, not ideal for production**

---

### Method 3: External CSS

CSS written in separate `.css` file and linked to HTML.

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Welcome</h1>
    <p>This is a paragraph.</p>
</body>
</html>
```

```css
/* style.css */
h1 {
    color: blue;
    font-size: 24px;
}

p {
    color: red;
}
```

**Pros:**
- ✅ Best practice
- Reusable across all pages
- Easy to maintain
- Separates concerns
- Better performance (caching)

**Cons:**
- Requires extra file
- Extra HTTP request

**✅ RECOMMENDED FOR ALL PROJECTS**

---

## 📝 CSS Syntax

### Basic Syntax

```css
selector {
    property: value;
    property: value;
}
```

### Example

```css
h1 {
    color: blue;
    font-size: 24px;
    font-family: Arial, sans-serif;
}
```

### Breaking it down

```
h1                  ← SELECTOR (what to style)
{                   ← Opening brace
    color: blue;    ← PROPERTY: VALUE (declaration)
    font-size: 24px;← Another declaration
}                   ← Closing brace
```

### Multiple Declarations

```css
/* Each declaration separated by semicolon */
h1 {
    color: blue;           /* Declaration 1 */
    font-size: 24px;       /* Declaration 2 */
    font-weight: bold;     /* Declaration 3 */
    text-align: center;    /* Declaration 4 */
}                          /* Semicolon required! */
```

---

## 🎯 CSS Selectors

### 1. Element Selector

Targets all elements of a specific type.

```css
h1 {
    color: blue;
}

p {
    color: gray;
}

a {
    color: green;
}
```

**Selects:** All `<h1>` elements, all `<p>` elements, etc.

**Specificity:** Low (least specific)

---

### 2. Class Selector

Targets elements with specific class attribute using `.` (dot)

```html
<!-- HTML -->
<h1 class="title">Welcome</h1>
<h1 class="title">Another Title</h1>
<p class="title">Paragraph with class</p>
```

```css
/* CSS */
.title {
    color: blue;
    font-size: 24px;
}
```

**Usage:**
- Reuse same style on multiple elements
- Style multiple element types
- Most common selector
- Element can have multiple classes: `class="title featured"`

**Example with multiple classes:**

```html
<h1 class="title featured">Welcome</h1>
```

```css
.title {
    color: blue;
}

.featured {
    background-color: yellow;
    padding: 10px;
}

/* Both styles applied to h1 */
```

---

### 3. ID Selector

Targets single element with specific ID using `#` (hash)

```html
<!-- HTML -->
<h1 id="main-title">Welcome</h1>
```

```css
/* CSS */
#main-title {
    color: blue;
    font-size: 24px;
}
```

**Important Notes:**
- ID must be unique (only one element per ID)
- Higher specificity than classes
- Should be used sparingly
- Often used for JavaScript targeting

**ID vs Class:**

| Feature | ID | Class |
|---|---|---|
| Selector | `#id` | `.class` |
| Uniqueness | Must be unique | Can repeat |
| Specificity | Higher | Lower |
| Usage | Single element | Multiple elements |
| JavaScript | Yes | Yes |

---

### 4. Universal Selector

Targets ALL elements using `*` (asterisk)

```css
/* Reset all margins and padding to 0 */
* {
    margin: 0;
    padding: 0;
}

/* Set font for all elements */
* {
    font-family: Arial, sans-serif;
}
```

**Use Cases:**
- Reset default styles
- Apply global font
- Debug layout (add borders)

**Performance Note:** Using `*` everywhere can slow down browser, use sparingly

---

### 5. Group Selector

Apply same styles to multiple selectors

```css
/* Without grouping (repetitive) */
h1 { color: blue; }
h2 { color: blue; }
h3 { color: blue; }

/* With grouping (better) */
h1, h2, h3 {
    color: blue;
}

/* Mix different selectors */
h1, .subtitle, #intro {
    color: blue;
}
```

---

### 6. Descendant Selector

Target elements inside other elements using space

```html
<!-- HTML -->
<div class="container">
    <p>This is styled</p>
</div>
<p>This is NOT styled</p>
```

```css
/* CSS */
.container p {
    color: blue;
}

/* Selects: Only <p> inside .container */
```

**More Examples:**

```css
/* All links inside navigation */
nav a {
    color: white;
}

/* All paragraphs inside header */
header p {
    font-size: 14px;
}

/* Deep nesting */
div header nav a {
    text-decoration: none;
}
```

---

### Selector Specificity (Priority)

**Higher Specificity = Higher Priority**

```
Specificity Order (Low to High):
1. Element selector       (h1)
2. Class selector         (.title)
3. ID selector            (#main)
4. Inline style           (style="")
5. !important             (color: red !important;)
```

**Example:**

```css
h1 { color: blue; }              /* Specificity: 1 */
.title { color: red; }           /* Specificity: 10 (higher) */
#main { color: green; }          /* Specificity: 100 (highest) */
h1 { color: yellow !important; } /* Specificity: infinity */
```

**Result:** `#main` style wins (green)

---

## 🎨 Colors & Backgrounds

### Color Properties

```css
/* Text color */
h1 {
    color: blue;
}

/* Background color */
div {
    background-color: lightblue;
}
```

### Color Values

```css
/* Keyword colors */
color: red;
color: blue;
color: green;
color: transparent;

/* Hex color (0-F for each pair: RR GG BB) */
color: #FF0000;      /* Red */
color: #00FF00;      /* Green */
color: #0000FF;      /* Blue */
color: #FFFFFF;      /* White */
color: #000000;      /* Black */

/* RGB color (0-255 for each) */
color: rgb(255, 0, 0);      /* Red */
color: rgb(0, 255, 0);      /* Green */
color: rgb(0, 0, 255);      /* Blue */

/* RGBA color (RGB + Alpha for transparency, 0-1) */
color: rgba(255, 0, 0, 0.5);  /* Red with 50% transparency */
color: rgba(0, 0, 0, 0.8);    /* Black with 80% opacity */

/* HSL color (Hue, Saturation, Lightness) */
color: hsl(0, 100%, 50%);     /* Red */
color: hsl(120, 100%, 50%);   /* Green */
```

### Background Properties

```css
/* Solid background color */
body {
    background-color: lightblue;
}

/* Background image */
body {
    background-image: url('image.jpg');
}

/* Background image with repeat control */
body {
    background-image: url('pattern.jpg');
    background-repeat: no-repeat;  /* no-repeat, repeat-x, repeat-y */
    background-position: center;    /* center, top, bottom, left, right */
    background-size: cover;         /* cover, contain, 100% 100% */
}

/* Shorthand */
body {
    background: url('image.jpg') no-repeat center / cover;
}
```

### Text Colors - Best Practices

```css
/* Good contrast (dark text on light background) */
body {
    color: #333333;
    background-color: #FFFFFF;
}

/* Also good (light text on dark background) */
footer {
    color: #FFFFFF;
    background-color: #333333;
}

/* Poor contrast (DON'T DO THIS) */
p {
    color: #CCCCCC;
    background-color: #DDDDDD;  /* Hard to read! */
}
```

---

## 🔤 Typography (Fonts)

### Font Family

```css
/* Single font */
h1 {
    font-family: Arial;
}

/* Font stack (fallback fonts) */
body {
    font-family: 'Arial', 'Helvetica', sans-serif;
}

/* Best practice - always include generic font family */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

### Generic Font Families

```css
font-family: serif;       /* Georgia, Times New Roman (with serifs) */
font-family: sans-serif;  /* Arial, Verdana (no serifs) */
font-family: monospace;   /* Courier, Courier New (fixed-width) */
font-family: cursive;     /* Brush Script, Comic Sans (handwriting) */
font-family: fantasy;     /* Decorative fonts */
```

### Font Size

```css
/* Pixels (fixed size) */
h1 {
    font-size: 32px;
}

/* Em (relative to parent font size) */
p {
    font-size: 1em;     /* 1x parent font size */
    font-size: 1.2em;   /* 1.2x parent font size */
}

/* Rem (relative to root font size) */
h1 {
    font-size: 2rem;    /* 2x root (body) font size */
}

/* Percentage (relative to parent) */
p {
    font-size: 100%;    /* Same as parent */
    font-size: 120%;    /* 20% larger than parent */
}

/* Common sizes */
h1 { font-size: 32px; }
h2 { font-size: 28px; }
h3 { font-size: 24px; }
p { font-size: 16px; }
small { font-size: 12px; }
```

### Font Weight

```css
/* Keyword values */
font-weight: normal;      /* 400 */
font-weight: bold;        /* 700 */
font-weight: lighter;     /* One weight lighter than parent */
font-weight: bolder;      /* One weight bolder than parent */

/* Numeric values (100-900) */
font-weight: 100;  /* Thin */
font-weight: 300;  /* Light */
font-weight: 400;  /* Normal */
font-weight: 600;  /* Semi-bold */
font-weight: 700;  /* Bold */
font-weight: 900;  /* Extra-bold */
```

### Font Style

```css
font-style: normal;       /* Regular (default) */
font-style: italic;       /* Slanted */
font-style: oblique;      /* Similar to italic */
```

### Text Decoration

```css
text-decoration: none;           /* Remove underline */
text-decoration: underline;      /* Add underline */
text-decoration: overline;       /* Line above text */
text-decoration: line-through;   /* Strikethrough */
```

### Text Alignment

```css
text-align: left;        /* Left aligned (default) */
text-align: center;      /* Centered */
text-align: right;       /* Right aligned */
text-align: justify;     /* Spread evenly across line */
```

### Line Height (Spacing Between Lines)

```css
line-height: 1.5;        /* 1.5x font size */
line-height: 2;          /* 2x font size (double-spaced) */
line-height: 20px;       /* Fixed height */
```

### Font Shorthand

```css
/* font: [weight] [style] [size]/[line-height] [family] */
body {
    font: normal normal 16px/1.5 Arial, sans-serif;
}
```

---

## 🔳 Borders

### Border Properties

```css
/* All borders */
div {
    border: 2px solid black;
}

/* Individual borders */
div {
    border-top: 2px solid red;
    border-right: 3px dotted blue;
    border-bottom: 2px solid green;
    border-left: 3px dashed orange;
}

/* Border width */
border-width: 1px;        /* 1px all sides */
border-width: 1px 2px;    /* 1px top/bottom, 2px left/right */
border-width: 1px 2px 3px 4px;  /* top right bottom left */

/* Border style */
border-style: solid;      /* Solid line */
border-style: dotted;     /* Dots */
border-style: dashed;     /* Dashes */
border-style: double;     /* Double line */
border-style: groove;     /* 3D groove */
border-style: ridge;      /* 3D ridge */
border-style: inset;      /* 3D inset */
border-style: outset;     /* 3D outset */

/* Border color */
border-color: red;
border-color: rgb(255, 0, 0);
border-color: #FF0000;
```

### Border Radius (Rounded Corners)

```css
/* All corners */
border-radius: 10px;      /* 10px radius all corners */

/* Individual corners */
border-top-left-radius: 10px;
border-top-right-radius: 15px;
border-bottom-right-radius: 20px;
border-bottom-left-radius: 25px;

/* Circular element */
border-radius: 50%;       /* Perfect circle (if width = height) */

/* Pill-shaped button */
button {
    border-radius: 25px;
}
```

---

## 📏 Margin & Padding

### What's the Difference?

```
                Margin (outside)
            ┌─────────────────────┐
            │   Border (edge)     │
            │ ┌─────────────────┐ │
            │ │ Padding (inside) │ │
            │ │  ┌───────────┐  │ │
            │ │  │ Content   │  │ │
            │ │  └───────────┘  │ │
            │ └─────────────────┘ │
            └─────────────────────┘
```

### Margin (Outside Spacing)

```css
/* All sides */
margin: 20px;

/* Top/Bottom and Left/Right */
margin: 10px 20px;

/* Top, Right, Bottom, Left (clockwise) */
margin: 10px 20px 30px 40px;

/* Individual sides */
margin-top: 10px;
margin-right: 20px;
margin-bottom: 30px;
margin-left: 40px;

/* Auto - center element */
margin: 0 auto;  /* Vertically aligned + horizontally centered */

/* Negative margin (overlap) */
margin: -10px;  /* Elements can overlap */
```

### Padding (Inside Spacing)

```css
/* All sides */
padding: 20px;

/* Top/Bottom and Left/Right */
padding: 10px 20px;

/* Top, Right, Bottom, Left (clockwise) */
padding: 10px 20px 30px 40px;

/* Individual sides */
padding-top: 10px;
padding-right: 20px;
padding-bottom: 30px;
padding-left: 40px;

/* Note: Padding cannot be negative */
```

### Box Sizing

By default, width and height don't include padding and border.

```css
/* Default (content-box) */
div {
    width: 100px;
    padding: 20px;
    border: 5px solid black;
    /* Actual width = 100 + 20*2 + 5*2 = 150px */
}

/* Better (border-box) */
div {
    box-sizing: border-box;
    width: 100px;
    padding: 20px;
    border: 5px solid black;
    /* Actual width = 100px (padding and border included) */
}

/* Apply to all elements */
* {
    box-sizing: border-box;
}
```

---

## 📦 CSS Box Model

### The Box Model Explained

Every HTML element is a box with:

1. **Content** - The actual content (text, images)
2. **Padding** - Space inside the box (around content)
3. **Border** - Line around padding
4. **Margin** - Space outside the box (between elements)

### Visual Representation

```
┌─────────────────────────────────────┐
│           MARGIN (Outside)          │
│  ┌──────────────────────────────┐   │
│  │    BORDER (Edge)             │   │
│  │  ┌────────────────────────┐  │   │
│  │  │  PADDING (Inside)      │  │   │
│  │  │  ┌──────────────────┐  │  │   │
│  │  │  │  CONTENT         │  │  │   │
│  │  │  │  (Text/Image)    │  │  │   │
│  │  │  └──────────────────┘  │  │   │
│  │  └────────────────────────┘  │   │
│  └──────────────────────────────┘   │
└─────────────────────────────────────┘
```

### Example

```css
div {
    width: 200px;
    height: 100px;
    content: "Hello";        /* 200x100 */
    
    padding: 10px;           /* 10px inside */
    border: 5px solid black; /* 5px line */
    margin: 20px;            /* 20px outside */
}

/* Total width = 200 + (10*2) + (5*2) + (20*2) = 270px */
/* Total height = 100 + (10*2) + (5*2) + (20*2) = 170px */
```

---

## 🎯 CSS Positioning

### Position Types

#### 1. Static (Default)

```css
position: static;

/* Element follows normal flow of the document */
/* Top, right, bottom, left properties ignored */
```

#### 2. Relative

```css
position: relative;
top: 20px;
left: 30px;

/* Element positioned relative to its normal position */
/* Takes up original space in document flow */
/* Other elements not affected */
```

#### 3. Absolute

```css
position: absolute;
top: 50px;
left: 100px;

/* Element removed from normal flow */
/* Positioned relative to nearest positioned ancestor */
/* Doesn't take up space */
/* Overlaps other elements */
```

#### 4. Fixed

```css
position: fixed;
top: 0;
right: 0;

/* Element stays in place when scrolling */
/* Positioned relative to viewport */
/* Used for: sticky headers, floating buttons */
```

#### 5. Sticky

```css
position: sticky;
top: 0;

/* Hybrid of relative and fixed */
/* Scrolls normally until reaching position */
/* Then sticks to viewport */
/* Used for: sticky headers, table headers */
```

### Z-Index (Layering)

```css
/* Controls stacking order (which element on top) */
/* Higher value = on top */
/* Only works with positioned elements */

div {
    position: relative;
    z-index: 10;  /* On top */
}

div {
    position: relative;
    z-index: 5;   /* Below previous */
}

div {
    position: relative;
    z-index: 1;   /* At bottom */
}
```

---

## 📐 Flexbox (Flexible Box)

### Why Flexbox?

Old way: floats, tables, absolute positioning (complicated)  
New way: Flexbox (simple, powerful, responsive)

### Flex Container

```css
.container {
    display: flex;  /* Enable flexbox */
}
```

### Main Flexbox Properties

#### Flex Direction

```css
.container {
    display: flex;
    flex-direction: row;           /* Left to right (default) */
    flex-direction: column;        /* Top to bottom */
    flex-direction: row-reverse;   /* Right to left */
    flex-direction: column-reverse;/* Bottom to top */
}
```

#### Justify Content (Main Axis Alignment)

```css
.container {
    display: flex;
    justify-content: flex-start;   /* Items at start (default) */
    justify-content: center;       /* Items centered */
    justify-content: flex-end;     /* Items at end */
    justify-content: space-between;/* Items with space between */
    justify-content: space-around; /* Items with space around */
    justify-content: space-evenly; /* Items with equal space */
}
```

#### Align Items (Cross Axis Alignment)

```css
.container {
    display: flex;
    align-items: flex-start;  /* Items at top */
    align-items: center;      /* Items centered vertically */
    align-items: flex-end;    /* Items at bottom */
    align-items: stretch;     /* Items stretch (default) */
}
```

#### Wrap

```css
.container {
    display: flex;
    flex-wrap: nowrap;    /* All items in one line (default) */
    flex-wrap: wrap;      /* Items wrap to next line */
    flex-wrap: wrap-reverse; /* Wrap reverse */
}
```

#### Gap

```css
.container {
    display: flex;
    gap: 20px;  /* Space between flex items */
}
```

### Flex Items

```css
.item {
    flex: 1;  /* Grow equally */
    flex-grow: 1;     /* How much to grow */
    flex-shrink: 1;   /* How much to shrink */
    flex-basis: 200px;/* Base size before growing/shrinking */
    order: 1;         /* Change order of items */
}
```

### Common Flexbox Layouts

```css
/* Row layout (side by side) */
.container {
    display: flex;
    flex-direction: row;
    gap: 20px;
}

/* Column layout (stacked) */
.container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

/* Centered content */
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;  /* Full viewport height */
}

/* 3-column layout */
.container {
    display: flex;
    gap: 20px;
}

.item {
    flex: 1;  /* Each takes equal width */
}
```

---

## 📱 Media Queries & Responsive Design

### What are Media Queries?

Apply different CSS based on screen size.

```css
/* Desktop (large screens) */
body {
    font-size: 18px;
}

/* Tablet (medium screens) */
@media (max-width: 768px) {
    body {
        font-size: 16px;
    }
}

/* Mobile (small screens) */
@media (max-width: 480px) {
    body {
        font-size: 14px;
    }
}
```

### Common Breakpoints

```css
/* Extra Large (Desktop) */
@media (min-width: 1200px) {
    /* Desktop styles */
}

/* Large (Laptop) */
@media (max-width: 1199px) and (min-width: 992px) {
    /* Laptop styles */
}

/* Medium (Tablet) */
@media (max-width: 991px) and (min-width: 768px) {
    /* Tablet styles */
}

/* Small (Large Phone) */
@media (max-width: 767px) {
    /* Mobile styles */
}

/* Extra Small (Small Phone) */
@media (max-width: 479px) {
    /* Small mobile styles */
}
```

### Responsive Images

```css
/* Images scale with container */
img {
    max-width: 100%;
    height: auto;
}

/* Different image sizes for different screens */
.hero-image {
    background-image: url('small.jpg');
}

@media (min-width: 768px) {
    .hero-image {
        background-image: url('medium.jpg');
    }
}

@media (min-width: 1200px) {
    .hero-image {
        background-image: url('large.jpg');
    }
}
```

### Responsive Layout with Flexbox

```css
/* Desktop: 3 columns */
.container {
    display: flex;
    gap: 20px;
}

.item {
    flex: 1;
}

/* Tablet: 2 columns */
@media (max-width: 768px) {
    .item {
        flex: 0 0 calc(50% - 10px);
    }
}

/* Mobile: 1 column */
@media (max-width: 480px) {
    .container {
        flex-direction: column;
    }
    
    .item {
        flex: 1;
    }
}
```

### Mobile First Approach

Start with mobile, add features for larger screens:

```css
/* Mobile first (small screens) */
body {
    font-size: 14px;
}

.container {
    display: flex;
    flex-direction: column;
}

/* Add features for tablets */
@media (min-width: 768px) {
    body {
        font-size: 16px;
    }
    
    .container {
        flex-direction: row;
    }
}

/* Add features for desktop */
@media (min-width: 1200px) {
    body {
        font-size: 18px;
    }
}
```

**Why Mobile First?**
- Simpler base styles
- Better performance
- Progressive enhancement
- Mobile users are majority

---

## ✨ CSS Best Practices

### 1. Use External CSS

```html
<!-- ✅ Good -->
<link rel="stylesheet" href="style.css">

<!-- ❌ Avoid -->
<style>
    h1 { color: blue; }
</style>
```

### 2. Keep CSS Organized

```css
/* Structure your CSS file */

/* Reset and Base Styles */
* { box-sizing: border-box; }
body { font-family: Arial, sans-serif; }

/* Typography */
h1 { font-size: 32px; }
h2 { font-size: 28px; }

/* Layout */
.container { max-width: 1200px; }

/* Components */
.button { padding: 10px 20px; }
.card { border: 1px solid #ddd; }

/* Responsive */
@media (max-width: 768px) {
    /* Mobile styles */
}
```

### 3. Use Meaningful Class Names

```css
/* ✅ Good (describes purpose) */
.button-primary
.card-header
.navigation-menu

/* ❌ Poor (vague) */
.btn
.header
.menu
```

### 4. Avoid Over-Specificity

```css
/* ❌ Too specific */
body > div > section > article > p {
    color: blue;
}

/* ✅ Simple and reusable */
.article-text {
    color: blue;
}
```

### 5. Use Shorthand Properties

```css
/* ❌ Verbose */
margin-top: 10px;
margin-right: 20px;
margin-bottom: 10px;
margin-left: 20px;

/* ✅ Concise */
margin: 10px 20px;
```

### 6. Color Contrast

```css
/* ✅ Good contrast */
h1 {
    color: #000000;
    background-color: #FFFFFF;
}

/* ❌ Poor contrast (hard to read) */
p {
    color: #CCCCCC;
    background-color: #DDDDDD;
}
```

### 7. Responsive Design

```css
/* ✅ Mobile first */
body {
    font-size: 14px;
}

@media (min-width: 768px) {
    body {
        font-size: 16px;
    }
}

/* ❌ Desktop first (harder to maintain) */
body {
    font-size: 18px;
}

@media (max-width: 768px) {
    body {
        font-size: 14px;
    }
}
```

### 8. Use CSS Variables (Modern Approach)

```css
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --spacing: 10px;
}

h1 {
    color: var(--primary-color);
    margin: var(--spacing);
}

button {
    background-color: var(--primary-color);
    padding: var(--spacing) calc(var(--spacing) * 2);
}
```

---

## 📋 Day 2 Recap

### What You Learned

✅ **CSS Basics:**
- Inline, internal, external CSS
- CSS syntax and selectors
- Element, class, ID selectors

✅ **Styling:**
- Colors and backgrounds
- Typography (fonts, sizes, weights)
- Borders and rounded corners

✅ **Spacing:**
- Margins (outside)
- Padding (inside)
- Box model concept

✅ **Layout:**
- CSS positioning
- Flexbox fundamentals
- Gap and alignment

✅ **Responsive:**
- Media queries
- Mobile-first approach
- Responsive images

### Quick Cheat Sheet

```css
/* Selectors */
element { }
.class { }
#id { }

/* Colors & Backgrounds */
color: blue;
background-color: white;

/* Fonts */
font-family: Arial, sans-serif;
font-size: 16px;
font-weight: bold;

/* Spacing */
margin: 20px;
padding: 10px;

/* Borders */
border: 2px solid black;
border-radius: 10px;

/* Flexbox */
display: flex;
justify-content: center;
align-items: center;

/* Responsive */
@media (max-width: 768px) {
    /* Mobile styles */
}
```

---

## 📚 Resources

- **MDN CSS Guide:** https://developer.mozilla.org/en-US/docs/Web/CSS
- **CSS-Tricks:** https://css-tricks.com/
- **Flexbox Guide:** https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- **Color Tools:** https://coolors.co/
- **Font Resources:** https://fonts.google.com/

---

## 🎯 What's Next?

Now you'll:

1. **Practice Task 1** - Link CSS and style elements
2. **Practice Task 2** - Use different selectors
3. **Practice Task 3** - Create styled cards
4. **Practice Task 4** - Understand box model
5. **Practice Task 5** - Build responsive layouts
6. **Mini-Project** - Style Day 1 portfolio website
7. **Assignment** - Create professional homepage

**Let's build beautiful websites! 🎨**
