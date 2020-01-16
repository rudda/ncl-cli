const _new = require('./src/scripts/new');
const program = require('minimist')(process.argv.slice(2));


function main() {
    
    if (program._[0] === 'new') {
        _new.new(program._[1]);
    }

};

main();

module.exports = main;
