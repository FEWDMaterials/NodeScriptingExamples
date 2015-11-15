var $ = require('jquery');

function handler( emitter, inputClass, buttonClass ) {
	this.emitter = emitter;

	this.currentSearchTerm = null;

	this.$input = $( inputClass );
	this.$button = $( buttonClass );

	this.listenForInputVal();
	this.handleButtonClick();
}

handler.prototype.listenForInputVal = function listenForInputVal( ) {
	this.$input.on('change', function( e ) {
		this.currentSearchTerm = $( e.target ).val();
	}.bind(this));
};

handler.prototype.handleButtonClick = function handleButtonClick() {
	this.$button.on('click', function( e ){
		e.preventDefault();

		this.emitter.emit('buttonClicked', this.currentSearchTerm);
		this.currentSearchTerm = null;
	}.bind(this));
}

handler.prototype.clearField = function clearField() {
	this.$input.val('');
	this.currentSearchTerm = null;
}


module.exports = {
	init: function( emitter, inputClass, buttonClass ) {
		return new handler( emitter, inputClass, buttonClass );
	}
}