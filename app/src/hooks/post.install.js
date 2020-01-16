const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const package = require('../../../package.json');

clear();

console.log(
    chalk.yellow(
        figlet.textSync('Nora', { horizontalLayout: 'full' })
    )
);

console.log(`version: ${package.version}`)