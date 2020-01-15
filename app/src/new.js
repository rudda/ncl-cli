var shell = require('shelljs');


/**
 *
 * @param {*} name project name
 * when init a new project then are created some default dirs 
 */
function init( name ) {

    shell.mkdir('-p', process.cwd() + `/${name}/app`);
    shell.mkdir('-p', process.cwd() + `/${name}/assets`);
    shell.mkdir('-p', process.cwd() + `/${name}/fonts`);

}
