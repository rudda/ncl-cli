const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const package = require('../../../package.json');

function end() {
    clear();

    console.log(
        chalk.yellow(
            figlet.textSync('Nora', { horizontalLayout: 'full' })
        )
    );
    console.log(`version: ${package.version}`);
    console.log('ncl-cli install sucessefully');
    console.log('use nora commands to create projects e.e nora new myproject');
    console.log('for more information use nora --help');
}

end();