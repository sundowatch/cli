var fs = require('fs');
var ncp = require('ncp');

let currentPath = process.cwd();
let arguments = process.argv;
arguments = arguments.slice(2)


let dir = currentPath + "/" + arguments[0];

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

ncp('includes/react', dir, function (err) {
    if (err) {
      return console.error(err);
    }
    console.log('Created ' + dir + " project!");
});
