# Practice Task 4: Data Types

## 📌 Objective

Learn all 5 primitive data types in JavaScript and use `typeof` operator.

## ⏱️ Estimated Time

**15-20 minutes**

## 🎯 Data Types

| Type | Example | Note |
|---|---|---|
| String | `"Hello"` | Text in quotes |
| Number | `42`, `3.14` | Integers and decimals |
| Boolean | `true` | true or false only |
| Null | `null` | Intentionally empty |
| Undefined | (no value) | Not assigned |

## 🛠️ Key Code

```javascript
const myString = "Hello";
const myNumber = 42;
const myBoolean = true;
const myNull = null;
let myUndefined;

// Check types
typeof myString;     // "string"
typeof myNumber;     // "number"
typeof myBoolean;    // "boolean"
typeof myNull;       // "object" (quirk!)
typeof myUndefined;  // "undefined"
```

## ✅ Testing

1. Open page
2. Press F12 → Console
3. Should see all 6 types listed
4. Page displays table with types
5. Notice: `typeof null` returns "object" (JavaScript quirk!)

## 💡 Key Points

- JavaScript has only 5 primitive types
- Objects are NOT primitive (coming in later lessons)
- `typeof` helps identify data types
- `null` is intentional, `undefined` is accidental

---

**Understanding data types is essential for JavaScript! 🎉**
