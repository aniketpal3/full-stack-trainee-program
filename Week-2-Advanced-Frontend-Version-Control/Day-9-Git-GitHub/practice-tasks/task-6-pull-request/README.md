# Task 6 – Pull Request on GitHub

## Objective

Create a branch, push it to GitHub, and open a Pull Request.

---

## What is a Pull Request?

A Pull Request is a request to merge changes from one branch into another branch.

Usually:

```txt
feature branch → main branch
```

---

## Step 1: Create Feature Branch

```bash
git checkout -b feature-readme
```

---

## Step 2: Make Changes

Create or edit:

```txt
README.md
```

Example content:

```md
# My First GitHub Project

This project is created to practice Git and GitHub.
```

---

## Step 3: Add and Commit

```bash
git add .

git commit -m "Add README file"
```

---

## Step 4: Push Feature Branch

```bash
git push origin feature-readme
```

---

## Step 5: Open Pull Request

On GitHub:

1. Open your repository.
2. GitHub will show **Compare & pull request**.
3. Click it.
4. Add title:

```txt
Add README file
```

5. Add description.
6. Click **Create Pull Request**.

---

## Step 6: Merge Pull Request

After reviewing:

1. Click **Merge Pull Request**.
2. Confirm merge.
3. Delete branch if not needed.

---

## Commands Used

```bash
git checkout -b feature-readme

git add .

git commit -m "Add README file"

git push origin feature-readme
```

---

## Expected Result

Pull Request created and merged successfully.

---

## Learning Outcome

Students understand the GitHub collaboration workflow using Pull Requests.