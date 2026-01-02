Short answer: **history + design shortcuts + runtime optimizations**.
Let’s go line by line and tie each result to how JavaScript is *actually implemented*.

---

## `typeof null === "object"` ❌ (historic bug)

```js
console.log(typeof null); // "object"
```

**Why it happens**

* In the very first JS engines (1995), values were stored using **type tags**.
* `null` was represented as **all bits = 0**
* The tag for **object** also happened to be `0`

So the engine literally read `null` as an object.

**Key point**

* This is a **bug**, officially acknowledged.
* It **cannot be fixed** now without breaking the web.

Mental model:

```text
null → "no value"
typeof null → historical mistake
```

---

## `typeof 123n === "bigint"`

```js
console.log(typeof 123n); // "bigint"
```

**Why it exists**

* JS numbers (`number`) are IEEE-754 floating point → unsafe for big integers.
* `BigInt` was added to represent **true integers** of arbitrary size.

```js
9007199254740993 === 9007199254740992 // true 😬
9007199254740993n === 9007199254740992n // false ✅
```

**Implementation**

* `bigint` is a **primitive**, not an object.
* Hence a new `typeof` category.

---

## `typeof Symbol("id") === "symbol"`

```js
console.log(typeof Symbol("id")); // "symbol"
```

**Why**

* Symbols are **unique, immutable primitive identifiers**.
* Used mainly for:

  * Hidden object keys
  * Preventing name collisions
  * Meta-programming

```js
Symbol("a") === Symbol("a") // false
```

**Design reason**

* Symbols are primitives → no wrapper → new `typeof` result.

---

## `typeof {} === "object"`

```js
console.log(typeof {});
```

**Why**

* Objects are **heap-allocated reference types**.
* `typeof` only distinguishes:

  * primitive vs reference
  * callable vs non-callable

So:

```text
non-callable reference → "object"
```

---

## `typeof [] === "object"` (arrays are objects)

```js
console.log(typeof []);
```

**Why**

* Arrays are **specialized objects**, not a separate type.
* Internally:

  * Numeric keys
  * `length` property
  * Prototype = `Array.prototype`

```js
Array.isArray([]); // true ✅
typeof [] === "object"; // not enough info ❌
```

**Rule**

> JavaScript has **no array type** — arrays are objects with extra behavior.

---

## `typeof { a: 1 } === "object"`

Same reason as `{}`.

```js
console.log(typeof { a: 1 });
```

Plain object → non-callable reference → `"object"`

---

## `typeof function(){} === "function"` (special case)

```js
console.log(typeof function(){});
```

**Why this is special**

* Functions are **callable objects**
* JS needed a fast way to detect callability

So:

```text
callable object → "function"
non-callable object → "object"
```

Under the hood:

```js
function f() {}
typeof f === "function"
f instanceof Object === true
```

Functions still **are objects**, just tagged as callable.

---

## The REAL rule behind `typeof`

Think of `typeof` as answering only **two questions**:

1. Is it a **primitive**?
2. If not, **can I call it?**

| Value    | Heap? | Callable? | typeof     |
| -------- | ----- | --------- | ---------- |
| number   | ❌     | ❌         | "number"   |
| bigint   | ❌     | ❌         | "bigint"   |
| symbol   | ❌     | ❌         | "symbol"   |
| null     | ❌     | ❌         | ❌ bug      |
| object   | ✅     | ❌         | "object"   |
| array    | ✅     | ❌         | "object"   |
| function | ✅     | ✅         | "function" |

---

## Interview-level takeaway (important)

* `typeof` is **not a type system**
* It’s a **runtime classification tool**
* For real checks:

  ```js
  Array.isArray(x)
  x === null
  typeof x === "function"
  ```

---

# How JavaScript values are stored in memory (for real)

JavaScript engines (V8, SpiderMonkey, etc.) split memory into **two major regions**:

```
┌─────────────┐
│   STACK     │  ← fixed-size, fast, scoped
└─────────────┘
┌─────────────┐
│    HEAP     │  ← dynamic, objects, GC-managed
└─────────────┘
```

Everything you see in JS eventually maps to **either a value or a pointer**.

---

## 1️⃣ Primitive values (mostly STACK / registers)

**Primitives**

* `number`
* `bigint`
* `boolean`
* `undefined`
* `null`
* `symbol`
* `string` (special case, see below)

