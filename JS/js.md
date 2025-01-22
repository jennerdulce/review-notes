# Javascript

## Setup

- Create a `.js` file

- Import this fie by putting a `<script>` just before the `</body>` body closing tag

```html
<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
    <header>
    </header>
    <main>
    </main>
    <footer></footer>
    <script src="scripts/main.js"></script>
</body>
</html>
```

## How to implement JS

1. Target the element
    - document selectors
        - document.querySelector('img');
        - document.getElementById('id-name');

2. Add an event listener
    - Can use other actions
    - Hover, double click, click, etc.
    - .addEventListener("action", () => {

    })

3. Alter the content
    - Can alter any content within the element
    - Attributes, text, sizing etc.
    - .setAttribute('attr', new avkye)

```js

// Target
const zedImageB = document.getElementById('zed-2');

// Add Event Listener
zedImageB.addEventListener("click", () => {
    const mySrc = zedImageB.getAttribute('src');
    if (mySrc === "img/zed2.png") {
        zedImageB.setAttribute('src', 'img/zed2-modified.png');
    } else {
        zedImageB.setAttribute('src', 'img/zed2.png');
    }
})
```
