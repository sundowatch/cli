var fs = require('fs');
var ncp = require('ncp');

let currentPath = process.cwd();
let arguments = process.argv;
arguments = arguments.slice(2)


let dir = currentPath + "/" + arguments[0] + ".html";

fs.copyFile('includes/pen/index.html', dir, (err) => {
    if (err) throw err;
    console.log('Created ' + dir + ' pen!');
});
