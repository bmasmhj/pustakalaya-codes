# 1. Programming Basics

### What is Programming?

A set of instructions given to a computer to perform specific tasks.

### What is a Programming Language?

A language used to give instructions to the computer in a defined syntax.

# 🔁 Basic Flow

```
Input      ->     Computer (Processor)     ->     Output  
2, 3 [+]           performs addition               5
```

# 🧮 Inputs

### Variables
- Variables hold values.
- Types of characters:
    - Normal characters: 0-9, a-z, A-Z
    - Special characters: !@#$%^&*()_ {}[] /*-+|\ :",>?
### Operators
- Operators perform operations on values:
    - ` +   Addition `
    - ` -   Subtraction `
    -  ` *   Multiplication `
    - `/   Division `
    - ` %   Modulus (Remainder) ` 

# 📦 Data Types

| Data Type	 |   Example(s)	  |    Description                 |
|------------|----------------|--------------------------------|
|  Number	 | 123, 0, 45.6   |  Numeric values                |
|  String	 | 'Hello', "123" |  Text values (letters/numbers) |
|  Boolean   |  true, false   |  Logical values (1, 0)         |


> _Note_ : Arrays and Objects are ignored for now.

# 🌐 JavaScript Introduction

JavaScript is a **web-based scripting language** used to make web pages:
- Dynamic  
- Interactive  
- Auto-updating without page reload

---

# 🧾 JavaScript Variable Naming Rules

All JavaScript variables must be identified with **unique names** called _identifiers_.

### ✅ Rules:
1. Variable names are **case-sensitive** (`x` and `X` are different).
2. Only **letters**, **digits**, and **underscore** (`_`) allowed.
3. Must **not start with a digit** (e.g., `1abc ❌`, `abc ✔️`).
4. Must **not be a reserved keyword** (e.g., `let`, `function`).
5. Must **not include special characters** (`!@#$%^&*()` etc).
6. Must **not contain spaces**.
7. Should **not be redeclared** with `let` or `const`.

---

# 🧩 Declaring Variables in JavaScript

| Keyword | Scope        | Reassignable | Notes                              |
|---------|--------------|--------------|------------------------------------|
| `var`   | Function      | ✅ Yes        | Legacy, avoid in modern JS         |
| `let`   | Block         | ✅ Yes        | Use for values that can change     |
| `const` | Block         | ❌ No         | Use for constants (fixed values)   |

---