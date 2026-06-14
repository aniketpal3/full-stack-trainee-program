# Task 1 – Git Installation & Setup

## Objective

Install Git and configure user information.

---

## Step 1: Verify Git Installation

Open Terminal:

```bash
git --version
```

Example Output:

```txt
git version 2.50.1
```

---

## Step 2: Configure Username

```bash
git config --global user.name "Aniket Pal"
```

---

## Step 3: Configure Email

```bash
git config --global user.email "your-email@example.com"
```

Example:

```bash
git config --global user.email "palaniket227@gmail.com"
```

---

## Step 4: Verify Configuration

```bash
git config --list
```

Expected Output:

```txt
user.name=Aniket Pal
user.email=palaniket227@gmail.com
```

---

## Commands Used

```bash
git --version

git config --global user.name "Aniket Pal"

git config --global user.email "palaniket227@gmail.com"

git config --list
```

---

## Expected Result

Git installed successfully.

User configuration completed.

---

## Learning Outcome

Students learn how to install Git and configure their identity for commits.