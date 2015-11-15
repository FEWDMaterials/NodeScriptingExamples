function TodoList( initialToDos ) {
	// create an internal ref to the list
	// if initial items passed in, set
	// otherwise, empty list
	this.list = initialToDos || [];
}

TodoList.prototype.addItem = function addItem( item ) {
	this.list.push( item );
}

TodoList.prototype.removeItemFromEnd = function removeItemFromEnd() {
	if ( this.list.length === 0 ) {
		return null;
	}

	return this.list.pop();
}

TodoList.prototype.toString = function toString() {
	return '\n ' + this.list.join( '\n ' );
}



module.exports = function( initialToDos ) {
	return new TodoList( initialToDos );
};




















