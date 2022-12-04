# TodoList-EJS-app

### To install ejs as a dependency in your project run :
npm i ejs


### Example

Pass EJS a template string and some data. BOOM, you've got some HTML.

let ejs = require('ejs');
let people = ['geddy', 'neil', 'alex'];
let html = ejs.render('<%= people.join(", "); %>', {people: people});

### Usage

let template = ejs.compile(str, options);
template(data);
// => Rendered HTML string

ejs.render(str, data, options);
// => Rendered HTML string

ejs.renderFile(filename, data, options, function(err, str){
    // str => Rendered HTML string
});
