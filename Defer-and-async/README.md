# Understanding JavaScript `async` and `defer` Attributes

When loading external scripts using `<script src="...">`, the browser's default behavior halts HTML parsing while the script is downloaded and executed. To optimize web performance, HTML5 introduced the `async` and `defer` attributes.

---

## 1. Default Behavior (No Attributes)

```html
<script src="defer-and-async.js"></script>
```

- **Behavior:** HTML parsing stops immediately when the tag is encountered.
- **Process Flow:** Fetch script → Execute script → Resume HTML parsing.
- **Use Case:** Critical scripts needed before rendering any page content.

---

## 2. `async` Attribute

```html
<script async src="defer-and-async.js"></script>
```

- **Behavior:** Downloads the script in the background asynchronously without blocking HTML parsing.
- **Process Flow:** Fetch script (in background) → Pause HTML parsing → Execute script immediately upon download completion → Resume HTML parsing.
- **Order Guarantee:** **No**. Scripts run as soon as they finish downloading, regardless of their order in the document.
- **Use Case:** Independent third-party scripts (e.g., Google Analytics, advertising/tracking scripts).

---

## 3. `defer` Attribute

```html
<script defer src="defer-and-async.js"></script>
```

- **Behavior:** Downloads the script in the background asynchronously, but delays execution until HTML parsing is completely finished.
- **Process Flow:** Fetch script (in background) → Finish HTML parsing → Execute script.
- **Order Guarantee:** **Yes**. Scripts execute strictly in the order they appear in the HTML document.
- **Use Case:** Scripts that manipulate DOM elements or depend on other JavaScript files/frameworks.

---

## Summary Comparison

| Feature              | Default (`<script>`)            | `async`                      | `defer`                     |
| :------------------- | :------------------------------ | :--------------------------- | :-------------------------- |
| **HTML Parsing**     | Paused during fetch & execution | Paused only during execution | Never paused during fetch   |
| **Execution Timing** | Immediately upon fetch          | Immediately upon fetch       | After HTML parsing finishes |
| **Execution Order**  | Sequential (Order in HTML)      | First loaded, first executed | Sequential (Order in HTML)  |
| **DOM Dependent**    | No                              | No                           | Yes                         |

---

## Quick Reference / Rule of Thumb

- **Use `defer`** for main application code or any script that needs access to DOM elements or depends on other scripts.
- **Use `async`** for independent scripts like analytics, tracker pixels, or ads.
- **Avoid plain `<script>`** tags in the `<head>` unless the script is critical for page initialization.
