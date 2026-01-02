# 🤡 JavaScript WTF Hall of Fame

> *A sacred place where logic comes to die.*

---

## 🥇 1. The Legendary Boss Fight

```js
[] == ![]    // true
```

**Explanation (a.k.a. emotional damage):**

```js
![]        → false
[] == false
"" == false
0 == 0     // true
```

🧠 JS: *“Trust the process.”*
👨‍💻 Dev: *“WHAT process??”*

---

## 🥈 2. Empty Array = Everything

```js
[] == 0     // true
[] == ""    // true
0 == ""     // true
```

So apparently:

```js
[] == "" == 0   // JS multiverse confirmed
```

🧙‍♂️ JS: *“Emptiness is a number.”*

---

## 🥉 3. Null & Undefined — Toxic Relationship

```js
null == undefined   // true 🤝
null === undefined  // false ❌
```

But wait…

```js
null > 0    // false
null >= 0   // true
null == 0   // false
```

JS be like:

> *“We are equal.
> But don’t compare us.
> And don’t ask questions.”*

---

## 🪦 4. Undefined Touches Nothing

```js
undefined > 0     // false
undefined < 0     // false
undefined >= 0    // false
undefined == 0    // false
```

Reason:

```js
Number(undefined) → NaN
```

🪦 `undefined` walked in, math walked out.

---

## 💀 5. NaN — The Fake Number

```js
typeof NaN === "number"   // true
NaN === NaN              // false
```

JS:

> *“I am a number.”*
> Also JS:
> *“I am not myself.”*

---

## 🎭 6. Arrays Doing String Jobs

```js
[] + []        // ""
[] + {}        // "[object Object]"
{} + []        // 0   // (browser console only)
```

Same symbols.
Different results.
Same confusion.

🧠 JS: *“Context matters.”*
👨‍💻 Dev: *“Then document it??”*

---

## 🧨 7. Boolean Gymnastics

```js
true + true     // 2
true + false    // 1
false + false   // 0
```

JS silently converts:

```js
true  → 1
false → 0
```

Congratulations 🎉
You just did math with emotions.

---

## 🤯 8. Strings vs Numbers (Street Fight)

```js
"5" - 3     // 2
"5" + 3     // "53"
```

JS rule:

* `+` → string concat
* `-` → numeric conversion

JS: *“Same operands. Different mood.”*

---

## 🧟 9. Objects Are Never Equal

```js
{} == {}    // false
[] == []    // false
```

Because:

```js
reference !== reference
```

JS:

> *“You look like me, but you’re not me.”*

---

## ☠️ 10. The Final Curse

```js
0 == false      // true
"" == false     // true
[] == false     // true
```

So naturally:

```js
[] == "" == false == 0   // JS cult initiation complete
```

---

## 🧠 Golden Survival Rule (Tattoo This)

```js
// NEVER use ==
Use ===
// NEVER assume
Test everything
// NEVER argue with JavaScript
You will lose
```

---

## 🏁 Final Meme Quote

> **JavaScript is not broken.
> It’s just emotionally unstable.**

---
