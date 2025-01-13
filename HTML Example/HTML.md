# HTML (Hypertext Markup Language)

## 3 Main purposes of HTML

- Structure: Defines a basic structure of a webpage by organizing content into elements
- Content: Provides framework to include and display various types of content
- Semantics: HTML adds meaning to the content

## Indentatation

- HTML uses indentation to improve readability and organization
- Visually separates nested elements making it easier for developers to see relationships between parent and child elements
- Helps avoid errors and ease of reading by other developers

## Major Pieces of HTML elements

- Opening Tag: <p>
- Content
- Closing Tag: </p>
- Head: Containg meta tags and the title
  - Title is displayed on the tab in a browser
- Body: Contains the header, main, and footer tags
  - The meat of your application that is displayed

## Meta Tags

- The following should almost always be included within a head tag

```html
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="When found in a search engine, this description will be displayed in the search results.">
```

## Hyperlink

- Can direct users to other websites
- Can direct user to specific parts of the current page
  - Use an ID for the section
  - Use the ID given to the section as a `value` for the `href` attribute
- Can use to direct users to other pages of the website

## Other

- Use `!` then enter to create a HTML boilerplate
- To give an element extra information, you need to give it an *attribute* and a *value*
- `<p color="red">This is a color</p>`
- Dont worry about styling too much on html unless using reactUI / material UI oa any other react libraries