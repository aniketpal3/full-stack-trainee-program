# Task 3 – npm and Chalk Package

## Objective

Learn how to install and use npm packages.

---

## What is npm?

npm stands for:

```txt
Node Package Manager
```

Used to:

- Install packages
- Manage dependencies
- Run scripts

---

## Initialize Project

```bash
npm init -y
```

Creates:

```txt
package.json
```

---

## Install Chalk

```bash
npm install chalk
```

---

## Project Structure

```txt
task-3-npm-and-chalk/
│
├── app.js
├── package.json
├── package-lock.json
└── node_modules/
```

---

## Code Example

```js
const chalk = require("chalk");

console.log(chalk.green("Hello Node.js"));
```

---

## Run Program

```bash
node app.js
```

or

```bash
npm start
```

---

## Example Output

Colored text will appear in terminal.

```txt
Welcome to Node.js
Installation Successful
Learning npm Packages
This is an error message example
Full Stack Developer Training Program
```

---

## Commands Used

```bash
npm init -y

npm install chalk

node app.js

npm start
```

---

## Learning Outcome

Students learn:

- npm basics
- package.json
- Installing packages
- Using third-party libraries