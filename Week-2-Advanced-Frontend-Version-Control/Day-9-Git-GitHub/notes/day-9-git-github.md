# Day 9 – Introduction to Git & GitHub (Version Control)

## Learning Objectives

By the end of Day 9, students will:

- Understand Version Control.
- Learn Git basics.
- Create repositories.
- Use Git commands.
- Push projects to GitHub.
- Work with branches.
- Understand Pull Requests.
- Publish projects online.

---

# What is Version Control?

Version Control is a system that tracks changes in files over time.

Without Version Control:

- Files get overwritten.
- Difficult to track changes.
- Hard to collaborate.

With Git:

- Every change is tracked.
- Easy rollback.
- Team collaboration.
- Project backup.

---

# What is Git?

Git is a Distributed Version Control System.

Created by:

Linus Torvalds

Benefits:

- Fast
- Reliable
- Free
- Industry Standard

---

# What is GitHub?

GitHub is a cloud platform that hosts Git repositories.

Uses:

- Store projects online
- Share code
- Collaboration
- Portfolio showcase

---

# Git Workflow

Working Directory
↓
git add
↓
Staging Area
↓
git commit
↓
Local Repository
↓
git push
↓
GitHub Repository

---

# Important Git Commands

Initialize Repository

```bash
git init
```

Check Status

```bash
git status
```

Add Files

```bash
git add .
```

Commit Files

```bash
git commit -m "Initial Commit"
```

Connect GitHub Repository

```bash
git remote add origin REPOSITORY_URL
```

Push Code

```bash
git push -u origin main
```

Pull Latest Code

```bash
git pull origin main
```

View Commit History

```bash
git log
```

---

# Branching

Create Branch

```bash
git branch dev
```

Switch Branch

```bash
git checkout dev
```

Merge Branch

```bash
git checkout main

git merge dev
```

---

# Pull Request

A Pull Request (PR) is used to merge code from one branch to another.

Workflow:

1. Create branch
2. Make changes
3. Push branch
4. Open Pull Request
5. Merge PR

---

# GitHub Pages

GitHub Pages allows free website hosting.

Example:

```txt
https://username.github.io/project-name/
```

---

# Recap

Today we learned:

- Version Control
- Git
- GitHub
- Repository
- Commit
- Push
- Pull
- Branch
- Merge
- Pull Request
- GitHub Pages

---

# Mini Project

Publish Portfolio Website using GitHub Pages