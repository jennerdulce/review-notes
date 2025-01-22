# CSS

![BoxModel](https://www.simplilearn.com/ice9/free_resources_article_thumb/CSS-Box-Model.png)

## General

- Used to style the page
- Can use a style tag in the head tag to make changes directly in html
- Import CSS with `<link rel="stylesheet" href="style.css">` in the `<head>` tag

```html
<head>
    <link rel="stylesheet" href="style.css"> # Here
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
```

## Box Model

- CSS box model describes how the idmensions of an HTML element are calculated and how spacing is being applied

- Content: The actual content inside the element (e.g., text, images).
- Padding: Space between the content and the border.
- Border: The edge or outline of the element.
- Margin: Space between the element and its neighboring elements.
- Example: If a `<div>` has:
  - Content width: 100px
  - Padding: 10px
  - Border: 5px
  - Margin: 20px

## General

- Common properties [CSS Basic Alignments](https://www.w3schools.com/css/css_align.asp)

```css
.center {
  margin: auto; // Centers block element
  width: 50%;
  border: 3px solid green;
  padding: 10px;
}

.center {
  text-align: center; // Centers text
  border: 3px solid green;
}

img {
  display: block; // Centers images; inline element to block
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}
```
