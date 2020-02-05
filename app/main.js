const _new = require('./src/scripts/new');
const _program = require('minimist')(process.argv.slice(2));

function main() {
    /** init function in order to create initial folder structure and install all dependencies if necessary */

    switch (_program._[0]) {
        case 'new':
            _new.new(_program._[1]);
            break;
        case 'generate':

            switch (_program._[1]) {

                case 'component':
                    _new.component(_program._[2]);
                    break;
                case '':
                    break;
            }

            break;


    }
};

main();

module.exports = main;
