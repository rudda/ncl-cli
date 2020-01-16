const _new = require('./src/new');
const program = require('minimist')(process.argv.slice(2));
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');


function init() {
    clear();

    console.log(
        chalk.yellow(
            figlet.textSync('Nora', { horizontalLayout: 'full' })
        )
    );
}


init();
console.log(program);
