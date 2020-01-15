var shell = require('shelljs');
var params = process.argv.slice(3);

function init( name ) {

    shell.mkdir('-p', `${name}/app`);
    shell.mkdir('-p', `${name}/assets`);
    shell.mkdir('-p', `${name}/fonts`);

}

init(params);