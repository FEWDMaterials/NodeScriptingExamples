var fs = require( 'fs' );
var colors = require('colors');


function copyFiles( readPath, writePath ) {
	// using the fs module
	// read the readPath file and console.log it to
	// your terminal

	fs.readFile(readPath, 'utf-8', function( err, data ){
		if ( err ) {
			throw new Error( err.red );
		}

		console.log('Successfully read file!'.green);
		console.log( 'Now writing...'.blue );

		// if we are here, then there is no error
		fs.writeFile( writePath, data, function( err ){
			if ( err ) {
				throw new Error( err.red );
			}

			console.log('Wrote file to: '.green + writePath.green  );
		});
	});


}

module.exports = {
	copy: copyFiles
}