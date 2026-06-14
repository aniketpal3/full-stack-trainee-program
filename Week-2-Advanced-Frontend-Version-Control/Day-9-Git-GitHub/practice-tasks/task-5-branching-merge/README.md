# Task 5 – Branching and Merge

## Objective

Create a branch, make changes, commit, and merge it into main.

---

## What is a Branch?

A branch is a separate version of your project.

It helps developers work on features without affecting the main code.

---

## Step 1: Check Current Branch

```bash
git branch
```

---

## Step 2: Create New Branch

```bash
git branch dev
```

---

## Step 3: Switch to Branch

```bash
git checkout dev
```

Or use shortcut:

```bash
git checkout -b dev
```

---

## Step 4: Make Changes

Edit `index.html`.

Example:

```html
<h2>This change was made in dev branch.</h2>
```

---

## Step 5: Add and Commit

```bash
git add .

git commit -m "Add dev branch changes"
```

---

## Step 6: Switch Back to Main

```bash
git checkout main
```

---

## Step 7: Merge Dev into Main

```bash
git merge dev
```

---

## Step 8: Push Main Branch

```bash
git push origin main
```

---

## Commands Used

```bash
git branch

git checkout -b dev

git add .

git commit -m "Add dev branch changes"

git checkout main

git merge dev

git push origin main
```

---

## Expected Result

Changes from `dev` branch are merged into `main`.

---

## Learning Outcome

Students learn how branching and merging work in Git.