### Numbers

```js
let x = 42;
```

**Internally**

* JS numbers = **64-bit IEEE-754 float**
* Stored **directly** (or tagged) in registers / stack

```
x → 0100000001000100000000000000000000000000000000000000000000000000
```

No pointer. No heap.

---

### Booleans

```js
let flag = true;
```

Stored as:

```
flag → 1
```

Engines often **tag booleans inside pointers** for speed.

---

### `undefined` and `null`

```js
let a;        // undefined
let b = null;
```

* `undefined` → special **singleton value**
* `null` → **zero pointer** (historic reason)

This is why:

```js
typeof null === "object" // because pointer = 0
```

---

### Symbols

```js
let s = Symbol("id");
```

* Primitive
* Internally points to a **unique symbol table entry**
* Identity is guaranteed

But from JS POV: **no object, no mutation**

---

## 2️⃣ Strings (hybrid: STACK + HEAP)

```js
let s = "hello";
```

Strings are **immutable**, so engines optimize aggressively.

Possible storage:

* Small strings → inline
* Larger strings → heap
* Concatenated strings → **rope / cons strings**

Example:

```js
let a = "hello";
let b = a + " world";
```

Instead of copying:

```
b → ("hello") + (" world")
```

Flattened only when needed.

---

## 3️⃣ Objects (HEAP + STACK reference)

```js
let obj = { a: 1 };
```

Memory looks like this:

```
STACK                    HEAP
┌──────┐                 ┌───────────────┐
│ obj  │ ──────────────▶ │ { a: 1 }       │
└──────┘                 └───────────────┘
```

Key idea:

* Variable holds **address**
* Object lives on **heap**
* Multiple variables can point to same object

```js
let x = obj;
x.a = 10;   // modifies same heap object
```

---

## 4️⃣ Arrays (objects with structure)

```js
let arr = [10, 20, 30];
```

Internally:

```
arr → HEAP
      ┌─────────────────┐
      │ length: 3       │
      │ elements: [10,20,30] │
      │ prototype → Array.prototype
      └─────────────────┘
```

Optimizations:

* **Packed arrays** (fast)
* **Holey arrays** (slower)
* **Dictionary mode** if abused

```js
arr[100000] = 5; // kills performance
```

---

## 5️⃣ Functions (objects + executable code)

```js
function foo(x) { return x + 1; }
```

Stored as:

```
STACK
┌─────┐
│ foo │
└─────┘
   │
   ▼
HEAP
┌──────────────────────┐
│ function object      │
│ ├─ code pointer ──▶ machine code
│ ├─ scope reference
│ ├─ prototype
└──────────────────────┘
```

This is why:

```js
typeof foo === "function"
foo instanceof Object === true
```

---

## 6️⃣ Closures (this is the mind-bender)

```js
function outer() {
  let x = 10;
  return function inner() {
    return x;
  };
}
```

What happens?

* `x` **cannot stay on stack**
* It’s moved to **heap (closure environment)**

```
HEAP
┌──────────────────┐
│ Closure Env      │
│ x = 10           │
└──────────────────┘
         ▲
         │
┌──────────────────┐
│ inner function   │
└──────────────────┘
```

This is **not magic** — it’s heap promotion.

---

## 7️⃣ Garbage Collection (not malloc/free)

JS uses **tracing GC**, not reference counting.

### Basic idea:

1. Roots:

   * Stack
   * Global object
   * Active closures
2. Mark everything reachable
3. Sweep the rest

```js
let obj = { a: 1 };
obj = null; // eligible for GC
```

Memory is reclaimed **later**, not immediately.

---

## 8️⃣ Why primitives feel “copied” and objects feel “shared”

```js
let a = 10;
let b = a;
b = 20;
```

```
a → 10
b → 20
```

vs

```js
let o1 = { x: 1 };
let o2 = o1;
o2.x = 5;
```

```
o1 ─┐
    ├─▶ { x: 5 }
o2 ─┘
```

Because:

* Primitives = **values**
* Objects = **addresses**

Exactly like C:

```c
int x = 10;
int y = x;

struct S *p = malloc(...);
struct S *q = p;
```

---

## One-line mental model (remember this)

> **JS variables never hold objects — they hold pointers.
> Primitives are values, objects are references.**

---
