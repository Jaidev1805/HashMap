# 📦 JavaScript HashMap

A custom implementation of a **HashMap** in JavaScript as part of *The Odin Project – JavaScript Course*.  
This project demonstrates hashing, collision handling, dynamic resizing, and building associative data structures from scratch.

---

## 🚀 Features

### ✔️ Custom Hash Function
Generates numeric hash values using character codes and a prime multiplier.

### ✔️ Collision Handling (Separate Chaining)
Each bucket index stores an array of key–value pairs to resolve collisions.

| Method | Description |
|--------|-------------|
| `set(key, value)` | Adds or updates a key–value pair |
| `get(key)` | Gets the value for a key |
| `has(key)` | Checks if a key exists |
| `remove(key)` | Removes a key–value pair |
| `length()` | Returns total number of elements |
| `clear()` | Deletes all entries |
| `keys()` | Returns all keys |
| `values()` | Returns all values |
| `entries()` | Returns all `[key, value]` pairs |

### ✔️ Automatic Resizing
Capacity doubles when the load factor exceeds **0.75**.

---

## 🧠 Learning Objectives

- Understand hashing functions  
- Implement collision resolution  
- Handle dynamic bucket resizing  
- Build a data structure from scratch  
- Write clean, modular JavaScript

---
