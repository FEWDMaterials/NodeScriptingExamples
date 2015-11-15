var TodoList = require('./ToDo');
var TodoListFactory = require('./ToDoFactory');
var fs = require( 'fs' );
var colors = require( 'colors' );

var myList = TodoList.create(['teach class', 'eat']);
var myOtherList = TodoListFactory()
console.log( myList + "" );

fs.readFile('./ToDo.js', 'utf-8', function( err, data ) {
	console.log( err );
	console.log( data.rainbow );
});

