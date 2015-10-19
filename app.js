#!/usr/bin/env node
var copy = require('./copy');
var fs = require('fs');

/*
	SOME SAMPLE CODE
 */
// console.log( process.argv );
// var ar = [11,12,13,14];
// var newAr = ar.map( function( currentEl ) {
// 	return currentEl*currentEl;
// });
// console.log( newAr );
// var evenAr = ar.reduce(function(newArray, currentEl){
// 	if ( currentEl % 2 === 0 ) {
// 		newArray.push( currentEl );
// 	}

// 	return newArray;
// }, []);

// console.log( evenAr );


/*
	ATTEMPT 1
 */
// var args = process.argv.reduce(function(argsAsArray, currentEl, currentIndex){
// 	if ( currentIndex > 1 ) {
// 		argsAsArray.push( currentEl );
// 	}

// 	return argsAsArray;
// }, []);

// console.log( args );

// copy( args[0], args[1], args[2] );

// copy.apply( null, args );


/*
	ATTEMPT 2
 */

 var args = process.argv.reduce(function( argsAsObj, currentEl, index ){
 	var current = currentEl.charAt(0);
 	var next = process.argv[ index + 1 ] && process.argv[ index + 1 ].charAt(0)
 	if ( current === '-' && next !== '-' ) {
 		argsAsObj[ currentEl ] = process.argv[ index + 1 ];
 	}

 	return argsAsObj;
 }, {});

 if ( Object.keys( args ).indexOf('-h') !== -1 ) {
 	fs.readFile('./help.txt', 'utf-8', function(err, data){
 		console.log( data );
 	});
 	return;
 }

 copy( args['-f'], args['-o'], args['-c'] );




