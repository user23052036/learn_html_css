# 💀 JS WTF Interview Traps

> *Questions that don’t test knowledge — they test sanity.*

---

## 🥇 Trap #1 — The Legendary Ambush

```js
[] == ![]    // true
```

**Why interviewers love this:**
It exposes who *blindly trusts `==`*.

**Mental execution:**

```js
![]        → false
[] == false
"" == false
0 == 0     // true
```

🎯 **Correct takeaway:** Never use `==`.

---

## 🥈 Trap #2 — Null the Traitor

```js
null > 0     // false
null >= 0    // true
null == 0    // false
```

**Why?**

* Relational ops → numeric conversion → `null → 0`
* Equality (`==`) → special rule

📌 **One-liner answer:**

> `null` becomes `0` in comparisons, but not in equality.

---

## 🥉 Trap #3 — Undefined Nukes Logic

```js
undefined > 0    // false
undefined >= 0   // false
undefined == 0   // false
```

**Why?**

````js
Number(undefined) → NaN
``Confirm rule:
> Any comparison with `NaN` is false.

---

## 🪦 Trap #4 — The NaN Paradox

```js
typeof NaN === "number"   // true
NaN === NaN              // false
````

🎯 **Interview-safe line:**

> NaN is a number type, but it is not equal to itself.

---

## 🎭 Trap #5 — Arrays Betray You

```js
[] == 0     // true
[] == ""    // true
```

**Hidden conversion:**

```js
[] → "" → 0
```

📌 **Rule:**

> Objects convert to primitives before comparison.

---

## 🧨 Trap #6 — Boolean Math From Hell

```js
true + true     // 2
false + true    // 1
```

**Why?**

```js
true  → 1
false → 0
```

🧠 JS treats booleans like numbers **when forced**.

---

## 🧟 Trap #7 — Objects Are Never Equal

```js
{} == {}    // false
[] == []    // false
```

**Reason:**

> Objects are compared by reference, not value.

🎯 **One-liner:**
Different memory → always false.

---

## 🤯 Trap #8 — Plus Operator Madness

```js
"5" + 3   // "53"
"5" - 3   // 2
```

**Rule:**

* `+` prefers strings
* `-` forces numbers

📌 Interviewers LOVE this one.

---

## ☠️ Trap #9 — False Is Everywhere

```js
0 == false     // true
"" == false    // true
[] == false    // true
```

🎯 **Clean explanation:**

> Everything becomes `0` eventually.

---

## 🧠 Trap #10 — The Only Correct Answer

```js
"2" === 2   // false
```

🎤 **Say this confidently:**

> Strict equality checks value **and** type.
> This is the only safe comparison in JavaScript.

---

## 🏁 Interview Survival Script (say this verbatim)

> **JavaScript has aggressive type coercion.
> `==` allows it, `===` prevents it.
> Relational operators convert values to numbers.
> Objects compare by reference.
> I always use `===`.**

Interviewers stop asking after this 😎

---
