#! /usr/bin/env node

var FileIO = require('./FileIO');
var args = require('./processArgs')();

FileIO.copy( args.read, args.write );