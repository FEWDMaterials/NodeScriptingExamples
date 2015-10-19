var fs = require('fs');
var mkdirp = require('mkdirp');

// from jsdoc: http://usejsdoc.org/

/*
 *	@copyFile
 *	@param fileName {string} - the path of file to copy
 *	@param outputPath {string} - the path of the dir to output to
 *	@param copiedFileName {string} - OPTIONAL: what the copied file should eb called
 */
function copyFile( fileName, outputPath, copiedFileName ) {
	if ( typeof fileName !== "string" ) {
		throw new Error('Needs a fileName to copy!');
	}
	if ( typeof outputPath !== "string" ) {
		throw new Error('Needs an outputPath to copy to!');	
	}

	if ( typeof copiedFileName !== "string" ) {
		var copiedFileNameBits = fileName.split('.');
		if ( copiedFileNameBits.length === 0 ) {
			copiedFileName += '-copy';
		}
		else {
			var last = copiedFileNameBits.pop();
			copiedFileNameBits.push( 'copy' );
			copiedFileNameBits.push( last );
			copiedFileName = copiedFileNameBits.join('.');
		}
	}

	fs.readFile(fileName, 'utf-8', function(err, data){
		// do stuff here
		if ( err ) {
			throw new Error( err );
		}

		// if we are here, no err! so proceed with the write....
		var newFilePath = outputPath + '/' + copiedFileName;
		mkdirp( outputPath, function( err ) {
			if ( err ) {
				throw new Error( err );
			}

			fs.writeFile( newFilePath, data, function( err, writtenData ) {
				if ( err ) {
					throw new Error( err );
				}

				// if we are here, no err! so let user know
				console.log('Successfully copied. File lives in: ' + newFilePath );
			});
		});
	});
} // copyFile

module.exports = copyFile;







