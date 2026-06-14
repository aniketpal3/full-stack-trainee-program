# Task 4 – Clone, Edit, Commit, and Push

## Objective

Clone an existing GitHub repository to another folder, make changes, commit, and push.

---

## Step 1: Copy Repository URL

On GitHub:

1. Open your repository.
2. Click **Code**.
3. Copy HTTPS URL.

Example:

```txt
https://github.com/username/my-first-repo.git
```

---

## Step 2: Clone Repository

Open terminal in a different folder:

```bash
git clone https://github.com/username/my-first-repo.git
```

---

## Step 3: Enter Project Folder

```bash
cd my-first-repo
```

---

## Step 4: Edit File

Open `index.html` and add:

```html
<p>This line was added after cloning.</p>
```

---

## Step 5: Check Status

```bash
git status
```

---

## Step 6: Add Changes

```bash
git add .
```

---

## Step 7: Commit Changes

```bash
git commit -m "Update index after cloning"
```

---

## Step 8: Push Changes

```bash
git push origin main
```

---

## Commands Used

```bash
git clone https://github.com/username/my-first-repo.git

cd my-first-repo

git status

git add .

git commit -m "Update index after cloning"

git push origin main
```

---

## Expected Result

Updated file appears on GitHub after push.

---

## Learning Outcome

Students understand how to clone, update, commit, and push a GitHub repository.