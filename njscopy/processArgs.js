var colors = require('colors');

module.exports = function() {
	var args = process.argv;
	if ( args.length < 3 ) {
		throw new Error( 'Not enough args!'.red );
	}

	var readPath = args[ 2 ];
	var writePath = args[ 3 ];

	return {
		read: readPath,
		write: writePath
	}	
}