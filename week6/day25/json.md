# JSON - JavaScript Object Notation

## What is JSON?
JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is commonly used for data exchange between a server and a client in web applications.

---

## JSON Structure
JSON data is represented as key-value pairs. Keys are always strings, while values can be strings, numbers, objects, arrays, booleans, or `null`.

### Example:
```json
{
    "name": "John"
}
```

---

## JSON in JavaScript

### Defining an Object
In JavaScript, JSON objects can be represented as JavaScript objects. For example:
```javascript
let student = {
    name: "John",
    age: 30,
    city: "New York"
};
```

**Explanation:**
- `name`, `age`, and `city` are keys.
- `"John"`, `30`, and `"New York"` are their respective values.

---

### Defining an Array
JSON can also represent arrays, which are collections of multiple values or objects.

#### Example of an Array of Strings:
```javascript
let studentNames = ["John", "Jane", "Mike"];
```
- `studentNames[0]` will return `"John"`.
- `studentNames[1]` will return `"Jane"`.
- `studentNames[2]` will return `"Mike"`.

#### Example of an Array of Objects:
```javascript
let students = [
    {
        name: "John",
        age: 30,
        city: "New York"
    },
    {
        name: "Jane",
        age: 25,
        city: "Los Angeles"
    },
    {
        name: "Mike",
        age: 28,
        city: "Chicago"
    }
];
```

---

### Accessing JSON Data

#### Accessing Array Elements
To access a specific element in an array, use its index:
```javascript
studentNames[1]; // Output: "Jane"
```

#### General Syntax:
```javascript
students[index].key; // Returns the value of the specified key
```

---

### Looping Through JSON Arrays
You can loop through an array of objects to access each object's properties.

#### Example:
```javascript
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name); // Output: John, Jane, Mike
}
```

---

## Key Points:
- JSON is a text-based format for representing structured data.
- It is widely used for data exchange in web applications.
- JSON data can be represented as objects or arrays in JavaScript.
- You can access JSON data using indices for arrays and keys for objects.
- Loops can be used to iterate through arrays of JSON objects.
