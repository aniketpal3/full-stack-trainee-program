# Task 2 – Creating Local Repository

## Objective

Create your first Git repository and make the first commit.

---

## Step 1: Create Project Folder

```bash
mkdir day9-project

cd day9-project
```

---

## Step 2: Create File

Create:

```txt
index.html
```

Example:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Day 9 Project</title>
</head>
<body>
    <h1>Hello Git</h1>
</body>
</html>
```

---

## Step 3: Initialize Git

```bash
git init
```

Output:

```txt
Initialized empty Git repository
```

---

## Step 4: Check Status

```bash
git status
```

Output:

```txt
Untracked files:
index.html
```

---

## Step 5: Add Files

```bash
git add .
```

---

## Step 6: Commit Files

```bash
git commit -m "Initial commit"
```

Output:

```txt
1 file changed
```

---

## Step 7: Check Commit History

```bash
git log
```

---

## Commands Used

```bash
git init

git status

git add .

git commit -m "Initial commit"

git log
```

---

## Expected Result

Repository created successfully.

First commit added.

---

## Learning Outcome

Students learn:

- Local Repository
- Staging Area
- Commits
- Git Workflow