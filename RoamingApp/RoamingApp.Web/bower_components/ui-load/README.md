# ui-load
 Loading js and CSS components for your application.

  - Library configurations
  - Loading the Component
  - Passing arguments

> Example

```html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>My App</title>
  </head>
  <body>
    <h1>Hello, world!</h1>


    <div ui-options=" [ { data: ['test', 'test2'] } ]" ui-jq="MyOneComponent">
    </div


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="ui-jp.config.js"></script>
    <script src="ui-jp.js"></script>
    <script src="ui-load.js"></script>
  </body>
</html>


```
