# Task 3 – Push Local Project to GitHub

## Objective

Create a GitHub repository and push a local project to GitHub.

---

## Step 1: Create Repository on GitHub

1. Go to GitHub.
2. Click on **New Repository**.
3. Repository name:

```txt
my-first-repo
```

4. Select Public.
5. Do not add README if your local project already has files.
6. Click **Create Repository**.

---

## Step 2: Connect Local Repository to GitHub

Inside your local project folder, run:

```bash
git remote add origin https://github.com/username/my-first-repo.git
```

Replace `username` with your GitHub username.

---

## Step 3: Rename Branch to main

```bash
git branch -M main
```

---

## Step 4: Push Code

```bash
git push -u origin main
```

---

## Step 5: Verify on GitHub

Refresh your GitHub repository page.

You should see:

```txt
index.html
```

and commit history.

---

## Commands Used

```bash
git remote add origin https://github.com/username/my-first-repo.git

git branch -M main

git push -u origin main
```

---

## Expected Result

Your local project is successfully uploaded to GitHub.

---

## Learning Outcome

Students learn how to connect a local Git repository with GitHub and push code online.