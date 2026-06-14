# Day 6 – DOM Manipulation & Events in JavaScript

## Learning Objectives

By the end of Day 6, students will:

- Understand the DOM.
- Select HTML elements using JavaScript.
- Change content and styles dynamically.
- Handle user events.
- Create interactive web applications.

---

# What is DOM?

DOM stands for Document Object Model.

It represents the HTML document as a tree structure.

JavaScript can:

- Read HTML elements
- Change HTML content
- Change CSS styles
- Add or remove elements
- Handle user events

Example:

```html
<p id="demo">Hello</p>
```

```js
document.getElementById("demo").innerHTML = "Hello DOM!";
```

---

# Selecting Elements

## By ID

```js
document.getElementById("title");
```

## By Class

```js
document.getElementsByClassName("item");
```

## By Tag Name

```js
document.getElementsByTagName("p");
```

## Query Selector

```js
document.querySelector(".item");
```

## Query Selector All

```js
document.querySelectorAll("p");
```

---

# Changing Content

```js
element.innerText = "New Text";
```

```js
element.innerHTML = "<b>Bold Text</b>";
```

---

# Changing Attributes

```js
image.src = "new-image.jpg";
```

---

# Changing Styles

```js
element.style.color = "red";
element.style.fontSize = "20px";
```

---

# Events

Events happen when users interact with a webpage.

Examples:

- click
- mouseover
- keyup
- submit

---

# Event Listener

```js
button.addEventListener("click", function () {
  alert("Button Clicked");
});
```

---

# Creating Elements

```js
let li = document.createElement("li");
li.innerText = "New Task";
```

---

# Appending Elements

```js
document.getElementById("list").appendChild(li);
```

---

# Removing Elements

```js
li.remove();
```

---

# Recap

Today we learned:

- DOM
- Element Selection
- Content Modification
- Styling Elements
- Event Handling
- Creating Elements
- Removing Elements

---

# Mini Project

Interactive To-Do List using DOM and Events.