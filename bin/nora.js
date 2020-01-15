#!/usr/bin/env node
var _new = require('../app/src/new');
var params = process.argv.slice(2);
console.log(params);
_new.init('teste');