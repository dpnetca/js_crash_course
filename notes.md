# Notes

script files in this project will include notes in comments, other more general ntoes below:

- Javascript != Java
- JS conforms to ECMAScript specificateions
- JS runs in browser / client
  - server side JS done via Node.js
- using `Live Server` extension in VS Code allows HTML page to reload automatically when saved
- put scripts at bottom of HTML body tag so that the HTML loads first
- script can be embedded directly in HTML:
  ```
    <script>
      alert("Hellow World!");
    </script>
  ```
- or can source it from a seperate file (preferred) with `<script src="main.js"></script>`
- Alert function blocks the rest of the script from running. user the browser developer tools and console for debug logging instead
- MDN - mozilla develper network has best documentation for javascript
- semicolon not mandatory, but common reccomended practice
- property is `var.property` and does not have paranthesis. if it has paranthesis it is a method `var.method()`
  - example property is `string.length`
- dom = Document Obejct Model a tree stucture of html document
